import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { User, MapPin, Code, Briefcase, Brain, CheckCircle, Clock, Star } from "lucide-react";
import { toast } from "sonner";

export const StudentDashboard = () => {
  const [profile, setProfile] = useState({
    name: "Priya Sharma",
    location: "Jaipur, Rajasthan",
    category: "OBC",
    skills: ["Python", "Data Analysis", "Machine Learning", "React"],
    preferences: {
      sector: "Technology",
      location: "Remote/Hybrid",
      duration: "6 months"
    }
  });

  const [matches, setMatches] = useState([
    {
      id: 1,
      company: "TechCorp India",
      position: "AI/ML Intern",
      location: "Bangalore (Remote)",
      match: 94,
      sector: "Technology",
      skills: ["Python", "Machine Learning", "Data Analysis"],
      status: "recommended",
      diversity_boost: true
    },
    {
      id: 2,
      company: "DataSolutions Pvt Ltd",
      position: "Data Science Intern",
      location: "Mumbai (Hybrid)",
      match: 87,
      sector: "Analytics",
      skills: ["Python", "SQL", "Statistics"],
      status: "available",
      diversity_boost: false
    },
    {
      id: 3,
      company: "InnovateX Labs",
      position: "Full Stack Developer Intern",
      location: "Delhi NCR",
      match: 82,
      sector: "Technology",
      skills: ["React", "Node.js", "JavaScript"],
      status: "applied",
      diversity_boost: true
    }
  ]);

  const handleApply = (matchId: number) => {
    setMatches(matches.map(match => 
      match.id === matchId 
        ? { ...match, status: "applied" }
        : match
    ));
    toast.success("Application submitted successfully!");
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
          <User className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">Student Dashboard</h1>
          <p className="text-muted-foreground">AI-powered internship matching based on your profile</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Profile Section */}
        <div className="space-y-6">
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5 text-primary" />
                Your Profile
              </CardTitle>
              <CardDescription>Complete your profile for better matches</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Full Name</Label>
                <Input value={profile.name} className="mt-1" />
              </div>
              
              <div>
                <Label>Location</Label>
                <div className="flex items-center gap-2 mt-1">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <Input value={profile.location} />
                </div>
              </div>

              <div>
                <Label>Category</Label>
                <Select value={profile.category}>
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="General">General</SelectItem>
                    <SelectItem value="OBC">OBC</SelectItem>
                    <SelectItem value="SC">SC</SelectItem>
                    <SelectItem value="ST">ST</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Skills</Label>
                <div className="flex flex-wrap gap-2 mt-2">
                  {profile.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="bg-primary/10 text-primary">
                      <Code className="w-3 h-3 mr-1" />
                      {skill}
                    </Badge>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="mt-2 w-full">
                  Add More Skills
                </Button>
              </div>

              <div className="pt-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Profile Completeness</span>
                  <span className="text-sm text-muted-foreground">85%</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>
            </CardContent>
          </Card>

          {/* AI Insights */}
          <Card className="border-ai/20 bg-gradient-to-b from-ai/5 to-transparent">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="w-5 h-5 text-ai" />
                AI Insights
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-success/10 rounded-lg border border-success/20">
                <CheckCircle className="w-5 h-5 text-success mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Diversity Advantage</p>
                  <p className="text-xs text-muted-foreground">Your background adds value to company diversity goals</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 bg-primary/10 rounded-lg border border-primary/20">
                <Star className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm font-medium">High Match Potential</p>
                  <p className="text-xs text-muted-foreground">Your ML skills are in high demand this quarter</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Matches Section */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-primary" />
                  AI-Recommended Matches
                </CardTitle>
                <Badge className="bg-gradient-primary text-white">
                  {matches.length} Found
                </Badge>
              </div>
              <CardDescription>
                Matches ranked by AI algorithm considering skills, location, and diversity factors
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Match Cards */}
          <div className="space-y-4">
            {matches.map((match) => (
              <Card key={match.id} className="hover:shadow-card transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-semibold">{match.position}</h3>
                        {match.diversity_boost && (
                          <Badge className="bg-success/10 text-success border-success/20">
                            Diversity+
                          </Badge>
                        )}
                      </div>
                      <p className="text-muted-foreground">{match.company}</p>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        {match.location}
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{match.match}%</div>
                      <div className="text-xs text-muted-foreground">Match Score</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <Label className="text-sm text-muted-foreground">Required Skills</Label>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {match.skills.map((skill, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-3">
                      <div className="flex items-center gap-2">
                        {match.status === "recommended" && (
                          <Badge className="bg-primary/10 text-primary">
                            <Star className="w-3 h-3 mr-1" />
                            Recommended
                          </Badge>
                        )}
                        {match.status === "applied" && (
                          <Badge className="bg-success/10 text-success">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            Applied
                          </Badge>
                        )}
                        {match.status === "available" && (
                          <Badge variant="outline">
                            <Clock className="w-3 h-3 mr-1" />
                            Available
                          </Badge>
                        )}
                      </div>
                      
                      <Button 
                        size="sm"
                        onClick={() => handleApply(match.id)}
                        disabled={match.status === "applied"}
                        className="bg-gradient-primary hover:shadow-ai"
                      >
                        {match.status === "applied" ? "Applied" : "Apply Now"}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};