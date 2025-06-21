
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Eye, Send, Download, Filter, Search, MoreHorizontal } from 'lucide-react';

const AdminDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [archetypeFilter, setArchetypeFilter] = useState('all');

  // Mock data for the admin dashboard
  const studentReports = [
    {
      id: 1,
      name: 'Priya Ramesh',
      whatsapp: '+91 98765 43210',
      school: 'DAV Public School, Chennai',
      subjects: 'PCM + Computer Science',
      archetype: 'Tech Innovator',
      reportSent: true,
      mentorBooked: false,
      submittedAt: '2024-01-15',
      lastUpdate: '2024-01-16'
    },
    {
      id: 2,
      name: 'Arjun Kumar',
      whatsapp: '+91 98765 43211',
      school: 'Kendriya Vidyalaya, Madurai',
      subjects: 'PCB',
      archetype: 'Healthcare Hero',
      reportSent: false,
      mentorBooked: true,
      submittedAt: '2024-01-14',
      lastUpdate: '2024-01-15'
    },
    {
      id: 3,
      name: 'Kavya Shankar',
      whatsapp: '+91 98765 43212',
      school: 'PSBB School, Coimbatore',
      subjects: 'Commerce + Economics',
      archetype: 'Business Leader',
      reportSent: true,
      mentorBooked: true,
      submittedAt: '2024-01-13',
      lastUpdate: '2024-01-14'
    },
    {
      id: 4,
      name: 'Ravi Patel',
      whatsapp: '+91 98765 43213',
      school: 'Zilla Panchayat High School, Salem',
      subjects: 'PCM',
      archetype: 'Problem Solver',
      reportSent: false,
      mentorBooked: false,
      submittedAt: '2024-01-12',
      lastUpdate: '2024-01-13'
    },
    {
      id: 5,
      name: 'Meera Krishnan',
      whatsapp: '+91 98765 43214',
      school: 'Holy Cross School, Trichy',
      subjects: 'Arts + Psychology',
      archetype: 'Creative Thinker',
      reportSent: true,
      mentorBooked: false,
      submittedAt: '2024-01-11',
      lastUpdate: '2024-01-12'
    }
  ];

  const stats = {
    totalSubmissions: studentReports.length,
    reportsGenerated: studentReports.filter(s => s.reportSent).length,
    mentorBookings: studentReports.filter(s => s.mentorBooked).length,
    pendingReports: studentReports.filter(s => !s.reportSent).length
  };

  const filteredReports = studentReports.filter(report => {
    const matchesSearch = report.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.school.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || 
                         (statusFilter === 'sent' && report.reportSent) ||
                         (statusFilter === 'pending' && !report.reportSent);
    const matchesArchetype = archetypeFilter === 'all' || report.archetype === archetypeFilter;
    
    return matchesSearch && matchesStatus && matchesArchetype;
  });

  const handleViewDraft = (studentId: number) => {
    // In real app, this would open Google Doc or report draft
    window.open(`https://docs.google.com/document/d/sample-report-${studentId}`, '_blank');
  };

  const handleMarkAsSent = (studentId: number) => {
    // In real app, this would update the database
    console.log(`Marking report as sent for student ${studentId}`);
  };

  const handleSendReminder = (studentId: number) => {
    // In real app, this would send WhatsApp reminder
    const student = studentReports.find(s => s.id === studentId);
    window.open(`https://wa.me/${student?.whatsapp}?text=Hi ${student?.name}! Your career report is ready. Check it out here: [link]`, '_blank');
  };

  const handleExportCSV = () => {
    // In real app, this would generate and download CSV
    const csvContent = "data:text/csv;charset=utf-8," + 
      "Name,WhatsApp,School,Subjects,Archetype,Report Sent,Mentor Booked,Submitted At\n" +
      studentReports.map(r => 
        `${r.name},${r.whatsapp},${r.school},${r.subjects},${r.archetype},${r.reportSent},${r.mentorBooked},${r.submittedAt}`
      ).join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "pangea-student-reports.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen py-12 px-4 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            🔧 Admin Dashboard - Report Review & Delivery
          </h1>
          <p className="text-lg text-gray-600">
            Manage student reports, track progress, and coordinate mentor bookings
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 shadow-lg rounded-2xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Submissions</p>
                  <p className="text-3xl font-bold text-gray-900">{stats.totalSubmissions}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">📝</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg rounded-2xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Reports Generated</p>
                  <p className="text-3xl font-bold text-green-600">{stats.reportsGenerated}</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">✅</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg rounded-2xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Mentor Bookings</p>
                  <p className="text-3xl font-bold text-purple-600">{stats.mentorBookings}</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">👨‍🏫</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg rounded-2xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Pending Reports</p>
                  <p className="text-3xl font-bold text-orange-600">{stats.pendingReports}</p>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">⏳</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Search */}
        <Card className="border-0 shadow-lg rounded-2xl mb-8">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-900">Filters & Actions</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4 items-end">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">Search Students</label>
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                  <Input
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search by name or school..."
                    className="pl-10 rounded-xl"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-40 rounded-xl">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="sent">Report Sent</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Archetype</label>
                <Select value={archetypeFilter} onValueChange={setArchetypeFilter}>
                  <SelectTrigger className="w-48 rounded-xl">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Archetypes</SelectItem>
                    <SelectItem value="Tech Innovator">Tech Innovator</SelectItem>
                    <SelectItem value="Healthcare Hero">Healthcare Hero</SelectItem>
                    <SelectItem value="Business Leader">Business Leader</SelectItem>
                    <SelectItem value="Problem Solver">Problem Solver</SelectItem>
                    <SelectItem value="Creative Thinker">Creative Thinker</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button onClick={handleExportCSV} className="bg-green-600 hover:bg-green-700 rounded-xl">
                <Download className="w-4 h-4 mr-2" />
                Export CSV
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Students Table */}
        <Card className="border-0 shadow-lg rounded-2xl">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-900">
              Student Reports ({filteredReports.length})
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student Details</TableHead>
                  <TableHead>Academic Info</TableHead>
                  <TableHead>Archetype</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredReports.map((student) => (
                  <TableRow key={student.id}>
                    <TableCell>
                      <div>
                        <p className="font-semibold text-gray-900">{student.name}</p>
                        <p className="text-sm text-gray-600">{student.whatsapp}</p>
                        <p className="text-xs text-gray-500">{student.school}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <p className="text-sm text-gray-700">{student.subjects}</p>
                      <p className="text-xs text-gray-500">Submitted: {student.submittedAt}</p>
                    </TableCell>
                    <TableCell>
                      <Badge className="bg-purple-100 text-purple-700">
                        {student.archetype}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <Badge className={student.reportSent ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"}>
                          {student.reportSent ? "✅ Sent" : "⏳ Pending"}
                        </Badge>
                        {student.mentorBooked && (
                          <Badge className="bg-blue-100 text-blue-700 block">
                            👨‍🏫 Mentor Booked
                          </Badge>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button
                          onClick={() => handleViewDraft(student.id)}
                          size="sm"
                          variant="outline"
                          className="rounded-lg"
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                        {!student.reportSent && (
                          <Button
                            onClick={() => handleMarkAsSent(student.id)}
                            size="sm"
                            className="bg-green-600 hover:bg-green-700 rounded-lg"
                          >
                            <Send className="w-4 h-4" />
                          </Button>
                        )}
                        <Button
                          onClick={() => handleSendReminder(student.id)}
                          size="sm"
                          variant="outline"
                          className="rounded-lg"
                        >
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
