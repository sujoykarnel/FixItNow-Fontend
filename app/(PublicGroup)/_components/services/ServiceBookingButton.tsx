"use client";

import { Button } from "@/components/ui/button";
import { bookAction } from "../../_actions/bookAction";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";

type Props = {
  id: string;
};

const initialState = {
  success: false,
  message: "",
};

export default function ServiceBookingButton({ id }: Props) {
  const [state, action, pending] = useActionState(bookAction, initialState);

  useEffect(() => {
    if (!state.message) return;

    if (state.success) {
      toast.success(state.message);
    } else {
      toast.error(state.message);
    }
  }, [state]);
    
    console.log(id)

  return (
    <form action={action} className="w-full">
      <input type="hidden" name="serviceId" value={id} />

      <Button type="submit" disabled={pending || !id} className="w-full">
        {pending ? "Booking..." : "Book Now"}
      </Button>
    </form>
  );
}
