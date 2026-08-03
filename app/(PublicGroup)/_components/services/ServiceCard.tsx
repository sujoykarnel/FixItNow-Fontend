import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ServiceProps } from "@/lib/types";
import { BriefcaseBusiness, Clock, Receipt, Star, Wrench } from "lucide-react";

import ServiceBookingButton from "./ServiceBookingButton";

export function ServiceCard({ service }: ServiceProps) {
  return (
    <Card className="group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-traslate-y-1 hover:shadow-xl">
      <div className="flex items-center justify-center p-8">
        <Wrench className="h-20 w-20 text-primary transition-transform group-hover:scale-110" />
      </div>

      <CardHeader className="space-y-3">
        <div className="flex items-center justify-between">
          <Badge>{service.category.name}</Badge>
          <Badge variant={"secondary"} className="font-bold">
            <Receipt />
            {service.price}/-
          </Badge>
        </div>
        <CardTitle>{service.title}</CardTitle>
        {/* <CardDescription>{service.discription}</CardDescription> */}
        <p className="line-clamp-2 text-sm text-muted-foreground">
          {service.discription}
        </p>
        <CardContent className="flex-1 space-y-3">
          <div className="flex items-center gap-2 text-sm">
            <BriefcaseBusiness className="h-4 w-4 text-primary" />
            <span>
              {service.technicianProfile.experience || "Location not provided"}
            </span>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span>{service.technicianProfile.avgRating}</span>
          </div>

          {service.technicianProfile.availableStart &&
            service.technicianProfile.availableEnd && (
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4 text-primary" />
                <span>
                  {service.technicianProfile.availableStart} -
                  {service.technicianProfile.availableEnd}
                </span>
              </div>
            )}
        </CardContent>
      </CardHeader>
      <CardFooter className="mt-auto">
        <ServiceBookingButton id={service.id} />
      </CardFooter>
    </Card>
  );
}
