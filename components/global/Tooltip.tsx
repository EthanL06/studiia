import { useState, createRef } from "react";
import { usePopper } from "react-popper";

const Tooltip = ({
  children,
  disable = false,
  text,
  marginTop,
}: {
  children: React.ReactNode;
  disable?: boolean;
  text: string;
  marginTop: number;
}) => {
  const [referenceElement, setReferenceElement] =
    useState<HTMLDivElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "bottom",
  });

  if (disable) return <div>{children}</div>;

  return (
    <div className="group">
      <div className="inline" ref={setReferenceElement}>
        {children}
      </div>

      <div
        className="pointer-events-none invisible relative mt-1 rounded bg-primary px-2 py-2 text-center text-sm text-white opacity-0 transition-all  duration-150 ease-in-out group-hover:visible group-hover:opacity-100"
        style={{ ...styles.popper, marginTop: `${marginTop}px` }}
        {...attributes.popper}
        ref={setPopperElement}
      >
        {text}

        <div className="absolute -top-1 left-1/2 flex h-3 w-3 translate-x-[-50%] rotate-45  bg-primary" />
      </div>
    </div>
  );
};

export default Tooltip;
