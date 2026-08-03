"use server";

type idProps = {
  id: string;
};

export const getTecnicianById = async ({ id }: idProps) => {

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/technicians/${id}`, {
    cache: "no-cache",
    next: {
      revalidate: 60 * 60 * 6,
      tags: ["tecnicians"],
    },
  });

    const result = await res.json();
    


  return result;
};
