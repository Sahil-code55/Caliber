
export default function StatCard({ title, value, note, icon: Icon, color }) {
  return (
    <div className="rounded-2xl border border-[#E5EAEA] bg-white p-5">
      <div className="flex items-center gap-4">
        <div className={`grid size-12 shrink-0 place-items-center rounded-xl ${color}`}>
          <Icon size={23} />
        </div>
        <div className="min-w-0">
          <p className="text-sm text-[#64748B]">{title}</p>
          <p className="mt-1 text-2xl font-bold">{value}</p>
          {note && <p className="mt-1 text-xs text-[#64748B]">{note}</p>}
        </div>
      </div>
    </div>
  );
}