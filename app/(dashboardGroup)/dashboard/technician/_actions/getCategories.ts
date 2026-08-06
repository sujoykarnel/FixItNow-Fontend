"use server";

export const getCategories = async () => {
  const res = await fetch(`${process.env.BACKEND_API_URL}/api/categories`, {
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-cache",
    next: {
      revalidate: 0,
    },
  });

  const result = await res.json();

  return result;
};
