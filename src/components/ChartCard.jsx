export default function ChartCard({ title, type = "status", questions }) {


  const completed = questions.filter(q => q.status === "Completed").length;
  const progress = questions.filter(q => q.status === "In Progress").length;
  const pending = questions.filter(q => q.status === "Pending").length;
  const categories = ["DSA", "Git", "Technical", "Other"];
  const categoryColors = ["#388087", "#6FB3B8", "#8BC7E8", "#C7D0D8"];

  const statusData = [
    { label: "Completed", count: completed, color: "#388087" },
    { label: "In Progress", count: progress, color: "#6FB3B8" },
    { label: "Pending", count: pending, color: "#8BC7E8" },
  ];
  
  const data = type === "status"
    ? statusData
    : categories.map((label, i) => ({
        label,
        count: questions.filter(q => q.category === label).length,
        color: categoryColors[i],
      }));
  const total = questions.length;
  let cursor = 0;
  const gradient = data.map(item => {
    const start = cursor;
    cursor += total ? (item.count / total) * 100 : 0;
    return `${item.color} ${start}% ${cursor}%`;
  }).join(", ");

  return (
    <section className="rounded-2xl border border-[#E5EAEA] bg-white p-5">
      <h2 className="mb-5 font-bold">{title}</h2>
      {total === 0 ? (
        <div className="grid min-h-48 place-items-center text-sm text-[#64748B]">Add questions to see your chart.</div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
          <div
            className="relative grid size-36 shrink-0 place-items-center rounded-full"
            style={{ background: `conic-gradient(${gradient})` }}
          >
            <div className="grid size-20 place-items-center rounded-full bg-white text-center">
              <div>
                <p className="text-xl font-bold">{total}</p>
                <p className="text-xs text-[#64748B]">Total</p>
              </div>
            </div>
          </div>
          <div className="w-full space-y-3">
            {data.map(item => (
              <div key={item.label} className="flex items-center justify-between gap-3 text-xs">
                <span className="flex items-center gap-2">
                  <span className="size-2.5 rounded-full" style={{ background: item.color }} />
                  {item.label}
                </span>
                <span className="font-semibold">{item.count} ({Math.round(item.count / total * 100)}%)</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}