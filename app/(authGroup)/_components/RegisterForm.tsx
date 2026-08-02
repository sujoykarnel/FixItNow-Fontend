"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useActionState, useEffect, useState } from "react";
import { registerAction } from "../_actions/authAction";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

export function RegisterForm() {
  const [state, action, pending] = useActionState(registerAction, false);
  const [role, setRole] = useState("");

  useEffect(() => {
    if (!state) return;
    if (state.success) {
      toast.success(state.message || "Registration successful");
    }

    if (!state.success) {
      toast.error(state.message || "Ragistration failed");
    }
  }, [state]);

  return (
    <form action={action} className="space-y-4">
      <Card className="p-5 space-y-4">
        <Input name="name" type="text" placeholder="Enter Your Name" required />
        <Input
          name="email"
          type="email"
          placeholder="Enter Your Email"
          required
        />
        <Input
          name="password"
          type="password"
          placeholder="Enter Your Password"
          required
        />
        <Input
          name="phone"
          type="number"
          placeholder="Enter Your Phone"
          required
        />

        <input type="hidden" name="role" value={role} />

        <Select value={role} onValueChange={setRole}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a Role" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Roles</SelectLabel>
              <SelectItem value="customer">Customer</SelectItem>
              <SelectItem value="technician">Technician</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Button type="submit">{pending ? "Submitting..." : "Register"}</Button>
        <p>
          Have any account? Please{" "}
          <Link href={"/login"} className="text-blue-600 underline ">
            login
          </Link>{" "}
          here.
        </p>
      </Card>
    </form>
  );
}
