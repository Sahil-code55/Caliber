export function loadQuestions() {
  try {
    const savedQuestions = localStorage.getItem("questions");

    if (savedQuestions === null) {
      return [];
    }

    const parsedQuestions = JSON.parse(savedQuestions);

    if (!Array.isArray(parsedQuestions)) {
      console.error("Saved questions data is not an array.");
      return [];
    }

   const validQuestions = parsedQuestions.filter(isValidQuestion);
   return validQuestions;
   
  } catch (error) {
    console.error("Error loading questions from localStorage:", error);
    return [];
  }
}


export function saveQuestions(questions) {
  try {
    // Save questions to LocalStorage
    localStorage.setItem("questions",JSON.stringify(questions));
  } catch (error) {
    // Log a useful error message
    console.error("Error saving questions to localStorage:", error);
  }
}


function isValidQuestion(question) {
  return (
    question !== null &&
    typeof question === "object" &&
    typeof question.id === "number" &&
    typeof question.title === "string" &&
    question.title.trim().length > 0 &&
    typeof question.category === "string" &&
    typeof question.difficulty === "string" &&
    ["Easy", "Medium", "Hard"].includes(question.difficulty) &&
    typeof question.status === "string" &&
    ["Pending", "In Progress", "Completed"].includes(question.status) &&
    typeof question.date === "string"
  );
}