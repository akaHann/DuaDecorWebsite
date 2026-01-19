import React, { useEffect } from 'react';
import { X, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface ComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ComingSoonModal({ isOpen, onClose }: ComingSoonModalProps) {
  const { t, language } = useLanguage();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const getMessage = () => {
    if (language === 'fr') {
      return {
        title: 'Bientôt Disponible',
        description: 'Notre galerie de collections en ligne est en cours de développement. Visitez notre showroom à Anvers pour découvrir notre collection complète ou contactez-nous pour plus d\'informations.',
        button: 'Contactez-nous'
      };
    } else if (language === 'en') {
      return {
        title: 'Coming Soon',
        description: 'Our online collection gallery is currently under development. Visit our showroom in Antwerp to discover our complete collection or contact us for more information.',
        button: 'Contact Us'
      };
    } else {
      return {
        title: 'Binnenkort Beschikbaar',
        description: 'Onze online collectie galerij is momenteel in ontwikkeling. Bezoek onze showroom in Antwerpen om onze volledige collectie te ontdekken of neem contact met ons op voor meer informatie.',
        button: 'Neem Contact Op'
      };
    }
  };

  const content = getMessage();

  const handleContactClick = () => {
    onClose();
    setTimeout(() => {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
      <div className="bg-white max-w-md w-full rounded-lg shadow-2xl relative animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="w-5 h-5 text-gray-700" />
        </button>

        {/* Content */}
        <div className="p-8 text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#053225]/10 rounded-full mb-6">
            <Sparkles className="w-8 h-8 text-evergreen" />
          </div>

          {/* Title */}
          <h2 className="text-3xl font-light text-gray-900 mb-4">
            {content.title}
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-600 mb-8">
            {content.description}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleContactClick}
              className="flex-1 px-6 py-3 bg-evergreen text-white hover:bg-evergreen-light transition-colors shadow-md hover:shadow-lg"
            >
              {content.button}
            </button>
            <button
              onClick={onClose}
              className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
            >
              {language === 'fr' ? 'Fermer' : language === 'en' ? 'Close' : 'Sluiten'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}