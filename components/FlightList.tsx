"use client";
import { useState } from "react";
import FlightRowCard from "./FlightRowCard";

type Flight = {
  id: number;
  from: string;
  to: string;
  price: string;
  airline: string;
  airlineLogo: string;
  duration: string;
  date: string;
};

interface FlightListProps {
  flights: Flight[];
}

export default function FlightList({ flights }: FlightListProps) {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleViewMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, flights.length));
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-16 flex flex-col gap-6">
      {flights.slice(0, visibleCount).map((flight) => (
        <FlightRowCard key={flight.id} flight={flight} />
      ))}

      {visibleCount < flights.length && (
        <button
          onClick={handleViewMore}
          className="self-center mt-4 bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition"
        >
          View More
        </button>
      )}
    </div>
  );
}
