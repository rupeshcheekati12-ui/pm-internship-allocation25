import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TrendingUp, Users, Building2, Target, MapPin, Calendar, Award, AlertCircle } from "lucide-react";

export const AnalyticsDashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("last-month");
  const [selectedRegion, setSelectedRegion] = useState("all");

  const overallStats = {
    totalApplications: 50847,
    successfulPlacements: 45234,
    placementRate: 89.0,
    diversityScore: 87.2,
    companySatisfaction: 92.5,
    studentSatisfaction: 88.7
  };

  const regionalData = [
    { region: "North India", applications: 15234, placements: 13567, rate: 89.0, diversity: 85.2 },
    { region: "South India", applications: 18456, placements: 16892, rate: 91.5, diversity: 88.9 },
    { region: "West India", applications: 9876, placements: 8734, rate: 88.4, diversity: 86.7 },
    { region: "East India", applications: 4567, placements: 4021, rate: 88.0, diversity: 89.3 },
    { region: "Northeast", applications: 2714, placements: 2020, rate: 74.4, diversity: 92.1 }
  ];

  const categoryPerformance = [
    { category: "General", count: 12456, percentage: 27.5, trend: "+2.3%" },
    { category: "OBC", count: 15234, percentage: 33.7, trend: "+4.1%" },
    { category: "SC", count: 8765, percentage: 19.4, trend: "+3.2%" },
    { category: "ST", count: 4321, percentage: 9.6, trend: "+5.8%" },
    { category: "EWS", count: 4458, percentage: 9.8, trend: "+1.9%" }
  ];

  const sectorInsights = [
    { sector: "Technology", placements: 18234, satisfaction: 94.2, avgStipend: "₹28,500", growth: "+15.3%" },
    { sector: "Manufacturing", placements: 12456, satisfaction: 91.8, avgStipend: "₹22,000", growth: "+8.7%" },
    { sector: "Healthcare", placements: 7890, satisfaction: 89.4, avgStipend: "₹25,000", growth: "+12.1%" },
    { sector: "Finance", placements: 4321, satisfaction: 93.7, avgStipend: "₹30,000", growth: "+6.9%" },
    { sector: "Education", placements: 2333, satisfaction: 87.2, avgStipend: "₹18,000", growth: "+4.2%" }
  ];

  const monthlyTrends = [
    { month: "Jan", applications: 4234, placements: 3789, rate: 89.5 },
    { month: "Feb", applications: 5123, placements: 4567, rate: 89.1 },
    { month: "Mar", applications: 6789, placements: 6123, rate: 90.2 },
    { month: "Apr", applications: 8456, placements: 7534, rate: 89.1 },
    { month: "May", applications: 7234, placements: 6456, rate: 89.2 },
    { month: "Jun", applications: 9012, placements: 8056, rate: 89.4 }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
            <p className="text-muted-foreground">Comprehensive insights into PM Internship Scheme performance</p>
          </div>
        </div>
        
        <div className="flex gap-3">
          <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="last-week">Last Week</SelectItem>
              <SelectItem value="last-month">Last Month</SelectItem>
              <SelectItem value="last-quarter">Last Quarter</SelectItem>
              <SelectItem value="last-year">Last Year</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={selectedRegion} onValueChange={setSelectedRegion}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Regions</SelectItem>
              <SelectItem value="north">North India</SelectItem>
              <SelectItem value="south">South India</SelectItem>
              <SelectItem value="west">West India</SelectItem>
              <SelectItem value="east">East India</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Key Performance Indicators */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="border-success/20 bg-gradient-to-b from-success/5 to-transparent">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Placements</p>
                <p className="text-3xl font-bold text-success">{overallStats.successfulPlacements.toLocaleString()}</p>
                <Badge className="bg-success/10 text-success border-success/20 mt-2">
                  ↗ +12.3% from last period
                </Badge>
              </div>
              <Target className="w-10 h-10 text-success/70" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-primary/20 bg-gradient-to-b from-primary/5 to-transparent">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Placement Rate</p>
                <p className="text-3xl font-bold text-primary">{overallStats.placementRate}%</p>
                <Badge className="bg-primary/10 text-primary border-primary/20 mt-2">
                  ↗ +2.1% from target
                </Badge>
              </div>
              <Award className="w-10 h-10 text-primary/70" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-ai/20 bg-gradient-to-b from-ai/5 to-transparent">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Diversity Score</p>
                <p className="text-3xl font-bold text-ai">{overallStats.diversityScore}%</p>
                <Badge className="bg-ai/10 text-ai border-ai/20 mt-2">
                  ↗ Excellent rating
                </Badge>
              </div>
              <Users className="w-10 h-10 text-ai/70" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Regional Performance */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-primary" />
            Regional Performance Analysis
          </CardTitle>
          <CardDescription>Breakdown of applications and placements across different regions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {regionalData.map((region, index) => (
              <div key={index} className="grid grid-cols-5 gap-4 p-4 border rounded-lg hover:bg-card/50">
                <div>
                  <p className="font-medium">{region.region}</p>
                  <p className="text-sm text-muted-foreground">{region.applications.toLocaleString()} applications</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-success">{region.placements.toLocaleString()}</p>
                  <p className="text-xs text-muted-foreground">Placements</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-primary">{region.rate}%</p>
                  <p className="text-xs text-muted-foreground">Success Rate</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-ai">{region.diversity}%</p>
                  <p className="text-xs text-muted-foreground">Diversity</p>
                </div>
                <div className="flex items-center">
                  <Progress value={region.rate} className="flex-1" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Category Distribution */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5 text-ai" />
              Social Category Distribution
            </CardTitle>
            <CardDescription>Representation across different social categories</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {categoryPerformance.map((category, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{category.category}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">{category.count.toLocaleString()}</span>
                      <Badge className={`text-xs ${
                        category.trend.startsWith('+') ? 'bg-success/10 text-success' : 'bg-destructive/10 text-destructive'
                      }`}>
                        {category.trend}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Progress value={category.percentage} className="flex-1 h-2" />
                    <span className="text-sm font-medium w-12">{category.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Sector Performance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building2 className="w-5 h-5 text-primary" />
              Sector-wise Insights
            </CardTitle>
            <CardDescription>Performance metrics across different industry sectors</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {sectorInsights.map((sector, index) => (
                <div key={index} className="p-3 border rounded-lg hover:bg-card/30">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-medium">{sector.sector}</p>
                      <p className="text-sm text-muted-foreground">{sector.placements.toLocaleString()} placements</p>
                    </div>
                    <Badge className="bg-success/10 text-success text-xs">
                      {sector.growth}
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Satisfaction: </span>
                      <span className="font-medium">{sector.satisfaction}%</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Avg Stipend: </span>
                      <span className="font-medium">{sector.avgStipend}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Monthly Trends */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary" />
            Monthly Performance Trends
          </CardTitle>
          <CardDescription>Application and placement trends over the past 6 months</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-6 gap-4">
            {monthlyTrends.map((month, index) => (
              <div key={index} className="text-center p-4 bg-gradient-card rounded-lg">
                <p className="text-sm font-medium text-muted-foreground mb-2">{month.month}</p>
                <div className="space-y-2">
                  <div>
                    <p className="text-lg font-bold text-primary">{month.applications}</p>
                    <p className="text-xs text-muted-foreground">Applications</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-success">{month.placements}</p>
                    <p className="text-xs text-muted-foreground">Placements</p>
                  </div>
                  <div className="pt-2 border-t">
                    <p className="text-sm font-medium">{month.rate}%</p>
                    <p className="text-xs text-muted-foreground">Success</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Key Insights */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="border-success/20">
          <CardHeader>
            <CardTitle className="text-success">🎯 Key Achievements</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-success rounded-full" />
              <span className="text-sm">Exceeded diversity targets by 12.2%</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-success rounded-full" />
              <span className="text-sm">Technology sector showing 15.3% growth</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-success rounded-full" />
              <span className="text-sm">Rural representation increased to 42.3%</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-success rounded-full" />
              <span className="text-sm">AI matching accuracy improved to 94.8%</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-warning/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-warning">
              <AlertCircle className="w-5 h-5" />
              Areas for Improvement
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-warning rounded-full" />
              <span className="text-sm">Northeast region needs more company engagement</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-warning rounded-full" />
              <span className="text-sm">Education sector showing slower growth</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-warning rounded-full" />
              <span className="text-sm">Student satisfaction in healthcare needs attention</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-warning rounded-full" />
              <span className="text-sm">Remote work options need expansion</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};