import { IService } from "@/lib/types";
import { FeaturedServiceCard } from "./FeaturedServiceCard";
import { getFeaturedServises } from "../../_actions/getFeaturedService";

export const FeaturedServiceList = async () => {
 
  const result = await getFeaturedServises();

  if (!result.success || !result.data?.length) {
    return (
      <p className="py-12 text-center text-muted-foreground">
        No Service Found
      </p>
    );
  }

  return (
    <div className="space-y-8 ">
      <h2 className="text-center font-bold text-3xl">Featured Services</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {result.data.map((service: IService) => (
          <FeaturedServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};
