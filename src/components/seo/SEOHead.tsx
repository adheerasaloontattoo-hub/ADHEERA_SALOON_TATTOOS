import React, { useEffect } from 'react';
import { BUSINESS_CONFIG } from '../../lib/whatsapp';

interface SEOProps {
  title: string;
  description: string;
  path: string;
  schema?: Record<string, any>;
}

export const SEOHead: React.FC<SEOProps> = ({ title, description, path, schema }) => {
  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // 2. Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // 3. Update Canonical URL
    const canonicalUrl = `${BUSINESS_CONFIG.siteUrl}${path === '/' ? '' : path}`;
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', canonicalUrl);

    // 4. Update Open Graph Tags
    const updateMetaTag = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    updateMetaTag('og:title', title);
    updateMetaTag('og:description', description);
    updateMetaTag('og:url', canonicalUrl);
    updateMetaTag('og:image', `${BUSINESS_CONFIG.siteUrl}/adheera-logo.png`);
    updateMetaTag('twitter:image', `${BUSINESS_CONFIG.siteUrl}/adheera-logo.png`);

    // 5. Update Dynamic Schema Script
    const schemaId = 'dynamic-page-schema';
    let scriptTag = document.getElementById(schemaId) as HTMLScriptElement | null;

    if (schema) {
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = schemaId;
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.text = JSON.stringify(schema);
    } else if (scriptTag) {
      scriptTag.remove();
    }
  }, [title, description, path, schema]);

  return null;
};
