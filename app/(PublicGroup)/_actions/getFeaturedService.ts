"use server";

export const getFeaturedServises = async () => {
  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/services/featured`,
    {
      cache: "no-cache",
    },
  );

  const result = await res.json();

  return result;
};
