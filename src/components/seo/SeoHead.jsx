import React from 'react';
import { Helmet } from 'react-helmet-async';
import { siteConfig } from '../../config/siteConfig';

export default function SeoHead({ title, description, image, type = 'website' }) {
  const defaultTitle = siteConfig.seo.defaultTitle;
  const defaultDescription = siteConfig.seo.description;
  const siteName = siteConfig.brand.name;
  const currentUrl = window.location.href;

  const metaTitle = title ? siteConfig.seo.titleTemplate.replace('%s', title) : defaultTitle;
  const metaDescription = description || defaultDescription;

  // JSON-LD Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Bakery",
    "name": siteName,
    "image": siteConfig.brand.logo,
    "@id": siteConfig.seo.openGraph.url,
    "url": siteConfig.seo.openGraph.url,
    "telephone": siteConfig.brand.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Rue de la Paix",
      "addressLocality": "Paris",
      "addressCountry": "FR"
    },
    "priceRange": "$$"
  };

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={siteConfig.seo.keywords.join(", ")} />
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={currentUrl} />
      {image && <meta property="og:image" content={image} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      {image && <meta name="twitter:image" content={image} />}

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  );
}
