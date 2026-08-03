import { Suspense } from "react";
import { TechnicianProfile } from "../../_components/technician/TechnicianProfile";
import { TechnicianSkeleton } from "../../_components/technician/TechnicianSkeleton";

const TechnicianPageById = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  return (
    <div>
      <Suspense fallback={<TechnicianSkeleton />}>
        <TechnicianProfile id={id} />
      </Suspense>
    </div>
  );
};

export default TechnicianPageById;
