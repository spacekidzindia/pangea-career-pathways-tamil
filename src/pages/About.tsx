
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useLanguage } from '@/contexts/LanguageContext';
import { Heart, Users, Target, Sparkles, MessageCircle, Mail, ArrowRight, Star } from 'lucide-react';

const About = () => {
  const { t } = useLanguage();

  const teamMembers = [
    {
      name: 'Dr. Arun Krishnamurthy',
      role: 'Founder & CEO',
      bio: 'Former IIT professor passionate about democratizing career guidance for Indian students.',
      image: '👨‍🏫',
      expertise: ['Educational Technology', 'Career Counseling']
    },
    {
      name: 'Priya Venkatesh',
      role: 'Head of AI Development',
      bio: 'Ex-Google engineer building AI solutions for personalized learning experiences.',
      image: '👩‍💻',
      expertise: ['Machine Learning', 'Natural Language Processing']
    },
    {
      name: 'Rajesh Murugan',
      role: 'Head of Mentorship',
      bio: 'Career counselor with 15+ years connecting students with industry mentors.',
      image: '👨‍💼',
      expertise: ['Career Guidance', 'Industry Connections']
    },
    {
      name: 'Kavitha Raman',
      role: 'Community Manager',
      bio: 'Building supportive communities for Tamil Nadu students across rural and urban areas.',
      image: '👩‍🎓',
      expertise: ['Community Building', 'Student Engagement']
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
      icon: <Heart className="w-5 h-5" />,
      title: 'Empathy First',
      description: 'We understand the unique challenges faced by Tamil Nadu students and their families.'
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: 'Community Driven',
      description: 'Building a supportive ecosystem where students, mentors, and families connect.'
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: 'Personalized Approach',
      description: 'Every student is unique. Our AI creates tailored guidance for individual goals.'
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: 'Innovation for Good',
      description: 'Using cutting-edge technology to solve real educational and career challenges.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-blue-50/30">
      {/* Hero Section */}
      <section className="relative py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium">
            About Our Mission
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Empowering Every Student's 
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Future</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            We believe every student in Tamil Nadu deserves personalized career guidance, 
            regardless of their background or location.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full px-8">
              Join Our Community
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-8">
              Partner with Us
            </Button>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Story</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Born from a simple yet powerful observation about educational equity in Tamil Nadu.
            </p>
          </div>
          
          <Card className="border-0 shadow-xl bg-white/70 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
                <p>
                  Born in the bustling city of Chennai and nurtured by the dreams of countless Tamil Nadu families, 
                  PANGEA Career Circle emerged from a simple yet powerful observation: <strong className="text-slate-900">every student deserves 
                  personalized career guidance, regardless of their background or location.</strong>
                </p>
                <p>
                  We noticed that while urban students had access to career counselors and coaching centers, 
                  our rural students were left to navigate complex career decisions alone. Traditional one-size-fits-all 
                  approaches weren't working, and families were making crucial decisions with limited information.
                </p>
                <p>
                  That's when we decided to combine the wisdom of experienced mentors with the power of artificial 
                  intelligence. Our platform doesn't replace human connection – it enhances it.
                </p>
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-xl border border-purple-100">
                  <p className="font-semibold text-purple-900 mb-0">
                    Today, we're proud to serve students from Kanyakumari to Chennai, from government schools to 
                    private institutions, helping them discover careers they never knew existed.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 px-4 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Impact</h2>
            <p className="text-slate-600">Making a real difference in students' lives across Tamil Nadu</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {impactStats.map((stat, index) => (
              <Card key={index} className="text-center border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-3xl mb-3">{stat.icon}</div>
                  <div className="text-2xl md:text-3xl font-bold text-purple-600 mb-2">{stat.number}</div>
                  <p className="text-slate-600 font-medium text-sm">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Values</h2>
            <p className="text-slate-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl flex items-center justify-center text-purple-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50/50 to-blue-50/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Meet Our Team</h2>
            <p className="text-slate-600">Passionate educators and technologists working for student success</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl group-hover:scale-110 transition-transform duration-300">
                    {member.image}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{member.name}</h3>
                  <p className="text-sm font-semibold text-purple-600 mb-3">{member.role}</p>
                  <p className="text-sm text-slate-600 mb-4 leading-relaxed">{member.bio}</p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {member.expertise.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
            Our Vision for 2025
          </h2>
          <p className="text-lg text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            We envision a Tamil Nadu where every 12th-grade student, regardless of their economic background 
            or geographical location, has access to world-class career guidance.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border border-purple-200 bg-gradient-to-br from-purple-50 to-purple-100/50 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <Star className="w-5 h-5 text-purple-600 mr-2" />
                  <h3 className="font-bold text-purple-700">Reach 50,000 Students</h3>
                </div>
                <p className="text-sm text-slate-600">Across all 32 districts of Tamil Nadu</p>
              </CardContent>
            </Card>
            
            <Card className="border border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100/50 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <Users className="w-5 h-5 text-blue-600 mr-2" />
                  <h3 className="font-bold text-blue-700">Build 1,000+ Mentor Network</h3>
                </div>
                <p className="text-sm text-slate-600">Industry experts and academic advisors</p>
              </CardContent>
            </Card>
            
            <Card className="border border-green-200 bg-gradient-to-br from-green-50 to-green-100/50 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <Sparkles className="w-5 h-5 text-green-600 mr-2" />
                  <h3 className="font-bold text-green-700">Launch Mobile App</h3>
                </div>
                <p className="text-sm text-slate-600">Offline-capable for rural connectivity</p>
              </CardContent>
            </Card>
            
            <Card className="border border-orange-200 bg-gradient-to-br from-orange-50 to-orange-100/50 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <Target className="w-5 h-5 text-orange-600 mr-2" />
                  <h3 className="font-bold text-orange-700">Partner with 200+ Schools</h3>
                </div>
                <p className="text-sm text-slate-600">Direct integration with curriculum</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Whether you're a student, mentor, educator, or simply believe in empowering the next generation, 
            there's a place for you in the PANGEA family.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <h3 className="font-bold text-lg mb-3">📚 For Students</h3>
                <p className="text-sm mb-4 opacity-90 leading-relaxed">
                  Join our WhatsApp community for daily tips, scholarship updates, and peer support.
                </p>
                <Button className="bg-white text-purple-600 hover:bg-white/90 rounded-full">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Join Community
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <h3 className="font-bold text-lg mb-3">👨‍🏫 For Mentors</h3>
                <p className="text-sm mb-4 opacity-90 leading-relaxed">
                  Share your expertise and guide the next generation of Tamil Nadu professionals.
                </p>
                <Button className="bg-white text-purple-600 hover:bg-white/90 rounded-full">
                  <Users className="w-4 h-4 mr-2" />
                  Become a Mentor
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <h3 className="font-bold text-lg mb-3">🤝 For Partners</h3>
                <p className="text-sm mb-4 opacity-90 leading-relaxed">
                  Collaborate with us to reach more students and create greater impact.
                </p>
                <Button className="bg-white text-purple-600 hover:bg-white/90 rounded-full">
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
