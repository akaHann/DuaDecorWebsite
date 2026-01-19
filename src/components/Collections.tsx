import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface CollectionsProps {
  onComingSoonClick: () => void;
}

export function Collections({ onComingSoonClick }: CollectionsProps) {
  const { t } = useLanguage();

  const collections = [
    {
      title: t('curtainsCollection'),
      description: t('curtainsCollectionDesc'),
      image: '/images/collectie_gordijnen.png',
      items: ['300+ stoffen', 'Moderne patronen', 'Klassieke designs', 'Verduisterend']
    },
    {
      title: t('carpetsCollection'),
      description: t('carpetsCollectionDesc'),
      image: '/images/collectie_tapijten.png',
      items: ['Wol tapijten', 'Synthetische opties', 'Natuurlijke vezels', 'Op maat']
    },
    {
      title: t('wallpaperCollection'),
      description: t('wallpaperCollectionDesc'),
      image: '/images/collecie_behangpapier.png',
      items: ['Trendy designs', 'Natuurlijke materialen', 'Vinyl behang', 'Textiel behang']
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="collecties" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-4">
            {t('collectionsTitle')} <span className="font-normal">{t('collectionsTitleBold')}</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            {t('collectionsSubtitle')}
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-gray-50 shadow-md hover:shadow-xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                
                {/* Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-normal mb-2">{collection.title}</h3>
                  <p className="text-white/90 text-sm mb-4">{collection.description}</p>
                  
                  {/* Items List */}
                  <ul className="space-y-1 mb-4">
                    {collection.items.map((item, idx) => (
                      <li key={idx} className="text-sm text-white/80 flex items-center">
                        <span className="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA Section */}
              <div className="p-6 bg-white">
                <button
                  onClick={onComingSoonClick}
                  className="group/btn w-full flex items-center justify-center px-6 py-3 bg-evergreen text-white hover:bg-evergreen-light transition-all duration-300"
                >
                  <span className="mr-2">{t('viewCollection')}</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Bezoek onze showroom om onze volledige collecties te ontdekken
          </p>
          <button
            onClick={onComingSoonClick}
            className="inline-flex items-center px-8 py-4 bg-evergreen text-white hover:bg-evergreen-light transition-colors shadow-md hover:shadow-lg"
          >
            <span className="mr-2">Maak een Afspraak</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}