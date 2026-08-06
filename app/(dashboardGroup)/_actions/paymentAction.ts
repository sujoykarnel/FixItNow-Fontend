"use server";

import { getAccessToken } from "@/service/accessToken";

export async function createPayment(bookingId: string) {
  const accessToken = await getAccessToken();

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/payments/checkout/${bookingId}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Cookie: `accessToken=${accessToken}`,
      },
    },
  );

  return res.json();
}
