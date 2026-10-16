export default function StatusBadge({ value }) {
  const styles = {
    Completed: "bg-[#DDF5E5] text-[#267A54]",
    "In Progress": "bg-[#FFF0C2] text-[#966400]",
    Pending: "bg-[#E1EFFB] text-[#315E91]",
    Easy: "bg-[#DDF5E5] text-[#267A54]",
    Medium: "bg-[#FFF0C2] text-[#966400]",
    Hard: "bg-[#E1EFFB] text-[#315E91]",
  };

  return (
    <span className={`inline-flex whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-medium ${styles[value] || "bg-gray-100 text-gray-600"}`}>
      {value}
    </span>
  );
}