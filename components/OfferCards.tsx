"use client";
const offers = [
  {
    title: "Up to 50% off on Europe Flights",
    subtitle: "Book early and save big!",
  },
  {
    title: "Exclusive Deals to Asia",
    subtitle: "Limited time offers!",
  },
  {
    title: "Luxury Flights to USA",
    subtitle: "Travel in style and comfort",
  },
];
export default function OfferCards() {
  return (
    <div className="w-full py-16 bg-gray-100 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
        Special Offers
      </h2>

      <div className="max-w-6xl w-full grid md:grid-cols-3 gap-6 px-4">
        {offers.slice(0, 3).map((offer, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between hover:shadow-xl transition"
          >
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                {offer.title}
              </h3>
              <p className="text-gray-600">{offer.subtitle}</p>
            </div>
            <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition self-start">
              View More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
