import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
}

const SEOHead = ({
  title,
  description,
  keywords = "1С облако, аренда 1С, облачная 1С, 1С в облаке, хостинг 1С, сервер 1С, бухгалтерия онлайн",
  canonical,
  ogTitle,
  ogDescription,
  ogImage = "/hero-cloud-it.jpg"
}: SEOHeadProps) => {
  useEffect(() => {
    // Update title
    document.title = title;

    // Update meta tags
    const updateMeta = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`) || 
                 document.querySelector(`meta[property="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        if (name.startsWith('og:') || name.startsWith('twitter:')) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Basic meta tags
    updateMeta('description', description);
    updateMeta('keywords', keywords);
    updateMeta('robots', 'index, follow');
    updateMeta('author', 'CloudIT Solutions');

    // Open Graph tags
    updateMeta('og:title', ogTitle || title);
    updateMeta('og:description', ogDescription || description);
    updateMeta('og:image', ogImage);
    updateMeta('og:type', 'website');
    updateMeta('og:site_name', 'CloudIT Solutions');

    // Twitter Card tags
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', ogTitle || title);
    updateMeta('twitter:description', ogDescription || description);
    updateMeta('twitter:image', ogImage);

    // Canonical URL
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', canonical);
    }

    // JSON-LD structured data for current page
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": title,
      "description": description,
      "url": canonical || window.location.href,
      "isPartOf": {
        "@type": "WebSite",
        "name": "CloudIT Solutions",
        "url": "https://clouditsolutions.ru"
      },
      "provider": {
        "@type": "Organization",
        "name": "CloudIT Solutions",
        "description": "Надежные облачные решения для бизнеса",
        "url": "https://clouditsolutions.ru",
        "telephone": "+7 (800) 123-45-67",
        "email": "info@clouditsolutions.ru"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      document.head.removeChild(script);
    };
  }, [title, description, keywords, canonical, ogTitle, ogDescription, ogImage]);

  return null;
};

export default SEOHead;