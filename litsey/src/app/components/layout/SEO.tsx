import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export const SEO = ({
  title,
  description,
  keywords,
  image = '/logo.png',
  url = typeof window !== 'undefined' ? window.location.href : '',
  type = 'website',
}: SEOProps) => {
  const { t } = useTranslation();

  let seoTitle = t('seo.defaultTitle');
  if (title) {
    const rawTemplate = t('seo.titleTemplate', { title });
    seoTitle = rawTemplate.includes('%s') 
      ? rawTemplate.replace('%s', title) 
      : (rawTemplate.includes('{{title}}') ? rawTemplate.replace('{{title}}', title) : rawTemplate);
  }

  const seoDescription = description || t('seo.defaultDescription');
  const seoKeywords = keywords || t('seo.keywords');
  const siteName = t('seo.defaultTitle');

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      {url && <meta name="twitter:url" content={url} />}
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={image} />

      {/* Canonical URL */}
      {url && <link rel="canonical" href={url} />}
    </Helmet>
  );
};
