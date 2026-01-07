import FlightRowCard from "@/components/FlightRowCard";
import { getFlights } from "@/lib/amadeusServer";

interface FlightsPageProps {
  searchParams: { from?: string; to?: string; date?: string };
}

export default async function FlightsPage({ searchParams }: FlightsPageProps) {
  const { from, to, date } = searchParams;

  if (!from || !to || !date) {
    return <p className="p-6 text-center text-gray-500">Please provide valid search parameters</p>;
  }
  const flights = await getFlights(from, to, date);
  if (!flights?.length) {
    return <p className="p-6 text-center text-gray-500">No flights found</p>;
  }
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-4">
      {flights.map((flight: any, i: number) => (
        <FlightRowCard key={i} flight={flight} />
      ))}
    </div>
  );
}
