import { Suspense } from "react";
import FlightsClient from "./FlightsClient";

export default function Page() {
  return (
    <Suspense fallback={<p className="p-6">Loading flights...</p>}>
      <FlightsClient />
    </Suspense>
  );
}
