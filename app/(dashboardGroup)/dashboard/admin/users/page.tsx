import { TableSkeleton } from "@/app/(dashboardGroup)/_components/TableSkeleton";
import React, { Suspense } from "react";
import UsersTable from "../_components/UsersTable";
import { getUsers } from "../_actions/getUsers";

const TechnicianBookings = async () => {
  const result = await getUsers();

  return (
    <div>
      <Suspense fallback={<TableSkeleton />}>
        <UsersTable users={result.data} />
      </Suspense>
    </div>
  );
};

export default TechnicianBookings;
