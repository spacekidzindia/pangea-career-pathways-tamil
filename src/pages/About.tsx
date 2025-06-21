
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Heart, Users, Target, Sparkles, MessageCircle, Mail } from 'lucide-react';

const About = () => {
  const { t } = useLanguage();

  const teamMembers = [
    {
      name: 'Dr. Arun Krishnamurthy',
      role: 'Founder & CEO',
      bio: 'Former IIT professor passionate about democratizing career guidance for Indian students.',
      image: '👨‍🏫',
      expertise: 'Educational Technology, Career Counseling'
    },
    {
      name: 'Priya Venkatesh',
      role: 'Head of AI Development',
      bio: 'Ex-Google engineer building AI solutions for personalized learning experiences.',
      image: '👩‍💻',
      expertise: 'Machine Learning, Natural Language Processing'
    },
    {
      name: 'Rajesh Murugan',
      role: 'Head of Mentorship',
      bio: 'Career counselor with 15+ years connecting students with industry mentors.',
      image: '👨‍💼',
      expertise: 'Career Guidance, Industry Connections'
    },
    {
      name: 'Kavitha Raman',
      role: 'Community Manager',
      bio: 'Building supportive communities for Tamil Nadu students across rural and urban areas.',
      image: '👩‍🎓',
      expertise: 'Community Building, Student Engagement'
    }
  ];

  const impactStats = [
    { number: '10,000+', label: 'Students Guided', icon: '🎓' },
    { number: '500+', label: 'Expert Mentors', icon: '👨‍🏫' },
    { number: '50+', label: 'Partner Colleges', icon: '🏫' },
    { number: '95%', label: 'Success Rate', icon: '⭐' }
  ];

  const values = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Empathy First',
      description: 'We understand the unique challenges faced by Tamil Nadu students and their families.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Community Driven',
      description: 'Building a supportive ecosystem where students, mentors, and families connect.'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Personalized Approach',
      description: 'Every student is unique. Our AI creates tailored guidance for individual goals.'
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'Innovation for Good',
      description: 'Using cutting-edge technology to solve real educational and career challenges.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-100 via-blue-100 to-green-100">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            🌟 {t('about.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
            {t('about.mission')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold">
              Join Our Community
            </Button>
            <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-3 rounded-full text-lg font-semibold">
              Partner with Us
            </Button>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            📖 Our Story
          </h2>
          <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
            <p>
              Born in the bustling city of Chennai and nurtured by the dreams of countless Tamil Nadu families, 
              PANGEA Career Circle emerged from a simple yet powerful observation: <strong>every student deserves 
              personalized career guidance, regardless of their background or location.</strong>
            </p>
            <p>
              We noticed that while urban students had access to career counselors and coaching centers, 
              our rural students were left to navigate complex career decisions alone. Traditional one-size-fits-all 
              approaches weren't working, and families were making crucial decisions with limited information.
            </p>
            <p>
              That's when we decided to combine the wisdom of experienced mentors with the power of artificial 
              intelligence. Our platform doesn't replace human connection – it enhances it. We use AI to create 
              detailed, personalized career reports, then connect students with mentors who truly understand their journey.
            </p>
            <p className="font-semibold text-purple-700">
              Today, we're proud to serve students from Kanyakumari to Chennai, from government schools to 
              private institutions, helping them discover careers they never knew existed and paths they never 
              thought possible.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            🎯 Our Impact
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <Card key={index} className="border-0 shadow-lg rounded-2xl text-center">
                <CardContent className="p-6">
                  <div className="text-4xl mb-3">{stat.icon}</div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">{stat.number}</div>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            💎 Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg rounded-2xl">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center text-purple-600 flex-shrink-0">
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            👥 Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg rounded-2xl">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
                    {member.image}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-sm font-semibold text-purple-600 mb-3">{member.role}</p>
                  <p className="text-sm text-gray-600 mb-3">{member.bio}</p>
                  <div className="text-xs text-gray-500 font-medium">{member.expertise}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            🔮 Our Vision for 2025
          </h2>
          <div className="space-y-6 text-lg text-gray-700">
            <p>
              We envision a Tamil Nadu where every 12th-grade student, regardless of their economic background 
              or geographical location, has access to world-class career guidance.
            </p>
            <p>
              By 2025, we aim to:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <Card className="border border-purple-200 rounded-2xl">
                <CardContent className="p-6">
                  <h3 className="font-bold text-purple-700 mb-2">🎯 Reach 50,000 Students</h3>
                  <p className="text-sm text-gray-600">Across all 32 districts of Tamil Nadu</p>
                </CardContent>
              </Card>
              <Card className="border border-blue-200 rounded-2xl">
                <CardContent className="p-6">
                  <h3 className="font-bold text-blue-700 mb-2">🤝 Build 1,000+ Mentor Network</h3>
                  <p className="text-sm text-gray-600">Industry experts and academic advisors</p>
                </CardContent>
              </Card>
              <Card className="border border-green-200 rounded-2xl">
                <CardContent className="p-6">
                  <h3 className="font-bold text-green-700 mb-2">📱 Launch Mobile App</h3>
                  <p className="text-sm text-gray-600">Offline-capable for rural connectivity</p>
                </CardContent>
              </Card>
              <Card className="border border-orange-200 rounded-2xl">
                <CardContent className="p-6">
                  <h3 className="font-bold text-orange-700 mb-2">🏫 Partner with 200+ Schools</h3>
                  <p className="text-sm text-gray-600">Direct integration with curriculum</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            🚀 Join Our Mission
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Whether you're a student, mentor, educator, or simply believe in empowering the next generation, 
            there's a place for you in the PANGEA family.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white/10 border-white/20 rounded-2xl">
              <CardContent className="p-6 text-center">
                <h3 className="font-bold text-lg mb-3">📚 For Students</h3>
                <p className="text-sm mb-4 opacity-90">
                  Join our WhatsApp community for daily tips, scholarship updates, and peer support.
                </p>
                <Button className="bg-white text-purple-600 hover:bg-gray-100 rounded-xl">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Join Community
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 rounded-2xl">
              <CardContent className="p-6 text-center">
                <h3 className="font-bold text-lg mb-3">👨‍🏫 For Mentors</h3>
                <p className="text-sm mb-4 opacity-90">
                  Share your expertise and guide the next generation of Tamil Nadu professionals.
                </p>
                <Button className="bg-white text-purple-600 hover:bg-gray-100 rounded-xl">
                  <Users className="w-4 h-4 mr-2" />
                  Become a Mentor
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 rounded-2xl">
              <CardContent className="p-6 text-center">
                <h3 className="font-bold text-lg mb-3">🤝 For Partners</h3>
                <p className="text-sm mb-4 opacity-90">
                  Collaborate with us to reach more students and create greater impact.
                </p>
                <Button className="bg-white text-purple-600 hover:bg-gray-100 rounded-xl">
                  <Mail className="w-4 h-4 mr-2" />
                  Partner with Us
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
