import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Hero() {
  const { t } = useLanguage();
  
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1684261556324-a09b2cdf68b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjdXJ0YWlucyUyMGludGVyaW9yfGVufDF8fHx8MTc2ODYxNTEyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Luxury Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        <div className="max-w-3xl">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white mb-4 sm:mb-6 leading-tight">
            {t('heroTitle')}
            <br />
            <span className="font-normal">{t('heroSubtitle')}</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-8 max-w-2xl">
            {t('heroDescription')}
          </p>
          <button
            onClick={scrollToContact}
            className="group inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-evergreen text-white hover:bg-evergreen-light transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span className="mr-2 text-base sm:text-lg">{t('heroButton')}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}