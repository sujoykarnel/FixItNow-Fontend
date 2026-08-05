"use server";

import { cookies } from "next/headers";

export async function getAccessToken() {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

  if (!accessToken) {
    throw new Error("User not logged in");
  }

  return accessToken;
}
