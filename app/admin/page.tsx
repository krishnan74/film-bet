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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  DollarSign,
  Plus,
  Edit,
  Trash2,
  Users,
  TrendingUp,
  Calendar,
  BarChart3,
} from "lucide-react";
import Link from "next/link";

const adminStats = {
  totalUsers: 10247,
  activeBets: 1523,
  totalRevenue: 2450000,
  moviesTracked: 156,
};

const recentBets = [
  {
    id: 1,
    user: "Sarah Chen",
    movie: "Galactic Warriors",
    type: "First Day",
    amount: 100,
    prediction: "$18.5M",
    status: "pending",
  },
  {
    id: 2,
    user: "Mike Rodriguez",
    movie: "Mystery Manor",
    type: "Weekend",
    amount: 75,
    prediction: "#2 Position",
    status: "pending",
  },
  {
    id: 3,
    user: "Emma Thompson",
    movie: "Action Hero",
    type: "Total Revenue",
    amount: 150,
    prediction: "$120M",
    status: "completed",
  },
];

const movies = [
  {
    id: 1,
    title: "Galactic Warriors",
    releaseDate: "2024-03-15",
    status: "upcoming",
    totalBets: 245,
    totalAmount: 18750,
  },
  {
    id: 2,
    title: "Mystery Manor",
    releaseDate: "2024-03-22",
    status: "upcoming",
    totalBets: 189,
    totalAmount: 14250,
  },
  {
    id: 3,
    title: "Action Hero",
    releaseDate: "2024-03-08",
    status: "released",
    totalBets: 312,
    totalAmount: 23400,
  },
];

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [newMovie, setNewMovie] = useState({
    title: "",
    director: "",
    genre: "",
    releaseDate: "",
    budget: "",
    studio: "",
    description: "",
    poster: "",
  });

  const handleAddMovie = () => {
    console.log("Adding movie:", newMovie);
    // Reset form
    setNewMovie({
      title: "",
      director: "",
      genre: "",
      releaseDate: "",
      budget: "",
      studio: "",
      description: "",
      poster: "",
    });
  };

  const handleUpdateMovieStatus = (movieId: number, status: string) => {
    console.log("Updating movie status:", movieId, status);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-white">
                BoxOfficeBets Admin
              </h1>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link
                href="/movies"
                className="text-white/80 hover:text-white transition-colors"
              >
                Movies
              </Link>
              <Link
                href="/leaderboard"
                className="text-white/80 hover:text-white transition-colors"
              >
                Leaderboard
              </Link>
              <Link
                href="/dashboard"
                className="text-white/80 hover:text-white transition-colors"
              >
                Dashboard
              </Link>
            </nav>
            <Button
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10"
            >
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">
            Admin Dashboard
          </h2>
          <p className="text-white/70">
            Manage movies, users, and betting activities
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-sm text-white/70">Total Users</p>
                  <p className="text-xl font-bold text-white">
                    {adminStats.totalUsers.toLocaleString()}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-sm text-white/70">Active Bets</p>
                  <p className="text-xl font-bold text-white">
                    {adminStats.activeBets.toLocaleString()}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-sm text-white/70">Total Revenue</p>
                  <p className="text-xl font-bold text-white">
                    ${(adminStats.totalRevenue / 1000000).toFixed(1)}M
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-sm text-white/70">Movies Tracked</p>
                  <p className="text-xl font-bold text-white">
                    {adminStats.moviesTracked}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="space-y-6"
        >
          <TabsList className="bg-white/10 border-white/20">
            <TabsTrigger
              value="overview"
              className="data-[state=active]:bg-white/20"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="movies"
              className="data-[state=active]:bg-white/20"
            >
              Movies
            </TabsTrigger>
            <TabsTrigger
              value="bets"
              className="data-[state=active]:bg-white/20"
            >
              Bets
            </TabsTrigger>
            <TabsTrigger
              value="users"
              className="data-[state=active]:bg-white/20"
            >
              Users
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Recent Activity */}
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">
                    Recent Betting Activity
                  </CardTitle>
                  <CardDescription className="text-white/70">
                    Latest bets placed by users
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentBets.map((bet) => (
                      <div
                        key={bet.id}
                        className="flex items-center justify-between p-3 bg-white/5 rounded-lg"
                      >
                        <div>
                          <p className="text-white font-medium">{bet.user}</p>
                          <p className="text-sm text-white/70">
                            {bet.movie} - {bet.type}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-white font-medium">
                            ${bet.amount}
                          </p>
                          <Badge
                            variant="outline"
                            className={
                              bet.status === "pending"
                                ? "border-yellow-500 text-yellow-400"
                                : "border-green-500 text-green-400"
                            }
                          >
                            {bet.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Top Movies */}
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">
                    Top Movies by Betting Volume
                  </CardTitle>
                  <CardDescription className="text-white/70">
                    Movies with the most betting activity
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {movies.slice(0, 3).map((movie) => (
                      <div
                        key={movie.id}
                        className="flex items-center justify-between p-3 bg-white/5 rounded-lg"
                      >
                        <div>
                          <p className="text-white font-medium">
                            {movie.title}
                          </p>
                          <p className="text-sm text-white/70">
                            {movie.totalBets} bets
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-green-400 font-medium">
                            ${movie.totalAmount.toLocaleString()}
                          </p>
                          <Badge
                            variant="outline"
                            className="border-white/20 text-white/70"
                          >
                            {movie.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="movies" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Add New Movie */}
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Plus className="w-5 h-5" />
                    Add New Movie
                  </CardTitle>
                  <CardDescription className="text-white/70">
                    Add a new movie for users to bet on
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="title" className="text-white">
                        Title
                      </Label>
                      <Input
                        id="title"
                        value={newMovie.title}
                        onChange={(e) =>
                          setNewMovie({ ...newMovie, title: e.target.value })
                        }
                        className="bg-white/10 border-white/20 text-white"
                        placeholder="Movie title"
                      />
                    </div>
                    <div>
                      <Label htmlFor="director" className="text-white">
                        Director
                      </Label>
                      <Input
                        id="director"
                        value={newMovie.director}
                        onChange={(e) =>
                          setNewMovie({ ...newMovie, director: e.target.value })
                        }
                        className="bg-white/10 border-white/20 text-white"
                        placeholder="Director name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="genre" className="text-white">
                        Genre
                      </Label>
                      <Select
                        value={newMovie.genre}
                        onValueChange={(value) =>
                          setNewMovie({ ...newMovie, genre: value })
                        }
                      >
                        <SelectTrigger className="bg-white/10 border-white/20 text-white">
                          <SelectValue placeholder="Select genre" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="action">Action</SelectItem>
                          <SelectItem value="comedy">Comedy</SelectItem>
                          <SelectItem value="drama">Drama</SelectItem>
                          <SelectItem value="sci-fi">Sci-Fi</SelectItem>
                          <SelectItem value="thriller">Thriller</SelectItem>
                          <SelectItem value="romance">Romance</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="releaseDate" className="text-white">
                        Release Date
                      </Label>
                      <Input
                        id="releaseDate"
                        type="date"
                        value={newMovie.releaseDate}
                        onChange={(e) =>
                          setNewMovie({
                            ...newMovie,
                            releaseDate: e.target.value,
                          })
                        }
                        className="bg-white/10 border-white/20 text-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="budget" className="text-white">
                        Budget
                      </Label>
                      <Input
                        id="budget"
                        value={newMovie.budget}
                        onChange={(e) =>
                          setNewMovie({ ...newMovie, budget: e.target.value })
                        }
                        className="bg-white/10 border-white/20 text-white"
                        placeholder="e.g., $150M"
                      />
                    </div>
                    <div>
                      <Label htmlFor="studio" className="text-white">
                        Studio
                      </Label>
                      <Input
                        id="studio"
                        value={newMovie.studio}
                        onChange={(e) =>
                          setNewMovie({ ...newMovie, studio: e.target.value })
                        }
                        className="bg-white/10 border-white/20 text-white"
                        placeholder="Studio name"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="description" className="text-white">
                      Description
                    </Label>
                    <Textarea
                      id="description"
                      value={newMovie.description}
                      onChange={(e) =>
                        setNewMovie({
                          ...newMovie,
                          description: e.target.value,
                        })
                      }
                      className="bg-white/10 border-white/20 text-white"
                      placeholder="Movie description"
                      rows={3}
                    />
                  </div>

                  <Button
                    onClick={handleAddMovie}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                  >
                    Add Movie
                  </Button>
                </CardContent>
              </Card>

              {/* Manage Movies */}
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Edit className="w-5 h-5" />
                    Manage Movies
                  </CardTitle>
                  <CardDescription className="text-white/70">
                    Update movie information and status
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {movies.map((movie) => (
                      <div
                        key={movie.id}
                        className="p-4 bg-white/5 rounded-lg border border-white/10"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <h4 className="text-white font-medium">
                              {movie.title}
                            </h4>
                            <p className="text-sm text-white/70">
                              {movie.releaseDate}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge
                              variant="outline"
                              className={
                                movie.status === "upcoming"
                                  ? "border-blue-500 text-blue-400"
                                  : "border-green-500 text-green-400"
                              }
                            >
                              {movie.status}
                            </Badge>
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-white/20 text-white hover:bg-white/10"
                            >
                              <Edit className="w-3 h-3" />
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-red-500 text-red-400 hover:bg-red-500/10"
                            >
                              <Trash2 className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-white/70">Total Bets</p>
                            <p className="text-white font-medium">
                              {movie.totalBets}
                            </p>
                          </div>
                          <div>
                            <p className="text-white/70">Total Amount</p>
                            <p className="text-green-400 font-medium">
                              ${movie.totalAmount.toLocaleString()}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="bets" className="space-y-6">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  All Bets
                </CardTitle>
                <CardDescription className="text-white/70">
                  Monitor and manage all betting activity
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentBets.map((bet) => (
                    <div
                      key={bet.id}
                      className="p-4 bg-white/5 rounded-lg border border-white/10"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h4 className="text-white font-medium">{bet.user}</h4>
                          <p className="text-sm text-white/70">
                            {bet.movie} - {bet.type} Prediction
                          </p>
                        </div>
                        <Badge
                          variant="outline"
                          className={
                            bet.status === "pending"
                              ? "border-yellow-500 text-yellow-400"
                              : "border-green-500 text-green-400"
                          }
                        >
                          {bet.status}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <p className="text-white/70">Prediction</p>
                          <p className="text-white font-medium">
                            {bet.prediction}
                          </p>
                        </div>
                        <div>
                          <p className="text-white/70">Bet Amount</p>
                          <p className="text-white font-medium">
                            ${bet.amount}
                          </p>
                        </div>
                        <div>
                          <p className="text-white/70">Actions</p>
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-white/20 text-white hover:bg-white/10"
                            >
                              View
                            </Button>
                            {bet.status === "pending" && (
                              <Button
                                size="sm"
                                variant="outline"
                                className="border-green-500 text-green-400 hover:bg-green-500/10"
                              >
                                Resolve
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  User Management
                </CardTitle>
                <CardDescription className="text-white/70">
                  View and manage user accounts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <p className="text-white/70">
                    User management features coming soon...
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
