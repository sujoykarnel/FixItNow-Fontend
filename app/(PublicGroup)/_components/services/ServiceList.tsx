import { IService } from "@/lib/types";
import { getServises } from "../../_actions/getService";
import { ServiceCard } from "./ServiceCard";

export const ServiceList = async () => {
  const result = await getServises();

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
