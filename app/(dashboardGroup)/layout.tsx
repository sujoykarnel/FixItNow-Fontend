import React from "react";

const DashboardGroupLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      PublicGroupLayout
      {children}
    </div>
  );
};

export default DashboardGroupLayout;