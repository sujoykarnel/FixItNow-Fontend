"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useActionState, useEffect, useState } from "react";

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
import { createService } from "../_actions/serviceActions";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Checkbox } from "@/components/ui/checkbox";

type Category = {
  id: string;
  name: string;
};

type Props = {
  categories: Category[];
};

export function CreateServiceForm({ categories }: Props) {
  const [state, action, pending] = useActionState(createService, false);
  const [category, setCategory] = useState("");

  console.log(categories);

  useEffect(() => {
    if (!state) return;
    if (state.success) {
      toast.success(state.message || "Service created successful");
    }

    if (!state.success) {
      toast.error(state.message || "Service created failed");
    }
  }, [state]);

  return (
    <form action={action} className="space-y-4">
      <Card className="p-5 space-y-4">
        <Input name="title" type="text" placeholder="Title" required />
        <Input
          name="discription"
          type="text"
          placeholder="Discription"
          required
        />
        <Input name="price" type="number" placeholder="Price" required />

        <input type="hidden" name="categoryId" value={category} />

        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>

          <SelectContent>
            <SelectGroup>
              <SelectLabel>Categories</SelectLabel>
              {categories.map((item) => (
                <SelectItem key={item.id} value={item.id}>
                  {item.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <FieldGroup>
          <Field orientation="horizontal">
            <Checkbox id="isFeatured" name="isFeatured" value="true" />
            <FieldLabel htmlFor="isFeatured">Featured Service</FieldLabel>
          </Field>
        </FieldGroup>

        <Button type="submit" disabled={pending}>
          {pending ? "Submitting..." : "Create"}
        </Button>
      </Card>
    </form>
  );
}
