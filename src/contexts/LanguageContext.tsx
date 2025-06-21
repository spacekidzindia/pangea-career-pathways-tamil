
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ta';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.form': 'Career Form',
    'nav.status': 'Check Report',
    'nav.mentors': 'Meet Mentors',
    'nav.about': 'About Us',
    
    // Home Page
    'home.hero.title': 'Your Future, Your Way – Guided by AI & Mentors',
    'home.hero.subtitle': 'For Tamil Nadu students in 12th grade. Free career guidance powered by AI.',
    'home.hero.cta': 'Start Your Career Journey',
    'home.how.title': '🚀 How It Works',
    'home.how.step1': 'Fill Career Form',
    'home.how.step2': 'Get AI Report',
    'home.how.step3': 'Meet Your Mentor',
    'home.testimonials.title': '💬 What Students Say',
    
    // Form Page
    'form.title': 'Tell us about yourself to begin your career journey',
    'form.name': 'Full Name',
    'form.whatsapp': 'WhatsApp Number',
    'form.board': 'Board of Study',
    'form.subjects': 'Main Subjects',
    'form.hobbies': 'Hobbies & Interests',
    'form.submit': 'Submit and Generate Report',
    'form.disclaimer': 'Your information is safe and only used to guide your career.',
    
    // Report Status
    'status.title': 'Check Your Career Report Status',
    'status.check': 'Check Now',
    'status.ready': '🎉 Your report is ready!',
    'status.pending': '⏳ We\'re working on it! You\'ll receive it soon via WhatsApp.',
    
    // Report Viewer
    'report.title': 'Your Personalized Career Guidance Report',
    'report.download': 'Download PDF',
    'report.share': 'Share via WhatsApp',
    
    // Mentor Booking
    'mentor.title': 'Talk to a Mentor Who Cares About Your Future',
    'mentor.book': 'Book My Free 10-Min Session',
    
    // About
    'about.title': 'Why We Built PANGEA Career Circle',
    'about.mission': 'Empowering rural & urban students through personalized, tech-powered guidance',
    
    // Common
    'footer.contact': 'Contact Us',
    'footer.privacy': 'Privacy Policy',
    'footer.social': 'Follow Us',
  },
  ta: {
    // Navigation
    'nav.home': 'முகப்பு',
    'nav.form': 'தொழில் படிவம்',
    'nav.status': 'அறிக்கை சரிபார்',
    'nav.mentors': 'வழிகாட்டிகள்',
    'nav.about': 'எங்களைப் பற்றி',
    
    // Home Page
    'home.hero.title': 'உங்கள் எதிர்காலம், உங்கள் வழி – AI மற்றும் வழிகாட்டிகளால் வழிநடத்தப்படுகிறது',
    'home.hero.subtitle': 'தமிழ்நாட்டில் 12ம் வகுப்பு மாணவர்களுக்கு. AI மூலம் இலவச தொழில் வழிகாட்டுதல்.',
    'home.hero.cta': 'உங்கள் தொழில் பயணத்தைத் தொடங்குங்கள்',
    'home.how.title': '🚀 இது எப்படி வேலை செய்கிறது',
    'home.how.step1': 'தொழில் படிவத்தை நிரப்புங்கள்',
    'home.how.step2': 'AI அறிக்கை பெறுங்கள்',
    'home.how.step3': 'உங்கள் வழிகாட்டியை சந்திக்கவும்',
    'home.testimonials.title': '💬 மாணவர்கள் என்ன சொல்கிறார்கள்',
    
    // Form Page
    'form.title': 'உங்கள் தொழில் பயணத்தைத் தொடங்க உங்களைப் பற்றி எங்களிடம் கூறுங்கள்',
    'form.name': 'முழு பெயர்',
    'form.whatsapp': 'WhatsApp எண்',
    'form.board': 'படிப்பு வாரியம்',
    'form.subjects': 'முக்கிய பாடங்கள்',
    'form.hobbies': 'பொழுதுபோக்கு மற்றும் ஆர்வங்கள்',
    'form.submit': 'சமர்பித்து அறிக்கை உருவாக்கவும்',
    'form.disclaimer': 'உங்கள் தகவல் பாதுகாப்பானது மற்றும் உங்கள் தொழில் வழிகாட்ட மட்டுமே பயன்படுத்தப்படும்.',
    
    // Report Status
    'status.title': 'உங்கள் தொழில் அறிக்கை நிலையை சரிபார்க்கவும்',
    'status.check': 'இப்போது சரிபார்க்கவும்',
    'status.ready': '🎉 உங்கள் அறிக்கை தயார்!',
    'status.pending': '⏳ நாங்கள் அதில் வேலை செய்கிறோம்! விரைவில் WhatsApp மூலம் பெறுவீர்கள்.',
    
    // Report Viewer
    'report.title': 'உங்கள் தனிப்பட்ட தொழில் வழிகாட்டுதல் அறிக்கை',
    'report.download': 'PDF பதிவிறக்கம்',
    'report.share': 'WhatsApp மூலம் பகிரவும்',
    
    // Mentor Booking
    'mentor.title': 'உங்கள் எதிர்காலத்தைப் பற்றி அக்கறையுள்ள வழிகாட்டியுடன் பேசுங்கள்',
    'mentor.book': 'எனது இலவச 10 நிமிட அமர்வை பதிவு செய்யவும்',
    
    // About
    'about.title': 'ஏன் PANGEA Career Circle ஐ உருவாக்கினோம்',
    'about.mission': 'தனிப்பட்ட, தொழில்நுட்ப சக்தி வழிகாட்டுதல் மூலம் கிராமப்புற மற்றும் நகர்ப்புற மாணவர்களை அதிகாரப்படுத்துதல்',
    
    // Common
    'footer.contact': 'எங்களை தொடர்பு கொள்ளவும்',
    'footer.privacy': 'தனியுரிமை கொள்கை',
    'footer.social': 'எங்களை பின்தொடரவும்',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ta' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
