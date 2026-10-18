import { Link } from "react-router-dom";
import {
  ClipboardList,
  CheckCircle2,
  Code2,
  Laptop,
  ArrowRight,
} from "lucide-react";

import Header from "../components/Header";
import StatCard from "../components/StatCard";
import ChartCard from "../components/ChartCard";
import QuestionTable from "../components/QuestionTable";


export default function Dashboard({ questions, search, setSearch }) {
  const completed = questions.filter(q => q.status === "Completed").length;
  const completedDSA = questions.filter(q => q.category === "DSA" && q.status === "Completed").length;
  const codingCount = questions.filter(q => q.category === "Machine Coding").length;

  return (
    <>
      <Header title="Track your interview preparation" subtitle="Stay consistent and improve every day." search={search} setSearch={setSearch} />


      <div className="mb-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard 
        title="Total Questions"
        value={questions.length} 
        icon={ClipboardList}
        color="bg-[#E1F1EF] text-[#388087]" />
        
        <StatCard
        title="Completed"
        value={completed}
        note={`${questions.length ? Math.round(completed / questions.length * 100) : 0}% of total`} 
        icon={CheckCircle2} color="bg-[#DDF5E5] text-[#248567]" />

        <StatCard 
        title="Completed DSA" 
        value={completedDSA} 
        note={`${questions.filter(q => q.category === "DSA").length ? Math.round(completedDSA / questions.filter(q => q.category === "DSA").length * 100) : 0}% of DSA`} 
        icon={Code2} 
        color="bg-[#E5F5EB] text-[#248567]" />

        <StatCard 
        title="Machine Coding" 
        value={codingCount ? "In Progress" : "Not Started"} 
        note={`${codingCount} tracked questions`} 
        icon={Laptop} 
        color="bg-[#E1EFFB] text-[#347FB3]" />

      </div>

      <div className="mb-5 grid gap-4 xl:grid-cols-2">
        <ChartCard 
        title="Question Status" 
        questions={questions} />

        <ChartCard 
        title="Questions by Category" 
        type="category" 
        questions={questions} />

      </div>


      <section className="rounded-2xl border border-[#E5EAEA] bg-white p-5">
        <div className="mb-4 flex items-center justify-between gap-3">
          <h2 className="font-bold">Recent Questions</h2>

          <Link to="/questions" className="flex items-center gap-1 text-sm font-semibold text-[#388087]">View All <ArrowRight size={16} /></Link>
        </div>
        
        <QuestionTable questions={questions.slice(0, 5)} />
      </section>
    </>
  );
}