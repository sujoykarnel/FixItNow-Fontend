"use client";

import { Button } from "@/components/ui/button";
import { IBooking } from "@/lib/types";
import Link from "next/link";

type Props = {
  booking: IBooking;
};

export default function CustomerBookingActions({ booking }: Props) {
  return (
    <div className="flex w-full gap-2">
      <Button asChild className="flex-1">
        <Link href={`/bookings/${booking.id}`}>Details</Link>
      </Button>

      {booking.status === "REQUESTED" && (
        <Button variant="destructive" className="flex-1">
          Cancel
        </Button>
      )}

      {booking.status === "ACCEPTED" && (
        <Button className="flex-1">
          <Link href={`/dashboard/customer/bookings/${booking.id}/pay`}>
            Pay Now
          </Link>
        </Button>
      )}

      {booking.status === "COMPLETED" && (
        <Button className="flex-1">Review</Button>
      )}
    </div>
  );
}
