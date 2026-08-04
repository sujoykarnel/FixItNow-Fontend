"use server";

type idProps = {
  id: string;
};

export const getTecnicianById = async ({ id }: idProps) => {
  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/technicians/${id}`,
    {
      cache: "no-cache",
    },
  );

  const result = await res.json();

  return result;
};
