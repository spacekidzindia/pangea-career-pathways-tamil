
import { useLanguage } from '@/contexts/LanguageContext';
import { Instagram, Linkedin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-white border-t border-purple-100 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">P</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">PANGEA Career Circle</h3>
                <p className="text-xs text-gray-600">AI Career Mentor</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              Empowering Tamil Nadu students with AI-powered career guidance and mentorship.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">{t('footer.contact')}</h4>
            <div className="space-y-2">
              <a href="tel:+919876543210" className="flex items-center space-x-2 text-sm text-gray-600 hover:text-purple-600">
                <Phone className="w-4 h-4" />
                <span>+91 98765 43210</span>
              </a>
              <a href="mailto:hello@pangeacareercircle.com" className="flex items-center space-x-2 text-sm text-gray-600 hover:text-purple-600">
                <Mail className="w-4 h-4" />
                <span>hello@pangeacareercircle.com</span>
              </a>
            </div>
          </div>

          {/* Social & Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">{t('footer.social')}</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-purple-600">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-purple-600">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <div className="space-y-2">
              <a href="#" className="block text-sm text-gray-600 hover:text-purple-600">
                {t('footer.privacy')}
              </a>
              <a href="#" className="block text-sm text-gray-600 hover:text-purple-600">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-100 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-600">
            © 2024 PANGEA Career Circle. Made with ❤️ for Tamil Nadu students.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
