
import React, { useState } from 'react';
import { CheckCircle, Globe, Smartphone } from 'lucide-react';
import { useLanguage } from '@/providers/LanguageProvider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Pricing = () => {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>("websites");

  // Website pricing plans
  const websitePlans = [
    {
      name: language === 'en' ? "Basic Website" : "Site Web Basic",
      price: "60€",
      description: language === 'en' 
        ? "Simple websites for personal or small business use" 
        : "Sites web simples pour usage personnel ou petites entreprises",
      features: [
        language === 'en' ? "1-3 Pages" : "1-3 Pages",
        language === 'en' ? "Simple Design" : "Design Simple",
        language === 'en' ? "No Backend" : "Sans Backend",
        language === 'en' ? "Mobile Friendly" : "Compatible Mobile",
        language === 'en' ? "1 code revision" : "1 révision de code"
      ],
      recommended: false
    },
    {
      name: language === 'en' ? "Standard Website" : "Site Web Standard",
      price: "230€",
      description: language === 'en' 
        ? "Professional websites with more features and pages" 
        : "Sites web professionnels avec plus de fonctionnalités et de pages",
      features: [
        language === 'en' ? "4-8 Pages" : "4-8 Pages",
        language === 'en' ? "Basic CMS (Wordpress, Webflow)" : "CMS Basic (Wordpress, Webflow)",
        language === 'en' ? "Contact Form" : "Formulaire de Contact",
        language === 'en' ? "SEO Optimization" : "Optimisation SEO",
        language === 'en' ? "3 code revisions" : "3 révisions de code"
      ],
      recommended: true
    },
    {
      name: language === 'en' ? "Advanced Website" : "Site Web Avancé",
      price: "900€",
      description: language === 'en' 
        ? "Feature-rich websites with custom backend functionality" 
        : "Sites web riches en fonctionnalités avec backend personnalisé",
      features: [
        language === 'en' ? "8+ Pages" : "8+ Pages",
        language === 'en' ? "Custom Backend" : "Backend Personnalisé",
        language === 'en' ? "User Accounts" : "Comptes Utilisateurs",
        language === 'en' ? "Interactive Features" : "Fonctionnalités Interactives",
        language === 'en' ? "E-Commerce" : "E-Commerce",
        language === 'en' ? "API Integrations" : "Intégrations API",
        language === 'en' ? "10 code revisions" : "10 révisions de code",
        language === 'en' ? "Hosting (1 year)" : "Hébergement (1 an)"
      ],
      recommended: false
    },
    {
      name: language === 'en' ? "Fully Custom WebApp" : "Application Web Personnalisée",
      price: "1600€",
      description: language === 'en' 
        ? "Tailor-made web applications for complex business needs" 
        : "Applications web sur mesure pour des besoins métiers complexes",
      features: [
        language === 'en' ? "Tailor-made solution" : "Solution sur mesure",
        language === 'en' ? "Complex backend" : "Backend complexe",
        language === 'en' ? "Dashboards" : "Tableaux de bord",
        language === 'en' ? "Real-time updates" : "Mises à jour en temps réel",
        language === 'en' ? "Automation" : "Automatisation",
        language === 'en' ? "50 code revisions" : "50 révisions de code",
        language === 'en' ? "Hosting (2 years) + Domain" : "Hébergement (2 ans) + Domaine"
      ],
      recommended: false
    }
  ];

  // Mobile app pricing plans
  const appPlans = [
    {
      name: language === 'en' ? "Basic App" : "Application Mobile Basic",
      price: "300€",
      description: language === 'en' 
        ? "Simple mobile apps with basic functionality" 
        : "Applications mobiles simples avec des fonctionnalités basiques",
      features: [
        language === 'en' ? "Simple UI with a few screens" : "Interface simple avec peu d'écrans",
        language === 'en' ? "No Backend" : "Sans Backend",
        language === 'en' ? "Static Content" : "Contenu Statique",
        language === 'en' ? "1 code revision" : "1 révision de code"
      ],
      recommended: false
    },
    {
      name: language === 'en' ? "Standard App" : "Application Mobile Standard",
      price: "1000€",
      description: language === 'en' 
        ? "Professional apps with more features and backend integration" 
        : "Applications professionnelles avec plus de fonctionnalités et intégration backend",
      features: [
        language === 'en' ? "5-10 screens" : "5-10 écrans",
        language === 'en' ? "API Integration" : "Intégration API",
        language === 'en' ? "Authentication" : "Authentification",
        language === 'en' ? "Database and basic backend features" : "Base de données et fonctionnalités backend basiques",
        language === 'en' ? "3 code revisions" : "3 révisions de code"
      ],
      recommended: true
    },
    {
      name: language === 'en' ? "Advanced App" : "Application Mobile Avancée",
      price: "2900€",
      description: language === 'en' 
        ? "Feature-rich mobile applications with advanced functionality" 
        : "Applications mobiles riches en fonctionnalités avec des fonctionnalités avancées",
      features: [
        language === 'en' ? "10+ Screens" : "10+ Écrans",
        language === 'en' ? "Polished UI" : "Interface soignée",
        language === 'en' ? "User Accounts & Profiles" : "Comptes & Profils Utilisateurs",
        language === 'en' ? "Payment Integration (Stripe, Paypal)" : "Intégration de paiement (Stripe, Paypal)",
        language === 'en' ? "Real-time Database" : "Base de données en temps réel",
        language === 'en' ? "Push notifications" : "Notifications push",
        language === 'en' ? "10 code revisions" : "10 révisions de code"
      ],
      recommended: false
    },
    {
      name: language === 'en' ? "Fully Custom App" : "Application Mobile Sur Mesure",
      price: "8000€",
      description: language === 'en' 
        ? "Tailor-made mobile applications for complex business needs" 
        : "Applications mobiles sur mesure pour des besoins métiers complexes",
      features: [
        language === 'en' ? "Complex backend" : "Backend complexe",
        language === 'en' ? "AI-Powered features" : "Fonctionnalités alimentées par l'IA",
        language === 'en' ? "Real-time updates" : "Mises à jour en temps réel",
        language === 'en' ? "Automation" : "Automatisation",
        language === 'en' ? "Admin Panel" : "Panneau d'administration",
        language === 'en' ? "High Scalability" : "Haute Scalabilité",
        language === 'en' ? "50 code revisions" : "50 révisions de code"
      ],
      recommended: false
    }
  ];

  // Extras for each type
  const websiteExtras = [
    language === 'en' ? "Custom Design: +75€" : "Design personnalisé: +75€",
    language === 'en' ? "SEO & Performance Optimization: +80€" : "Optimisation SEO & Performance: +80€",
    language === 'en' ? "E-Commerce: +250€" : "E-Commerce: +250€",
    language === 'en' ? "Extra Hosting & Maintenance: +20€/month" : "Hébergement & Maintenance supplémentaire: +20€/mois"
  ];

  const appExtras = [
    language === 'en' ? "UI/UX Design: +300€" : "Design UI/UX: +300€",
    language === 'en' ? "Messaging: +200€" : "Messagerie: +200€",
    language === 'en' ? "App Store/Playstore Publishing: +100€" : "Publication App Store/Playstore: +100€",
    language === 'en' ? "Ongoing Maintenance: +75€/month" : "Maintenance continue: +75€/mois"
  ];

  const PricingCard = ({ plan, index }: { plan: typeof websitePlans[0], index: number }) => {
    const isRecommended = plan.recommended;
    
    return (
      <div 
        className={`
          relative rounded-xl p-6 
          ${isRecommended 
            ? 'border-2 border-primary shadow-glow' 
            : 'border border-border bg-white dark:bg-card shadow-soft'} 
          flex flex-col h-full transition-all duration-300 hover:translate-y-[-5px] hover:shadow-md
        `}
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        {isRecommended && (
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground text-xs px-4 py-1 rounded-full font-medium">
            {language === 'en' ? 'Recommended' : 'Recommandé'}
          </div>
        )}
        
        <div className="mb-6">
          <h3 className="text-xl font-sora font-semibold mb-2">{plan.name}</h3>
          <div className="flex items-baseline">
            <span className="text-3xl font-bold">{plan.price}</span>
          </div>
          <p className="text-muted-foreground mt-2">{plan.description}</p>
        </div>
        
        <div className="flex-grow">
          <ul className="space-y-3 mb-6">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="flex items-start">
                <CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mt-auto">
          <a
            href="#contact"
            className={`block w-full py-2.5 px-4 rounded-lg text-center font-medium transition-colors ${
              isRecommended
                ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                : 'bg-muted text-foreground hover:bg-muted/80'
            }`}
          >
            {language === 'en' ? 'Choose this plan' : 'Choisir ce forfait'}
          </a>
        </div>
      </div>
    );
  };

  const ExtrasSection = ({ extras, title }: { extras: string[], title: string }) => (
    <div className="mt-12 p-6 bg-muted/50 dark:bg-muted/10 rounded-xl">
      <h3 className="text-xl font-sora font-semibold mb-4">{title}</h3>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {extras.map((extra, idx) => (
          <li key={idx} className="flex items-start">
            <CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
            <span>{extra}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section id="forfaits" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="section-title">{t('pricing.title')}</h2>
          <p className="section-subtitle">
            {t('pricing.subtitle')}
          </p>
        </div>
        
        <Tabs defaultValue="websites" onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-10">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="websites" className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                {language === 'en' ? 'Websites' : 'Sites Web'}
              </TabsTrigger>
              <TabsTrigger value="apps" className="flex items-center gap-2">
                <Smartphone className="h-4 w-4" />
                {language === 'en' ? 'Mobile Apps' : 'Applications Mobiles'}
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="websites" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {websitePlans.map((plan, index) => (
                <PricingCard key={index} plan={plan} index={index} />
              ))}
            </div>
            <ExtrasSection 
              extras={websiteExtras} 
              title={language === 'en' ? 'Website Extras' : 'Options Supplémentaires'}
            />
          </TabsContent>
          
          <TabsContent value="apps" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {appPlans.map((plan, index) => (
                <PricingCard key={index} plan={plan} index={index} />
              ))}
            </div>
            <ExtrasSection 
              extras={appExtras} 
              title={language === 'en' ? 'Mobile App Extras' : 'Options Supplémentaires'}
            />
          </TabsContent>
        </Tabs>
        
        <div className="mt-16 text-center">
          <p className="mb-5 text-muted-foreground">
            {language === 'en' 
              ? "Need a solution that's not listed here?" 
              : "Besoin d'une solution qui n'est pas listée ici ?"}
          </p>
          <a href="#contact" className="btn-primary">
            {language === 'en' 
              ? "Contact us for a custom quote" 
              : "Contactez-nous pour un devis personnalisé"}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
