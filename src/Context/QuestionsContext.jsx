import { createContext, useContext, useEffect, useState } from "react";
import { loadQuestions, saveQuestions } from "../utils/storage";
import QuestionsContext from "./questionsContextObject";


export function QuestionsProvider({ children }) {

const [questions, setQuestions] = useState(loadQuestions);

useEffect(() => {
  saveQuestions(questions);
}, [questions]);

function addQuestion(question) {
  if (!question.title?.trim()) {
    throw new Error("Question title is required.");
  }

  setQuestions((prev) => [
    { ...question, title: question.title.trim(), id: Date.now(), date: "—" },
    ...prev,
  ]);
}

function deleteQuestion(id){
    setQuestions(prev => prev.filter(q => q.id !== id));
}

function clearQuestions() {
  setQuestions([]);
}

function updateQuestion(id, updatedData) {
  setQuestions((prev) =>
    prev.map((question) =>
      question.id === id
        ? { ...question, ...updatedData, id }
        : question
    )
  );
}

return (
    <QuestionsContext.Provider value={{ questions, setQuestions, addQuestion, deleteQuestion, clearQuestions, updateQuestion }}>
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