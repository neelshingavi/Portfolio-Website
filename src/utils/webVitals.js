import { onCLS, onFCP, onFID, onLCP, onTTFB, onINP } from 'web-vitals';

function sendToAnalytics({ name, value, rating, id }) {
  if (!window.gtag) return;

  window.gtag('event', name, {
    event_category: 'Web Vitals',
    event_label: id,
    value: Math.round(name === 'CLS' ? value * 1000 : value),
    non_interaction: true,
    // Include rating (good/needs-improvement/poor)
    web_vitals_rating: rating,
  });
}

export function reportWebVitals() {
  onCLS(sendToAnalytics);   // Cumulative Layout Shift
  onFCP(sendToAnalytics);   // First Contentful Paint
  onFID(sendToAnalytics);   // First Input Delay
  onLCP(sendToAnalytics);   // Largest Contentful Paint (hero image)
  onTTFB(sendToAnalytics);  // Time to First Byte
  onINP(sendToAnalytics);   // Interaction to Next Paint
}
