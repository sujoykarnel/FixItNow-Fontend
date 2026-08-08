"use client";

import { updateBookingStatus } from "@/app/(dashboardGroup)/_actions/bookingsActions";
import { Button } from "@/components/ui/button";
import { IBooking } from "@/lib/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type Props = {
  booking: IBooking;
};

export default function CustomerBookingActions({ booking }: Props) {
  const router = useRouter();
    const handleBookingButton = async (status: string) => {
      const result = await updateBookingStatus(booking.id, status);
      if (result.success) {
        toast.success(`Booking ${result.data.status.toLowerCase()}`);
        router.refresh();
      }
  
    };
  return (
    <div className="flex w-full gap-2">
      <Button asChild className="flex-1">
        <Link href={`/booking/${booking.id}`}>Details</Link>
      </Button>

      {booking.status === "REQUESTED" && (
        <Button
          onClick={async () => await handleBookingButton("CANCELLED")}
          variant="destructive"
          className="flex-1"
        >
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

      {booking.status === "COMPLETED" &&
        (booking.review ? (
          <Button disabled className="flex-1">
            Reviewed
          </Button>
        ) : (
          <Button asChild className="flex-1">
            <Link href={`/booking/review/${booking.id}`}>Review</Link>
          </Button>
        ))}
    </div>
  );
}
