import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IBooking } from "@/lib/types";
import BookingRow from "./BookingRow";


type Props = {
  bookings: IBooking[];
};

const BookingTable = ({ bookings }: Props) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Service</TableHead>
          <TableHead>Technician</TableHead>
          <TableHead className="text-center">Date</TableHead>
          <TableHead>Location</TableHead>
          <TableHead className="text-center">Amount</TableHead>
          <TableHead className="text-center">Status</TableHead>
          <TableHead className="text-center">Actions</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {bookings?.map((booking) => (
          <BookingRow key={booking.id} booking={booking} />
        ))}
      </TableBody>
    </Table>
  );
};

export default BookingTable;
