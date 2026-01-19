import React, { useEffect } from 'react';
import { X, Check } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface ProductModalProps {
  productId: string | null;
  onClose: () => void;
}

export function ProductModal({ productId, onClose }: ProductModalProps) {
  const { t } = useLanguage();

  useEffect(() => {
    if (productId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [productId]);

  if (!productId) return null;

  const productDetails: Record<string, {
    features: string[];
    materials?: string[];
    applications?: string[];
  }> = {
    curtains: {
      features: [
        'Op maat gemaakt naar uw specificaties',
        'Uitgebreide keuze in stoffen en kleuren',
        'Verschillende ophangsystemen beschikbaar',
        'Professionele maatneming en montage',
        'Licht- en verduisterende opties'
      ],
      materials: ['Linnen', 'Fluweel', 'Zijde', 'Polyester', 'Katoen blends'],
      applications: ['Woonkamer', 'Slaapkamer', 'Kantoor', 'Horeca']
    },
    horizontalBlinds: {
      features: [
        'Precisie lichtregeling',
        'Verkrijgbaar in hout, aluminium en PVC',
        'Diverse lamelbreedtes',
        'Handmatige of elektrische bediening',
        'Volledig op maat gemaakt'
      ],
      materials: ['Aluminium', 'Hout', 'PVC', 'Bamboe'],
      applications: ['Kantoren', 'Woningen', 'Commerciële ruimtes']
    },
    verticalBlinds: {
      features: [
        'Ideaal voor grote raampartijen',
        'Eenvoudige bediening',
        'Breed assortiment aan kleuren en structuren',
        'Lichtdoorlatende en verduisterende opties',
        'Onderhoudsvriendelijk'
      ],
      materials: ['Stof', 'PVC', 'Aluminium'],
      applications: ['Schuifdeuren', 'Grote ramen', 'Kantoren', 'Showrooms']
    },
    rollerBlinds: {
      features: [
        'Strak en modern design',
        'Screen stoffen voor zonwering',
        'Verduisterende opties beschikbaar',
        'Handmatige of elektrische bediening',
        'Geschikt voor natte ruimtes'
      ],
      materials: ['Polyester', 'Screen weefsel', 'Verduisteringsstof'],
      applications: ['Badkamers', 'Keukens', 'Slaapkamers', 'Kantoren']
    },
    plisseBlinds: {
      features: [
        'Elegant geplisseerd design',
        'Uitstekende isolatie-eigenschappen',
        'Geschikt voor schuine ramen',
        'Diverse bedieningsmogelijkheden',
        'Breed kleurenpalet'
      ],
      materials: ['Geplisseerde stof', 'Honingraatstructuur'],
      applications: ['Dakramen', 'Schuine ramen', 'Reguliere ramen']
    },
    foldingCurtains: {
      features: [
        'Klassiek elegante uitstraling',
        'Handmatig gevouwen plooien',
        'Diverse stofkeuzes',
        'Perfect voor traditionele interieurs',
        'Koordloos systeem mogelijk'
      ],
      materials: ['Linnen', 'Katoen', 'Polyester blends'],
      applications: ['Woonkamers', 'Eetkamers', 'Slaapkamers']
    },
    duoBlinds: {
      features: [
        'Combinatie van transparante en verduisterende banen',
        'Flexibele lichtregeling',
        'Modern en veelzijdig',
        'Diverse kleuren en patronen',
        'Handmatige of elektrische bediening'
      ],
      materials: ['Gestreept polyester weefsel'],
      applications: ['Slaapkamers', 'Woonkamers', 'Kantoren']
    },
    carpets: {
      features: [
        'Alle maten en formaten',
        'Uitgebreide collectie dessins en kleuren',
        'Verschillende poolhoogtes',
        'Duurzame kwaliteit'
      ],
      materials: ['Wol', 'Polypropyleen', 'Polyester', 'Sisal', 'Viscose'],
      applications: ['Woonkamers', 'Slaapkamers', 'Trappen', 'Kantoren']
    },
    wallpaper: {
      features: [
        'Exclusieve designcollecties',
        'Diverse materialen en texturen',
        'Vakkundig behangadvies',
        'Professioneel behangwerk',
        'Onderhoudsvriendelijke opties'
      ],
      materials: ['Vliesbehang', 'Vinyl', 'Textiel', 'Natuurmaterialen'],
      applications: ['Woonkamers', 'Slaapkamers', 'Kantoren', 'Horeca']
    }
  };

  const details = productDetails[productId];
  if (!details) return null;

  const scrollToContact = () => {
    onClose();
    setTimeout(() => {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white max-w-3xl w-full my-8 rounded-lg shadow-2xl relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
        >
          <X className="w-6 h-6 text-gray-700" />
        </button>

        {/* Content */}
        <div className="p-6 sm:p-8">
          <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-6">
            {t(productId as any)}
          </h2>
          
          <p className="text-lg text-gray-600 mb-8">
            {t(`${productId}Desc` as any)}
          </p>

          {/* Features */}
          <div className="mb-8">
            <h3 className="text-xl font-normal text-gray-900 mb-4">Kenmerken</h3>
            <ul className="space-y-3">
              {details.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="w-5 h-5 text-evergreen mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Materials */}
          {details.materials && (
            <div className="mb-8">
              <h3 className="text-xl font-normal text-gray-900 mb-4">Materialen</h3>
              <div className="flex flex-wrap gap-2">
                {details.materials.map((material, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-[#053225]/10 text-evergreen rounded-full text-sm"
                  >
                    {material}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Applications */}
          {details.applications && (
            <div className="mb-8">
              <h3 className="text-xl font-normal text-gray-900 mb-4">Toepassingen</h3>
              <div className="flex flex-wrap gap-2">
                {details.applications.map((application, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {application}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
            <button
              onClick={scrollToContact}
              className="flex-1 px-6 py-3 bg-evergreen text-white hover:bg-evergreen-light transition-colors shadow-md hover:shadow-lg"
            >
              Vraag Offerte Aan
            </button>
            <button
              onClick={onClose}
              className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Sluiten
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}