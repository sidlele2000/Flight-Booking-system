"use client";
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
interface FlightCardProps {
  flight: Flight;
}

export default function FlightCard({ flight }: FlightCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1 w-full md:w-80 h-[420px] flex flex-col">
      <div className="relative h-48 w-full">
        <img
          src={flight.airlineLogo}
          alt={flight.airline}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-6 flex flex-col gap-3 flex-1">
        <div className="flex justify-between items-center">
          <span className="font-bold text-lg text-gray-800">
            {flight.from} → {flight.to}
          </span>
          <span className="text-blue-600 font-bold text-lg">{flight.price}</span>
        </div>

        <p className="text-gray-600">{flight.airline}</p>
        <p className="text-gray-600">{flight.duration}</p>
        <p className="text-gray-500 text-sm">{flight.date}</p>

        <button className="mt-auto bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
          View More
        </button>
      </div>
    </div>
  );
}
