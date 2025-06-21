
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import { Send, Shield } from 'lucide-react';

const Form = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    board: '',
    subjects: '',
    hobbies: '',
    careerInterest: '',
    dreamJob: '',
    challenges: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Form Submitted Successfully! 🎉",
        description: "We'll generate your personalized career report and send it to your WhatsApp within 24 hours.",
      });
      setIsSubmitting(false);
      
      // Reset form
      setFormData({
        name: '',
        whatsapp: '',
        board: '',
        subjects: '',
        hobbies: '',
        careerInterest: '',
        dreamJob: '',
        challenges: ''
      });
    }, 2000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            📝 {t('form.title')}
          </h1>
          <p className="text-lg text-gray-600">
            This will help us create your personalized AI career report
          </p>
        </div>

        <Card className="border-0 shadow-xl rounded-3xl">
          <CardHeader className="bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-t-3xl">
            <CardTitle className="text-2xl font-bold text-center">
              Career Discovery Form ✨
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Information */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 border-b border-purple-100 pb-2">
                  👤 Basic Information
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                      {t('form.name')} *
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="rounded-xl border-purple-200 focus:border-purple-400"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="whatsapp" className="text-sm font-medium text-gray-700">
                      {t('form.whatsapp')} *
                    </Label>
                    <Input
                      id="whatsapp"
                      value={formData.whatsapp}
                      onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                      className="rounded-xl border-purple-200 focus:border-purple-400"
                      placeholder="+91 98765 43210"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Academic Information */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 border-b border-purple-100 pb-2">
                  🎓 Academic Details
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="board" className="text-sm font-medium text-gray-700">
                      {t('form.board')} *
                    </Label>
                    <Select onValueChange={(value) => handleInputChange('board', value)}>
                      <SelectTrigger className="rounded-xl border-purple-200">
                        <SelectValue placeholder="Select your board" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tamil-nadu">Tamil Nadu State Board</SelectItem>
                        <SelectItem value="cbse">CBSE</SelectItem>
                        <SelectItem value="icse">ICSE</SelectItem>
                        <SelectItem value="ib">International Baccalaureate (IB)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="subjects" className="text-sm font-medium text-gray-700">
                      {t('form.subjects')} *
                    </Label>
                    <Input
                      id="subjects"
                      value={formData.subjects}
                      onChange={(e) => handleInputChange('subjects', e.target.value)}
                      className="rounded-xl border-purple-200 focus:border-purple-400"
                      placeholder="e.g., Physics, Chemistry, Maths"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Interests & Aspirations */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 border-b border-purple-100 pb-2">
                  💫 Interests & Dreams
                </h3>
                
                <div>
                  <Label htmlFor="hobbies" className="text-sm font-medium text-gray-700">
                    {t('form.hobbies')} *
                  </Label>
                  <Textarea
                    id="hobbies"
                    value={formData.hobbies}
                    onChange={(e) => handleInputChange('hobbies', e.target.value)}
                    className="rounded-xl border-purple-200 focus:border-purple-400"
                    placeholder="Tell us about your hobbies, activities you enjoy, and skills you've developed..."
                    rows={3}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="careerInterest" className="text-sm font-medium text-gray-700">
                    Career Areas of Interest
                  </Label>
                  <Textarea
                    id="careerInterest"
                    value={formData.careerInterest}
                    onChange={(e) => handleInputChange('careerInterest', e.target.value)}
                    className="rounded-xl border-purple-200 focus:border-purple-400"
                    placeholder="What fields excite you? Technology, Healthcare, Arts, Business, etc."
                    rows={2}
                  />
                </div>

                <div>
                  <Label htmlFor="dreamJob" className="text-sm font-medium text-gray-700">
                    Dream Job or Role (if any)
                  </Label>
                  <Input
                    id="dreamJob"
                    value={formData.dreamJob}
                    onChange={(e) => handleInputChange('dreamJob', e.target.value)}
                    className="rounded-xl border-purple-200 focus:border-purple-400"
                    placeholder="e.g., Software Engineer, Doctor, Teacher, Entrepreneur"
                  />
                </div>

                <div>
                  <Label htmlFor="challenges" className="text-sm font-medium text-gray-700">
                    Any Concerns or Challenges?
                  </Label>
                  <Textarea
                    id="challenges"
                    value={formData.challenges}
                    onChange={(e) => handleInputChange('challenges', e.target.value)}
                    className="rounded-xl border-purple-200 focus:border-purple-400"
                    placeholder="Share any concerns about career choices, family expectations, or financial constraints..."
                    rows={2}
                  />
                </div>
              </div>

              {/* Disclaimer */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-start space-x-3">
                <Shield className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-green-800">
                  <strong>Privacy Guarantee:</strong> {t('form.disclaimer')} Your data is encrypted and never shared with third parties.
                </p>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Generating Your Report...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <Send className="w-5 h-5 mr-2" />
                    {t('form.submit')}
                  </div>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Form;
