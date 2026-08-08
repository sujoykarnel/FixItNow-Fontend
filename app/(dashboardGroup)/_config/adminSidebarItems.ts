import { ISidebarItem } from "@/lib/types";
import { BookIcon, LayoutDashboard } from "lucide-react";

export const ADMIN_SIDEBAR_ITEMS: ISidebarItem[] = [
  {
    label: "Dashboard",
    href: "/dashboard/admin",
    icon: LayoutDashboard,
  },
  {
    label: "Users",
    href: "/dashboard/admin/users",
    icon: BookIcon,
  },
  {
    label: "Categories",
    href: "/dashboard/admin/categories",
    icon: BookIcon,
  },
];
