import React, { useState, useEffect, useContext, useRef } from "react";
import Tilt from "react-parallax-tilt";
import {
  motion,
  useMotionValue,
  useAnimationControls,
  PanInfo,
} from "framer-motion";

import { TermsContext } from "contexts/TermsContext";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

enum Direction {
  Front,
  Back,
  Left = -1,
  Right = 1,
}

const Flashcard = () => {
  const { getTerm, getTermCount } = useContext(TermsContext);

  const [click, setClick] = useState(false);
  const [index, setIndex] = useState(0);

  const [dragging, setDragging] = useState(false);
  const [drag, setDrag] = useState<any>("x");

  const controls = useAnimationControls();
  const x = useMotionValue(0);

  const cardElem = useRef<HTMLDivElement>(null);

  const flyAway = async (e: Event, info: PanInfo) => {
    setTimeout(() => {
      setDragging(false);
    }, 100);

    console.log(drag, dragging, info.offset.x);
    if (Math.abs(info.offset.x) < 200) return;

    const direction = info.offset.x > 0 ? Direction.Right : Direction.Left;

    if (direction === Direction.Right && index - 1 <= 0) return;
    if (direction === Direction.Left && index + 1 > getTermCount()) return;

    setDrag(false);
    await sequence(direction);
    setDragging(false);
    setDrag("x");
  };

  const sequence = async (direction: Direction) => {
    // get width of screen
    const width = window.innerWidth;

    await controls.start({
      x: width * direction,
    });
    changeIndex(direction * -1);
    controls.set({
      x: width * direction * -1,
    });
    return controls.start({
      x: 0,
      transition: {
        type: "spring",
        stiffness: 1000,
        damping: 100,
        restDelta: 1,
        restSpeed: 1,
        duration: 0.5,
      },
    });
  };

  const changeIndex = (direction: Direction) => {
    if (direction === Direction.Left) {
      setIndex((prev) => prev - 1);
    } else {
      setIndex((prev) => prev + 1);
    }
  };

  const handleClick = (e: React.SyntheticEvent) => {
    if (dragging) return;
    switch (e.currentTarget.id) {
      case "left":
        e.stopPropagation();
        if (index - 1 < 1) return;

        changeIndex(Direction.Left);
        break;
      case "right":
        e.stopPropagation();
        if (index + 1 > getTermCount()) return;

        changeIndex(Direction.Right);
        break;
      default:
        setClick(!click);
        break;
    }
  };

  return (
    <motion.div
      animate={controls}
      drag={drag}
      dragElastic={0.75}
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      onDrag={() => {
        setDragging(true);
      }}
      onDragEnd={flyAway}
      style={{ x }}
      transition={{
        type: "spring",
        stiffness: 1000,
        damping: 100,
        restDelta: 1,
        restSpeed: 1,
      }}
      whileDrag={{ cursor: "grabbing" }}
      whileHover={{ cursor: "pointer" }}
      dragSnapToOrigin={true}
    >
      <Tilt
        tiltEnable={useWindowWide(360)}
        tiltReverse={false}
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        className="rounded-2xl"
      >
        <div
          id="flashcard"
          className={`${click ? "rotate" : ""}`}
          onClick={handleClick}
          ref={cardElem}
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
    </motion.div>
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
  }, [width]);

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

      <div className="absolute left-0 right-0 -bottom-5 -z-10 mx-auto hidden h-5 rounded-b-[15px] bg-slate-200 sm:block sm:w-[33rem]" />
    </div>
  );
};

export default Flashcard;
