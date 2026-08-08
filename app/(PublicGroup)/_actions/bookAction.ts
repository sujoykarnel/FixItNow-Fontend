"use server";

import { cookies } from "next/headers";

export async function bookAction(prevState: unknown, formData: FormData) {
  try {
    const serviceId = formData.get("serviceId") as string;

    const cookieStore = await cookies();

    const accessToken = cookieStore.get("accessToken")?.value || null;

    if (!accessToken) {
      // throw new Error("User Not Logged In!");

      return {
        success: false,
        message: "User not logged in!",
      };
    }

  

    const res = await fetch(`${process.env.BACKEND_API_URL}/api/bookings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Cookie: `accessToken=${accessToken}`,
      },
      body: JSON.stringify({
        serviceId,
      }),
      cache: "no-store",
    });

    const result = await res.json();

    return {
      success: res.ok,
      message: result.message || "Booking completed",
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Something went wrong",
    };
  }
}
