"use client";

import { useActionState, useEffect } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { updateTechnicianProfile } from "../_actions/updateProfile";
import { useRouter } from "next/navigation";

const initialState = {
  success: false,
  message: "",
};

type Technician = {
  id: string;
  bio: string | null;
  experience: number;
  location: string | null;
  availableStart: string | null;
  availableEnd: string | null;
};

type Props = {
  technician: Technician;
};

function toTimeInput(time: string | null): string {
  if (!time) return "";

  const [clock, period] = time.split(" ");
  const [rawHour, minute] = clock.split(":").map(Number);

  let hour = rawHour;

  if (period === "PM" && hour !== 12) {
    hour += 12;
  }

  if (period === "AM" && hour === 12) {
    hour = 0;
  }

  return `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
}

export default function TechnicianProfileForm({ technician }: Props) {
  const router = useRouter();
  const [state, formAction, pending] = useActionState(
    updateTechnicianProfile,
    initialState,
  );

  useEffect(() => {
    if (!state.message) return;

    if (state.success) {
      toast.success(state.message);
      router.push("/dashboard/technician");
    } else {
      toast.error(state.message);
    }
  }, [router, state]);

  return (
    <form action={formAction} className="space-y-6 rounded-lg border p-6">
      <div className="space-y-2">
        <label htmlFor="bio" className="text-sm font-medium">
          Bio
        </label>

        <Textarea
          id="bio"
          name="bio"
          rows={5}
          placeholder="Tell customers about yourself..."
          defaultValue={technician.bio ?? ""}
          required
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="experience" className="text-sm font-medium">
            Experience (Years)
          </label>

          <Input
            id="experience"
            name="experience"
            type="number"
            step="0.5"
            min="0"
            defaultValue={technician.experience}
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="location" className="text-sm font-medium">
            Location
          </label>

          <Input
            id="location"
            name="location"
            placeholder="Enter Location"
            defaultValue={technician.location ?? ""}
            required
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="availableStart" className="text-sm font-medium">
            Available From
          </label>

          <Input
            id="availableStart"
            name="availableStart"
            type="time"
            defaultValue={toTimeInput(technician.availableStart)}
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="availableEnd" className="text-sm font-medium">
            Available Until
          </label>

          <Input
            id="availableEnd"
            name="availableEnd"
            type="time"
            defaultValue={toTimeInput(technician.availableEnd)}
            required
          />
        </div>
      </div>

      <Button type="submit" disabled={pending} className="w-full">
        {pending ? "Updating..." : "Update Profile"}
      </Button>
    </form>
  );
}
