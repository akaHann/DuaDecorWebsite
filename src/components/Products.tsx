import React from 'react';
import { ProductCard } from './ProductCard';
import { useLanguage } from '../contexts/LanguageContext';

interface ProductsProps {
  onProductClick: (productId: string) => void;
}

export function Products({ onProductClick }: ProductsProps) {
  const { t } = useLanguage();
  
  const products = [
    {
      id: 'curtains',
      title: t('curtains'),
      description: t('curtainsDesc'),
      image: '/images/gordijnen.png'
    },
    {
      id: 'horizontalBlinds',
      title: t('horizontalBlinds'),
      description: t('horizontalBlindsDesc'),
      image: '/images/horizontalejaloezie.png'
    },
    {
      id: 'verticalBlinds',
      title: t('verticalBlinds'),
      description: t('verticalBlindsDesc'),
      image: '/images/lamellen.png'
    },
    {
      id: 'rollerBlinds',
      title: t('rollerBlinds'),
      description: t('rollerBlindsDesc'),
      image: '/images/rolgordijn.png'
    },
    {
      id: 'plisseBlinds',
      title: t('plisseBlinds'),
      description: t('plisseBlidsDesc'),
      image: '/images/plisse.png'
    },
    {
      id: 'foldingCurtains',
      title: t('foldingCurtains'),
      description: t('foldingCurtainsDesc'),
      image: '/images/vouwgordijn.png'
    },
    {
      id: 'duoBlinds',
      title: t('duoBlinds'),
      description: t('duoBlindsDesc'),
      image: '/images/duorolgordijn.png'
    },
    {
      id: 'carpets',
      title: t('carpets'),
      description: t('carpetsDesc'),
      image: '/images/tapijten.png'
    },
    {
      id: 'wallpaper',
      title: t('wallpaper'),
      description: t('wallpaperDesc'),
      image: '/images/behangpapier.png'
    }
  ];

  return (
    <section id="producten" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-4">
            {t('productsTitle')} <span className="font-normal">{t('productsTitleBold')}</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            {t('productsSubtitle')}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} onClick={() => onProductClick(product.id)} />
          ))}
        </div>
      </div>
    </section>
  );
}
