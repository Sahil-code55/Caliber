
import { NavLink ,Link } from "react-router-dom";
import {
  LayoutDashboard, PlusCircle, BookOpen, ChartNoAxesColumn,
  Settings as SettingsIcon, Code2, Search, Sun, Menu,
  ClipboardList, CheckCircle2, Laptop, Pencil, Trash2,
  ArrowRight, X, CircleHelp
} from "lucide-react";

import CaliberLogo from "../assets/"
export default function Sidebar() {

  const navItems = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard },
  { to: "/add", label: "Add Question", icon: PlusCircle },
  { to: "/questions", label: "Questions", icon: BookOpen },
  { to: "/stats", label: "Stats", icon: ChartNoAxesColumn },
  { to: "/settings", label: "Settings", icon: SettingsIcon },
];


  return(
    <aside className="flex w-full flex-col border-r  border-[#E5EAEA] bg-white p-5 md:min-h-screen md:w-60 md:shrink-0">
      <Link to="/" className="mb-4 flex items-center gap-3">
        {/* <span className="grid size-10 place-items-center rounded-xl bg-[#388087] text-white">
          <Code2 size={22} />
        </span>
        <span className="text-base font-bold">Interview Tracker</span> */}
        <img className="h-10" src={CaliberLogo} alt="Interview Tracker" srcset="" />
      </Link>

      <nav className="flex gap-2 overflow-x-auto md:flex-col">
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/"}
            onClick={close}
            className={({ isActive }) =>
              `flex shrink-0 items-center gap-3 rounded-xl px-3 py-3 text-sm transition ${
                isActive
                  ? "bg-[#E0F0EF] font-semibold text-[#286B72]"
                  : "text-[#64748B] hover:bg-[#F6F6F2]"
              }`
            }
          >
            <Icon size={19} />
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="mt-8 hidden items-center gap-3 border-t border-[#E5EAEA] pt-5 md:mt-auto md:flex">
        <div className="grid size-10 place-items-center rounded-full bg-[#388087] text-white">S</div>
        <div>
          <p className="text-sm font-semibold">Student</p>
          <p className="text-xs text-[#64748B]">Interview preparation</p>
        </div>
      </div>
    </aside>


) 


}

