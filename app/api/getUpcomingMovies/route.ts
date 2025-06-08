import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const apiKey = process.env.TMDB_API_KEY;
  const url = "";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching upcoming movies:", error);
    return NextResponse.json(
      { error: "Failed to fetch upcoming movies" },
      { status: 500 }
    );
  }
}
