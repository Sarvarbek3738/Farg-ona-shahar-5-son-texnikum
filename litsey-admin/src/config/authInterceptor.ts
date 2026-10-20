import { API_BASE_URL } from "./api";

let isRefreshing = false;
let refreshSubscribers: ((token: string | null) => void)[] = [];

function subscribeTokenRefresh(cb: (token: string | null) => void) {
  refreshSubscribers.push(cb);
}

function onRefreshed(token: string | null) {
  refreshSubscribers.forEach((cb) => cb(token));
  refreshSubscribers = [];
}

export function setupAuthInterceptor() {
  if (typeof window === "undefined" || (window as any).__AUTH_INTERCEPTOR_INSTALLED__) {
    return;
  }
  (window as any).__AUTH_INTERCEPTOR_INSTALLED__ = true;

  const originalFetch = window.fetch;

  window.fetch = async function (input: RequestInfo | URL, init?: RequestInit): Promise<Response> {
    const url = typeof input === "string" ? input : input instanceof URL ? input.href : input.url;

    // Do not intercept auth login or refresh requests directly
    if (url.includes("/token/") || url.includes("/token/refresh/")) {
      return originalFetch.apply(window, [input, init]);
    }

    let response = await originalFetch.apply(window, [input, init]);

    if (response.status === 401) {
      const refreshToken = sessionStorage.getItem("refresh_token");

      if (!refreshToken) {
        sessionStorage.removeItem("auth_token");
        sessionStorage.removeItem("refresh_token");
        sessionStorage.removeItem("auth_user");
        window.dispatchEvent(new CustomEvent("auth:logout"));
        return response;
      }

      if (!isRefreshing) {
        isRefreshing = true;
        try {
          const refreshRes = await originalFetch(`${API_BASE_URL}/token/refresh/`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ refresh: refreshToken }),
          });

          if (refreshRes.ok) {
            const data = await refreshRes.json();
            const newToken = data.access;
            sessionStorage.setItem("auth_token", newToken);
            if (data.refresh) {
              sessionStorage.setItem("refresh_token", data.refresh);
            }
            isRefreshing = false;
            onRefreshed(newToken);

            // Retry the original request with new token
            const headers = new Headers(init?.headers || (input instanceof Request ? input.headers : {}));
            headers.set("Authorization", `Bearer ${newToken}`);
            return originalFetch.apply(window, [input, { ...init, headers }]);
          } else {
            isRefreshing = false;
            onRefreshed(null);
            sessionStorage.removeItem("auth_token");
            sessionStorage.removeItem("refresh_token");
            sessionStorage.removeItem("auth_user");
            window.dispatchEvent(new CustomEvent("auth:logout"));
            return response;
          }
        } catch (err) {
          isRefreshing = false;
          onRefreshed(null);
          sessionStorage.removeItem("auth_token");
          sessionStorage.removeItem("refresh_token");
          sessionStorage.removeItem("auth_user");
          window.dispatchEvent(new CustomEvent("auth:logout"));
          return response;
        }
      }

      // If a refresh is already in flight, queue this request
      return new Promise<Response>((resolve) => {
        subscribeTokenRefresh(async (newToken) => {
          if (newToken) {
            const headers = new Headers(init?.headers || (input instanceof Request ? input.headers : {}));
            headers.set("Authorization", `Bearer ${newToken}`);
            resolve(originalFetch.apply(window, [input, { ...init, headers }]));
          } else {
            resolve(response);
          }
        });
      });
    }

    return response;
  };
}
