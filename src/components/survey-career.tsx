"use client";
import { useRouter } from "next/navigation";
import { useQuestionStore } from "@/store/question";
import CareerCard from "./common/career-card";

interface Props {
  career: string;
}

const SurveyCareer: React.FC<Props> = ({ career }) => {
  const router = useRouter();

  const getQuestions = useQuestionStore((state) => state.getQuestions);

  const handleClick = () => {
    getQuestions();
    router.push(`/encuesta/${career}`);
  };

  return (
    <CareerCard
      career={career}
      handleClick={handleClick}
      classNameIcon="left-[-3rem] group-hover:left-0"
    >
      <div className="left-0 top-0 z-10 h-full w-full rounded-xl">
        <p className="text-sm text-white">Total Votes</p>
        <p className="text-5xl font-bold text-white">0</p>
      </div>
    </CareerCard>
  );
};

export default SurveyCareer;
