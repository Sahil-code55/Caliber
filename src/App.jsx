
import { useState } from "react";
import { NavLink, Routes, Route, Link } from "react-router-dom";
import {
  LayoutDashboard, PlusCircle, BookOpen, ChartNoAxesColumn,
  Settings as SettingsIcon, Code2, Search, Sun, Menu,
  ClipboardList, CheckCircle2, Laptop, Pencil, Trash2,
  ArrowRight, X, CircleHelp
} from "lucide-react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import StatCard from "./components/StatCard";
import StatusBadge from "./components/StatusBadge";

const initialQuestions = [
  { id: 1, title: "Two Sum", category: "DSA", difficulty: "Easy", status: "Completed", date: "12 Oct 2026" },
  { id: 2, title: "Reverse a String", category: "DSA", difficulty: "Easy", status: "In Progress", date: "10 Oct 2026" },
  { id: 3, title: "Valid Parentheses", category: "DSA", difficulty: "Medium", status: "Pending", date: "—" },
  { id: 4, title: "Merge Two Sorted Lists", category: "DSA", difficulty: "Hard", status: "Pending", date: "—" },
  { id: 5, title: "Explain Git Workflow", category: "Git", difficulty: "Easy", status: "In Progress", date: "08 Oct 2026" },
];

const navItems = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard },
  { to: "/add", label: "Add Question", icon: PlusCircle },
  { to: "/questions", label: "Questions", icon: BookOpen },
  { to: "/stats", label: "Stats", icon: ChartNoAxesColumn },
  { to: "/settings", label: "Settings", icon: SettingsIcon },
];

// function Sidebar({ close }) {
//   return (
//     <aside className="flex w-full flex-col border-r  border-[#E5EAEA] bg-white p-5 md:min-h-screen md:w-60 md:shrink-0">
//       <Link to="/" className="mb-9 flex items-center gap-3">
//         <span className="grid size-10 place-items-center rounded-xl bg-[#388087] text-white">
//           <Code2 size={22} />
//         </span>
//         <span className="text-base font-bold">Interview Tracker</span>
//       </Link>

//       <nav className="flex gap-2 overflow-x-auto md:flex-col">
//         {navItems.map(({ to, label, icon: Icon }) => (
//           <NavLink
//             key={to}
//             to={to}
//             end={to === "/"}
//             onClick={close}
//             className={({ isActive }) =>
//               `flex shrink-0 items-center gap-3 rounded-xl px-3 py-3 text-sm transition ${
//                 isActive
//                   ? "bg-[#E0F0EF] font-semibold text-[#286B72]"
//                   : "text-[#64748B] hover:bg-[#F6F6F2]"
//               }`
//             }
//           >
//             <Icon size={19} />
//             {label}
//           </NavLink>
//         ))}
//       </nav>

//       <div className="mt-8 hidden items-center gap-3 border-t border-[#E5EAEA] pt-5 md:mt-auto md:flex">
//         <div className="grid size-10 place-items-center rounded-full bg-[#388087] text-white">S</div>
//         <div>
//           <p className="text-sm font-semibold">Student</p>
//           <p className="text-xs text-[#64748B]">Interview preparation</p>
//         </div>
//       </div>
//     </aside>
//   );
// }

<Sidebar close={() => setMobileNav(false)} />


// function StatCard({ title, value, note, icon: Icon, color }) {
//   return (
//     <div className="rounded-2xl border border-[#E5EAEA] bg-white p-5">
//       <div className="flex items-center gap-4">
//         <div className={`grid size-12 shrink-0 place-items-center rounded-xl ${color}`}>
//           <Icon size={23} />
//         </div>
//         <div className="min-w-0">
//           <p className="text-sm text-[#64748B]">{title}</p>
//           <p className="mt-1 text-2xl font-bold">{value}</p>
//           {note && <p className="mt-1 text-xs text-[#64748B]">{note}</p>}
//         </div>
//       </div>
//     </div>
//   );
// }





// function StatusBadge({ value }) {
//   const styles = {
//     Completed: "bg-[#DDF5E5] text-[#267A54]",
//     "In Progress": "bg-[#FFF0C2] text-[#966400]",
//     Pending: "bg-[#E1EFFB] text-[#315E91]",
//     Easy: "bg-[#DDF5E5] text-[#267A54]",
//     Medium: "bg-[#FFF0C2] text-[#966400]",
//     Hard: "bg-[#E1EFFB] text-[#315E91]",
//   };

//   return (
//     <span className={`inline-flex whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-medium ${styles[value] || "bg-gray-100 text-gray-600"}`}>
//       {value}
//     </span>
//   );
// }


function QuestionTable({
  questions,
  showActions = false,
  onEdit,
  onDeleteClick,
}) {
  if (!questions.length) {
    return (
      <div className="rounded-xl border border-dashed border-[#CBD5D5] py-12 text-center">
        <CircleHelp className="mx-auto mb-3 text-[#6FB3B8]" size={30} />
        <p className="font-semibold">No questions found</p>
        <p className="mt-1 text-sm text-[#64748B]">
          Try another search or add a question.
        </p>
        <Link
          to="/add"
          className="mt-4 inline-block text-sm font-semibold text-[#388087]"
        >
          Add your first question
        </Link>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[760px] text-left text-sm">
        <thead className="bg-[#F6F8F7] text-xs text-[#64748B]">
          <tr>
            {[
              "#",
              "Question Title",
              "Category",
              "Difficulty",
              "Status",
              "Last Practiced",
              ...(showActions ? ["Actions"] : []),
            ].map((heading) => (
              <th key={heading} className="px-4 py-3 font-semibold">
                {heading}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {questions.map((q, index) => (
            <tr
              key={q.id}
              className="border-b border-[#E5EAEA] last:border-0 hover:bg-[#FAFCFB]"
            >
              <td className="px-4 py-3 text-[#64748B]">{index + 1}</td>
              <td className="px-4 py-3 font-medium">{q.title}</td>
              <td className="px-4 py-3 text-[#64748B]">{q.category}</td>
              <td className="px-4 py-3">
                <StatusBadge value={q.difficulty} />
              </td>
              <td className="px-4 py-3">
                <StatusBadge value={q.status} />
              </td>
              <td className="px-4 py-3 text-[#64748B]">{q.date}</td>

              {showActions && (
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => onEdit?.(q)}
                      aria-label={`Edit ${q.title}`}
                      className="rounded-lg border border-[#E5EAEA] p-2 text-[#388087] hover:bg-[#E1F1EF]"
                    >
                      <Pencil size={16} />
                    </button>

                    <button
                      type="button"
                      onClick={() => onDeleteClick?.(q.id)}
                      aria-label={`Delete ${q.title}`}
                      className="rounded-lg border border-red-200 p-2 text-red-500 hover:bg-red-50"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


function ChartCard({ title, type = "status", questions }) {
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

function Dashboard({ questions, search, setSearch }) {
  const completed = questions.filter(q => q.status === "Completed").length;
  const completedDSA = questions.filter(q => q.category === "DSA" && q.status === "Completed").length;
  const codingCount = questions.filter(q => q.category === "Machine Coding").length;

  return (
    <>
      <Header title="Track your interview preparation" subtitle="Stay consistent and improve every day." search={search} setSearch={setSearch} />
      <div className="mb-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard title="Total Questions" value={questions.length} icon={ClipboardList} color="bg-[#E1F1EF] text-[#388087]" />
        <StatCard title="Completed" value={completed} note={`${questions.length ? Math.round(completed / questions.length * 100) : 0}% of total`} icon={CheckCircle2} color="bg-[#DDF5E5] text-[#248567]" />
        <StatCard title="Completed DSA" value={completedDSA} note={`${questions.filter(q => q.category === "DSA").length ? Math.round(completedDSA / questions.filter(q => q.category === "DSA").length * 100) : 0}% of DSA`} icon={Code2} color="bg-[#E5F5EB] text-[#248567]" />
        <StatCard title="Machine Coding" value={codingCount ? "In Progress" : "Not Started"} note={`${codingCount} tracked questions`} icon={Laptop} color="bg-[#E1EFFB] text-[#347FB3]" />
      </div>
      <div className="mb-5 grid gap-4 xl:grid-cols-2">
        <ChartCard title="Question Status" questions={questions} />
        <ChartCard title="Questions by Category" type="category" questions={questions} />
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

function AddQuestion({ onAdd }) {
  const [form, setForm] = useState({ title: "", category: "DSA", difficulty: "Easy", status: "Pending", notes: "" });
  const [error, setError] = useState("");

  function submit(e) {
    e.preventDefault();
    if (!form.title.trim()) {
      setError("Please enter a question title.");
      return;
    }
    onAdd({ ...form, title: form.title.trim() });
    setForm({ title: "", category: "DSA", difficulty: "Easy", status: "Pending", notes: "" });
    setError("");
  }

  const fieldClass = "mt-2 w-full rounded-xl border border-[#E5EAEA] bg-white px-3 py-3 text-sm outline-none focus:border-[#388087]";

  return (
    <>
      <Header title="Add New Question" subtitle="Save a question to your interview tracker." />
      <form onSubmit={submit} className="max-w-3xl rounded-2xl border border-[#E5EAEA] bg-white p-5 sm:p-7">
        <label className="block text-sm font-medium">Question Title <span className="text-red-500">*</span>
          <input className={fieldClass} placeholder="e.g. Two Sum" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} />
        </label>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          {[
            ["category", "Category", ["DSA", "Git", "Technical", "Machine Coding", "Other"]],
            ["difficulty", "Difficulty", ["Easy", "Medium", "Hard"]],
            ["status", "Status", ["Pending", "In Progress", "Completed"]],
          ].map(([key, label, options]) => (
            <label key={key} className="block text-sm font-medium">{label}
              <select className={fieldClass} value={form[key]} onChange={e => setForm({ ...form, [key]: e.target.value })}>
                {options.map(option => <option key={option}>{option}</option>)}
              </select>
            </label>
          ))}
        </div>
        <label className="mt-5 block text-sm font-medium">Notes <span className="text-[#64748B]">(Optional)</span>
          <textarea className={fieldClass} rows="4" placeholder="Approach, key points, or revision notes..." value={form.notes} onChange={e => setForm({ ...form, notes: e.target.value })} />
        </label>
        {error && <p role="alert" className="mt-3 text-sm text-red-600">{error}</p>}
        <div className="mt-6 flex flex-wrap justify-end gap-3">
          <button type="button" onClick={() => { setForm({ title: "", category: "DSA", difficulty: "Easy", status: "Pending", notes: "" }); setError(""); }} className="rounded-xl border border-[#E5EAEA] px-5 py-3 text-sm font-medium">Reset</button>
          <button className="rounded-xl bg-[#388087] px-5 py-3 text-sm font-semibold text-white hover:bg-[#286B72]">Save Question</button>
        </div>
      </form>
    </>
  );
}

function QuestionsPage({ questions, onDelete, search, setSearch }) {
  const [category, setCategory] = useState("All");
  const [difficulty, setDifficulty] = useState("All");
  const [status, setStatus] = useState("All");
  const [deleteId, setDeleteId] = useState(null);

  const filtered = questions.filter(q =>
    q.title.toLowerCase().includes(search.toLowerCase()) &&
    (category === "All" || q.category === category) &&
    (difficulty === "All" || q.difficulty === difficulty) &&
    (status === "All" || q.status === status)
  );

  return (
    <>
      <Header title="All Questions" subtitle="View, search, and manage your questions." search={search} setSearch={setSearch} />
      <section className="rounded-2xl border border-[#E5EAEA] bg-white p-5">
        <div className="mb-5 grid gap-3 sm:grid-cols-3">
          {[
            [category, setCategory, ["All", "DSA", "Git", "Technical", "Machine Coding", "Other"], "Category"],
            [difficulty, setDifficulty, ["All", "Easy", "Medium", "Hard"], "Difficulty"],
            [status, setStatus, ["All", "Pending", "In Progress", "Completed"], "Status"],
          ].map(([value, setter, options, label]) => (
            <select key={label} aria-label={`Filter by ${label}`} value={value} onChange={e => setter(e.target.value)} className="rounded-xl border border-[#E5EAEA] bg-white px-3 py-3 text-sm">
              {options.map(option => <option key={option} value={option}>{option === "All" ? `All ${label === "Category" ? "Categories" : label + "s"}` : option}</option>)}
            </select>
          ))}
        </div>
        <QuestionTable
          questions={filtered}
         showActions
         onEdit={(question) => {
        alert(`Edit functionality will be implemented next: ${question.title}`);
        }}
        onDeleteClick={setDeleteId}
         />
        <p className="mt-4 text-xs text-[#64748B]">Showing {filtered.length} of {questions.length} questions</p>
       
      </section>
      {deleteId !== null && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/30 p-4">
          <div role="dialog" aria-modal="true" className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl">
            <h2 className="text-lg font-bold">Delete this question?</h2>
            <p className="mt-2 text-sm text-[#64748B]">This removes the question from the current app state.</p>
            <div className="mt-5 flex justify-end gap-3">
              <button onClick={() => setDeleteId(null)} className="rounded-xl border border-[#E5EAEA] px-4 py-2 text-sm">Cancel</button>
              <button onClick={() => { onDelete(deleteId); setDeleteId(null); }} className="rounded-xl bg-red-500 px-4 py-2 text-sm font-semibold text-white">Delete</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function Stats({ questions }) {
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

function Settings({ onClear }) {
  const [confirm, setConfirm] = useState(false);
  return (
    <>
      <Header title="Settings" subtitle="Manage your interview tracker data." />
      <section className="max-w-2xl rounded-2xl border border-[#E5EAEA] bg-white p-6">
        <h2 className="font-bold">Data Management</h2>
        <p className="mt-2 text-sm text-[#64748B]">Your questions will be stored in this browser once persistence is added.</p>
        <div className="mt-5 rounded-xl border border-[#F4DADA] p-5">
          <div className="flex items-start gap-3">
            <div className="rounded-lg bg-red-50 p-3 text-red-500"><Trash2 size={22} /></div>
            <div className="flex-1">
              <h3 className="font-semibold">Clear All Data</h3>
              <p className="mt-1 text-sm text-[#64748B]">Remove all saved questions from your tracker.</p>
              <button onClick={() => setConfirm(true)} className="mt-4 rounded-xl border border-red-300 px-4 py-2 text-sm font-semibold text-red-600 hover:bg-red-50">Clear All Data</button>
            </div>
          </div>
        </div>
      </section>
      {confirm && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/30 p-4">
          <div role="dialog" aria-modal="true" className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl">
            <h2 className="text-lg font-bold">Clear all questions?</h2>
            <p className="mt-2 text-sm text-[#64748B]">This cannot be undone.</p>
            <div className="mt-5 flex justify-end gap-3">
              <button onClick={() => setConfirm(false)} className="rounded-xl border border-[#E5EAEA] px-4 py-2 text-sm">Cancel</button>
              <button onClick={() => { onClear(); setConfirm(false); }} className="rounded-xl bg-red-500 px-4 py-2 text-sm font-semibold text-white">Clear Data</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default function App() {
  const [questions, setQuestions] = useState(initialQuestions);
  const [search, setSearch] = useState("");
  const [mobileNav, setMobileNav] = useState(false);

  function addQuestion(question) {
    setQuestions(prev => [{ ...question, id: Date.now(), date: "—" }, ...prev]);
  }

  function deleteQuestion(id) {
    setQuestions(prev => prev.filter(q => q.id !== id));
  }

  return (
    <div className="h-screen bg-[#F6F6F2] md:overflow-hidden md:flex">
      {mobileNav && (
        <div className="fixed inset-0 z-40 bg-black/20 md:hidden" onClick={() => setMobileNav(false)}>
          <div className="w-[280px] bg-white" onClick={e => e.stopPropagation()}>
            <div className="flex justify-end p-3">
              <button aria-label="Close navigation" onClick={() => setMobileNav(false)} className="rounded-lg p-2"><X size={20} /></button>
            </div>
            <Sidebar close={() => setMobileNav(false)} />
          </div>
        </div>
      )}
      <div className="hidden h-full md:block"><Sidebar /></div>
      <main className="h-full min-w-0 flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
        <div className="mb-5 md:hidden">
          <button onClick={() => setMobileNav(true)} className="rounded-xl border border-[#E5EAEA] bg-white p-3" aria-label="Open navigation"><Menu size={20} /></button>
        </div>
        <div className="mx-auto max-w-[1500px]">
          <Routes>
            <Route path="/" element={<Dashboard questions={questions} search={search} setSearch={setSearch} />} />
            <Route path="/add" element={<AddQuestion onAdd={addQuestion} />} />
            <Route path="/questions" element={<QuestionsPage questions={questions} onDelete={deleteQuestion} search={search} setSearch={setSearch} />} />
            <Route path="/stats" element={<Stats questions={questions} />} />
            <Route path="/settings" element={<Settings onClear={() => setQuestions([])} />} />
            <Route path="*" element={<div className="rounded-2xl bg-white p-8"><h1 className="text-xl font-bold">Page not found</h1><Link to="/" className="mt-3 inline-block text-[#388087]">Return to Dashboard</Link></div>} />
          </Routes>
        </div>
      </main>
    </div>
  );
}
