import React, { useState } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import { Collections } from './components/Collections';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Privacy } from './components/Privacy';
import { ProductModal } from './components/ProductModal';
import { ComingSoonModal } from './components/ComingSoonModal';
import { Toaster } from 'sonner';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [comingSoonOpen, setComingSoonOpen] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  // Handle navigation
  React.useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#privacy') {
        setShowPrivacy(true);
        // Scroll to top when showing privacy page
        window.scrollTo(0, 0);
      } else {
        setShowPrivacy(false);
      }
    };

    // Check initial hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (showPrivacy) {
    return (
      <LanguageProvider>
        <Privacy />
      </LanguageProvider>
    );
  }

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
        <Hero />
        <Products onProductClick={setSelectedProduct} />
        <Collections onComingSoonClick={() => setComingSoonOpen(true)} />
        <About />
        <Contact />
        <Footer />
        <ProductModal 
          productId={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
        <ComingSoonModal 
          isOpen={comingSoonOpen} 
          onClose={() => setComingSoonOpen(false)} 
        />
        <Toaster position="top-center" richColors />
      </div>
    </LanguageProvider>
  );
}