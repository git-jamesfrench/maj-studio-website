
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '@/providers/LanguageProvider';

const Terms = () => {
  const { language } = useLanguage();
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-6 py-24 mt-16">
        <h1 className="text-4xl font-bold mb-8 font-sora">
          {language === 'en' ? 'Terms of Service' : 'Conditions d\'utilisation'}
        </h1>
        
        <div className="w-full h-[800px] rounded-lg overflow-hidden shadow-lg">
          <iframe 
            src="/src/terms.pdf" 
            className="w-full h-full border-0"
            title={language === 'en' ? 'Terms of Service' : 'Conditions d\'utilisation'}
          />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Terms;
