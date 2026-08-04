import { BookingList } from "@/app/(dashboardGroup)/_components/BookingList";
import { ServiceSkeleton } from "@/app/(PublicGroup)/_components/services/ServiceSkeleton";
import { Suspense } from "react";

const ServicesPage = () => {
  return (
    <div>
      <Suspense fallback={<ServiceSkeleton />}>
        <BookingList />
      </Suspense>
    </div>
  );
};

export default ServicesPage;
