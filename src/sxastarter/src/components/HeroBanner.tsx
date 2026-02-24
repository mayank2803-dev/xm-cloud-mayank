/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React from 'react';
import { Text, Image as SitecoreImage } from '@sitecore-jss/sitecore-jss-nextjs';

interface HeroBannerItemFields {
  id: string;
  fields: {
    Title?: { value?: string };
    Image?: { value?: { src?: string; alt?: string } };
  };
}

interface HeroBannerFields {
  Title?: { value?: string };
  Image?: { value?: { src?: string; alt?: string } };
  MultiList?: HeroBannerItemFields[];
}

interface HeroBannerParams {
  styles?: string;
}

interface HeroBannerProps {
  fields?: HeroBannerFields;
  params?: HeroBannerParams;
  rendering?: any; // 👈 Sitecore rendering metadata (variant info here)
}

export default function HeroBanner({ fields, params, rendering }: HeroBannerProps): JSX.Element {
  const title = fields?.Title;
  const image = fields?.Image;
  console.log('HeroBanner rendering metadata:', rendering); // 👈 Logs variant info

  console.log('HeroBanner fields:', fields);

  return (
    <section className={`hero-banner ${params?.styles || ''}`}>
      <div className="container">
        {title?.value && (
          <h1 className="hero-title">
            <Text field={title} />
          </h1>
        )}

        {image?.value && (
          <div className="hero-image">
            <SitecoreImage field={image} alt={image?.value?.alt || ''} />
          </div>
        )}
      </div>
    </section>
  );
}
