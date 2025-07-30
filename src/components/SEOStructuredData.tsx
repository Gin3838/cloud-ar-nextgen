import { useEffect } from 'react';

const SEOStructuredData = () => {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "CloudIT Solutions",
      "description": "Аренда программ 1С в облаке. Облачная 1С для бизнеса с техподдержкой 24/7",
      "url": "https://cloudit-solutions.ru",
      "logo": "https://cloudit-solutions.ru/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+7-800-555-01-23",
        "contactType": "customer service",
        "availableLanguage": "Russian"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "ул. Тверская, д. 123, офис 456",
        "addressLocality": "Москва",
        "addressCountry": "RU"
      },
      "sameAs": [
        "https://yandex.ru/maps/"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "542"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Облачные программы 1С",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "1С:Бухгалтерия ПРОФ в облаке",
            "description": "Облачная версия 1С:Бухгалтерия ПРОФ с техподдержкой 24/7",
            "price": "790",
            "priceCurrency": "RUB",
            "availability": "https://schema.org/InStock"
          },
          {
            "@type": "Offer", 
            "name": "1С:Управление торговлей в облаке",
            "description": "Облачная версия 1С:Управление торговлей для автоматизации торговых процессов",
            "price": "1200",
            "priceCurrency": "RUB",
            "availability": "https://schema.org/InStock"
          }
        ]
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export default SEOStructuredData;