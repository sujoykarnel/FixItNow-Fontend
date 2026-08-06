"use server";

import { getMe } from "@/service/getMe";

export const getTechnician = async () => {
  const user = await getMe();
  console.log(user);
  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/technicians/${user.data.techinicianProfile.id}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
      next: {
        revalidate: 0,
      },
    },
  );

  const result = await res.json();

  return result;
};
