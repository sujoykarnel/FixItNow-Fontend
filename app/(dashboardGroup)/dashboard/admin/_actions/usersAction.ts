"use server";

import { getAccessToken } from "@/service/accessToken";

export const updateUserStatus = async (id: string, status: string) => {
  const accessToken = await getAccessToken();

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/admin/users/${id}`,
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


  return result;
};
