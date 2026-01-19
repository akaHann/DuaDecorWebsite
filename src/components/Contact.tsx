import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Contact() {
  const { t, language } = useLanguage();
  
  const [formData, setFormData] = useState({
    naam: '',
    email: '',
    telefoon: '',
    onderwerp: '',
    bericht: '',
    privacy: false
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    if (formData.privacy) {
      setFormStatus('success');
      setFormData({
        naam: '',
        email: '',
        telefoon: '',
        onderwerp: '',
        bericht: '',
        privacy: false
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setFormStatus('idle'), 5000);
    } else {
      setFormStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const getOpeningHours = () => {
    if (language === 'fr') {
      return [
        { day: 'Lundi - Samedi', hours: '10:00 - 18:00' },
        { day: 'Dimanche', hours: '12:00 - 18:00' }
      ];
    } else if (language === 'en') {
      return [
        { day: 'Monday - Saturday', hours: '10:00 AM - 6:00 PM' },
        { day: 'Sunday', hours: '12:00 PM - 6:00 PM' }
      ];
    } else {
      return [
        { day: 'Maandag - Zaterdag', hours: '10:00 - 18:00' },
        { day: 'Zondag', hours: '12:00 - 18:00' }
      ];
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-4">
            {t('contactTitle')} <span className="font-normal">{t('contactTitleBold')}</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            {t('contactSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-white p-6 sm:p-8 shadow-md">
              <h3 className="text-2xl font-light text-gray-900 mb-6">
                {t('contactDetails')}
              </h3>
              
              <div className="space-y-5">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-evergreen mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">{t('address')}</p>
                    <p className="text-gray-600">Lange Beeldekenstraat 155-157</p>
                    <p className="text-gray-600">2060 Antwerpen</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-evergreen mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">{t('phone')}</p>
                    <a href="tel:0485460989" className="text-gray-600 hover:text-evergreen transition-colors">
                      0485 46 09 89
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-evergreen mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">{t('email')}</p>
                    <a href="mailto:info@duadecor.be" className="text-gray-600 hover:text-evergreen transition-colors">
                      info@duadecor.be
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-evergreen mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900 mb-2">{t('openingHours')}</p>
                    <div className="text-gray-600 space-y-1">
                      {getOpeningHours().map((item, index) => (
                        <p key={index}>
                          <span className="font-medium">{item.day}:</span> {item.hours}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  <span className="font-medium">BTW:</span> BE0848.653.295
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 sm:p-8 shadow-md">
            <h3 className="text-2xl font-light text-gray-900 mb-6">
              {t('sendMessage')}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="naam" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('name')} {t('required')}
                </label>
                <input
                  type="text"
                  id="naam"
                  name="naam"
                  required
                  value={formData.naam}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-evergreen focus:ring-1 focus:ring-evergreen outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('emailAddress')} {t('required')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-evergreen focus:ring-1 focus:ring-evergreen outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="telefoon" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('phoneNumber')}
                  </label>
                  <input
                    type="tel"
                    id="telefoon"
                    name="telefoon"
                    value={formData.telefoon}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-evergreen focus:ring-1 focus:ring-evergreen outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="onderwerp" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('subject')} {t('required')}
                </label>
                <input
                  type="text"
                  id="onderwerp"
                  name="onderwerp"
                  required
                  value={formData.onderwerp}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-evergreen focus:ring-1 focus:ring-evergreen outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="bericht" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('message')} {t('required')}
                </label>
                <textarea
                  id="bericht"
                  name="bericht"
                  required
                  rows={6}
                  value={formData.bericht}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-evergreen focus:ring-1 focus:ring-evergreen outline-none transition-colors resize-none"
                ></textarea>
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="privacy"
                  name="privacy"
                  checked={formData.privacy}
                  onChange={handleChange}
                  className="sr-only peer"
                />
                <label 
                  htmlFor="privacy" 
                  className="relative flex items-center cursor-pointer"
                >
                  <span className="w-5 h-5 border-2 border-gray-300 rounded flex items-center justify-center mr-3 peer-checked:bg-evergreen peer-checked:border-evergreen transition-colors">
                    {formData.privacy && (
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </span>
                  <span className="text-sm text-gray-600">
                    {t('privacyAgreement')} {t('required')}
                  </span>
                </label>
              </div>

              {formStatus === 'success' && (
                <div className="p-4 bg-[#053225]/10 border border-evergreen text-evergreen rounded">
                  {t('successMessage')}
                </div>
              )}

              {formStatus === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 text-red-800 rounded">
                  {t('errorMessage')}
                </div>
              )}

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-4 bg-evergreen text-white hover:bg-evergreen-light transition-colors shadow-md hover:shadow-lg"
              >
                {t('send')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}