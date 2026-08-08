import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Phone, User } from "lucide-react";
import { getMe } from "@/service/getMe";

export default async function CustomerProfile() {
  const profile = await getMe();
  const user = profile.data;



  return (
    <div className="mx-auto max-w-5xl p-6">
      <Card>
        <CardHeader className="border-b">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl">Customer Profile</CardTitle>
              <p className="text-muted-foreground mt-1">
                Manage your professional information.
              </p>
            </div>

            <Badge
              variant={user?.status === "ACTIVE" ? "default" : "destructive"}
            >
              {user.status}
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
                value={user.name}
              />

              <InfoItem
                icon={<Mail className="h-5 w-5" />}
                label="Email"
                value={user.email}
              />

              <InfoItem
                icon={<Phone className="h-5 w-5" />}
                label="Phone"
                value={user.phone}
              />

              <InfoItem
                icon={<MapPin className="h-5 w-5" />}
                label="Location"
                value={user.location || "Not Added"}
              />
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
