import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  // Get the endpoint from the path segments
  const endpoint = params.path[0];
  
  // Get all query parameters from the request
  const searchParams = request.nextUrl.searchParams;
  
  // Convert searchParams to URLSearchParams for the backend request
  const backendParams = new URLSearchParams();
  searchParams.forEach((value, key) => {
    backendParams.append(key, value);
  });

  try {
    const response = await fetch(`http://localhost:8000/${endpoint}?${backendParams.toString()}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error(`Error fetching ${endpoint} data:`, error);
    return NextResponse.json(
      { error: `Failed to fetch ${endpoint} data` },
      { status: 500 }
    );
  }
} 