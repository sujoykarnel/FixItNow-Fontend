"use server";

import { getAccessToken } from "@/service/accessToken";

export const getCustomerBookings = async () => {
  const accessToken = await getAccessToken();

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/bookings`, {
    headers: {
      Cookie: `accessToken=${accessToken}`,
    },
    cache: "no-cache",
    next: {
      revalidate: 0,
    },
  });

  const result = await res.json();

  console.log(result);

  return result;
};

export const getTechnicianBookings = async () => {
  const accessToken = await getAccessToken();

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/technicians/bookings`,
    {
      headers: {
        Cookie: `accessToken=${accessToken}`,
      },
      cache: "no-cache",
      next: {
        revalidate: 0,
      },
    },
  );

  const result = await res.json();

  console.log(result);

  return result;
};

export const updateBookingStatus = async (id: string, status: string) => {
  const accessToken = await getAccessToken();


  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/bookings/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Cookie: `accessToken=${accessToken}`,
      },
      body: JSON.stringify({
        status,
      }),
      cache: "no-cache",
      next: {
        revalidate: 0,
      },
    },
  );

  const result = await res.json();

  console.log(result);

  return result;
};
