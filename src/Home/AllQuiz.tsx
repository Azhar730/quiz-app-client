import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useDeleteQuizMutation, useGetAllQuizQuery } from "@/redux/api/quizApi";
import { setQuiz, TQuiz } from "@/redux/features/quiz/quizSlice";
import { useAppDispatch } from "@/redux/hooks";
import { Trash2 } from "lucide-react";
import UpdateQuiz from "./UpdateQuiz";

const AllQuiz = () => {
  const [deleteQuiz] = useDeleteQuizMutation();
  const dispatch = useAppDispatch();
  const { data, isLoading } = useGetAllQuizQuery(undefined);
  if (isLoading) {
    return <p>loading.....</p>;
  }
  const handleSetQuestions = (data: TQuiz[]) => {
    dispatch(setQuiz(data));
    console.log(data);
  };
  const handleDelete = async (id: string) => {
    await deleteQuiz(id);
  };
  return (
    <div className="grid grid-cols-4 gap-4 mt-8">
      {data.map((quiz: TQuiz, index: string) => (
        <Card
          key={index}
          className="p-4 border cursor-pointer text-xl text-center font-semibold text-orange-500 border-blue-400 hover:border-blue-700"
        >
          <h3>{quiz.title}</h3>
          <div className="flex items-center justify-center gap-x-10">
            <UpdateQuiz/>
            <Trash2
              onClick={() => handleDelete(quiz._id)}
              className="text-red-500"
            />
          </div>
          <Button
            variant={"outline"}
            className="border border-blue-500"
            onClick={() => handleSetQuestions(quiz.questions)}
          >
            View Quiz
          </Button>
        </Card>
      ))}
    </div>
  );
};

export default AllQuiz;
