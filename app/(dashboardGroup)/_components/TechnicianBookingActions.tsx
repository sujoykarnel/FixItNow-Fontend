"use client";

import { Button } from "@/components/ui/button";
import { IBooking } from "@/lib/types";
import Link from "next/link";
import { updateBookingStatus } from "../_actions/bookingsActions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type Props = {
  booking: IBooking;
};

export default function TechnicianBookingActions({ booking }: Props) {
  const router = useRouter();
  const handleBookingButton = async (status: string) => {
    const result = await updateBookingStatus(booking.id, status);
    if (result.success) {
      toast.success(`Booking ${result.data.status.toLowerCase()}`);
      router.refresh();
    }
    console.log(result);
  };

  return (
    <div className="flex w-full gap-2">
      <Button asChild className="flex-1">
        <Link href={`/bookings/${booking.id}`}>Details</Link>
      </Button>

      {booking.status === "REQUESTED" && (
        <>
          <Button
            onClick={async () => await handleBookingButton("ACCEPTED")}
            className="flex-1"
          >
            Accept
          </Button>

          <Button
            onClick={async () => await handleBookingButton("DECLINED")}
            variant="destructive"
            className="flex-1"
          >
            Decline
          </Button>
        </>
      )}

      {booking.status === "PAID" && (
        <Button
          onClick={async () => await handleBookingButton("IN_PROGRESS")}
          className="flex-1"
        >
          Start Job
        </Button>
      )}

      {booking.status === "IN_PROGRESS" && (
        <Button
          onClick={async () => await handleBookingButton("COMPLETED")}
          className="flex-1"
        >
          Complete Job
        </Button>
      )}
    </div>
  );
}
