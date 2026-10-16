import { Search, Sun } from "lucide-react";


export default function Header({ title, subtitle, search, setSearch }) {
  return (
    <header className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <p className="mb-1 text-xs text-[#64748B]">Welcome back!</p>
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h1>
        <p className="mt-2 text-sm text-[#64748B]">{subtitle}</p>
      </div>
      <div className="flex items-center gap-3">
        {setSearch && (
          <div className="flex min-w-0 flex-1 items-center gap-2 rounded-xl border border-[#E5EAEA] bg-white px-3 py-3 sm:w-64 sm:flex-none">
            <Search size={17} className="text-[#64748B]" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search questions..."
              className="w-full min-w-0 bg-transparent text-sm outline-none"
            />
          </div>
        )}
        <button aria-label="Appearance" className="rounded-xl border border-[#E5EAEA] bg-white p-3">
          <Sun size={18} />
        </button>
        <div className="grid size-10 shrink-0 place-items-center rounded-full bg-[#BADFE7] font-semibold">S</div>
      </div>
    </header>
  );
}