import React from 'react';
import { Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  
  const productList = [
    'curtains',
    'horizontalBlinds',
    'verticalBlinds',
    'rollerBlinds',
    'plisseBlinds',
    'foldingCurtains',
    'duoBlinds',
    'carpets',
    'wallpaper'
  ];

  return (
    <footer className="bg-evergreen-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-2xl sm:text-3xl font-light tracking-wider mb-4">
              DUA <span className="font-normal">DECOR</span>
            </h3>
            <p className="text-gray-400 mb-6">
              {t('footerDescription')}
            </p>
            <div className="flex items-center space-x-4">
              <a 
                href="https://www.instagram.com/dua_decor/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-evergreen-light flex items-center justify-center rounded-full transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.facebook.com/p/DUA-DECOR-100057189621290/?locale=nl_BE" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-evergreen-light flex items-center justify-center rounded-full transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.tiktok.com/@dua_decor" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-evergreen-light flex items-center justify-center rounded-full transition-colors"
              >
                <FaTiktok className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-medium text-lg mb-4">{t('products')}</h4>
            <ul className="space-y-2 text-gray-400">
              {productList.slice(0, 5).map((product) => (
                <li key={product} className="transition-colors">
                  {t(product as any)}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium text-lg mb-4">{t('navigation')}</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button 
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white transition-colors"
                >
                  {t('home')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('producten')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white transition-colors"
                >
                  {t('products')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('collecties')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white transition-colors"
                >
                  {t('collections')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('over-ons')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white transition-colors"
                >
                  {t('about')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white transition-colors"
                >
                  {t('contact')}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium text-lg mb-4">{t('contact')}</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>Lange Beeldekenstraat 155-157<br />2060 Antwerpen</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 flex-shrink-0" />
                <a href="tel:0485460989" className="hover:text-white transition-colors">
                  0485 46 09 89
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 flex-shrink-0" />
                <a href="mailto:info@duadecor.be" className="hover:text-white transition-colors">
                  info@duadecor.be
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Dua Decor. {t('allRightsReserved')}
            </p>
            <p className="text-gray-400 text-sm">
              BTW: BE0848.653.295
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}