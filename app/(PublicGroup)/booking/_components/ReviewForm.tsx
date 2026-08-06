"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Star } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { createReview } from "../_action/reviewActions";



type Props = {
  bookingId: string;
};

export default function ReviewForm({ bookingId }: Props) {
  const router = useRouter();

  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);

    const result = await createReview(bookingId, {
      rating,
      comment,
    });

    setLoading(false);

    if (result.success) {
      toast.success("Review submitted successfully.");
      router.push("/dashboard/customer/bookings");
      router.refresh();
    } else {
      toast.error(result.message || "Something went wrong.");
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <Label className="mb-3 block">Rating</Label>

        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button type="button" key={star} onClick={() => setRating(star)}>
              <Star
                className={`h-8 w-8 transition ${
                  star <= rating
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <Label>Comment</Label>

        <Textarea
          rows={5}
          placeholder="Write your review..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </div>

      <Button className="w-full" onClick={handleSubmit} disabled={loading}>
        {loading ? "Submitting..." : "Submit Review"}
      </Button>
    </div>
  );
}
