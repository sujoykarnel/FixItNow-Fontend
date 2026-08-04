import { ISidebarItem } from "@/lib/types";
import { BookIcon, LayoutDashboard } from "lucide-react";

export const CUSTOMER_SIDEBAR_ITEMS: ISidebarItem[] = [
  {
    label: "Dashboard",
    href: "/dashboard/customer",
    icon: LayoutDashboard,
  },
  {
    label: "My Booking",
    href: "/dashboard/customer/bookings",
    icon: BookIcon,
  },
];
