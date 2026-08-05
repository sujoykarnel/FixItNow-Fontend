import { getTechnicianBookings } from "@/app/(dashboardGroup)/_actions/bookingsActions";
import BookingTable from "@/app/(dashboardGroup)/_components/BookingTable";
import { TableSkeleton } from "@/app/(dashboardGroup)/_components/TableSkeleton";
import React, { Suspense } from "react";

const TechnicianBookings = async () => {
  const result = await getTechnicianBookings();

  return (
    <div>
      <Suspense fallback={<TableSkeleton />}>
        <BookingTable bookings={result.data} />
      </Suspense>
    </div>
  );
};

export default TechnicianBookings;
