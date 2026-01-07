import Image from "next/image";
import partnerlogo from "../public/assets/partner-logo.png";

export default function PartnerLogos() {
  return (
    <div className="w-full flex flex-col items-center mt-[9%]">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
        Our Partners
      </h2>
      <div className="w-full max-w-6xl flex justify-center">
        <div className="relative w-full h-24 md:h-40">
          <Image
            src={partnerlogo}
            alt="Our Partners"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
