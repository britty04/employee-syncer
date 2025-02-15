
import { NavLink } from "react-router-dom";
import { 
  LayoutDashboard, 
  Users, 
  CalendarCheck, 
  FileBarChart,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

interface SidebarProps {
  open: boolean;
  onToggle: () => void;
}

const Sidebar = ({ open, onToggle }: SidebarProps) => {
  const navItems = [
    { to: "/", icon: LayoutDashboard, label: "Dashboard" },
    { to: "/employees", icon: Users, label: "Employees" },
    { to: "/attendance", icon: CalendarCheck, label: "Attendance" },
    { to: "/reports", icon: FileBarChart, label: "Reports" },
  ];

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 h-screen bg-white border-r transition-all duration-300 ease-in-out z-10",
        open ? "w-64" : "w-20"
      )}
    >
      <div className="flex items-center justify-between h-16 px-4 border-b">
        <h1 className={cn("font-semibold transition-opacity", 
          open ? "opacity-100" : "opacity-0"
        )}>
          FR8 Attendance
        </h1>
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggle}
          className="hover:bg-gray-100"
        >
          {open ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </Button>
      </div>
      <nav className="p-4">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              cn(
                "flex items-center px-4 py-3 mb-2 rounded-lg transition-colors",
                "hover:bg-gray-100",
                isActive && "bg-primary/10 text-primary hover:bg-primary/20",
                !open && "justify-center px-2"
              )
            }
          >
            <Icon size={20} />
            <span
              className={cn(
                "ml-3 transition-opacity",
                open ? "opacity-100" : "opacity-0 w-0"
              )}
            >
              {label}
            </span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
