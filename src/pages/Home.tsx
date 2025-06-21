
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Star, Users, Target, Sparkles, Brain, Rocket, Zap, Heart, BookOpen } from 'lucide-react';

const Home = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: t('home.how.step1'),
      description: "Share your interests, subjects, and dreams with us",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: t('home.how.step2'),
      description: "Get personalized career insights powered by AI",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: t('home.how.step3'),
      description: "Connect with expert mentors for guidance",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  const testimonials = [
    {
      name: "Priya R.",
      location: "Chennai",
      text: "PANGEA helped me discover my passion for biotech. Now I'm confident about my college choices!",
      avatar: "🧑‍🎓",
      rating: 5,
      course: "Biotechnology"
    },
    {
      name: "Arjun K.",
      location: "Madurai",
      text: "The AI report was so detailed! It showed me career paths I never knew existed.",
      avatar: "👨‍💻",
      rating: 5,
      course: "Computer Science"
    },
    {
      name: "Kavya S.",
      location: "Coimbatore", 
      text: "My mentor session was amazing. I got real advice about engineering colleges in Tamil Nadu.",
      avatar: "👩‍🔬",
      rating: 5,
      course: "Engineering"
    }
  ];

  const features = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "AI-Powered Reports",
      description: "Get detailed career insights based on your unique profile and interests",
      gradient: "from-violet-500 to-purple-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Mentors",
      description: "Connect with industry professionals and academic advisors who care",
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "100% Free",
      description: "Complete career guidance at no cost for all Tamil Nadu students",
      gradient: "from-pink-500 to-rose-500"
    }
  ];

  const stats = [
    { number: "10K+", label: "Students Guided", icon: "🎓" },
    { number: "500+", label: "Expert Mentors", icon: "👨‍🏫" },
    { number: "50+", label: "Partner Colleges", icon: "🏫" },
    { number: "95%", label: "Success Rate", icon: "⭐" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30">
      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full blur-xl"></div>
        </div>
        
        <div className="container mx-auto relative z-10 max-w-6xl text-center">
          <Badge variant="secondary" className="mb-6 px-6 py-2 text-sm font-medium bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            🚀 AI-Powered Career Guidance
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Your Future,{' '}
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 bg-clip-text text-transparent">
              Your Way
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto">
            Discover your perfect career path with AI-powered insights and expert mentors. 
            Made specially for Tamil Nadu students.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link to="/form">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-10 py-6 rounded-2xl text-lg font-semibold shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:-translate-y-1 group"
              >
                <Rocket className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
            
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full border-2 border-white"></div>
              </div>
              <span className="font-medium">Join 10,000+ students</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-1">
                  {stat.number}
                </div>
                <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Students Love PANGEA
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to make confident career decisions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl bg-white/80 backdrop-blur-sm group hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50/50 via-blue-50/50 to-green-50/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Three simple steps to discover your perfect career path
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connection Lines */}
            <div className="hidden md:block absolute top-1/2 left-1/3 w-1/3 h-0.5 bg-gradient-to-r from-purple-300 to-blue-300 transform -translate-y-1/2"></div>
            <div className="hidden md:block absolute top-1/2 right-1/3 w-1/3 h-0.5 bg-gradient-to-r from-blue-300 to-green-300 transform -translate-y-1/2"></div>
            
            {steps.map((step, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl bg-white/90 backdrop-blur-sm group hover:-translate-y-4 relative">
                <CardContent className="p-8 text-center">
                  <div className={`w-24 h-24 bg-gradient-to-br ${step.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl`}>
                    {step.icon}
                  </div>
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {index + 1}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Student Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Real students, real results, real futures
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-xl rounded-3xl bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-blue-400 rounded-2xl flex items-center justify-center text-2xl mr-4 group-hover:scale-110 transition-transform duration-300">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.location}</p>
                      <Badge variant="secondary" className="mt-1 text-xs">
                        <BookOpen className="w-3 h-3 mr-1" />
                        {testimonial.course}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-gray-700 italic mb-4 leading-relaxed">"{testimonial.text}"</p>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}}></div>
        </div>
        
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <Zap className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Shape Your Future? 🚀
          </h2>
          <p className="text-xl mb-12 opacity-90 leading-relaxed max-w-3xl mx-auto">
            Join thousands of Tamil Nadu students who've discovered their perfect career path with PANGEA
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/form">
              <Button 
                size="lg" 
                className="bg-white text-purple-600 hover:bg-gray-100 px-10 py-6 rounded-2xl text-lg font-semibold shadow-2xl hover:shadow-white/25 transition-all duration-300 hover:-translate-y-1 group"
              >
                <Sparkles className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                Start Your Journey Now
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
            
            <div className="text-sm opacity-90">
              ✨ Takes only 5 minutes • 📱 Get results on WhatsApp
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
