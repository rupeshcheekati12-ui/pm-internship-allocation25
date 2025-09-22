import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Building2, Users, MapPin, Briefcase, Brain, Plus, Eye, CheckCircle, Clock } from "lucide-react";
import { toast } from "sonner";

export const CompanyDashboard = () => {
  const [company] = useState({
    name: "TechCorp India",
    sector: "Technology",
    location: "Bangalore, Karnataka",
    size: "500-1000 employees",
    diversity_commitment: "High"
  });

  const [internships, setInternships] = useState([
    {
      id: 1,
      title: "AI/ML Engineering Intern",
      department: "Engineering",
      skills: ["Python", "Machine Learning", "TensorFlow", "Data Analysis"],
      location: "Bangalore (Remote)",
      duration: "6 months",
      stipend: "₹25,000/month",
      positions: 3,
      applications: 47,
      matches: 12,
      status: "active",
      diversity_target: 60
    },
    {
      id: 2,
      title: "Full Stack Developer Intern",
      department: "Engineering",
      skills: ["React", "Node.js", "JavaScript", "MongoDB"],
      location: "Bangalore (Hybrid)",
      duration: "4 months",
      stipend: "₹20,000/month",
      positions: 2,
      applications: 23,
      matches: 8,
      status: "active",
      diversity_target: 50
    },
    {
      id: 3,
      title: "Product Management Intern",
      department: "Product",
      skills: ["Product Strategy", "Market Research", "Analytics"],
      location: "Remote",
      duration: "6 months",
      stipend: "₹30,000/month",
      positions: 1,
      applications: 15,
      matches: 5,
      status: "draft",
      diversity_target: 70
    }
  ]);

  const [candidates] = useState([
    {
      id: 1,
      name: "Priya Sharma",
      location: "Jaipur, Rajasthan",
      category: "OBC",
      skills: ["Python", "Machine Learning", "Data Analysis"],
      match: 94,
      internship: "AI/ML Engineering Intern",
      rural_area: true,
      first_internship: true
    },
    {
      id: 2,
      name: "Arjun Patel",
      location: "Ahmedabad, Gujarat",
      category: "General",
      skills: ["React", "JavaScript", "Node.js"],
      match: 87,
      internship: "Full Stack Developer Intern",
      rural_area: false,
      first_internship: true
    },
    {
      id: 3,
      name: "Sneha Reddy",
      location: "Warangal, Telangana",
      category: "SC",
      skills: ["Product Strategy", "Market Research"],
      match: 91,
      internship: "Product Management Intern",
      rural_area: true,
      first_internship: false
    }
  ]);

  const publishInternship = (id: number) => {
    setInternships(internships.map(internship => 
      internship.id === id 
        ? { ...internship, status: "active" }
        : internship
    ));
    toast.success("Internship published successfully!");
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
          <Building2 className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">Company Portal</h1>
          <p className="text-muted-foreground">Manage internships and review AI-matched candidates</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Company Info */}
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building2 className="w-5 h-5 text-primary" />
              Company Profile
            </CardTitle>
            <CardDescription>Your organization details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label className="text-sm text-muted-foreground">Company Name</Label>
              <p className="font-medium">{company.name}</p>
            </div>
            
            <div>
              <Label className="text-sm text-muted-foreground">Sector</Label>
              <p className="font-medium">{company.sector}</p>
            </div>

            <div>
              <Label className="text-sm text-muted-foreground">Location</Label>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                <p className="font-medium">{company.location}</p>
              </div>
            </div>

            <div>
              <Label className="text-sm text-muted-foreground">Company Size</Label>
              <p className="font-medium">{company.size}</p>
            </div>

            <div className="pt-4 border-t">
              <div className="flex items-center justify-between mb-2">
                <Label className="text-sm text-muted-foreground">Diversity Score</Label>
                <Badge className="bg-success/10 text-success">Excellent</Badge>
              </div>
              <Progress value={85} className="h-2" />
              <p className="text-xs text-muted-foreground mt-1">Based on past hiring practices</p>
            </div>
          </CardContent>
        </Card>

        {/* Internships & Candidates */}
        <div className="lg:col-span-2 space-y-6">
          {/* Active Internships */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-primary" />
                  Internship Positions
                </CardTitle>
                <Button size="sm" className="bg-gradient-primary hover:shadow-ai">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Position
                </Button>
              </div>
              <CardDescription>Manage your internship opportunities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {internships.map((internship) => (
                  <Card key={internship.id} className="border-l-4 border-l-primary/30">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-semibold">{internship.title}</h4>
                            <Badge 
                              variant={internship.status === "active" ? "default" : "secondary"}
                              className={internship.status === "active" ? "bg-success" : ""}
                            >
                              {internship.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{internship.department} • {internship.duration}</p>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                            <MapPin className="w-3 h-3" />
                            {internship.location}
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-primary">{internship.stipend}</p>
                          <p className="text-xs text-muted-foreground">{internship.positions} positions</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4 mb-3">
                        <div className="text-center p-2 bg-primary/5 rounded">
                          <p className="text-lg font-bold text-primary">{internship.applications}</p>
                          <p className="text-xs text-muted-foreground">Applications</p>
                        </div>
                        <div className="text-center p-2 bg-ai/5 rounded">
                          <p className="text-lg font-bold text-ai">{internship.matches}</p>
                          <p className="text-xs text-muted-foreground">AI Matches</p>
                        </div>
                        <div className="text-center p-2 bg-success/5 rounded">
                          <p className="text-lg font-bold text-success">{internship.diversity_target}%</p>
                          <p className="text-xs text-muted-foreground">Diversity Target</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-1">
                          {internship.skills.slice(0, 3).map((skill, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                          {internship.skills.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{internship.skills.length - 3}
                            </Badge>
                          )}
                        </div>
                        
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Eye className="w-4 h-4 mr-1" />
                            View
                          </Button>
                          {internship.status === "draft" && (
                            <Button 
                              size="sm" 
                              onClick={() => publishInternship(internship.id)}
                              className="bg-gradient-primary hover:shadow-ai"
                            >
                              Publish
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* AI-Matched Candidates */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="w-5 h-5 text-ai" />
                AI-Recommended Candidates
              </CardTitle>
              <CardDescription>Top candidates matched by our AI algorithm</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {candidates.map((candidate) => (
                  <div key={candidate.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-card/50">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white font-semibold">
                        {candidate.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-medium">{candidate.name}</p>
                          {candidate.rural_area && (
                            <Badge className="bg-success/10 text-success text-xs">Rural Area</Badge>
                          )}
                          {candidate.first_internship && (
                            <Badge className="bg-primary/10 text-primary text-xs">First Internship</Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">{candidate.location} • {candidate.category}</p>
                        <p className="text-xs text-muted-foreground">{candidate.internship}</p>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-xl font-bold text-primary">{candidate.match}%</div>
                      <div className="flex gap-2 mt-1">
                        <Button size="sm" variant="outline">Review</Button>
                        <Button size="sm" className="bg-gradient-primary hover:shadow-ai">
                          <CheckCircle className="w-4 h-4 mr-1" />
                          Select
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};