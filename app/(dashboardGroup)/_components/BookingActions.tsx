import { IBooking } from "@/lib/types";
import CustomerBookingActions from "../dashboard/customer/_components/CustomerBookingActions";
import TechnicianBookingActions from "../dashboard/technician/_components/TechnicianBookingActions";
import { getMe } from "@/service/getMe";


type Props = {
  booking: IBooking;
};

export default async function BookingActions({ booking }: Props) {
  const user = await getMe();
  const role = user.data.role;

  if (role === "TECHNICIAN") {
    return <TechnicianBookingActions booking={booking} />;
  }

  return <CustomerBookingActions booking={booking} />;
}
