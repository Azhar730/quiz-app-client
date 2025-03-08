import { Card } from "@/components/ui/card";
import { useGetAllQuizQuery } from "@/redux/api/quizApi";
import { setQuiz, TQuiz } from "@/redux/features/quiz/quizSlice";
import { useAppDispatch } from "@/redux/hooks";

const AllQuiz = () => {
    const dispatch = useAppDispatch()
  const { data, isLoading } = useGetAllQuizQuery(undefined);
  console.log({ data, isLoading });
  if (isLoading) {
    return <p>loading.....</p>;
  }
  const handleSetQuestions = (data:TQuiz[])=>{
    dispatch(setQuiz(data))
    console.log(data);
  }
  return (
    <div className="grid grid-cols-4 gap-4 mt-8">
      {data.map((quiz:TQuiz, index:string) => (
        <Card onClick={()=>handleSetQuestions(quiz.questions)} key={index} className="p-4 border cursor-pointer border-blue-400 hover:border-blue-700">
          <h3>{quiz.title}</h3>
        </Card>
      ))}
    </div>
  );
};

export default AllQuiz;
