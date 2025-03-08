import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { setAnswer } from "@/redux/features/quiz/quizSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import QuizControl from "./QuizControl";

const Question = () => {
  const dispatch = useAppDispatch();
  const { question, currentQuestionIndex, userAnswers } = useAppSelector(
    (state) => state.quiz
  );
  const currentQuestion = question[currentQuestionIndex];
  const currentAnswer = userAnswers[currentQuestionIndex];
  const handleSubmit = (answer: string) => {
    dispatch(setAnswer({ questionIndex: currentQuestionIndex, answer }));
  };
  return (
    <div>
      {question.length > 0 && (
        <div className="flex justify-center mt-12">
          <Card className="w-[450px] border border-blue-500">
            <CardHeader>
              <CardTitle>{currentQuestion.question}</CardTitle>
              <CardDescription>
                Question {currentQuestionIndex + 1} of {question.length}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {currentQuestion.options.map((option, index) => (
                <Button
                  onClick={() => handleSubmit(option)}
                  size="lg"
                  key={index}
                  className="w-full mt-3"
                  variant={option === currentAnswer ? "default" : "outline"}
                >
                  {option}
                </Button>
              ))}
            </CardContent>
            <QuizControl />
          </Card>
        </div>
      )}
    </div>
  );
};

export default Question;
