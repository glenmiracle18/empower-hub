import SurveyCareer from "@/components/survey-career";

const Page = () => {
  const careers = ["ET", "FT", "AE", "CF", "DS"];

  return (
    <div className="flex flex-col items-center gap-8">
      <div>
        <p className="text-center">Quick Survey</p>
        <p className="text-5xl font-bold sm:text-6xl">
          Opinions on the{" "}
          <strong className="rounded-xl bg-purple-200 px-2 font-bold text-purple-600">
            Idea
          </strong>{" "}
          of an{" "}
          <strong className="rounded-xl bg-purple-200 px-2 font-bold text-purple-600">
            Employment
          </strong>{" "}
          platform
        </p>
      </div>

      <section className="grid w-full grid-cols-[repeat(auto-fill,minmax(9rem,1fr))] place-items-center gap-4">
        {careers.map((career, index) => (
          <SurveyCareer key={index} career={career} />
        ))}
      </section>
    </div>
  );
};

export default Page;
