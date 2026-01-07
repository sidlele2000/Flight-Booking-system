import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import OfferCards from "@/components/OfferCards";
import TopFlights from "@/components/TopFlights";
import Footer from "@/components/Footer";
import { getFlights } from "@/lib/amadeusServer";

export default async function Home() {
  const flights = await getFlights("DEL", "LON", "2025-12-21");

  return (
    <>
      <Header />
      <HeroCarousel />
      <OfferCards />

      {flights.length ? (
        <TopFlights flights={flights} />
      ) : (
        <p className="text-center text-gray-500 py-6">No flights found.</p>
      )}

      <Footer />
    </>
  );
}
