"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import FlightRowCard from "@/components/FlightRowCard";

export default function FlightsClient() {
  const params = useSearchParams();
  const from = params.get("from");
  const to = params.get("to");
  const date = params.get("date");

  const [flights, setFlights] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!from || !to || !date) return;

    const fetchFlights = async () => {
      try {
        const res = await axios.get("/api/flights/search", {
          params: { from, to, date },
        });
        setFlights(res.data.data || []);
      } catch (error) {
        console.error(error);
        setFlights([]);
      } finally {
        setLoading(false);
      }
    };

    fetchFlights();
  }, [from, to, date]);

  if (loading) return <p className="p-6">Loading flights Data</p>;
  if (!flights.length) return <p className="p-6">No flights found.</p>;

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-4">
      {flights.map((flight, i) => (
        <FlightRowCard key={i} flight={flight} />
      ))}
    </div>
  );
}
