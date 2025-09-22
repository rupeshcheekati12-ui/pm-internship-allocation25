import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Users, Building2, Target, TrendingUp, Globe, Zap, Shield, CheckCircle } from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import { StudentDashboard } from "@/components/StudentDashboard";
import { CompanyDashboard } from "@/components/CompanyDashboard";
import { AIMatchingEngine } from "@/components/AIMatchingEngine";
import { AnalyticsDashboard } from "@/components/AnalyticsDashboard";

const Index = () => {
  const [activeView, setActiveView] = useState<"hero" | "student" | "company" | "matching" | "analytics">("hero");

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Matching",
      description: "Advanced algorithms consider skills, location, diversity metrics, and industry capacity"
    },
    {
      icon: Users,
      title: "Diversity & Inclusion",
      description: "Ensures representation from rural areas, different social categories, and aspirational districts"
    },
    {
      icon: Target,
      title: "Smart Allocation",
      description: "Optimizes placement based on student preferences, company needs, and past participation"
    },
    {
      icon: TrendingUp,
      title: "Real-time Analytics",
      description: "Track success rates, diversity metrics, and placement outcomes across regions"
    }
  ];

  const stats = [
    { label: "Students Registered", value: "50,000+", icon: Users },
    { label: "Companies Participating", value: "2,500+", icon: Building2 },
    { label: "Successful Matches", value: "45,000+", icon: Target },
    { label: "Match Accuracy", value: "94.8%", icon: CheckCircle }
  ];

  if (activeView !== "hero") {
    return (
      <div className="min-h-screen bg-background">
        <nav className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
          <div className="container flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Brain className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                PM Intern AI
              </span>
            </div>
            <div className="flex gap-2">
              <Button 
                variant={activeView === "student" ? "default" : "outline"} 
                size="sm"
                onClick={() => setActiveView("student")}
              >
                Student View
              </Button>
              <Button 
                variant={activeView === "company" ? "default" : "outline"} 
                size="sm"
                onClick={() => setActiveView("company")}
              >
                Company View
              </Button>
              <Button 
                variant={activeView === "matching" ? "default" : "outline"} 
                size="sm"
                onClick={() => setActiveView("matching")}
              >
                AI Engine
              </Button>
              <Button 
                variant={activeView === "analytics" ? "default" : "outline"} 
                size="sm"
                onClick={() => setActiveView("analytics")}
              >
                Analytics
              </Button>
              <Button variant="ghost" size="sm" onClick={() => setActiveView("hero")}>
                ← Back to Home
              </Button>
            </div>
          </div>
        </nav>
        
        <main className="container py-8">
          {activeView === "student" && <StudentDashboard />}
          {activeView === "company" && <CompanyDashboard />}
          {activeView === "matching" && <AIMatchingEngine />}
          {activeView === "analytics" && <AnalyticsDashboard />}
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection />

      {/* Navigation */}
      <div className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b">
        <div className="container flex items-center justify-center py-4">
          <div className="flex gap-2">
            <Button onClick={() => setActiveView("student")} className="bg-gradient-primary hover:shadow-ai">
              <Users className="w-4 h-4 mr-2" />
              Student Dashboard
            </Button>
            <Button onClick={() => setActiveView("company")} variant="outline" className="border-primary/20 hover:bg-primary/5">
              <Building2 className="w-4 h-4 mr-2" />
              Company Portal
            </Button>
            <Button onClick={() => setActiveView("matching")} className="bg-gradient-ai hover:shadow-ai">
              <Brain className="w-4 h-4 mr-2" />
              AI Engine Demo
            </Button>
            <Button onClick={() => setActiveView("analytics")} variant="outline" className="border-success/20 hover:bg-success/5">
              <TrendingUp className="w-4 h-4 mr-2" />
              Analytics
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              AI-Powered Solution
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Intelligent Internship Matching</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Revolutionizing the PM Internship Scheme with advanced AI algorithms that ensure optimal placements while promoting diversity and inclusion.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-ai transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <feature.icon className="w-10 h-10 text-primary mb-2" />
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-primary/20 bg-gradient-to-b from-primary/5 to-transparent">
                <CardContent className="pt-6">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-center">
        <div className="container">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Internship Allocation?</h2>
            <p className="text-xl mb-8 opacity-90">
              Experience the power of AI-driven matching that ensures every student finds the perfect internship opportunity.
            </p>
            <div className="flex gap-4 justify-center">
              <Button onClick={() => setActiveView("matching")} size="lg" className="bg-white text-primary hover:bg-white/90">
                <Zap className="w-5 h-5 mr-2" />
                Try AI Engine
              </Button>
              <Button onClick={() => setActiveView("student")} size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Users className="w-5 h-5 mr-2" />
                Student Portal
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t bg-card/30">
        <div className="container text-center text-muted-foreground">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Brain className="h-5 w-5 text-primary" />
            <span className="font-semibold">PM Internship AI Engine</span>
          </div>
          <p className="text-sm">Hackathon prototype demonstrating AI-powered internship allocation</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;