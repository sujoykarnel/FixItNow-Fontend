import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Star,
  Clock,
} from "lucide-react";
import { getMe } from "@/service/getMe";



export default async function TechnicianProfile() {
  const profile = await getMe()
  

  return (
    <div className="mx-auto max-w-4xl p-6">
      <Card>
        <CardHeader className="border-b">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl">Technician Profile</CardTitle>
              <p className="text-muted-foreground mt-1">
                View your profile information.
              </p>
            </div>

            <Badge
              variant={profile.status === "ACTIVE" ? "default" : "destructive"}
            >
              {profile.status}
            </Badge>
          </div>
        </CardHeader>

        <CardContent className="space-y-8 pt-6">
          {/* Personal Information */}
          <div>
            <h2 className="mb-4 text-lg font-semibold">Personal Information</h2>

            <div className="grid gap-4 md:grid-cols-2">
              <InfoItem
                icon={<User className="h-5 w-5" />}
                label="Name"
                value={profile.data?.name}
              />

              <InfoItem
                icon={<Mail className="h-5 w-5" />}
                label="Email"
                value={profile.data.email}
              />

              <InfoItem
                icon={<Phone className="h-5 w-5" />}
                label="Phone"
                value={profile.data.phone}
              />

              <InfoItem
                icon={<MapPin className="h-5 w-5" />}
                label="Location"
                value={profile.data.techinicianProfile.location || "Not Added"}
              />
            </div>
          </div>

          {/* Professional Information */}
          <div>
            <h2 className="mb-4 text-lg font-semibold">
              Professional Information
            </h2>

            <div className="grid gap-4 md:grid-cols-2">
              <InfoItem
                icon={<Briefcase className="h-5 w-5" />}
                label="Experience"
                value={`${profile.data.techinicianProfile.experience || 0} Years`}
              />

              <InfoItem
                icon={<Star className="h-5 w-5" />}
                label="Average Rating"
                value={profile.data.techinicianProfile ? `${profile.data.techinicianProfile.avgRating} / 5`: "N/A"}
              />

              <InfoItem
                icon={<Clock className="h-5 w-5" />}
                label="Available Time"
                value={
                  profile.data.techinicianProfile.availableStart && profile.data.techinicianProfile.availableEnd
                    ? `${profile.data.techinicianProfile.availableStart} - ${profile.data.techinicianProfile.availableEnd}`
                    : "Not Set"
                }
              />
            </div>
          </div>

          {/* Bio */}
          <div>
            <h2 className="mb-3 text-lg font-semibold">Bio</h2>

            <div className="rounded-lg border p-4 text-muted-foreground">
              {profile.data.techinicianProfile.bio || "No bio added yet."}
            </div>
          </div>
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
