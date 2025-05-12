import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'np';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    'nav.home': 'Home',
    'nav.explore': 'Explore',
    'nav.levels': 'Levels',
    'nav.login': 'Login',
    'level.school': 'School (Class 1-12)',
    'level.entrance': 'Entrance Exams',
    'level.bachelor': 'Bachelor Level',
    'hero.title': "Nepal's First Integrated Learning Platform",
    'hero.subtitle': 'Structured learning materials for students from Class 1 to Bachelor level.',
    'hero.search': 'Search courses, resources or topics',
    'hero.search.button': 'Search',
    'hero.popular': 'Popular:',
    // Add more translations as needed
  },
  np: {
    'nav.home': 'गृहपृष्ठ',
    'nav.explore': 'अन्वेषण',
    'nav.levels': 'तहहरू',
    'nav.login': 'लग इन',
    'level.school': 'विद्यालय (कक्षा १-१२)',
    'level.entrance': 'प्रवेश परीक्षा',
    'level.bachelor': 'स्नातक तह',
    'hero.title': 'नेपालको पहिलो एकीकृत शिक्षण मञ्च',
    'hero.subtitle': 'कक्षा १ देखि स्नातक तहसम्मका विद्यार्थीहरूको लागि संरचित शिक्षण सामग्रीहरू',
    'hero.search': 'पाठ्यक्रम, स्रोतहरू वा विषयहरू खोज्नुहोस्',
    'hero.search.button': 'खोज्नुहोस्',
    'hero.popular': 'लोकप्रिय:',
    // Add more translations as needed
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}