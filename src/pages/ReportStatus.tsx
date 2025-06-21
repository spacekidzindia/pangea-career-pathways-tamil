
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useLanguage } from '@/contexts/LanguageContext';
import { Search, Download, MessageCircle, Clock, CheckCircle } from 'lucide-react';

const ReportStatus = () => {
  const { t } = useLanguage();
  const [searchData, setSearchData] = useState({ name: '', whatsapp: '' });
  const [searchResult, setSearchResult] = useState<'ready' | 'pending' | null>(null);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    
    // Simulate search - in real app, this would call an API
    setTimeout(() => {
      // Mock logic: if name contains "test", show ready, otherwise pending
      const isReady = searchData.name.toLowerCase().includes('test');
      setSearchResult(isReady ? 'ready' : 'pending');
      setIsSearching(false);
    }, 1000);
  };

  const handleDownload = () => {
    // In real app, this would download the actual PDF
    window.open('/sample-career-report.pdf', '_blank');
  };

  const handleWhatsAppShare = () => {
    const text = `Check out my personalized career report from PANGEA Career Circle! 🎯\n\nDiscover your perfect career path: https://pangeacareercircle.com/report/sample`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            📄 {t('status.title')}
          </h1>
          <p className="text-lg text-gray-600">
            Enter your details to check if your career report is ready
          </p>
        </div>

        <Card className="border-0 shadow-xl rounded-3xl">
          <CardHeader className="bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-t-3xl">
            <CardTitle className="text-2xl font-bold text-center">
              Report Status Checker 🔍
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSearch} className="space-y-6 mb-8">
              <div>
                <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  value={searchData.name}
                  onChange={(e) => setSearchData(prev => ({ ...prev, name: e.target.value }))}
                  className="rounded-xl border-blue-200 focus:border-blue-400"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="whatsapp" className="text-sm font-medium text-gray-700">
                  WhatsApp Number *
                </Label>
                <Input
                  id="whatsapp"
                  value={searchData.whatsapp}
                  onChange={(e) => setSearchData(prev => ({ ...prev, whatsapp: e.target.value }))}
                  className="rounded-xl border-blue-200 focus:border-blue-400"
                  placeholder="+91 98765 43210"
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={isSearching}
                className="w-full bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {isSearching ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Checking...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <Search className="w-5 h-5 mr-2" />
                    {t('status.check')}
                  </div>
                )}
              </Button>
            </form>

            {/* Search Results */}
            {searchResult && (
              <div className="space-y-4">
                {searchResult === 'ready' ? (
                  <Card className="border-green-200 bg-green-50 rounded-2xl">
                    <CardContent className="p-6">
                      <div className="text-center space-y-4">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                          <CheckCircle className="w-8 h-8 text-green-600" />
                        </div>
                        <h3 className="text-xl font-bold text-green-800">
                          {t('status.ready')}
                        </h3>
                        <p className="text-green-700">
                          Your personalized career report has been generated and is ready for download!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                          <Button
                            onClick={handleDownload}
                            className="bg-green-600 hover:bg-green-700 text-white rounded-xl"
                          >
                            <Download className="w-4 h-4 mr-2" />
                            {t('report.download')}
                          </Button>
                          <Button
                            onClick={handleWhatsAppShare}
                            variant="outline"
                            className="border-green-600 text-green-600 hover:bg-green-50 rounded-xl"
                          >
                            <MessageCircle className="w-4 h-4 mr-2" />
                            {t('report.share')}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  <Card className="border-orange-200 bg-orange-50 rounded-2xl">
                    <CardContent className="p-6">
                      <div className="text-center space-y-4">
                        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                          <Clock className="w-8 h-8 text-orange-600" />
                        </div>
                        <h3 className="text-xl font-bold text-orange-800">
                          {t('status.pending')}
                        </h3>
                        <p className="text-orange-700">
                          Our AI is working hard to create your personalized career report. You'll receive it within 24 hours via WhatsApp.
                        </p>
                        <div className="bg-white rounded-xl p-4 border border-orange-200">
                          <h4 className="font-semibold text-orange-800 mb-2">While you wait:</h4>
                          <ul className="text-sm text-orange-700 space-y-1 text-left">
                            <li>• Follow us on social media for career tips</li>
                            <li>• Join our WhatsApp community for student support</li>
                            <li>• Explore scholarship opportunities</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            )}

            {/* Help Section */}
            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-4">
              <h4 className="font-semibold text-blue-800 mb-2">Need Help? 🤝</h4>
              <p className="text-sm text-blue-700 mb-3">
                Can't find your report or have questions? We're here to help!
              </p>
              <Button
                onClick={() => window.open('https://wa.me/919876543210?text=Hi! I need help finding my career report.', '_blank')}
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 rounded-xl"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Chat with Support
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ReportStatus;
