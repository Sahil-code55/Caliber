import { useState } from "react";
import { Trash2 } from "lucide-react";
import Header from "../components/Header";
import { useQuestions } from "../Context/QuestionsContext";


export default function Settings() {
  const [confirm, setConfirm] = useState(false);
  const { clearQuestions } = useQuestions();
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
              <button onClick={() => { clearQuestions(); setConfirm(false); }} className="rounded-xl bg-red-500 px-4 py-2 text-sm font-semibold text-white">Clear Data</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
