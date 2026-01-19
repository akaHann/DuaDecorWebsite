import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface ProductCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  onClick: () => void;
}

export function ProductCard({ title, description, image, onClick }: ProductCardProps) {
  const { t } = useLanguage();
  
  return (
    <div className="group relative overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer" onClick={onClick}>
      {/* Image Container */}
      <div className="relative h-64 sm:h-72 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6">
        <h3 className="text-xl sm:text-2xl font-light text-gray-900 mb-2 group-hover:text-evergreen transition-colors">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-gray-600 mb-4">
          {description}
        </p>
        <div className="flex items-center text-evergreen group-hover:text-evergreen-light transition-colors">
          <span className="text-sm font-medium mr-2">{t('moreInfo')}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  );
}