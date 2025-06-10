"use client";

import { useState, useEffect } from "react";
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

const currentUser = {
  rank: 42,
  name: "John Doe",
  avatar: "/placeholder.svg?height=40&width=40",
  points: 1250,
  winRate: 68,
  streak: 5,
  winnings: 950,
};

interface BoxOfficeData {
  TD: string;
  YD: string;
  Release: string;
  Daily: string;
  "%± YD": string;
  "%± LW": string;
  Theaters: string;
  Avg: string;
  "To Date": string;
  Days: string;
  Distributor: string;
}

export default function LeaderboardPage() {
  const [boxOfficeData, setBoxOfficeData] = useState<BoxOfficeData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBoxOfficeData = async () => {
      try {
        const response = await fetch('/api/daily?date=2025-05-31');
        const data = await response.json();
        setBoxOfficeData(data);
      } catch (error) {
        console.error('Error fetching box office data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBoxOfficeData();
  }, []);

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
            Box Office Rankings
          </h2>
          <p className="text-lg text-muted-foreground">
            Daily box office performance of movies
          </p>
        </div>

        {/* Box Office Daily Rankings */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-foreground flex items-center gap-3">
              <TrendingUp className="w-5 h-5 text-primary" />
              Daily Box Office Rankings
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Top performing movies at the box office
            </CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-center py-8">Loading box office data...</div>
            ) : (
              <div className="space-y-4">
                {boxOfficeData.map((movie, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between p-6 rounded-lg transition-all duration-300 ${
                      index < 3
                        ? "bg-primary/5 border border-primary/20"
                        : "bg-muted/30 hover:bg-muted/50 border border-border/30"
                    }`}
                  >
                    <div className="flex items-center space-x-6">
                      <div
                        className={`text-3xl font-light ${getRankColor(
                          index + 1
                        )} min-w-[4rem] text-center`}
                      >
                        #{index + 1}
                      </div>
                      <div>
                        <p className="text-foreground font-medium text-lg">
                          {movie.Release}
                        </p>
                        <p className="text-muted-foreground">
                          {movie.Distributor}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-4 gap-8 text-center">
                      <div>
                        <p className="text-muted-foreground text-sm mb-1">
                          Daily Gross
                        </p>
                        <p className="text-foreground font-medium">
                          {movie.Daily}
                        </p>
                      </div>
                      <div>
                        <p className="text-muted-foreground text-sm mb-1">
                          Theaters
                        </p>
                        <p className="text-primary font-medium">
                          {movie.Theaters}
                        </p>
                      </div>
                      <div>
                        <p className="text-muted-foreground text-sm mb-1">
                          Average
                        </p>
                        <p className="text-primary font-medium">
                          {movie.Avg}
                        </p>
                      </div>
                      <div>
                        <p className="text-muted-foreground text-sm mb-1">
                          Total Gross
                        </p>
                        <p className="text-primary font-medium">
                          {movie["To Date"]}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
