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
      image: 'https://images.unsplash.com/photo-1684261556324-a09b2cdf68b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjdXJ0YWlucyUyMGludGVyaW9yfGVufDF8fHx8MTc2ODYxNTEyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 'horizontalBlinds',
      title: t('horizontalBlinds'),
      description: t('horizontalBlindsDesc'),
      image: 'https://images.unsplash.com/photo-1527776702328-f127392d764f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBibGluZHMlMjB3aW5kb3d8ZW58MXx8fHwxNzY4NjUyODIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 'verticalBlinds',
      title: t('verticalBlinds'),
      description: t('verticalBlindsDesc'),
      image: 'https://images.unsplash.com/photo-1766806997566-18b8999427bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZXJ0aWNhbCUyMGJsaW5kcyUyMG1vZGVybnxlbnwxfHx8fDE3Njg1NTg1MjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 'rollerBlinds',
      title: t('rollerBlinds'),
      description: t('rollerBlindsDesc'),
      image: 'https://images.unsplash.com/photo-1693142192909-04876a9d7415?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2xsZXIlMjBibGluZHMlMjBtaW5pbWFsaXN0fGVufDF8fHx8MTc2ODY1MjgyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 'plisseBlinds',
      title: t('plisseBlinds'),
      description: t('plisseBlidsDesc'),
      image: 'https://images.unsplash.com/photo-1726041452947-c91302d15c4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGVhdGVkJTIwc2hhZGVzJTIwd2luZG93fGVufDF8fHx8MTc2ODY1Mzc5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 'foldingCurtains',
      title: t('foldingCurtains'),
      description: t('foldingCurtainsDesc'),
      image: 'https://images.unsplash.com/photo-1666714049946-7e7afdb95f5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbiUyMHNoYWRlcyUyMGVsZWdhbnR8ZW58MXx8fHwxNzY4NjUzNzk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 'duoBlinds',
      title: t('duoBlinds'),
      description: t('duoBlindsDesc'),
      image: 'https://images.unsplash.com/photo-1707376519357-b53e370384fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cmlvdXMlMjBob21lJTIwZGVjb3J8ZW58MXx8fHwxNzY4NjUyODIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 'carpets',
      title: t('carpets'),
      description: t('carpetsDesc'),
      image: 'https://images.unsplash.com/photo-1761933296164-38a1b6cf72e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXJwZXQlMjBydWd8ZW58MXx8fHwxNzY4NjUyODIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 'wallpaper',
      title: t('wallpaper'),
      description: t('wallpaperDesc'),
      image: 'https://images.unsplash.com/photo-1747296252929-ca8fbe6d238c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd2FsbHBhcGVyJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY4NjUyODIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
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
