"use client";

import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { createCategory } from "../_actions/createCategory";

const initialState = {
  success: false,
  message: "",
  errors: {},
};

export function CategoryForm() {
  const router = useRouter();

  const [state, formAction, pending] = useActionState(
    createCategory,
    initialState,
  );

  useEffect(() => {
    if (state.success) {
      toast.success(state.message);
      router.push("/dashboard/admin/categories");
    } else if (state.message) {
      toast.error(state.message);
    }
  }, [state, router]);

  return (
    <form action={formAction} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Category Name</Label>

        <Input id="name" name="name" placeholder="Enter Name" />

        {"name" in state.errors && (
          <p className="text-sm text-destructive">{state.errors.name}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="discription">Description</Label>

        <Textarea
          id="discription"
          name="discription"
          placeholder="Enter Discription"
        />

        {"discription" in state.errors && (
          <p className="text-sm text-destructive">{state.errors.discription}</p>
        )}
      </div>

      <Button disabled={pending}>
        {pending ? "Creating..." : "Create Category"}
      </Button>
    </form>
  );
}
