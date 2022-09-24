const StudyButtonGroup = () => {
  return (
    <div className="flex flex-col justify-between gap-x-8 gap-y-4 xxs:flex-row">
      <StudyButton title={"Learn"} />
      <StudyButton title={"Flashcards"} />
      <StudyButton title={"Test"} />
    </div>
  );
};

const StudyButton = ({ title }: { title: string }) => {
  return (
    <button
      title={title}
      className="neumorphism container rounded-lg border-2 border-secondary bg-white py-2 px-2 lg:w-[10.5rem]"
    >
      <p className="font-bold sm:text-xl">{title}</p>
    </button>
  );
};

export default StudyButtonGroup;
