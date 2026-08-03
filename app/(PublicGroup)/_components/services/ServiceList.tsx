import { IService } from "@/lib/types";
import { getServises } from "../../_actions/getService";
import { ServiceCard } from "./ServiceCard";

export const ServiceList = async ({
  searchParams,
}: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const query = await searchParams;
  const result = await getServises({ query });

  if (!result.success || !result.data?.length) {
    return (
      <p className="py-12 text-center text-muted-foreground">
        No Service Found
      </p>
    );
  }

  return (
    <div className="space-y-8 ">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {result.data.map((service: IService) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};
