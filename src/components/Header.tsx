import React from 'react';
import { Menu, X, Instagram, Facebook, Globe } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import { Language } from '../translations';

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export function Header({ mobileMenuOpen, setMobileMenuOpen }: HeaderProps) {
  const { language, setLanguage, t } = useLanguage();
  const [languageMenuOpen, setLanguageMenuOpen] = React.useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setLanguageMenuOpen(false);
  };

  const languageNames = {
    nl: 'NL',
    fr: 'FR',
    en: 'EN'
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl sm:text-3xl font-light tracking-wider text-gray-900">
              DUA <span className="font-normal">DECOR</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-evergreen transition-colors">
              {t('home')}
            </button>
            <button onClick={() => scrollToSection('producten')} className="text-gray-700 hover:text-evergreen transition-colors">
              {t('products')}
            </button>
            <button onClick={() => scrollToSection('collecties')} className="text-gray-700 hover:text-evergreen transition-colors">
              {t('collections')}
            </button>
            <button onClick={() => scrollToSection('over-ons')} className="text-gray-700 hover:text-evergreen transition-colors">
              {t('about')}
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-evergreen transition-colors">
              {t('contact')}
            </button>
          </nav>

          {/* Desktop Social Links and Language Switcher */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://www.instagram.com/dua_decor/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-evergreen transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://www.facebook.com/p/DUA-DECOR-100057189621290/?locale=nl_BE" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-evergreen transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://www.tiktok.com/@dua_decor" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-evergreen transition-colors">
              <FaTiktok className="w-5 h-5" />
            </a>
            
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                className="flex items-center space-x-1 px-3 py-2 text-gray-700 hover:text-evergreen border border-gray-300 rounded transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">{languageNames[language]}</span>
              </button>
              
              {languageMenuOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded shadow-lg">
                  <button
                    onClick={() => handleLanguageChange('nl')}
                    className={`block w-full text-left px-4 py-2 text-sm hover:bg-[#053225]/10 ${language === 'nl' ? 'bg-[#053225]/10 text-evergreen font-medium' : 'text-gray-700'}`}
                  >
                    Nederlands
                  </button>
                  <button
                    onClick={() => handleLanguageChange('fr')}
                    className={`block w-full text-left px-4 py-2 text-sm hover:bg-[#053225]/10 ${language === 'fr' ? 'bg-[#053225]/10 text-evergreen font-medium' : 'text-gray-700'}`}
                  >
                    Français
                  </button>
                  <button
                    onClick={() => handleLanguageChange('en')}
                    className={`block w-full text-left px-4 py-2 text-sm hover:bg-[#053225]/10 ${language === 'en' ? 'bg-[#053225]/10 text-evergreen font-medium' : 'text-gray-700'}`}
                  >
                    English
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="px-4 pt-2 pb-4 space-y-3">
            <button 
              onClick={() => scrollToSection('home')} 
              className="block w-full text-left py-2 text-gray-700 hover:text-evergreen transition-colors"
            >
              {t('home')}
            </button>
            <button 
              onClick={() => scrollToSection('producten')} 
              className="block w-full text-left py-2 text-gray-700 hover:text-evergreen transition-colors"
            >
              {t('products')}
            </button>
            <button 
              onClick={() => scrollToSection('collecties')} 
              className="block w-full text-left py-2 text-gray-700 hover:text-evergreen transition-colors"
            >
              {t('collections')}
            </button>
            <button 
              onClick={() => scrollToSection('over-ons')} 
              className="block w-full text-left py-2 text-gray-700 hover:text-evergreen transition-colors"
            >
              {t('about')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="block w-full text-left py-2 text-gray-700 hover:text-evergreen transition-colors"
            >
              {t('contact')}
            </button>
            
            {/* Mobile Language Switcher */}
            <div className="pt-3 border-t border-gray-100">
              <p className="text-sm font-medium text-gray-700 mb-2">Language</p>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleLanguageChange('nl')}
                  className={`px-3 py-1 text-sm rounded ${language === 'nl' ? 'bg-evergreen text-white' : 'bg-gray-100 text-gray-700'}`}
                >
                  NL
                </button>
                <button
                  onClick={() => handleLanguageChange('fr')}
                  className={`px-3 py-1 text-sm rounded ${language === 'fr' ? 'bg-evergreen text-white' : 'bg-gray-100 text-gray-700'}`}
                >
                  FR
                </button>
                <button
                  onClick={() => handleLanguageChange('en')}
                  className={`px-3 py-1 text-sm rounded ${language === 'en' ? 'bg-evergreen text-white' : 'bg-gray-100 text-gray-700'}`}
                >
                  EN
                </button>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
              <a href="https://www.instagram.com/dua_decor/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-evergreen transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/p/DUA-DECOR-100057189621290/?locale=nl_BE" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-evergreen transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.tiktok.com/@dua_decor" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-evergreen transition-colors">
                <FaTiktok className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}