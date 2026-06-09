import sharp from 'sharp';
import { mkdirSync } from 'fs';

mkdirSync('public/assets', { recursive: true });

const input = 'public/assets/neel-shingavi.png';

// AVIF — best compression, modern browsers
await sharp(input)
  .resize(800, null, { withoutEnlargement: true })
  .avif({ quality: 72, effort: 6 })
  .toFile('public/assets/neel-shingavi.avif');

// WebP — Safari fallback
await sharp(input)
  .resize(800, null, { withoutEnlargement: true })
  .webp({ quality: 82 })
  .toFile('public/assets/neel-shingavi.webp');

// JPEG — legacy fallback (IE, very old Safari)
await sharp(input)
  .resize(800, null, { withoutEnlargement: true })
  .jpeg({ quality: 85, progressive: true })
  .toFile('public/assets/neel-shingavi.jpg');

console.log('✅ Images optimized');
