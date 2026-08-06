/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { revalidatePath } from "next/cache";

import { getAccessToken } from "@/service/accessToken";

export async function createCategory(prevState: any, formData: FormData) {
  const token = await getAccessToken();

  const payload = {
    name: formData.get("name"),
    discription: formData.get("discription"),
  };

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/admin/categories`,
    {
      method: "POST",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    },
  );

  const result = await res.json();

  if (!res.ok) {
    return {
      success: false,
      message: result.message || "Failed to create category",
      errors: result.errorSources ?? {},
    };
  }

  revalidatePath("/dashboard/admin/categories");

  return {
    success: true,
    message: "Category created successfully.",
    errors: {},
  };
}
