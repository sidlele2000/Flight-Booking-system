"use client";
import { useState } from "react";
import FlightRowCard from "./FlightRowCard";
interface Flight {
  id: number;
  itineraries: any[];
  price: any;
}
interface TopFlightsProps {
  flights: Flight[];
}

export default function TopFlights({ flights }: TopFlightsProps) {
  const [visibleCount, setVisibleCount] = useState(5);

  const handleViewMore = () => {
    setVisibleCount((prev) => Math.min(prev + 5, flights.length));
  };

  return (
    <div className="w-full py-16 bg-gray-50 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
        Top Flights
      </h2>

      <div className="max-w-6xl w-full flex flex-col gap-6">
        {flights.slice(0, visibleCount).map((flight, idx) => (
          <FlightRowCard key={idx} flight={flight} />
        ))}
      </div>

      {visibleCount < flights.length && (
        <button
          onClick={handleViewMore}
          className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          View More Flights
        </button>
      )}
    </div>
  );
}
