
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Star, Users, Target, Sparkles } from 'lucide-react';

const Home = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: "📝",
      title: t('home.how.step1'),
      description: "Share your interests, subjects, and dreams with us"
    },
    {
      icon: "🤖",
      title: t('home.how.step2'),
      description: "Get personalized career insights powered by AI"
    },
    {
      icon: "👨‍🏫",
      title: t('home.how.step3'),
      description: "Connect with expert mentors for guidance"
    }
  ];

  const testimonials = [
    {
      name: "Priya R.",
      location: "Chennai",
      text: "PANGEA helped me discover my passion for biotech. Now I'm confident about my college choices!",
      avatar: "🧑‍🎓"
    },
    {
      name: "Arjun K.",
      location: "Madurai",
      text: "The AI report was so detailed! It showed me career paths I never knew existed.",
      avatar: "👨‍💻"
    },
    {
      name: "Kavya S.",
      location: "Coimbatore",
      text: "My mentor session was amazing. I got real advice about engineering colleges in Tamil Nadu.",
      avatar: "👩‍🔬"
    }
  ];

  const features = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Personalized AI Reports",
      description: "Get detailed career insights based on your unique profile"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Mentors",
      description: "Connect with industry professionals and academic advisors"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Free for All",
      description: "Complete career guidance at no cost for Tamil Nadu students"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-blue-100 to-green-100 opacity-50"></div>
        <div className="container mx-auto relative z-10 max-w-4xl">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {t('home.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              {t('home.hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/form">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  {t('home.hero.cta')}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <p className="text-sm text-gray-600">✨ 100% Free • 🇮🇳 Made for Tamil Nadu</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-purple-600">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            {t('home.how.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl group hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="text-6xl mb-4">{step.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                  <div className="mt-4 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mx-auto text-purple-600 font-bold">
                    {index + 1}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            {t('home.testimonials.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg rounded-2xl">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-3">{testimonial.avatar}</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.location}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.text}"</p>
                  <div className="flex mt-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Discover Your Perfect Career? 🚀
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of Tamil Nadu students who've found their direction with PANGEA
          </p>
          <Link to="/form">
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Your Journey Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
