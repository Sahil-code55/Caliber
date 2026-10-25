import { useState } from "react";
import Header from "../components/Header";
import QuestionTable from "../components/QuestionTable";
import {  useQuestions } from "../Context/QuestionsContext";
import { useNavigate } from "react-router-dom";

export default function QuestionsPage({  search, setSearch }) {
  const [category, setCategory] = useState("All");
  const [difficulty, setDifficulty] = useState("All");
  const [status, setStatus] = useState("All");
  const [deleteId, setDeleteId] = useState(null);

const { questions, deleteQuestion } = useQuestions();

const navigate = useNavigate();

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
      navigate("/add", { state: { question } });
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
              <button onClick={() => setDeleteId(null)}
               className="rounded-xl border border-[#E5EAEA] px-4 py-2 text-sm">Cancel</button>
              <button onClick={() => { deleteQuestion(deleteId); setDeleteId(null); }} className="rounded-xl bg-red-500 px-4 py-2 text-sm font-semibold text-white">Delete</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}