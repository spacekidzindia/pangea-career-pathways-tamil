
import { useState, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show widget after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hi PANGEA Team! 👋 I'm interested in learning more about career guidance. Can you help me get started?"
    );
    const whatsappUrl = `https://wa.me/919876543210?text=${message}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Popup */}
      {isOpen && (
        <div className="mb-4 w-80 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden animate-scale-in">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="w-full h-full" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}}></div>
            </div>
            <div className="flex items-center justify-between relative z-10">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold">PANGEA Support</h3>
                  <p className="text-sm text-green-100">Usually replies instantly</p>
                </div>
              </div>
              <Button
                onClick={() => setIsOpen(false)}
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/20 rounded-full"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Chat Content */}
          <div className="p-6 space-y-4">
            {/* Bot Message */}
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <div className="bg-gray-100 rounded-2xl rounded-tl-md p-4 max-w-xs">
                <p className="text-sm text-gray-800 leading-relaxed">
                  Hi there! 👋 I'm here to help you with your career journey. 
                  Ask me anything about our AI reports, mentors, or getting started!
                </p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-2">
              <p className="text-xs text-gray-500 font-medium">Quick actions:</p>
              <div className="grid grid-cols-1 gap-2">
                <button 
                  onClick={handleWhatsAppClick}
                  className="text-left p-3 bg-green-50 hover:bg-green-100 rounded-xl transition-colors duration-200 border border-green-200"
                >
                  <span className="text-sm font-medium text-green-700">🚀 Start Career Assessment</span>
                </button>
                <button 
                  onClick={handleWhatsAppClick}
                  className="text-left p-3 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors duration-200 border border-blue-200"
                >
                  <span className="text-sm font-medium text-blue-700">👨‍🏫 Book a Mentor Session</span>
                </button>
                <button 
                  onClick={handleWhatsAppClick}
                  className="text-left p-3 bg-purple-50 hover:bg-purple-100 rounded-xl transition-colors duration-200 border border-purple-200"
                >
                  <span className="text-sm font-medium text-purple-700">❓ Ask Questions</span>
                </button>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <Button
              onClick={handleWhatsAppClick}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-xl py-3 shadow-lg hover:shadow-green-500/25 transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Continue on WhatsApp
              <Send className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-2xl hover:shadow-green-500/50 transition-all duration-300 ${
          isOpen ? 'rotate-180' : 'hover:scale-110'
        } group relative overflow-hidden`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        {isOpen ? (
          <X className="w-6 h-6 relative z-10" />
        ) : (
          <MessageCircle className="w-6 h-6 relative z-10" />
        )}
        
        {/* Pulse Animation */}
        {!isOpen && (
          <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></div>
        )}
      </Button>

      {/* Notification Badge */}
      {!isOpen && (
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg animate-pulse">
          1
        </div>
      )}
    </div>
  );
};

export default WhatsAppWidget;
