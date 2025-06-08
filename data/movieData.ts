export const featuredMovies = [
  {
    id: 1,
    title: "From the World of John Wick: Ballerina",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNzdhZmY2OTQtYWI4OC00ZThkLTlhZjAtNzE2YzRjM2Q5YjJlXkEyXkFqcGc@._V1_SX300.jpg",
    releaseDate: "June 6, 2025",
    genre: "Action/Thriller",
    prediction: "$65M",
    status: "upcoming",
  },
  {
    id: 2,
    title: "Lilo & Stitch (live-action)",
    poster:
      "https://m.media-amazon.com/images/M/MV5BYmFmZjM1ZTEtYzQ5ZS00MTRmLTkzMDktYWMxNTg2NGE3YjY4XkEyXkFqcGc@._V1_SX300.jpg",
    releaseDate: "May 23, 2025",
    genre: "Family/Adventure",
    prediction: "$50M",
    status: "released",
  },
  {
    id: 3,
    title: "Mission: Impossible - The Final Reckoning",
    poster:
      "https://m.media-amazon.com/images/M/MV5BZGQ5NGEyYTItMjNiMi00Y2EwLTkzOWItMjc5YjJiMjMyNTI0XkEyXkFqcGc@._V1_SX300.jpg",
    releaseDate: "May 23, 2025",
    genre: "Action",
    prediction: "$75M",
    status: "released",
  },
];

export const movies = [
  {
    id: 1,
    title: "From the World of John Wick: Ballerina",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNzdhZmY2OTQtYWI4OC00ZThkLTlhZjAtNzE2YzRjM2Q5YjJlXkEyXkFqcGc@._V1_SX300.jpg",
    releaseDate: "2025-06-06",
    genre: "Action/Thriller",
    director: "Chad Stahelski",
    studio: "Lionsgate",
    budget: "$80M",
    prediction: "$150M",
    actual: "$31.2M",
    status: "upcoming",
    description:
      "John Wick spin‑off starring Ana de Armas as an assassin ballerina seeking revenge.",
  },
  {
    id: 2,
    title: "Lilo & Stitch (live-action)",
    poster:
      "https://m.media-amazon.com/images/M/MV5BYmFmZjM1ZTEtYzQ5ZS00MTRmLTkzMDktYWMxNTg2NGE3YjY4XkEyXkFqcGc@._V1_SX300.jpg",

    releaseDate: "2025-05-23",
    genre: "Family/Adventure",
    director: "Jon M. Chu",
    studio: "Disney",
    budget: "$200M",
    prediction: "$300M",
    actual: "$250.2M",
    status: "released",
    description:
      "A live‑action retelling of the Disney classic about a girl's friendship with a mischievous alien.",
  },
  {
    id: 3,
    title: "Mission: Impossible - The Final Reckoning",
    poster:
      "https://m.media-amazon.com/images/M/MV5BZGQ5NGEyYTItMjNiMi00Y2EwLTkzOWItMjc5YjJiMjMyNTI0XkEyXkFqcGc@._V1_SX300.jpg",

    releaseDate: "2025-05-23",
    genre: "Action",
    director: "Christopher McQuarrie",
    studio: "Paramount",
    budget: "$250M",
    prediction: "$400M",
    actual: "$450.2M",
    status: "released",
    description:
      "Tom Cruise returns in the blockbuster finale featuring Guinness-record stunts and globe‑spanning espionage.",
  },
  {
    id: 4,
    title: "Kuberaa",
    poster:
      "https://m.media-amazon.com/images/M/MV5BM2Q3ZWUxOGEtODU4OS00NjU0LTllZWYtODAxZmRkNDZmYmE4XkEyXkFqcGc@._V1_SX300.jpg",
    releaseDate: "2025-06-20",
    genre: "Social Thriller",
    director: "Sekhar Kammula",
    studio: "Amigos Creations",
    budget: "₹120 Cr",
    prediction: "₹150 Cr",
    actual: "$31.2M",
    status: "upcoming",

    description:
      "High‑stakes multi‑language Indian thriller starring Dhanush and Nagarjuna :contentReference[oaicite:8]{index=8}.",
  },
  {
    id: 5,
    title: "Thug Life",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTRlMjkwZjQtMGIwOC00OWFmLTk5OWMtMmY1NWYxOGVkYjFkXkEyXkFqcGc@._V1_SX300.jpg",
    releaseDate: "2025-06-05",
    genre: "Gangster Action",
    director: "Mani Ratnam",
    studio: "Madras Talkies",
    budget: "₹180 Cr",
    prediction: "₹200 Cr",
    actual: "$50.2M",
    status: "released",
    description:
      "Tamil‑language gangster saga by Mani Ratnam featuring Kamal Haasan already earning ₹43.5 Cr :contentReference[oaicite:9]{index=9}.",
  },
];

export const activeBets = [
  {
    id: 1,
    movie: "From the World of John Wick: Ballerina",
    type: "Opening Weekend",
    prediction: "$65M",
    amount: 100,
    odds: "2.0x",
    status: "pending",
    deadline: "June 6, 2025",
  },
  {
    id: 2,
    movie: "Kuberaa",
    type: "Total Revenue (India)",
    prediction: "₹150 Cr",
    amount: 100,
    odds: "1.5x",
    status: "pending",
    deadline: "June 20, 2025",
  },
  {
    id: 3,
    movie: "Thug Life",
    type: "First Week",
    prediction: "₹50 Cr",
    amount: 80,
    odds: "1.8x",
    status: "active",
    deadline: "June 12, 2025",
  },
];

export const recentBets = [
  {
    id: 4,
    movie: "Lilo & Stitch (live-action)",
    type: "Opening Weekend",
    prediction: "$50M",
    actual: "$54M",
    amount: 120,
    winnings: 180,
    status: "won",
    date: "May 23, 2025",
  },
  {
    id: 5,
    movie: "Mission: Impossible - The Final Reckoning",
    type: "Opening Weekend",
    prediction: "$75M",
    actual: "$80M",
    amount: 150,
    winnings: 225,
    status: "won",
    date: "May 23, 2025",
  },
];
