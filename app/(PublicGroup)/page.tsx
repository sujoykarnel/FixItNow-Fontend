import { Suspense } from "react";
import { ServiceList } from "./_components/services/ServiceList";
import { ServiceSkeleton } from "./_components/services/ServiceSkeleton";

export default function Home() {
  return (
    <div>
      <Suspense fallback={<ServiceSkeleton />}>
        <ServiceList />
      </Suspense>
    </div>
  );
}
