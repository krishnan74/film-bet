"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Trophy, TrendingUp, Medal, Crown, Star } from "lucide-react";
import Link from "next/link";

const leaderboardData = {
  weekly: [
    {
      rank: 1,
      name: "Sarah Chen",
      avatar: "/placeholder.svg?height=40&width=40",
      points: 2450,
      winRate: 92,
      streak: 8,
      winnings: 1850,
      badge: "crown",
    },
    {
      rank: 2,
      name: "Mike Rodriguez",
      avatar: "/placeholder.svg?height=40&width=40",
      points: 2380,
      winRate: 89,
      streak: 6,
      winnings: 1720,
      badge: "gold",
    },
    {
      rank: 3,
      name: "Emma Thompson",
      avatar: "/placeholder.svg?height=40&width=40",
      points: 2290,
      winRate: 87,
      streak: 5,
      winnings: 1650,
      badge: "silver",
    },
    {
      rank: 4,
      name: "David Kim",
      avatar: "/placeholder.svg?height=40&width=40",
      points: 2180,
      winRate: 85,
      streak: 4,
      winnings: 1580,
      badge: "bronze",
    },
    {
      rank: 5,
      name: "Lisa Wang",
      avatar: "/placeholder.svg?height=40&width=40",
      points: 2120,
      winRate: 83,
      streak: 7,
      winnings: 1520,
      badge: null,
    },
    {
      rank: 6,
      name: "John Smith",
      avatar: "/placeholder.svg?height=40&width=40",
      points: 2050,
      winRate: 81,
      streak: 3,
      winnings: 1480,
      badge: null,
    },
    {
      rank: 7,
      name: "Maria Garcia",
      avatar: "/placeholder.svg?height=40&width=40",
      points: 1980,
      winRate: 79,
      streak: 2,
      winnings: 1420,
      badge: null,
    },
    {
      rank: 8,
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      points: 1920,
      winRate: 77,
      streak: 1,
      winnings: 1380,
      badge: null,
    },
    {
      rank: 9,
      name: "Rachel Brown",
      avatar: "/placeholder.svg?height=40&width=40",
      points: 1860,
      winRate: 75,
      streak: 4,
      winnings: 1340,
      badge: null,
    },
    {
      rank: 10,
      name: "Tom Wilson",
      avatar: "/placeholder.svg?height=40&width=40",
      points: 1800,
      winRate: 73,
      streak: 2,
      winnings: 1300,
      badge: null,
    },
  ],
  monthly: [
    {
      rank: 1,
      name: "Mike Rodriguez",
      avatar: "/placeholder.svg?height=40&width=40",
      points: 8950,
      winRate: 88,
      streak: 12,
      winnings: 6750,
      badge: "crown",
    },
    {
      rank: 2,
      name: "Sarah Chen",
      avatar: "/placeholder.svg?height=40&width=40",
      points: 8720,
      winRate: 86,
      streak: 10,
      winnings: 6580,
      badge: "gold",
    },
    {
      rank: 3,
      name: "David Kim",
      avatar: "/placeholder.svg?height=40&width=40",
      points: 8450,
      winRate: 84,
      streak: 8,
      winnings: 6320,
      badge: "silver",
    },
  ],
  allTime: [
    {
      rank: 1,
      name: "Emma Thompson",
      avatar: "/placeholder.svg?height=40&width=40",
      points: 45680,
      winRate: 91,
      streak: 15,
      winnings: 32450,
      badge: "crown",
    },
    {
      rank: 2,
      name: "Mike Rodriguez",
      avatar: "/placeholder.svg?height=40&width=40",
      points: 42350,
      winRate: 89,
      streak: 12,
      winnings: 30120,
      badge: "gold",
    },
    {
      rank: 3,
      name: "Sarah Chen",
      avatar: "/placeholder.svg?height=40&width=40",
      points: 39870,
      winRate: 87,
      streak: 18,
      winnings: 28750,
      badge: "silver",
    },
  ],
};

const currentUser = {
  rank: 42,
  name: "John Doe",
  avatar: "/placeholder.svg?height=40&width=40",
  points: 1250,
  winRate: 68,
  streak: 5,
  winnings: 950,
};

export default function LeaderboardPage() {
  const [activeTab, setActiveTab] = useState("weekly");

  const getBadgeIcon = (badge: string | null) => {
    switch (badge) {
      case "crown":
        return <Crown className="w-4 h-4 text-primary" />;
      case "gold":
        return <Medal className="w-4 h-4 text-primary" />;
      case "silver":
        return <Medal className="w-4 h-4 text-muted-foreground" />;
      case "bronze":
        return <Medal className="w-4 h-4 text-accent-foreground" />;
      default:
        return null;
    }
  };

  const getRankColor = (rank: number) => {
    switch (rank) {
      case 1:
        return "text-primary";
      case 2:
        return "text-muted-foreground";
      case 3:
        return "text-accent-foreground";
      default:
        return "text-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-primary-foreground rounded-sm" />
              </div>
              <h1 className="text-2xl font-medium text-foreground">
                BoxOfficeBets
              </h1>
            </Link>
            <nav className="hidden md:flex items-center space-x-12">
              <Link
                href="/movies"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Movies
              </Link>
              <Link href="/leaderboard" className="text-foreground font-medium">
                Leaderboard
              </Link>
              <Link
                href="/dashboard"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Dashboard
              </Link>
            </nav>
            <Button variant="outline" className="border-border hover:bg-muted">
              Profile
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12">
        {/* Page Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-light text-foreground mb-4">
            Leaderboard
          </h2>
          <p className="text-lg text-muted-foreground">
            See how you rank against other movie predictors
          </p>
        </div>

        {/* Your Rank Card */}
        <Card className="bg-primary/5 border-primary/20 mb-16">
          <CardHeader>
            <CardTitle className="text-foreground flex items-center gap-3">
              <Star className="w-5 h-5 text-primary" />
              Your Current Ranking
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <div className="text-4xl font-light text-foreground">
                  #{currentUser.rank}
                </div>
                <Avatar className="w-16 h-16">
                  <AvatarImage
                    src={currentUser.avatar || "/placeholder.svg"}
                    alt={currentUser.name}
                  />
                  <AvatarFallback className="bg-muted text-foreground">
                    {currentUser.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-foreground font-medium text-lg">
                    {currentUser.name}
                  </p>
                  <p className="text-muted-foreground">
                    {currentUser.points} points
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-8 text-center">
                <div>
                  <p className="text-muted-foreground text-sm mb-1">Win Rate</p>
                  <p className="text-foreground font-medium text-lg">
                    {currentUser.winRate}%
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground text-sm mb-1">Streak</p>
                  <p className="text-primary font-medium text-lg">
                    {currentUser.streak}
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground text-sm mb-1">Points</p>
                  <p className="text-primary font-medium text-lg">
                    {currentUser.points}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Leaderboard Tabs */}
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="space-y-8"
        >
          <TabsList className="bg-muted/50 border border-border/50 grid w-full grid-cols-3">
            <TabsTrigger value="weekly" className="data-[state=active]:bg-card">
              This Week
            </TabsTrigger>
            <TabsTrigger
              value="monthly"
              className="data-[state=active]:bg-card"
            >
              This Month
            </TabsTrigger>
            <TabsTrigger
              value="allTime"
              className="data-[state=active]:bg-card"
            >
              All Time
            </TabsTrigger>
          </TabsList>

          {Object.entries(leaderboardData).map(([period, data]) => (
            <TabsContent key={period} value={period}>
              <Card className="bg-card border-border/50">
                <CardHeader>
                  <CardTitle className="text-foreground flex items-center gap-3">
                    <Trophy className="w-5 h-5 text-primary" />
                    {period === "weekly"
                      ? "Weekly"
                      : period === "monthly"
                      ? "Monthly"
                      : "All Time"}{" "}
                    Champions
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Top performers ranked by points and accuracy
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {data.map((user, index) => (
                      <div
                        key={user.rank}
                        className={`flex items-center justify-between p-6 rounded-lg transition-all duration-300 ${
                          user.rank <= 3
                            ? "bg-primary/5 border border-primary/20"
                            : "bg-muted/30 hover:bg-muted/50 border border-border/30"
                        }`}
                      >
                        <div className="flex items-center space-x-6">
                          <div
                            className={`text-3xl font-light ${getRankColor(
                              user.rank
                            )} min-w-[4rem] text-center`}
                          >
                            #{user.rank}
                          </div>
                          <Avatar className="w-14 h-14">
                            <AvatarImage
                              src={user.avatar || "/placeholder.svg"}
                              alt={user.name}
                            />
                            <AvatarFallback className="bg-muted text-foreground">
                              {user.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="flex items-center gap-2">
                              <p className="text-foreground font-medium text-lg">
                                {user.name}
                              </p>
                              {getBadgeIcon(user.badge)}
                            </div>
                            <p className="text-muted-foreground">
                              {user.points} points
                            </p>
                          </div>
                        </div>

                        <div className="grid grid-cols-4 gap-8 text-center">
                          <div>
                            <p className="text-muted-foreground text-sm mb-1">
                              Win Rate
                            </p>
                            <p className="text-foreground font-medium">
                              {user.winRate}%
                            </p>
                          </div>
                          <div>
                            <p className="text-muted-foreground text-sm mb-1">
                              Streak
                            </p>
                            <p className="text-primary font-medium">
                              {user.streak}
                            </p>
                          </div>
                          <div>
                            <p className="text-muted-foreground text-sm mb-1">
                              Points
                            </p>
                            <p className="text-primary font-medium">
                              {user.points}
                            </p>
                          </div>
                          <div>
                            <Badge
                              variant="outline"
                              className={`${
                                user.rank === 1
                                  ? "border-primary text-primary"
                                  : user.rank === 2
                                  ? "border-muted-foreground text-muted-foreground"
                                  : user.rank === 3
                                  ? "border-accent text-accent-foreground"
                                  : "border-border text-muted-foreground"
                              }`}
                            >
                              {user.rank === 1
                                ? "Champion"
                                : user.rank === 2
                                ? "Runner-up"
                                : user.rank === 3
                                ? "3rd Place"
                                : "Top 10"}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        {/* Achievement Cards */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <Card className="bg-card border-border/50">
            <CardHeader>
              <CardTitle className="text-foreground flex items-center gap-3">
                <TrendingUp className="w-5 h-5 text-primary" />
                Highest Win Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4">
                <Avatar className="w-12 h-12">
                  <AvatarImage
                    src="/placeholder.svg?height=40&width=40"
                    alt="Sarah Chen"
                  />
                  <AvatarFallback className="bg-muted text-foreground">
                    SC
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-foreground font-medium">Sarah Chen</p>
                  <p className="text-primary font-medium">92% Win Rate</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border/50">
            <CardHeader>
              <CardTitle className="text-foreground flex items-center gap-3">
                <Trophy className="w-5 h-5 text-primary" />
                Longest Streak
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4">
                <Avatar className="w-12 h-12">
                  <AvatarImage
                    src="/placeholder.svg?height=40&width=40"
                    alt="Emma Thompson"
                  />
                  <AvatarFallback className="bg-muted text-foreground">
                    ET
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-foreground font-medium">Emma Thompson</p>
                  <p className="text-primary font-medium">18 Win Streak</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border/50">
            <CardHeader>
              <CardTitle className="text-foreground flex items-center gap-3">
                <Star className="w-5 h-5 text-primary" />
                Top Scorer
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4">
                <Avatar className="w-12 h-12">
                  <AvatarImage
                    src="/placeholder.svg?height=40&width=40"
                    alt="Mike Rodriguez"
                  />
                  <AvatarFallback className="bg-muted text-foreground">
                    MR
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-foreground font-medium">Mike Rodriguez</p>
                  <p className="text-primary font-medium">42,350 Points</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
