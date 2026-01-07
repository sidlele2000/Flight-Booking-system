import { ReactNode } from "react";
export interface Flight {
  id: string;
  price: { total: string };
  itineraries: {
    segments: {
      carrierCode: ReactNode;
      departure: { iataCode: string };
      arrival: { iataCode: string };
    }[];
  }[];
}
