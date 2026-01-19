import React from 'react';
import { Award, Clock, Ruler, Star, Calendar } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function About() {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: Award,
      title: t('quality'),
      description: t('qualityDesc')
    },
    {
      icon: Ruler,
      title: t('customMade'),
      description: t('customMadeDesc')
    },
    {
      icon: Clock,
      title: t('fastService'),
      description: t('fastServiceDesc')
    },
    {
      icon: Star,
      title: t('personalAdvice'),
      description: t('personalAdviceDesc')
    }
  ];

  return (
    <section id="over-ons" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-4">
            {t('aboutTitle')} <span className="font-normal">{t('aboutTitleBold')}</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            {t('aboutDescription')}
          </p>
        </div>

        {/* Experience Badge */}
        <div className="flex justify-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-8 py-4 bg-evergreen text-white rounded-full shadow-lg">
            <Calendar className="w-6 h-6 mr-3" />
            <span className="text-xl font-normal">{t('yearsExperience')}</span>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12 sm:mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center p-6 hover:bg-gray-50 transition-colors rounded-lg">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-evergreen text-white rounded-full mb-4">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-normal text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="bg-gray-50 p-8 sm:p-12 rounded-lg">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl sm:text-3xl font-light text-gray-900 mb-4">
              {t('whyChooseTitle')}
            </h3>
            <p className="text-base sm:text-lg text-gray-600 mb-6">
              {t('whyChooseDesc1')}
            </p>
            <p className="text-base sm:text-lg text-gray-600">
              {t('whyChooseDesc2')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}