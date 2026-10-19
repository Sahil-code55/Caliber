
import { useState } from "react";
import {  Routes, Route, Link } from "react-router-dom";
import {Settings as  Menu, X} from "lucide-react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Stats from "./pages/Stats";
import AddQuestion from "./pages/AddQuestion";
import QuestionsPage from "./pages/QuestionsPage";
import Settings from "./pages/Settings";

const initialQuestions = [
  { id: 1, title: "Two Sum", category: "DSA", difficulty: "Easy", status: "Completed", date: "12 Oct 2026" },
  { id: 2, title: "Reverse a String", category: "DSA", difficulty: "Easy", status: "In Progress", date: "10 Oct 2026" },
  { id: 3, title: "Valid Parentheses", category: "DSA", difficulty: "Medium", status: "Pending", date: "—" },
  { id: 4, title: "Merge Two Sorted Lists", category: "DSA", difficulty: "Hard", status: "Pending", date: "—" },
  { id: 5, title: "Explain Git Workflow", category: "Git", difficulty: "Easy", status: "In Progress", date: "08 Oct 2026" },
];
{/* <Sidebar close={() => setMobileNav(false)} /> */}

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
          <Route 
            path="/"
            element={
            <Dashboard
            questions={questions}
            search={search} 
            setSearch={setSearch} />} 
          />
            <Route
             path="/add" 
            element={<AddQuestion 
            onAdd={addQuestion} />}
             />

            <Route
            path="/questions"
            element={<QuestionsPage 
            questions={questions} 
            onDelete={deleteQuestion} 
            search={search} 
            setSearch={setSearch} />}
             />


            <Route 
            path="/stats" 
            element={<Stats 
            questions={questions} />} 
            />

            <Route 
            path="/settings"
            element={<Settings
            onClear={() => setQuestions([])} />}
            />

            <Route 
            path="*" 
            element={
            <div 
            className="rounded-2xl bg-white p-8">
            <h1  className="text-xl font-bold">Page not found</h1>
            <Link to="/" className="mt-3 inline-block text-[#388087]">Return to Dashboard</Link>
            </div>} />

          </Routes>
        </div>
      </main>
    </div>
  );
}
