"use server";

export const getServises = async () => {
  const res = await fetch(`${process.env.BACKEND_API_URL}/api/services`, {
    cache: "no-cache",
    next: {
      revalidate: 60 * 60 * 6,
      tags: ["services"],
    },
  });

  const result = await res.json();

  return result;
};
