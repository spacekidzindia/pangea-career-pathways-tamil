
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { Download, Share, Star, TrendingUp, BookOpen, Award, Calendar } from 'lucide-react';

const ReportViewer = () => {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState('summary');

  // Mock data for the career report
  const studentData = {
    name: "Priya Ramesh",
    location: "Chennai, Tamil Nadu",
    subjects: "Physics, Chemistry, Mathematics, Computer Science",
    interests: "Technology, Problem Solving, Creative Writing",
    careerArchetypes: [
      { name: "Tech Innovator", match: "92%", description: "You have strong analytical skills and love creating solutions" },
      { name: "Problem Solver", match: "87%", description: "Your methodical approach suits engineering fields" },
      { name: "Creative Thinker", match: "78%", description: "You balance logic with creative expression" }
    ]
  };

  const careerPaths = [
    {
      title: "Software Engineering",
      description: "Design and develop software applications",
      degrees: ["B.Tech Computer Science", "B.E Software Engineering"],
      colleges: ["IIT Madras", "Anna University", "VIT Vellore"],
      jobs: ["Software Developer", "Full Stack Engineer", "Product Manager"],
      salary: "₹6-25 LPA"
    },
    {
      title: "Data Science",
      description: "Analyze data to solve business problems",
      degrees: ["B.Tech Data Science", "B.Sc Statistics + M.Sc Data Science"],
      colleges: ["IIT Madras", "IIIT Hyderabad", "Manipal Institute"],
      jobs: ["Data Analyst", "ML Engineer", "Business Analyst"],
      salary: "₹8-30 LPA"
    },
    {
      title: "Cybersecurity",
      description: "Protect systems and data from threats",
      degrees: ["B.Tech Cybersecurity", "B.Sc Computer Science"],
      colleges: ["Amrita University", "SRM University", "PSG Tech"],
      jobs: ["Security Analyst", "Ethical Hacker", "Security Consultant"],
      salary: "₹7-28 LPA"
    }
  ];

  const scholarships = [
    { name: "Merit Cum Means Scholarship", amount: "₹20,000/year", eligibility: "Family income < ₹6 LPA" },
    { name: "INSPIRE Scholarship", amount: "₹80,000/year", eligibility: "Top 1% in 12th grade" },
    { name: "Kishore Vaigyanik Protsahan Yojana", amount: "Full tuition", eligibility: "KVPY qualification" }
  ];

  const roadmap = [
    { phase: "Month 1", tasks: ["Research colleges", "Prepare for entrance exams", "Build coding portfolio"] },
    { phase: "Month 3", tasks: ["Take JEE/BITSAT", "Apply for scholarships", "Join coding bootcamp"] },
    { phase: "Year 1", tasks: ["Start B.Tech", "Join tech clubs", "Begin internship search"] }
  ];

  const handleDownload = () => {
    // In real app, this would generate and download a PDF
    window.print();
  };

  const handleShare = () => {
    const text = `Check out my personalized career report from PANGEA Career Circle! 🎯 I discovered I'm a Tech Innovator with 92% match! #CareerGuidance #TamilNaduStudents`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="min-h-screen py-12 px-4 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            🎯 {t('report.title')}
          </h1>
          <div className="flex justify-center gap-4 mb-6">
            <Button onClick={handleDownload} className="bg-purple-600 hover:bg-purple-700 rounded-xl">
              <Download className="w-4 h-4 mr-2" />
              {t('report.download')}
            </Button>
            <Button onClick={handleShare} variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 rounded-xl">
              <Share className="w-4 h-4 mr-2" />
              {t('report.share')}
            </Button>
          </div>
        </div>

        {/* Student Summary */}
        <Card className="border-0 shadow-xl rounded-3xl mb-8">
          <CardHeader className="bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-t-3xl">
            <CardTitle className="text-2xl font-bold text-center">
              Student Profile ✨
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{studentData.name}</h3>
                <p className="text-gray-600 mb-4">{studentData.location}</p>
                <div className="space-y-2">
                  <div>
                    <strong className="text-gray-700">Subjects:</strong>
                    <p className="text-gray-600">{studentData.subjects}</p>
                  </div>
                  <div>
                    <strong className="text-gray-700">Interests:</strong>
                    <p className="text-gray-600">{studentData.interests}</p>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">🧑‍🎓</span>
                </div>
                <Badge className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
                  Report Generated: {new Date().toLocaleDateString()}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Career Archetypes */}
        <Card className="border-0 shadow-xl rounded-3xl mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
              <Star className="w-6 h-6 mr-2 text-yellow-500" />
              Your Career Archetypes
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {studentData.careerArchetypes.map((archetype, index) => (
                <Card key={index} className="border border-purple-200 rounded-2xl">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl mb-3">
                      {index === 0 ? '🚀' : index === 1 ? '🧠' : '🎨'}
                    </div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">{archetype.name}</h4>
                    <div className="text-2xl font-bold text-purple-600 mb-2">{archetype.match}</div>
                    <p className="text-sm text-gray-600">{archetype.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Career Pathways */}
        <Card className="border-0 shadow-xl rounded-3xl mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
              <TrendingUp className="w-6 h-6 mr-2 text-blue-500" />
              Recommended Career Pathways
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <Accordion type="single" collapsible className="space-y-4">
              {careerPaths.map((path, index) => (
                <AccordionItem key={index} value={`path-${index}`} className="border border-blue-200 rounded-2xl px-4">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center space-x-3 text-left">
                      <div className="text-2xl">
                        {index === 0 ? '💻' : index === 1 ? '📊' : '🔒'}
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">{path.title}</h4>
                        <p className="text-sm text-gray-600">{path.description}</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">🎓 Recommended Degrees</h5>
                          <ul className="space-y-1">
                            {path.degrees.map((degree, i) => (
                              <li key={i} className="text-sm text-gray-600">• {degree}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">🏫 Top Colleges</h5>
                          <ul className="space-y-1">
                            {path.colleges.map((college, i) => (
                              <li key={i} className="text-sm text-gray-600">• {college}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">💼 Career Options</h5>
                          <ul className="space-y-1">
                            {path.jobs.map((job, i) => (
                              <li key={i} className="text-sm text-gray-600">• {job}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">💰 Salary Range</h5>
                          <Badge className="bg-green-100 text-green-800">{path.salary}</Badge>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        {/* Scholarships */}
        <Card className="border-0 shadow-xl rounded-3xl mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
              <Award className="w-6 h-6 mr-2 text-yellow-500" />
              Scholarship Opportunities
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {scholarships.map((scholarship, index) => (
                <Card key={index} className="border border-yellow-200 bg-yellow-50 rounded-2xl">
                  <CardContent className="p-4">
                    <h4 className="font-bold text-gray-900 mb-2">{scholarship.name}</h4>
                    <div className="text-lg font-semibold text-yellow-600 mb-2">{scholarship.amount}</div>
                    <p className="text-sm text-gray-600">{scholarship.eligibility}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Roadmap */}
        <Card className="border-0 shadow-xl rounded-3xl mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
              <Calendar className="w-6 h-6 mr-2 text-green-500" />
              Your Action Roadmap
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-6">
              {roadmap.map((phase, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg text-gray-900 mb-2">{phase.phase}</h4>
                    <ul className="space-y-1">
                      {phase.tasks.map((task, i) => (
                        <li key={i} className="text-gray-600 flex items-center">
                          <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Motivational Quote */}
        <Card className="border-0 shadow-xl rounded-3xl bg-gradient-to-r from-purple-500 to-blue-500 text-white">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">💫 Your Inspiration</h3>
            <blockquote className="text-xl italic mb-4">
              "The future belongs to those who believe in the beauty of their dreams. Your unique combination of analytical thinking and creativity makes you perfect for the tech world. Keep coding, keep dreaming!"
            </blockquote>
            <p className="font-semibold">- PANGEA Career Circle AI Mentor</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ReportViewer;
