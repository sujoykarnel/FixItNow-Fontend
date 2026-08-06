import { ISidebarItem } from "@/lib/types";
import { BookIcon, LayoutDashboard } from "lucide-react";

export const TECHNICIAN_SIDEBAR_ITEMS: ISidebarItem[] = [
  {
    label: "Dashboard",
    href: "/dashboard/technician",
    icon: LayoutDashboard,
  },
 
  {
    label: "My Booking",
    href: "/dashboard/technician/bookings",
    icon: BookIcon,
  },
];
