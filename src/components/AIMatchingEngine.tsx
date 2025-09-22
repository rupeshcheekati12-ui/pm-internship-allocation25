import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Brain, Zap, Users, Building2, Target, TrendingUp, CheckCircle, AlertTriangle } from "lucide-react";
import { toast } from "sonner";

export const AIMatchingEngine = () => {
  const [isMatching, setIsMatching] = useState(false);
  const [matchingStep, setMatchingStep] = useState(0);
  const [results, setResults] = useState<any>(null);

  const matchingSteps = [
    { title: "Loading Student Profiles", progress: 20 },
    { title: "Analyzing Skills & Preferences", progress: 40 },
    { title: "Processing Company Requirements", progress: 60 },
    { title: "Applying Diversity Algorithms", progress: 80 },
    { title: "Generating Optimal Matches", progress: 100 }
  ];

  const runAIMatching = async () => {
    setIsMatching(true);
    setResults(null);
    
    // Simulate AI processing steps
    for (let i = 0; i < matchingSteps.length; i++) {
      setMatchingStep(i);
      await new Promise(resolve => setTimeout(resolve, 1200));
    }

    // Generate results
    setResults({
      totalStudents: 12547,
      totalInternships: 3421,
      successfulMatches: 11834,
      matchAccuracy: 94.8,
      diversityScore: 87.2,
      processingTime: 2.3,
      categories: {
        rural: 42.3,
        obc: 31.2,
        sc: 15.8,
        st: 8.7,
        general: 2.0
      },
      sectors: [
        { name: "Technology", matches: 4230, accuracy: 96.2 },
        { name: "Manufacturing", matches: 3210, accuracy: 93.8 },
        { name: "Healthcare", matches: 2140, accuracy: 95.1 },
        { name: "Finance", matches: 1890, accuracy: 92.5 },
        { name: "Education", matches: 364, accuracy: 89.3 }
      ]
    });

    setIsMatching(false);
    toast.success("AI matching completed successfully!");
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gradient-ai rounded-full flex items-center justify-center">
          <Brain className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">AI Matching Engine</h1>
          <p className="text-muted-foreground">Advanced algorithms for optimal internship allocation</p>
        </div>
      </div>

      {/* Control Panel */}
      <Card className="border-ai/20 bg-gradient-to-b from-ai/5 to-transparent">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-ai" />
            Matching Control Center
          </CardTitle>
          <CardDescription>
            Run the AI algorithm to match students with optimal internship opportunities
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <Button 
              onClick={runAIMatching} 
              disabled={isMatching}
              size="lg"
              className="bg-gradient-ai hover:shadow-ai"
            >
              {isMatching ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                  Processing...
                </>
              ) : (
                <>
                  <Brain className="w-5 h-5 mr-2" />
                  Run AI Matching
                </>
              )}
            </Button>
            
            {!isMatching && results && (
              <div className="flex items-center gap-2 text-success">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">Completed in {results.processingTime}s</span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Processing Steps */}
      {isMatching && (
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle>AI Processing Pipeline</CardTitle>
            <CardDescription>Real-time view of matching algorithm execution</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {matchingSteps.map((step, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    index <= matchingStep ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'
                  }`}>
                    {index < matchingStep ? (
                      <CheckCircle className="w-4 h-4" />
                    ) : index === matchingStep ? (
                      <div className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <span className="text-xs font-bold">{index + 1}</span>
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <p className={`font-medium ${index <= matchingStep ? 'text-primary' : 'text-muted-foreground'}`}>
                      {step.title}
                    </p>
                    {index === matchingStep && (
                      <Progress value={step.progress} className="h-1 mt-2" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Results Dashboard */}
      {results && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Overview Stats */}
          <Card className="border-success/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-success" />
                Matching Results
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-success">{results.successfulMatches.toLocaleString()}</div>
                <p className="text-sm text-muted-foreground">Successful Matches</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-primary/5 rounded">
                  <div className="text-xl font-bold text-primary">{results.matchAccuracy}%</div>
                  <div className="text-xs text-muted-foreground">Accuracy</div>
                </div>
                <div className="text-center p-3 bg-success/5 rounded">
                  <div className="text-xl font-bold text-success">{results.diversityScore}%</div>
                  <div className="text-xs text-muted-foreground">Diversity</div>
                </div>
              </div>

              <div className="pt-3 border-t">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Total Students</span>
                  <span className="font-medium">{results.totalStudents.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Total Internships</span>
                  <span className="font-medium">{results.totalInternships.toLocaleString()}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Diversity Breakdown */}
          <Card className="border-ai/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-ai" />
                Diversity Allocation
              </CardTitle>
              <CardDescription>Distribution across social categories</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {Object.entries(results.categories).map(([category, percentage]) => (
                <div key={category} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="capitalize font-medium">{category}</span>
                    <span className="text-muted-foreground">{percentage as number}%</span>
                  </div>
                  <Progress value={percentage as number} className="h-2" />
                </div>
              ))}
              
              <div className="pt-3 border-t">
                <Badge className="bg-success/10 text-success border-success/20 w-full justify-center">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  Diversity targets achieved
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Sector Performance */}
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-primary" />
                Sector Performance
              </CardTitle>
              <CardDescription>Matches by industry sector</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {results.sectors.map((sector: any, index: number) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-card/50 rounded">
                    <div>
                      <p className="font-medium text-sm">{sector.name}</p>
                      <p className="text-xs text-muted-foreground">{sector.matches} matches</p>
                    </div>
                    <Badge 
                      className={`text-xs ${
                        sector.accuracy >= 95 ? 'bg-success/10 text-success' : 
                        sector.accuracy >= 90 ? 'bg-primary/10 text-primary' : 
                        'bg-warning/10 text-warning'
                      }`}
                    >
                      {sector.accuracy}%
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Algorithm Details */}
      <Card className="border-muted">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            Algorithm Insights
          </CardTitle>
          <CardDescription>How our AI makes intelligent matching decisions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold">Matching Factors</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Skills Match</span>
                  <Badge variant="outline">40% weight</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Location Preference</span>
                  <Badge variant="outline">25% weight</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Diversity Factor</span>
                  <Badge variant="outline">20% weight</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Company Capacity</span>
                  <Badge variant="outline">15% weight</Badge>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Special Considerations</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span>Rural area representation boost</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span>First-time internship priority</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span>Social category balancing</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-warning" />
                  <span>Past participation penalty</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};