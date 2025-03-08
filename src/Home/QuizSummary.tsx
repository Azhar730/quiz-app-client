import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useAppSelector } from "@/redux/hooks";

const QuizSummary = () => {
  const { question, userAnswers } = useAppSelector((state) => state.quiz);
  const correctAnswerCount = question.reduce((count, que, index) => {
    return que.correctAnswer === userAnswers[index] ? count + 1 : count;
  }, 0);
  const correctPercentage = parseFloat(
    ((correctAnswerCount / question.length) * 100).toFixed(2)
  );
  return (
    <div className="flex justify-center mt-12">
      <Card className="w-[450px] border border-blue-500 p-6">
        <CardHeader>Quiz Summary</CardHeader>
        <CardContent>
          You Got : {correctAnswerCount} out of {question.length}
        </CardContent>
        <Progress value={correctPercentage}></Progress>
        {correctPercentage}%
      </Card>
    </div>
  );
};

export default QuizSummary;
