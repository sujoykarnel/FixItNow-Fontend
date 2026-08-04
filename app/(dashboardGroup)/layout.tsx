import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";
import { DashboardSidebar } from "./_components/DashboardSidebar";
import { getMe } from "@/service/getMe";

const DashboardGroupLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const user = await getMe();
  return (
    <div>
      <SidebarProvider>
        <div className="flex flex-1">
          <DashboardSidebar user={user} />
          <main className="flex-1 min-w-0 mx-2">{children}</main>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default DashboardGroupLayout;
