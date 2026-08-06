"use server";

import { getAccessToken } from "@/service/accessToken";
import { revalidatePath } from "next/cache";

export async function createReview(
  bookingId: string,
  payload: {
    rating: number;
    comment: string;
  },
) {
    const accessToken = await getAccessToken();
    
    console.log(bookingId)

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/reviews/booking/${bookingId}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Cookie: `accessToken=${accessToken}`,
      },
      body: JSON.stringify(payload),
    },
  );

  const result = await res.json();

  if (result.success) {
    revalidatePath("/dashboard/customer/bookings");
  }

  console.log(result);

  return result;
}
