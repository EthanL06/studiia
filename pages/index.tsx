import type { NextPage } from "next";
import { useContext, useState, useEffect } from "react";

import { TermsContext, TermType } from "contexts/TermsContext";
import { NavbarContext } from "contexts/NavbarContext";

import Navbar from "@/global/Navbar";
import {
  Term,
  StatsGroup,
  StudyButtonGroup,
  Settings,
  HeaderInfo,
  Flashcard,
} from "@/components/sets";
import Link from "next/link";

const Home: NextPage = () => {
  const { terms, addTerm, getTermCount } = useContext(TermsContext);
  const { isNavbarOpen } = useContext(NavbarContext);

  return (
    <>
      <Navbar />
      <div
        className={`w-full flex-col items-center overflow-x-hidden sm:!flex ${
          isNavbarOpen ? "hidden" : "flex"
        }`}
      >
        <main className="flex w-full flex-col px-4 md:w-[44rem]">
          <HeaderInfo />

          <div className="my-10 flex flex-col-reverse gap-y-6 xxs:flex-col">
            <StudyButtonGroup />
            <hr className="rounded-full border-2" />
            <Flashcard />
          </div>

          <Settings
            authorImage="https://thispersondoesnotexist.com/image"
            author="robinjr26"
          />
          <StatsGroup learning={3} reviewing={2} mastered={15} />

          <button
            className="h-10 w-10 rounded-full bg-slate-400 text-white"
            onClick={() => {
              const term = prompt("Enter term");
              const definition = prompt("Enter definition");

              if (term && definition) {
                const newTerm: TermType = {
                  term,
                  definition,
                };

                addTerm(newTerm);
              }
            }}
          >
            Add
          </button>
          <button
            className="h-10 w-10 rounded-full bg-slate-400 text-white"
            onClick={() => {
              console.log(JSON.stringify(terms));
              navigator.clipboard.writeText(JSON.stringify(terms));
              alert("Copied to clipboard:\n\n" + JSON.stringify(terms));
            }}
          >
            Copy
          </button>
          <Link href="/create">Create</Link>
        </main>

        <div className="relative mt-8 flex w-full justify-center rounded-t-3xl bg-slate-300/25 px-6 pt-10 pb-32 sm:px-12 md:px-24 lg:px-[12rem]">
          <div className="flex w-full max-w-[55rem] flex-col gap-y-3">
            <div className="mb-4 text-3xl font-bold">
              {getTermCount()} terms
            </div>

            {terms.map((term: TermType, index: number) => (
              <Term key={index} term={term.term} definition={term.definition} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
