const StudyButtonGroup = () => {
  return (
    <div className="mt-6 flex justify-between gap-x-8">
      <StudyButton title={"Learn"} />
      <StudyButton title={"Flashcards"} />
      <StudyButton title={"Test"} />
    </div>
  );
};

const StudyButton = ({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) => {
  return (
    <button
      title={title}
      className="neumorphism w-[10.5rem] rounded-lg border-2 border-secondary bg-white py-2"
    >
      {children ? (
        children
      ) : (
        <p className="text-center text-xl font-bold">{title}</p>
      )}
    </button>
  );
};

export default StudyButtonGroup;
