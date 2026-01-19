# Images Directory

This directory contains all image assets for the Dua Decor website.

## Structure

```
images/
├── products/      # Product images (curtains, blinds, carpets, etc.)
├── hero/          # Hero section and background images
├── icons/         # Icon images (if not using icon libraries)
├── logo/          # Logo and branding images
└── general/       # General purpose images
```

## Usage

### Importing Images in Components

For images in `src/assets/images/`, use ES6 imports:

```typescript
import productImage from '@/assets/images/products/curtains.jpg';
import heroImage from '@/assets/images/hero/hero-bg.jpg';

// Then use in JSX
<img src={productImage} alt="Product" />
```

### Static Images in Public

For images in `public/images/`, reference them directly:

```typescript
<img src="/images/logo.png" alt="Logo" />
```

## Best Practices

1. **File Naming**: Use kebab-case (e.g., `luxury-curtains.jpg`)
2. **Formats**: Prefer modern formats (WebP, AVIF) when possible, with fallbacks
3. **Optimization**: Optimize images before adding them to reduce bundle size
4. **Organization**: Keep images organized by category in their respective folders
5. **Naming Convention**: Use descriptive names that indicate the image content

## Image Optimization

Before adding images:
- Compress images using tools like TinyPNG, ImageOptim, or Squoosh
- Use appropriate dimensions (don't use 4K images for thumbnails)
- Consider using responsive images with `srcset` for better performance
