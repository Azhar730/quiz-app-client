import { Button } from "@/components/ui/button";
import {
  completeQuiz,
  nextQuestion,
  prevQuestion,
} from "@/redux/features/quiz/quizSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const QuizControl = () => {
  const { currentQuestionIndex, question, userAnswers } = useAppSelector(
    (state) => state.quiz
  );
  const isAnswerSelected = userAnswers[currentQuestionIndex] !== null;
  const isCompleteQuiz =
    isAnswerSelected || currentQuestionIndex !== question.length - 1;
  const dispatch = useAppDispatch();
  const handleNext = () => {
    dispatch(nextQuestion());
  };
  const handlePrev = () => {
    dispatch(prevQuestion());
  };
  const handleCompleteQuiz = () => {
    dispatch(completeQuiz());
  };
  return (
    <div className="flex justify-between mx-8">
      <Button onClick={handlePrev} disabled={currentQuestionIndex === 0}>
        Previous
      </Button>
      {currentQuestionIndex < question.length - 1 && (
        <Button disabled={!isAnswerSelected} onClick={handleNext}>
          Next
        </Button>
      )}
      {currentQuestionIndex === question.length - 1 && (
        <Button onClick={handleCompleteQuiz} disabled={!isCompleteQuiz}>
          Quiz Complete
        </Button>
      )}
    </div>
  );
};

export default QuizControl;
