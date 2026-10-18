import { BookOpen, CheckCircle2, CircleHelp, ClipboardList } from "lucide-react";
import Header from "../components/Header";
import StatCard from "../components/StatCard";
import ChartCard from "../components/ChartCard";


export default function Stats({ questions }) {
  const completed = questions.filter(q => q.status === "Completed").length;
  const dsa = questions.filter(q => q.category === "DSA").length;
  const dsaDone = questions.filter(q => q.category === "DSA" && q.status === "Completed").length;

  return (
    <>
      <Header title="Statistics" subtitle="Understand your interview preparation progress." />
      <div className="mb-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard title="Total Questions" value={questions.length} icon={ClipboardList} color="bg-[#E1F1EF] text-[#388087]" />
        <StatCard title="Completed" value={completed} icon={CheckCircle2} color="bg-[#DDF5E5] text-[#248567]" />
        <StatCard title="In Progress" value={questions.filter(q => q.status === "In Progress").length} icon={BookOpen} color="bg-[#FFF0C2] text-[#966400]" />
        <StatCard title="Pending" value={questions.filter(q => q.status === "Pending").length} icon={CircleHelp} color="bg-[#E1EFFB] text-[#347FB3]" />
      </div>
      <div className="grid gap-5 xl:grid-cols-2">
        <ChartCard title="Question Status" questions={questions} />
        <ChartCard title="Questions by Category" type="category" questions={questions} />
        <section className="rounded-2xl border border-[#E5EAEA] bg-white p-5 xl:col-span-2">
          <h2 className="font-bold">DSA Progress</h2>
          <div className="mt-4 flex justify-between text-sm"><span>{dsaDone} of {dsa} completed</span><span>{dsa ? Math.round(dsaDone / dsa * 100) : 0}%</span></div>
          <div className="mt-3 h-3 overflow-hidden rounded-full bg-[#E5EAEA]">
            <div className="h-full rounded-full bg-[#388087]" style={{ width: `${dsa ? dsaDone / dsa * 100 : 0}%` }} />
          </div>
        </section>
      </div>
    </>
  );
}