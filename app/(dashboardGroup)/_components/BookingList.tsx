import { IBooking } from "@/lib/types";
import { getBookings } from "../_actions/getBookings";
import BookingCard from "./BookingCard";

export const BookingList = async () => {
  const result = await getBookings();

  if (!result.success || !result.data?.length) {
    return (
      <p className="py-12 text-center text-muted-foreground">
        No Booking Found
      </p>
    );
  }

  return (
    <div className="space-y-8 ">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {result.data.map((booking: IBooking) => (
          <BookingCard key={booking.id} booking={booking} />
        ))}
      </div>
    </div>
  );
};
