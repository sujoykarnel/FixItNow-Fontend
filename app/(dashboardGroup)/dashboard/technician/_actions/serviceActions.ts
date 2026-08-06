"use server";

import { ServiceState } from "@/lib/types";
import { getAccessToken } from "@/service/accessToken";

export const createService = async (
  prevState: ServiceState,
  formData: FormData,
) => {
  const accessToken = await getAccessToken();
  const categoryId = formData.get("categoryId");
  const title = formData.get("title");
  const discription = formData.get("discription");
  const price = Number(formData.get("price"));
  const isFeatured = formData.get("isFeatured") === "true";

  const payload = {
    categoryId,
    title,
    discription,
    price,
    isFeatured,
  };

  console.log(payload);

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/services`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Cookie: `accessToken=${accessToken}`,
    },
    body: JSON.stringify(payload),
  });

  const result = await res.json();

  return result;
};
