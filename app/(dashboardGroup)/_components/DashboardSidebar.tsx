"use client";

import { ISidebarItem, NavbarProps } from "@/lib/types";
import { usePathname } from "next/navigation";
import { sidebarMenuItems } from "../_config/sideBarItems";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

export const DashboardSidebar = ({ user }: NavbarProps) => {
  const pathname = usePathname();

  let navItems: ISidebarItem[] = [];

  if (user.data.role === "CUSTOMER") {
    navItems = sidebarMenuItems.CUSTOMER;
  } else if (user.data.role === "TECHNICIAN") {
    navItems = sidebarMenuItems.TECHNICIAN;
  } else if (user.data.role === "ADMIN") {
    navItems = sidebarMenuItems.ADMIN;
  }

  return (
    <Sidebar
      collapsible="none"
      className="h-[calc(100svh-0rem)] border-r border-sidebar-border"
    >
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.href}
                    className="data-[active=true]:bg-primary data-[active=true]:text-primary-foreground"
                  >
                    <Link href={item.href}>
                      <item.icon />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};
