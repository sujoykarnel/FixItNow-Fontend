"use server";

export const getServises = async ({
  query,
}: {
  query?: { [key: string]: string | string[] | undefined };
}) => {
    const params = new URLSearchParams()
    
    if (query && query.searchTerm) {
        params.set("searchTerm", query.searchTerm as string)
    }

    console.log(params.toString(), 'params')

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/services?${params.toString()}`,
    {
      cache: "no-cache",
      next: {
        revalidate: 60 * 60 * 6,
        tags: ["services"],
      },
    },
  );

  const result = await res.json();

  return result;
};
