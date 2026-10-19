import { createContext, useContext, useState } from "react";

export const QuestionsContext = createContext(null);

const initialQuestions = [
  {
    id: 1,
    title: "Two Sum",
    category: "DSA",
    difficulty: "Easy",
    status: "Completed",
    date: "12 Oct 2026",
  },
  {
    id: 2,
    title: "Reverse a String",
    category: "DSA",
    difficulty: "Easy",
    status: "In Progress",
    date: "10 Oct 2026",
  },
  {
    id: 3,
    title: "Valid Parentheses",
    category: "DSA",
    difficulty: "Medium",
    status: "Pending",
    date: "—",
  },
  {
    id: 4,
    title: "Merge Two Sorted Lists",
    category: "DSA",
    difficulty: "Hard",
    status: "Pending",
    date: "—",
  },
  {
    id: 5,
    title: "Explain Git Workflow",
    category: "Git",
    difficulty: "Easy",
    status: "In Progress",
    date: "08 Oct 2026",
  },
];

export function QuestionsProvider({ children }) {
const [questions, setQuestions] = useState(initialQuestions);

function addQuestion(question) {
  setQuestions((prev) => [
    { ...question, id: Date.now(), date: "—" },
    ...prev,
  ]);
}

function deleteQuestion(id){
    setQuestions(prev => prev.filter(q => q.id !== id));
}

function clearQuestions() {
  setQuestions([]);
}

return (
    <QuestionsContext.Provider value={{ questions, setQuestions, addQuestion, deleteQuestion, clearQuestions }}>
      {children}
    </QuestionsContext.Provider>
);}


export const useQuestions = () => {
const context = useContext(QuestionsContext); 
  // Throws an error if used outside of the Provider
if (context === null) {
throw new Error('useQuestions must be used within a QuestionsProvider');}
return context;
};