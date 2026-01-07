"use client";
interface BookingPopupProps {
    flight: any;
    onClose: () => void;
}
export default function BookingPopup({ flight, onClose }: BookingPopupProps) {
    if (!flight) return null;

    const itinerary = flight.itineraries[0];
    const segments = itinerary?.segments || [];
    if (!segments.length) return null;
    const departure = segments[0];
    const arrival = segments[segments.length - 1];
    const airlineCode = departure?.carrierCode || "N/A";

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="bg-white rounded-xl p-6 md:p-8 w-11/12 md:w-1/3 shadow-lg relative">
                <h2 className="text-2xl font-bold mb-4">Booking Details</h2>
                <p>
                    Airline: <span className="font-bold text-xl">{airlineCode}</span>
                </p>
                <p>
                    From: <span className="font-bold text-xl">{departure?.departure?.iataCode}</span>
                </p>
                <p>
                    To: <span className="font-bold text-xl">{arrival?.arrival?.iataCode}</span>
                </p>
                <p>
                    Price: <span className="font-bold text-xl">{flight.price?.currency} {flight.price?.total}</span>
                </p>

                <p className="mt-4 text-green-600 font-bold text-xl">
                    Booking successful!
                </p>

                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl font-bold"
                >
                   ✕
                </button>
            </div>
        </div>
    );
}
