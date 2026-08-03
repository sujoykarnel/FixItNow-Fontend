import React, { Suspense } from "react";
import { ServiceList } from "../_components/services/ServiceList";
import { ServiceSkeleton } from "../_components/services/ServiceSkeleton";
import { ServiceSearchBar } from "../_components/services/ServiceSearchBar";

const ServicesPage = ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  return (
    <div>
      <div>
        <ServiceSearchBar />
      </div>
      <Suspense fallback={<ServiceSkeleton />}>
        <ServiceList searchParams={searchParams} />
      </Suspense>
    </div>
  );
};

export default ServicesPage;
