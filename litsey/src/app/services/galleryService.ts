import { AlbumResponse, Album } from '../types';
import { API_BASE_URL } from '../../config/api';

const defaultAlbums: Album[] = [
  {
    id: 1,
    slug: 'texnikum-hayotidan-lavhalar',
    cover_image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    photos_count: 12,
    is_active: true,
    sort_order: 1,
    created_at: new Date().toISOString(),
    translations: {
      uz: {
        title: "Texnikum o'quv jarayoni va talabalar hayoti",
        description: "Nazariy va amaliy darslar, zamonaviy ustaxonalar hamda texnikum faoliyatidan foto lavhalar."
      },
      ru: {
        title: "Учебный процесс и студенческая жизнь",
        description: "Фотографии теоретических и практических занятий, мастерских и мероприятий техникума."
      },
      en: {
        title: "Campus Life & Academic Activities",
        description: "Photographs of classes, specialized workshop training, and campus events."
      }
    }
  },
  {
    id: 2,
    slug: 'ustaxonalar-va-amaliyot',
    cover_image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    photos_count: 8,
    is_active: true,
    sort_order: 2,
    created_at: new Date().toISOString(),
    translations: {
      uz: {
        title: "Ustaxonalar va ishlab chiqarish amaliyoti",
        description: "Quyosh energetikasi, elektrotexnika va IT laboratoriyalaridan lavhalar."
      },
      ru: {
        title: "Мастерские и производственная практика",
        description: "Снимки из лабораторий солнечной энергетики, электротехники и IT."
      },
      en: {
        title: "Workshops and Industrial Practice",
        description: "Snapshots from solar power systems, electrical, and computer labs."
      }
    }
  }
];

export const galleryService = {
  async getAllAlbums(page = 1): Promise<AlbumResponse> {
    try {
      const response = await fetch(`${API_BASE_URL}/gallery/albums/?page=${page}`);
      if (!response.ok) {
        throw new Error('Failed to fetch albums');
      }
      const data = await response.json();
      const list = Array.isArray(data) ? data : (data?.results || []);
      if (list.length > 0) {
        return data;
      }
      return { count: defaultAlbums.length, next: null, previous: null, results: defaultAlbums };
    } catch {
      return { count: defaultAlbums.length, next: null, previous: null, results: defaultAlbums };
    }
  },

  async getAlbumBySlug(slug: string): Promise<Album> {
    try {
      const response = await fetch(`${API_BASE_URL}/gallery/albums/${slug}/`);
      if (!response.ok) {
        throw new Error('Failed to fetch album detail');
      }
      return await response.json();
    } catch {
      const matched = defaultAlbums.find(a => a.slug === slug) || defaultAlbums[0];
      return matched;
    }
  },

  getTranslation(album: Album, lang: string) {
    const translations = album?.translations || ({} as any);
    const fallback = { title: '', description: '' };
    
    // Map i18n codes to API codes
    if (lang === 'kr' || lang === 'uz_cyrl') {
      return translations.uz_cyrl || translations.uz || fallback;
    }
    
    return (translations as any)[lang] || translations.uz || fallback;
  }
};
