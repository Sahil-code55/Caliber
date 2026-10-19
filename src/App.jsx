
import { useState } from "react";
import {  Routes, Route, Link } from "react-router-dom";
import {Settings as  Menu, X} from "lucide-react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Stats from "./pages/Stats";
import AddQuestion from "./pages/AddQuestion";
import QuestionsPage from "./pages/QuestionsPage";
import Settings from "./pages/Settings";
import { useQuestions } from "./Context/QuestionsContext";


{/* <Sidebar close={() => setMobileNav(false)} /> */}

export default function App() {

  const { questions, setQuestions, addQuestion, deleteQuestion } = useQuestions();
  const [search, setSearch] = useState("");
  const [mobileNav, setMobileNav] = useState(false);

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
            />} />

            <Route
            path="/questions"
            element={<QuestionsPage 
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
            element={<Settings />}
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
