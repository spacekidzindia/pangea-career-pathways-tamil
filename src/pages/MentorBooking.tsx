
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { Calendar, Clock, User, Star, MessageCircle, Video, Phone } from 'lucide-react';

const MentorBooking = () => {
  const { t } = useLanguage();
  const [selectedMentor, setSelectedMentor] = useState<string | null>(null);

  const mentors = [
    {
      id: 'priya-tech',
      name: 'Priya Krishnan',
      title: 'Senior Software Engineer at Google',
      experience: '8 years',
      specialties: ['Computer Science', 'Software Engineering', 'Tech Careers'],
      rating: 4.9,
      reviews: 127,
      languages: ['English', 'Tamil'],
      image: '👩‍💻',
      bio: 'From Coimbatore to Silicon Valley. I help students navigate engineering admissions and tech career paths.',
      availability: 'Weekends 10 AM - 6 PM IST'
    },
    {
      id: 'rajesh-medicine',
      name: 'Dr. Rajesh Kumar',
      title: 'Cardiologist & Medical Advisor',
      experience: '12 years',
      specialties: ['NEET Preparation', 'Medical Colleges', 'Healthcare Careers'],
      rating: 4.8,
      reviews: 89,
      languages: ['English', 'Tamil', 'Hindi'],
      image: '👨‍⚕️',
      bio: 'AIIMS graduate helping Tamil Nadu students pursue medical careers. Expert in NEET strategy.',
      availability: 'Weekdays 7 PM - 9 PM IST'
    },
    {
      id: 'kavya-business',
      name: 'Kavya Shankar',
      title: 'Product Manager at Flipkart',
      experience: '6 years',
      specialties: ['Business Administration', 'Entrepreneurship', 'Product Management'],
      rating: 4.9,
      reviews: 156,
      languages: ['English', 'Tamil'],
      image: '👩‍💼',
      bio: 'IIM Chennai alumna passionate about guiding students into business and management careers.',
      availability: 'Evenings 6 PM - 8 PM IST'
    }
  ];

  const sessionTypes = [
    {
      type: 'quick-chat',
      title: 'Quick Chat',
      duration: '10 minutes',
      price: 'Free',
      description: 'Quick career guidance and Q&A session',
      icon: <MessageCircle className="w-5 h-5" />
    },
    {
      type: 'detailed-session',
      title: 'Detailed Session',
      duration: '30 minutes',
      price: '₹299',
      description: 'In-depth career planning and strategy discussion',
      icon: <Video className="w-5 h-5" />
    },
    {
      type: 'follow-up',
      title: 'Follow-up Call',
      duration: '15 minutes',
      price: '₹149',
      description: 'Progress check and continued guidance',
      icon: <Phone className="w-5 h-5" />
    }
  ];

  const handleBookSession = (mentorId: string, sessionType: string) => {
    // In real app, this would integrate with Calendly or booking system
    const mentor = mentors.find(m => m.id === mentorId);
    const whatsappText = `Hi! I'd like to book a ${sessionType} session with ${mentor?.name} for career guidance. Can you help me schedule this?`;
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(whatsappText)}`, '_blank');
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            👨‍🏫 {t('mentor.title')}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect with industry experts and academic advisors who understand your journey. 
            Get personalized guidance from professionals who've walked your path.
          </p>
        </div>

        {/* Session Types */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">📅 Choose Your Session Type</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sessionTypes.map((session, index) => (
              <Card key={index} className="border-0 shadow-lg rounded-2xl hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-purple-600">
                    {session.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{session.title}</h3>
                  <div className="flex items-center justify-center space-x-2 mb-3">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{session.duration}</span>
                  </div>
                  <div className="text-2xl font-bold text-purple-600 mb-3">{session.price}</div>
                  <p className="text-sm text-gray-600">{session.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mentors */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">🌟 Meet Your Mentors</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {mentors.map((mentor) => (
              <Card key={mentor.id} className="border-0 shadow-xl rounded-3xl hover:shadow-2xl transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
                    {mentor.image}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{mentor.name}</CardTitle>
                  <p className="text-sm text-purple-600 font-semibold">{mentor.title}</p>
                  <div className="flex items-center justify-center space-x-2 mt-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-semibold">{mentor.rating}</span>
                    <span className="text-sm text-gray-500">({mentor.reviews} reviews)</span>
                  </div>
                </CardHeader>
                <CardContent className="px-6 pb-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Experience</h4>
                      <p className="text-sm text-gray-600">{mentor.experience} in industry</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Specialties</h4>
                      <div className="flex flex-wrap gap-2">
                        {mentor.specialties.map((specialty, index) => (
                          <Badge key={index} className="bg-purple-100 text-purple-700 text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Languages</h4>
                      <p className="text-sm text-gray-600">{mentor.languages.join(', ')}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">About</h4>
                      <p className="text-sm text-gray-600">{mentor.bio}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Availability</h4>
                      <p className="text-sm text-gray-600 flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {mentor.availability}
                      </p>
                    </div>

                    <div className="pt-4 space-y-2">
                      <Button
                        onClick={() => handleBookSession(mentor.id, 'quick-chat')}
                        className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white rounded-xl"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        {t('mentor.book')}
                      </Button>
                      <Button
                        onClick={() => handleBookSession(mentor.id, 'detailed-session')}
                        variant="outline"
                        className="w-full border-purple-600 text-purple-600 hover:bg-purple-50 rounded-xl"
                      >
                        Book Detailed Session
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="border-0 shadow-xl rounded-3xl bg-gradient-to-r from-purple-500 to-blue-500 text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">🚀 Ready to Transform Your Future?</h3>
              <p className="text-lg mb-6 opacity-90">
                Don't navigate your career journey alone. Get expert guidance tailored to your unique goals and aspirations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => window.open('https://wa.me/919876543210?text=Hi! I want to book a mentor session.', '_blank')}
                  className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat to Book Now
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 rounded-xl font-semibold"
                  onClick={() => window.open('tel:+919876543210', '_blank')}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Us Directly
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MentorBooking;
