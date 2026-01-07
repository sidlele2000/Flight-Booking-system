"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useState } from "react";
import { useRouter } from "next/navigation";

const heroImages = [
  "/assets/flight-banner1.png",
  "/assets/flight-banner2.png",
  "/assets/flight-banner3.png",
];

export default function HeroCarouselWithSearch() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSearch = () => {
    if (!from || !to || !date) {
      alert("please fill all fields");
      return;
    }
    setLoading(true);
    try {
      router.push(`/flights?from=${from.toUpperCase()}&to=${to.toUpperCase()}&date=${date}`);
    } catch (error) {
      console.error(error);
      alert("failed to search flights");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-[600px] md:h-[700px] relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        className="h-full"
      >
        {heroImages.map((src, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${src})` }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute inset-0 z-50 flex flex-col justify-center items-center bg-black/30 px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-white text-center drop-shadow-lg">
          Book Your Flight Easily
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-white text-center drop-shadow-md">
          Find the best deals to your favorite destinations
        </p>

        <div className="mt-8 bg-white/90 backdrop-blur-md rounded-xl p-4 md:p-6 w-full max-w-4xl shadow-lg">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="From (IATA e.g. DEL)"
              value={from}
              onChange={(event) => setFrom(event.target.value)}
              className="flex-1 p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="To (IATA e.g. LON)"
              value={to}
              onChange={(event) => setTo(event.target.value)}
              className="flex-1 p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
              className="flex-1 p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleSearch}
              disabled={loading}
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition disabled:opacity-60"
            >
              {loading ? "Searching..." : "Search"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
