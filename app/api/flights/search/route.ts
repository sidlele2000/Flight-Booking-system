import { NextResponse } from "next/server";
import amadeus from "@/lib/amadeus";
import { getAmadeusToken } from "@/lib/amadeusToken";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const from = searchParams.get("from");
    const to = searchParams.get("to");
    const date = searchParams.get("date");

    if (!from || !to || !date) {
      return NextResponse.json(
        { error: "missing parameters" },
        { status: 400 }
      );
    }

    const token = await getAmadeusToken();
    const response = await amadeus.get("/v2/shopping/flight-offers", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        originLocationCode: from,
        destinationLocationCode: to,
        departureDate: date,
        adults: 1,
        max: 10,
      },
    });

    return NextResponse.json(response.data);
  } catch (error) {
    console.error("SERVER ERROR");
    return NextResponse.json(
      { error: "Failed to fetch flights" },
      { status: 500 }
    );
  }
}
