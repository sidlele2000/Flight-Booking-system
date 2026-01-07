"use client";
import { useState } from "react";
import BookingPopup from "./BookingPopup";

export default function FlightRowCard({ flight }: { flight: any }) {
    if (!flight?.itineraries?.length) return null;
    const [showDetails, setShowDetails] = useState(false);
    const [showBookingPopup, setShowBookingPopup] = useState(false);
    const itinerary = flight.itineraries[0];
    const segments = itinerary?.segments || [];
    if (!segments.length) return null;
    const departure = segments[0];
    const arrival = segments[segments.length - 1];
    const airlineCode = departure?.carrierCode || "N/A";
    const airlineLogo = `https://content.airhex.com/content/logos/airlines_${airlineCode}_200_200_s.png`;
    return (
        <>
            <div className="flex flex-col bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4 md:p-6 w-full">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3 w-full md:w-1/4">
                        <img
                            src={airlineLogo}
                            alt={airlineCode}
                            className="w-12 h-12 object-contain rounded-md"
                            onError={(e) =>
                            ((e.target as HTMLImageElement).src =
                                "https://via.placeholder.com/50")
                            }
                        />
                        <div>
                            <p className="font-semibold text-gray-800">{airlineCode}</p>
                            <p className="text-sm text-gray-500">
                                {segments.length - 1 === 0
                                    ? "Non-stop"
                                    : `${segments.length - 1} stop`}
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col w-full md:w-2/5 text-gray-700">
                        <p className="font-bold text-lg">
                            {departure?.departure?.iataCode} → {arrival?.arrival?.iataCode}
                        </p>
                        <p className="text-sm">Duration: {itinerary?.duration}</p>
                    </div>

                    <div className="flex flex-col items-start md:items-end w-full md:w-1/5 gap-2">
                        <p className="text-xl font-bold text-blue-600">
                            {flight.price?.currency} {flight.price?.total}
                        </p>
                        <button
                            onClick={() => setShowDetails((prev) => !prev)}
                            className="mt-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                        >
                            {showDetails ? "Hide Details" : "View Details"}
                        </button>
                    </div>
                </div>

                {showDetails && (
                    <div className="mt-4 border-t pt-4 space-y-3 text-sm text-gray-700">
                        {segments.map((seg: any, idx: number) => (
                            <div
                                key={idx}
                                className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 p-3 bg-gray-50 rounded-lg"
                            >
                                <div className="flex-1">
                                    <p className="font-bold text-md">
                                        {seg.departure.iataCode} → {seg.arrival.iataCode}
                                    </p>
                                    <p>
                                        Departure: {new Date(seg.departure.at).toLocaleString()} | Arrival:{" "}
                                        {new Date(seg.arrival.at).toLocaleString()}
                                    </p>
                                </div>
                                <div className="flex-1 md:text-right">
                                    <p>Carrier: {seg.carrierCode}</p>
                                    <p>Flight Number: {seg.number}</p>
                                </div>
                            </div>
                        ))}

                        <div className="flex justify-end mt-2">
                            <button
                                onClick={() => setShowBookingPopup(true)}
                                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                            >
                                Book Now
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {showBookingPopup && (
                <BookingPopup flight={flight} onClose={() => setShowBookingPopup(false)} />
            )}
        </>
    );
}
