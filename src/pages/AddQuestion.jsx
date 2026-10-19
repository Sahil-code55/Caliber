import { useState } from "react";
import Header from "../components/Header";
import { useQuestions } from "../Context/QuestionsContext";



export default function AddQuestion() {
  const { addQuestion } = useQuestions();
  const [form, setForm] = useState({ title: "", category: "DSA", difficulty: "Easy", status: "Pending", notes: "" });
  const [error, setError] = useState("");

  function submit(e) {
    e.preventDefault();
    if (!form.title.trim()) {
      setError("Please enter a question title.");
      return;
    }
    addQuestion({ ...form, title: form.title.trim() });
    setForm({ title: "", category: "DSA", difficulty: "Easy", status: "Pending", notes: "" });
    setError("");
  }
  
  const fieldClass = "mt-2 w-full rounded-xl border border-[#E5EAEA] bg-white px-3 py-3 text-sm outline-none focus:border-[#388087]";

  return (
    <>
      <Header title="Add New Question" subtitle="Save a question to your interview tracker." />

      <form onSubmit={submit} className="max-w-3xl rounded-2xl border border-[#E5EAEA] bg-white p-5 sm:p-7">

        <label className="block text-sm font-medium">Question Title <span className="text-red-500">*</span>
        <input 
        className={fieldClass} 
        placeholder="e.g. Two Sum" 
        value={form.title} 
        onChange={e => setForm({ ...form, title: e.target.value })} />
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

        <label 
        className="mt-5 block text-sm font-medium">Notes 
        <span className="text-[#64748B]">(Optional)</span>

          <textarea
          className={fieldClass} 
          rows="4" placeholder="Approach, key points, or revision notes..." 
          value={form.notes} 
          onChange={e => setForm({ ...form, notes: e.target.value })} 
          />
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