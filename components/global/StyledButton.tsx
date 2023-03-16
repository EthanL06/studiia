type Props = {
  text: string;
  className?: string;
};

const StyledButton = ({ text, className }: Props) => {
  return (
    <button
      type="button"
      className={`w-full rounded-lg bg-secondary/70 p-4 font-semibold text-white shadow-[0_4px_0_0_#002BFF] outline-secondary transition-all ease-in-out active:translate-y-2 active:shadow-none ${className}`}
    >
      {text}
    </button>
  );
};
export default StyledButton;
