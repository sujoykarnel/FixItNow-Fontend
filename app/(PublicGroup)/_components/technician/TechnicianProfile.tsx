/* eslint-disable @typescript-eslint/no-explicit-any */
import { MapPin, Star, Briefcase, Mail, Phone, Clock } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getTecnicianById } from "../../_actions/getTecnician";
import ServiceBookingButton from "../services/ServiceBookingButton";

type IdProps = {
  id: string;
};

export const TechnicianProfile = async ({ id }: IdProps) => {
  const technician = await getTecnicianById({ id });

  const data = technician?.data;

  if (!data) {
    return (
      <div className="container mx-auto py-20 text-center">
        Technician not found.
      </div>
    );
  }
  return (
    <div className="container mx-auto max-w-5xl py-10">
      <Card className="overflow-hidden">
        <CardHeader className="bg-muted/40">
          <div className="flex flex-col gap-6 md:flex-row md:items-center">
            <Avatar className="h-28 w-28 text-3xl">
              <AvatarFallback className="text-4xl">
                {data.user.name
                  ?.split(" ")
                  .map((n: string) => n[0])
                  .join("")
                  .toUpperCase()}
              </AvatarFallback>
            </Avatar>

            <div className="flex-1 space-y-3">
              <div>
                <h1 className="text-3xl font-bold">{data.user.name}</h1>
                <p className="text-muted-foreground">Professional Technician</p>
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge>{data.user.role}</Badge>

                <Badge
                  variant={
                    data.user.status === "ACTIVE" ? "default" : "destructive"
                  }
                >
                  {data.user.status}
                </Badge>
              </div>
            </div>

            <div>
              <ServiceBookingButton id={data?.service[0]?.id} />
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-8 p-6">
          {/* About */}
          <div>
            <h2 className="mb-3 text-xl font-semibold">About</h2>

            <p className="text-muted-foreground">
              {data.bio || "No biography available."}
            </p>
          </div>

          <Separator />

          {/* Information */}
          <div>
            <h2 className="mb-4 text-xl font-semibold">
              Technician Information
            </h2>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="flex items-center gap-3">
                <Briefcase className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Experience</p>
                  <p className="text-sm text-muted-foreground">
                    {data.experience} Years
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Star className="h-5 w-5 text-yellow-500" />
                <div>
                  <p className="font-medium">Rating</p>
                  <p className="text-sm text-muted-foreground">
                    {data.avgRating} / 5
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-sm text-muted-foreground">
                    {data.location || "Not specified"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Availability</p>
                  <p className="text-sm text-muted-foreground">
                    {data.availableStart && data.availableEnd
                      ? `${data.availableStart} - ${data.availableEnd}`
                      : "Not available"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">
                    {data.user.email}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-sm text-muted-foreground">
                    {data.user.phone}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Separator />

          {/* Services */}
          <div>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold">Services</h2>
            </div>

            {data.service.length === 0 ? (
              <div className="rounded-lg border border-dashed p-8 text-center text-muted-foreground">
                No services available.
              </div>
            ) : (
              <div className="grid gap-4">
                {data.service.map((service: any) => (
                  <Card key={service.id}>
                    <CardContent className="space-y-4 p-5">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-lg font-semibold">
                            {service.title}
                          </h3>

                          <p className="mt-2 text-sm text-muted-foreground">
                            {service.discription}
                          </p>
                        </div>

                        <Badge className="shrink-0">${service.price}</Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>

          <Separator />

          {/* Reviews */}
          <div>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold">Reviews</h2>

              <Badge variant="secondary">{data.reviews.length} Reviews</Badge>
            </div>

            {data.reviews.length === 0 ? (
              <div className="rounded-lg border border-dashed p-8 text-center text-muted-foreground">
                No reviews yet.
              </div>
            ) : (
              <div className="space-y-4">
                {data.reviews.map((review: any) => (
                  <Card key={review.id}>
                    <CardContent className="space-y-2 p-4">
                      <div className="flex items-center justify-between">
                        <p className="font-semibold">
                          {review.user?.name ?? "Anonymous"}
                        </p>

                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                          {review.rating}
                        </div>
                      </div>

                      <p className="text-muted-foreground">{review.comment}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
