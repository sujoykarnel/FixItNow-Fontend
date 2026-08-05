import { Badge } from "@/components/ui/badge";
import { TableCell, TableRow } from "@/components/ui/table";
import { IBooking } from "@/lib/types";
import { format } from "date-fns";
import BookingActions from "./BookingActions";

type Props = {
  booking: IBooking;
};

const badgeStyles = {
  REQUESTED: "bg-amber-100 text-amber-800 border-amber-300",
  ACCEPTED: "bg-blue-100 text-blue-800 border-blue-300",
  DECLINED: "bg-red-100 text-red-800 border-red-300",
  PAID: "bg-purple-100 text-purple-800 border-purple-300",
  IN_PROGRESS: "bg-green-100 text-green-800 border-green-300",
  COMPLETED: "bg-gray-100 text-gray-800 border-gray-300",
  CANCELLED: "bg-red-900 text-red-100 border-red-700",
} as const;

export default function BookingRow({ booking }: Props) {
  return (
    <TableRow>
      <TableCell className="font-medium">{booking.service?.title}</TableCell>

      <TableCell>
        {booking.service?.technicianProfile?.user?.name ?? "N/A"}
      </TableCell>

      <TableCell className="text-center">
        {format(new Date(booking.bookingDate), "dd MMM yyyy, hh:mm a")}
      </TableCell>

      <TableCell>
        {booking.service?.technicianProfile?.location ?? "N/A"}
      </TableCell>

      <TableCell className="text-center">
        {booking.service?.technicianProfile?.avgRating
          ? `⭐ ${booking.service.technicianProfile.avgRating}`
          : "N/A"}
      </TableCell>

      <TableCell className="text-center">৳{booking.amount}</TableCell>

      <TableCell className="text-center">
        <Badge className={badgeStyles[booking.status]}>{booking.status}</Badge>
      </TableCell>

      <TableCell className="min-w-45">
        <BookingActions booking={booking} />
      </TableCell>
    </TableRow>
  );
}
