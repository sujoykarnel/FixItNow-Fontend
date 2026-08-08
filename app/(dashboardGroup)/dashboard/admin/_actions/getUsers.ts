"use server";

import { getAccessToken } from "@/service/accessToken";

export const getUsers = async () => {
  const accessToken = await getAccessToken();

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/admin/users`, {
    headers: {
      Cookie: `accessToken=${accessToken}`,
    },
    cache: "no-cache",
    next: {
      revalidate: 0,
    },
  });

  const result = await res.json();


  return result;
};

