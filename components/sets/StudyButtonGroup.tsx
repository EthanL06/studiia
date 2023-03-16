import StyledButton from "../global/StyledButton";

const StudyButtonGroup = () => {
  return (
    <>
      <div className="flex flex-col justify-between gap-x-8 gap-y-4 xxs:flex-row">
        <StyledButton text="Learn" className="text-xl" />
        <StyledButton text="Flashcards" className="text-xl" />
        <StyledButton text="Test" className="text-xl" />
      </div>
    </>
  );
};

export default StudyButtonGroup;
