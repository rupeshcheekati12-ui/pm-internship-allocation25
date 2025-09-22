import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, Zap, Users, Building2, ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-ai/10 rounded-full blur-3xl" />
      
      <div className="container relative">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <Badge className="mb-6 bg-gradient-primary text-white border-0 px-6 py-2 text-sm font-medium">
            <Brain className="w-4 h-4 mr-2" />
            AI-Powered Hackathon Solution
          </Badge>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Smart Allocation
            </span>
            <br />
            <span className="text-foreground">
              Engine for PM Internships
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Revolutionary AI system that matches thousands of students with perfect internship opportunities, 
            ensuring diversity, optimal placement, and industry capacity optimization.
          </p>
          
          {/* Key Features */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="flex items-center gap-2 bg-card border rounded-full px-4 py-2 shadow-card">
              <div className="w-2 h-2 bg-success rounded-full" />
              <span className="text-sm font-medium">Skills-based Matching</span>
            </div>
            <div className="flex items-center gap-2 bg-card border rounded-full px-4 py-2 shadow-card">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span className="text-sm font-medium">Diversity Optimization</span>
            </div>
            <div className="flex items-center gap-2 bg-card border rounded-full px-4 py-2 shadow-card">
              <div className="w-2 h-2 bg-ai rounded-full" />
              <span className="text-sm font-medium">Real-time Analytics</span>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary hover:shadow-ai text-white border-0 px-8">
              <Zap className="w-5 h-5 mr-2" />
              Experience AI Demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/5 px-8">
              <Users className="w-5 h-5 mr-2" />
              Student Dashboard
            </Button>
            <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/5 px-8">
              <Building2 className="w-5 h-5 mr-2" />
              Company Portal
            </Button>
          </div>
          
          {/* Live Demo Indicator */}
          <div className="mt-12 flex items-center justify-center gap-2 text-muted-foreground">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
            <span className="text-sm">Live Interactive Demo Available</span>
          </div>
        </div>
      </div>
    </section>
  );
};