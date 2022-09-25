import React, { useState, useEffect, useContext, useRef } from "react";
import Tilt from "react-parallax-tilt";
import { useSwipeable } from "react-swipeable";
import { TermsContext } from "contexts/TermsContext";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

enum Direction {
  Front,
  Back,
}

const Flashcard = () => {
  const { getTerm, getTermCount } = useContext(TermsContext);
  const flashcardRef = useRef<HTMLDivElement>(null);

  const [click, setClick] = useState(false);
  const [index, setIndex] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (index + 1 > getTermCount()) return;

      if (index - 1 < 1) return;
      flashcardRef.current?.classList.add("slide-left");

      setTimeout(() => {
        setIndex(index - 1);
      }, 375);

      setTimeout(() => {
        flashcardRef.current?.classList.remove("slide-left");
      }, 750);

      setIndex(index + 1);
    },
    onSwipedRight: () => {
      if (index - 1 < 1) return;

      flashcardRef.current?.classList.add("slide-right");

      setTimeout(() => {
        setIndex(index + 1);
      }, 375);

      setTimeout(() => {
        flashcardRef.current?.classList.remove("slide-right");
      }, 750);
    },
  });

  const handleClick = (e: React.SyntheticEvent) => {
    switch (e.currentTarget.id) {
      case "left":
        e.stopPropagation();

        setIndex(index - 1);
        break;
      case "right":
        e.stopPropagation();
        if (index + 1 > getTermCount()) return;

        setIndex(index + 1);
        break;
      default:
        setClick(!click);
        break;
    }
  };

  return (
    <Tilt
      tiltEnable={useWindowWide(360)}
      tiltReverse={true}
      tiltMaxAngleX={15}
      tiltMaxAngleY={10}
    >
      <div
        {...handlers}
        ref={flashcardRef}
        className={`hover:cursor-pointer ${click ? "rotate" : ""}`}
        onClick={handleClick}
      >
        <Side
          type={Direction.Front}
          text={getTerm(index - 1)?.term || "Term"}
          index={index}
          handleClick={handleClick}
        />
        <Side
          type={Direction.Back}
          text={getTerm(index - 1)?.definition || "Definition"}
          index={index}
          handleClick={handleClick}
        />
      </div>
    </Tilt>
  );
};

const useWindowWide = (size: number) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    console.log(width);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setWidth]);

  return width > size;
};

type SideProps = {
  text: string;
  type: Direction;
  index: number;
  handleClick: (e: React.SyntheticEvent) => void;
};

const Side = ({
  text = "...",
  type = Direction.Front,
  index,
  handleClick,
}: SideProps) => {
  const { getTermCount } = useContext(TermsContext);

  return (
    <div
      className={`${
        type === Direction.Front ? "front relative" : "back absolute top-0"
      } card-side neumorphism gradient flex-column flex h-[20rem] w-full rounded-lg bg-white py-2 pb-8`}
    >
      <div
        className={`m-auto flex max-h-[100%] flex-initial flex-col overflow-y-auto p-2 pt-10 text-center ${
          type === Direction.Front ? "text-4xl" : "text-xl"
        } font-semibold text-white`}
      >
        {text}
      </div>

      <div className="absolute top-2">
        <div className="flex w-full items-center justify-between gap-x-4 p-4 text-white">
          <button
            id="left"
            title="Previous"
            type="button"
            className="z-10 rounded-full p-2 hover:bg-black/10"
            onClick={handleClick}
          >
            <ChevronLeftIcon
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            />
          </button>

          <p className="font-semibold">
            {index}/{getTermCount()}
          </p>

          <button
            id="right"
            title="Next"
            type="button"
            className="z-10 rounded-full p-2 hover:bg-black/10"
            onClick={handleClick}
          >
            <ChevronRightIcon
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            />
          </button>
        </div>
      </div>

      <div className="absolute left-0 right-0 -bottom-5 -z-10 mx-auto hidden h-5 rounded-b-[15px] bg-slate-200 sm:block sm:w-[33rem]"></div>
    </div>
  );
};

export default Flashcard;
