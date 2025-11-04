import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    // Parse query parameters from the request URL
    const { searchParams } = new URL(request.url);
    const statusFilter = searchParams.get("status");

    // Get the bearer token from environment variable
    const bearerToken = process.env.API_BEARER_TOKEN;

    if (!bearerToken) {
      console.error(
        "API_BEARER_TOKEN is not configured in environment variables"
      );
      return NextResponse.json(
        { error: "API configuration error" },
        { status: 500 }
      );
    }

    // Get the backend API URL from environment variable
    const apiUrl = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL;

    if (!apiUrl) {
      console.error("API_URL is not configured in environment variables");
      return NextResponse.json(
        { error: "API configuration error" },
        { status: 500 }
      );
    }

    // Build the API URL with optional status filter
    let fetchUrl = `${apiUrl}/items/Promotions?fields=*,media.*`;
    if (statusFilter) {
      fetchUrl += `&filter[status][_eq]=${encodeURIComponent(statusFilter)}`;
    }

    // Add sorting by start_date descending
    fetchUrl += `&sort=-start_date`;

    // Fetch promotions from the backend API
    const response = await fetch(fetchUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${bearerToken}`,
        "Content-Type": "application/json",
      },
      cache: "no-store", // Disable caching to always get fresh data
    });

    if (!response.ok) {
      console.error(`Backend API returned status: ${response.status}`);
      return NextResponse.json(
        { error: "Failed to fetch promotions from backend" },
        { status: response.status }
      );
    }

    const data = await response.json();
    // Add 'expired' property to promotions based on end_date
    const currentDate = new Date();
    data.data = data.data.map((promotion: any) => {
      const endDate = new Date(promotion.end_date);
      return {
        ...promotion,
        expired: endDate < currentDate,
      };
    });

    return NextResponse.json(data, {
      headers: {
        "Cache-Control": "no-cache, no-store, must-revalidate",
        Pragma: "no-cache",
        Expires: "0",
      },
    });
  } catch (error) {
    console.error("Error fetching promotions:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
