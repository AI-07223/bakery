// src/components/Location.jsx
import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { Section, SectionTitle } from './ui/Section';
import { MapPin } from 'lucide-react';

export default function Location() {
  const { locationStyle } = siteConfig.layout;
  const { googleMapsEmbedUrl, businessAddress } = siteConfig.integrations;

  if (!siteConfig.features.enableMap) return null;

  return (
    <Section id="location" className="text-center">
      <SectionTitle>Visit Us</SectionTitle>

      {locationStyle === 'iframe' && googleMapsEmbedUrl ? (
        <div className="rounded-xl overflow-hidden shadow-lg h-96 w-full max-w-4xl mx-auto border-4 border-white">
            <iframe
                src={googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
      ) : (
        <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md mx-auto transform rotate-1 hover:rotate-0 transition-transform">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                <MapPin size={32} />
            </div>
            <p className="text-xl font-medium mb-6">{businessAddress}</p>
            <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(businessAddress)}`}
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-primary/90 transition-colors"
            >
                Get Directions
            </a>
        </div>
      )}
    </Section>
  );
}
