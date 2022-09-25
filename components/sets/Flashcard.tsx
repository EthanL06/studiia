import React, { useState, useEffect } from "react";

import Tilt from "react-parallax-tilt";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

enum Direction {
  Front,
  Back,
}

type FlashCardProps = {
  term: string;
  definition: string;
};

const Flashcard = ({ term, definition }: FlashCardProps) => {
  const [click, setClick] = useState(false);
  const [index, setIndex] = useState(1);

  const handleClick = (e: React.SyntheticEvent) => {
    switch (e.currentTarget.id) {
      case "left":
        setIndex(index - 1);
        e.stopPropagation();
        break;
      case "right":
        setIndex(index + 1);
        e.stopPropagation();
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
      <div className={`card ${click ? "rotate" : ""}`} onClick={handleClick}>
        <Side
          type={Direction.Front}
          text={term}
          index={index}
          handleClick={handleClick}
        />
        <Side
          type={Direction.Back}
          text={definition}
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

          <p className="font-semibold">{index}/20</p>

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
