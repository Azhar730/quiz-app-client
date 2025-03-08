import AddQuiz from "./Home/AddQuiz";
import AllQuiz from "./Home/AllQuiz";
import Question from "./Home/Question";
import QuizSummary from "./Home/QuizSummary";
import { useAppSelector } from "./redux/hooks";

const App = () => {
  const { quizComplete } = useAppSelector((state) => state.quiz);
  return (
    <div>
      <h3 className="text-7xl text-center">Quiz App</h3>
      <AddQuiz/>
      <AllQuiz />
      <div>{!quizComplete ? <Question /> : <QuizSummary></QuizSummary>}</div>
    </div>
  );
};

export default App;
