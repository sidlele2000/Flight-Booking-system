import axios from "axios";
export async function getFlights(from: string, to: string, date: string) {
  if (!from || !to || !date) {
    console.error("missing required parameters:", { from, to, date });
    return [];
  }
  try {
    const tokenRes = await axios.post(
      "https://test.api.amadeus.com/v1/security/oauth2/token",
      new URLSearchParams({
        grant_type: "client_credentials",
        client_id: process.env.AMADEUS_API_KEY!,
        client_secret: process.env.AMADEUS_API_SECRET!,
      }),
      { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
    );

    const token = tokenRes.data.access_token;
    const res = await axios.get("https://test.api.amadeus.com/v2/shopping/flight-offers", {
      headers: { Authorization: `Bearer ${token}` },
      params: {
        originLocationCode: from.toUpperCase(),
        destinationLocationCode: to.toUpperCase(),
        departureDate: date,
        adults: 1,
        max: 5,
      },
    });

    return (res.data.data || []).map((data: any, idx: number) => {
      const itinerary = data.itineraries[0];
      const segments = itinerary?.segments || [];
      const departure = segments[0];
      const arrival = segments[segments.length - 1];

      return {
        id: idx,
        from: departure?.departure?.iataCode || "N/A",
        to: arrival?.arrival?.iataCode || "N/A",
        price: `${data.price?.total || "0"} ${data.price?.currency || "USD"}`,
        airline: departure?.carrierCode || "Unknown",
        airlineLogo: `https://content.airhex.com/content/logos/airlines_${departure?.carrierCode}_200_200_s.png`,
        duration: itinerary?.duration || "N/A",
        date: departure?.departure?.at?.split("T")[0] || date,
      };
    });
  } catch (err: any) {
    console.log("error fetching flights");
    return [];
  }
}
