import { Suspense } from "react";
import { FeaturedServiceList } from "./_components/services/FeaturedServiceList";
import { ServiceSkeleton } from "./_components/services/ServiceSkeleton";

export default function Home() {
  return (
    <div>
      <Suspense fallback={<ServiceSkeleton />}>
        <FeaturedServiceList />
      </Suspense>
    </div>
  );
}
