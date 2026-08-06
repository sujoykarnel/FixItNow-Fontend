/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Briefcase,
  Clock,
  Mail,
  MapPin,
  Pencil,
  Phone,
  Star,
  User,
} from "lucide-react";
import { getTechnician } from "./_actions/getTecnician";

export default async function TechnicianProfile() {
  const profile = await getTechnician();
  const technician = profile.data;

  console.log(profile)

  return (
    <div className="mx-auto max-w-5xl p-6">
      <Card>
        <CardHeader className="border-b">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl">Technician Profile</CardTitle>
              <p className="text-muted-foreground mt-1">
                Manage your professional information.
              </p>
            </div>

            <Badge
              variant={
                technician?.user?.status === "ACTIVE" ? "default" : "destructive"
              }
            >
              {technician.user.status}
            </Badge>
          </div>
        </CardHeader>

        <CardContent className="space-y-8 pt-6">
          {/* Personal Information */}
          <section>
            <h2 className="mb-4 text-lg font-semibold">Personal Information</h2>

            <div className="grid gap-4 md:grid-cols-2">
              <InfoItem
                icon={<User className="h-5 w-5" />}
                label="Name"
                value={technician.user.name}
              />

              <InfoItem
                icon={<Mail className="h-5 w-5" />}
                label="Email"
                value={technician.user.email}
              />

              <InfoItem
                icon={<Phone className="h-5 w-5" />}
                label="Phone"
                value={technician.user.phone}
              />

              <InfoItem
                icon={<MapPin className="h-5 w-5" />}
                label="Location"
                value={technician.location || "Not Added"}
              />
            </div>
          </section>

          {/* Professional Information */}
          <section>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold">
                Professional Information
              </h2>

              <Button>
                <Pencil className="mr-2 h-4 w-4" />
                Edit Profile
              </Button>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <InfoItem
                icon={<Briefcase className="h-5 w-5" />}
                label="Experience"
                value={`${technician.experience} Years`}
              />

              <InfoItem
                icon={<Star className="h-5 w-5" />}
                label="Average Rating"
                value={`${technician.avgRating} / 5`}
              />

              <InfoItem
                icon={<Clock className="h-5 w-5" />}
                label="Available Time"
                value={
                  technician.availableStart && technician.availableEnd
                    ? `${technician.availableStart} - ${technician.availableEnd}`
                    : "Not Set"
                }
              />

              <InfoItem
                icon={<Briefcase className="h-5 w-5" />}
                label="Services"
                value={`${technician.service.length} Service(s)`}
              />

              <InfoItem
                icon={<Star className="h-5 w-5" />}
                label="Reviews"
                value={`${technician.reviews.length} Review(s)`}
              />
            </div>
          </section>

          {/* Bio */}
          <section>
            <h2 className="mb-3 text-lg font-semibold">Bio</h2>

            <div className="rounded-lg border p-4 text-muted-foreground">
              {technician.bio || "No bio added yet."}
            </div>
          </section>

          {/* Services */}
          <section>
            <h2 className="mb-4 text-lg font-semibold">Services Offered</h2>

            <div className="space-y-4">
              {technician.service.length > 0 ? (
                technician.service?.map((service: any) => (
                  <Card key={service.id}>
                    <CardContent className="p-5">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-lg">
                            {service.title}
                          </h3>

                          <p className="mt-1 text-sm text-muted-foreground">
                            {service.discription}
                          </p>
                        </div>

                        <Badge>${service.price}</Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <p className="text-muted-foreground">No services available.</p>
              )}
            </div>
          </section>

          {/* Reviews */}
          <section>
            <h2 className="mb-4 text-lg font-semibold">Recent Reviews</h2>

            <div className="space-y-4">
              {technician.reviews.length > 0 ? (
                technician.reviews.map((review: any) => (
                  <Card key={review.id}>
                    <CardContent className="space-y-3 p-5">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">{review.customer.name}</h3>

                        <Badge variant="secondary">⭐ {review.rating}/5</Badge>
                      </div>

                      <p className="text-muted-foreground">{review.comment}</p>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <p className="text-muted-foreground">No reviews yet.</p>
              )}
            </div>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}

type InfoProps = {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
};

function InfoItem({ icon, label, value }: InfoProps) {
  return (
    <div className="flex items-start gap-3 rounded-lg border p-4">
      <div className="text-primary mt-1">{icon}</div>

      <div>
        <p className="text-muted-foreground text-sm">{label}</p>
        <p className="font-medium">{value}</p>
      </div>
    </div>
  );
}
