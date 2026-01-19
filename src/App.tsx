import React, { useState } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import { Collections } from './components/Collections';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { ComingSoonModal } from './components/ComingSoonModal';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [comingSoonOpen, setComingSoonOpen] = useState(false);

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
      </div>
    </LanguageProvider>
  );
}