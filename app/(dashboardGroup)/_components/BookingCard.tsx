import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IBooking } from "@/lib/types";
import { Banknote, Calendar, MapPin, Star, User } from "lucide-react";
import React from "react";

type BookingProps = {
  booking: IBooking;
};

const BookingCard = ({ booking }: BookingProps) => {
  const statusColor = {
    REQUESTED: "bg-amber-100 text-amber-800 border-amber-200",
    ACCEPTED: "bg-blue-100 text-blue-800 border-blue-200",
    DECLINED: "bg-red-100 text-red-800 border-red-200",
    PAID: "bg-violet-100 text-violet-800 border-violet-200",
    IN_PROGRESS: "bg-green-100 text-green-800 border-green-200",
    COMPLETED: "bg-gray-100 text-gray-800 border-gray-200",
    CANCELLED: "bg-red-900 text-white border-red-900",
  } as const;

  return (
    <Card key={booking.id}>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>{booking.service?.title}</CardTitle>

        <Badge
          className={statusColor[booking.status as keyof typeof statusColor]}
        >
          {booking.status}
        </Badge>
      </CardHeader>

      <CardContent className="space-y-3">
        <div className="flex items-center gap-2">
          <User className="h-4 w-4" />
          <span>{booking.service?.technicianProfile?.user?.name}</span>
        </div>

        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          <span>{new Date(booking.bookingDate).toLocaleDateString()}</span>
        </div>

        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4" />
          <span>{booking.service.technicianProfile.location ?? "N/A"}</span>
        </div>

        <div className="flex items-center gap-2">
          <Star className="h-4 w-4 text-yellow-500" />
          <span>{booking.service.technicianProfile.avgRating}</span>
        </div>

        <div className="flex items-center gap-2">
          <Banknote className="h-4 w-4" />
          <span>৳{booking.amount}</span>
        </div>
      </CardContent>

      <CardFooter>
        <Button className="w-full">View Details</Button>
      </CardFooter>
    </Card>
  );
};

export default BookingCard;
