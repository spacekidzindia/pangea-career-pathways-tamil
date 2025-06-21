
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Heart, 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  Linkedin, 
  Twitter,
  Sparkles,
  ArrowRight,
  Shield,
  FileText,
  Users,
  Rocket
} from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { path: '/', label: 'Home', icon: Sparkles },
    { path: '/form', label: 'Career Assessment', icon: FileText },
    { path: '/mentor-booking', label: 'Book Mentor', icon: Users },
    { path: '/about', label: 'About Us', icon: Heart },
  ];

  const legalLinks = [
    { path: '/privacy', label: 'Privacy Policy', icon: Shield },
    { path: '/terms', label: 'Terms of Service', icon: FileText },
    { path: '/contact', label: 'Contact Us', icon: Mail },
  ];

  const socialLinks = [
    { 
      href: 'https://instagram.com/pangeacareercircle', 
      icon: Instagram, 
      label: 'Instagram',
      gradient: 'from-pink-500 to-rose-500'
    },
    { 
      href: 'https://linkedin.com/company/pangea-career-circle', 
      icon: Linkedin, 
      label: 'LinkedIn',
      gradient: 'from-blue-600 to-blue-700'
    },
    { 
      href: 'https://twitter.com/pangeacareers', 
      icon: Twitter, 
      label: 'Twitter',
      gradient: 'from-sky-500 to-blue-500'
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900/20 to-blue-900/20 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full bg-gradient-to-br from-purple-900/10 to-blue-900/10"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-xl">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    PANGEA Career Circle
                  </h2>
                  <p className="text-sm text-gray-400">AI Career Mentor</p>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-8 max-w-md">
                Empowering Tamil Nadu students with AI-powered career guidance and expert mentorship. 
                Your future starts here, and it's completely free.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-300">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-xl flex items-center justify-center">
                    <Mail className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="font-medium">hello@pangeacareercircle.com</p>
                    <p className="text-sm text-gray-400">Get in touch</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 text-gray-300">
                  <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center">
                    <Phone className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <p className="font-medium">+91 9876543210</p>
                    <p className="text-sm text-gray-400">WhatsApp Support</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 text-gray-300">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="font-medium">Chennai, Tamil Nadu</p>
                    <p className="text-sm text-gray-400">Serving all of TN</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-6 flex items-center">
                <Rocket className="w-5 h-5 mr-2 text-purple-400" />
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className="flex items-center space-x-3 text-gray-300 hover:text-white transition-all duration-300 group"
                      >
                        <Icon className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          {link.label}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Support & Legal */}
            <div>
              <h3 className="text-lg font-bold mb-6 flex items-center">
                <Shield className="w-5 h-5 mr-2 text-blue-400" />
                Support & Legal
              </h3>
              <ul className="space-y-3">
                {legalLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className="flex items-center space-x-3 text-gray-300 hover:text-white transition-all duration-300 group"
                      >
                        <Icon className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          {link.label}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
              
              {/* Newsletter Signup */}
              <div className="mt-8 p-4 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl border border-purple-500/20">
                <h4 className="font-semibold text-white mb-2">Stay Updated</h4>
                <p className="text-sm text-gray-300 mb-4">Get career tips & updates</p>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Enter email"
                    className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-all duration-300"
                  />
                  <Button size="sm" className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 rounded-xl">
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700/50 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-gray-400">
              <Heart className="w-4 h-4 text-red-400" />
              <span>Made with love for Tamil Nadu students • © 2024 PANGEA Career Circle</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-400 mr-2">Follow us:</span>
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-gradient-to-br ${social.gradient} rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-xl`}
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
