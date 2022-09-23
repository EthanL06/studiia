import type { NextPage } from "next";
import Head from "next/head";

import { useState } from "react";
import Tilt from "react-parallax-tilt";

import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />

      <main className="mx-auto mt-14 flex w-[44rem] flex-col">
        <h1 className="text-left text-4xl font-bold">Biochemistry Quiz</h1>
        <div className="mt-2 flex items-end gap-x-4">
          <div className="flex gap-x-2">
            <Star filled={true} />
            <Star filled={true} />
            <Star />
            <Star />
            <Star />
          </div>
          <div>
            <p className="text-base font-medium text-primary/80">3 reviews</p>
          </div>
        </div>
        <div className="mt-6 flex justify-between gap-x-8">
          <Button title={"Learn"} />
          <Button title={"Flashcards"} />
          <Button title={"Test"} />
        </div>

        <Flashcard />
      </main>
    </>
  );
};

const Flashcard = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <Tilt tiltReverse={true} perspective={1000}>
      <div
        className={`card container mt-8 ${click ? "rotate" : ""}`}
        onClick={handleClick}
        data-tilt
      >
        <div className="card-side front neumorphism gradient flex-column relative flex h-[20rem] w-full rounded-lg bg-white py-2 pb-8">
          <div className="m-auto flex max-h-[100%] flex-initial flex-col overflow-y-auto p-2 text-center text-4xl font-semibold text-white">
            Cohesion
          </div>

          <div className="absolute top-2">
            <div className="flex w-full items-center justify-between gap-x-4 p-4 text-white">
              <button className="rounded-full p-2 hover:bg-black/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>

              <p className="font-semibold">1/20</p>

              <button className="rounded-full p-2 hover:bg-black/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="absolute left-0 right-0 -bottom-5 -z-10 mx-auto h-5 w-[33rem] rounded-b-[15px] bg-slate-200"></div>
        </div>

        <div className="card-side back neumorphism gradient flex-column absolute top-0 flex h-[20rem] w-full rounded-lg bg-white py-2 pb-8">
          <div className="m-auto flex max-h-[100%] flex-initial flex-col overflow-y-auto p-2 text-center text-xl font-semibold text-white">
            Attraction between molecules of the same substance
          </div>

          <div className="absolute top-2">
            <div className="flex w-full items-center justify-between gap-x-4 p-4 text-white">
              <button className="rounded-full p-2 hover:bg-black/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>

              <p className="font-semibold">1/20</p>

              <button className="rounded-full p-2 hover:bg-black/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="absolute left-0 right-0 -bottom-5 -z-10 mx-auto h-5 w-[33rem] rounded-b-[15px] bg-slate-200"></div>
        </div>
      </div>
    </Tilt>
  );
};

const Button = ({
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

type StarProps = {
  filled?: boolean;
};

const Star = ({ filled = false }: StarProps) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className={`h-6 w-6 ${filled ? "fill-yellow-300" : "fill-slate-300"}`}
      >
        <path
          fillRule="evenodd"
          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
          clipRule="evenodd"
        />
      </svg>
    </>
  );
};

export default Home;
