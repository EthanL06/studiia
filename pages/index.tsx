import type { NextPage } from "next";

import Navbar from "@/global/Navbar";

import Flashcard from "@/sets/Flashcard";
import StudyButtonGroup from "@/sets/StudyButtonGroup";
import HeaderInfo from "@/sets/HeaderInfo";
import Settings from "@/sets/Settings";
import StatsGroup from "@/sets/StatsGroup";

function Term({ term, definition }: { term: string; definition: string }) {
  return (
    <div className="relative flex flex-row justify-between gap-x-4 rounded-lg border-2 border-slate-200 bg-white p-4">
      <div className="min-w-[40%] max-w-[40%] text-xl font-semibold">
        {term}
      </div>
      <div className="border-l- rounded border-l-4"></div>
      <div className="flex-grow text-sm font-normal">{definition}</div>
    </div>
  );
}

const Home: NextPage = () => {
  return (
    <>
      <Navbar />

      <div className="flex flex-col items-center">
        <main className="mx-auto mt-10 flex w-[44rem] flex-col">
          <HeaderInfo />
          <StudyButtonGroup />
          <Flashcard
            term="Cohesion"
            definition="An attraction between molecules of the same substance"
          />
          <Settings
            authorImage="https://thispersondoesnotexist.com/image"
            author="robinjr26"
          />
          <StatsGroup learning={3} reviewing={2} mastered={15} />
        </main>

        <div className="relative mt-8 flex w-full justify-center rounded-t-3xl bg-slate-300/25 px-[18rem] pt-10 pb-32">
          <div className="flex flex-col gap-y-3">
            <div className="mb-4 text-3xl font-bold">20 terms</div>

            <Term
              term="Cohesion"
              definition="Attraction between molecules of the same substance"
            />

            <Term
              term="Adhesion"
              definition="Attraction between molecules of different substances"
            />

            <Term
              term="Surface Tension"
              definition="Water molecules at the surface are hydrogen-bonded to other
              molecules below them, making the surface difficult to puncture"
            />

            <Term
              term="Most atoms are neutral because"
              definition="They have the same number of protons and electrons"
            />

            <Term
              term="What determines the properties of a molecule?"
              definition="The number and type of atoms in the molecule"
            />

            <Term
              term="organic molecules"
              definition="Molecules that contain carbon and hydrogen"
            />

            <Term
              term="inorganic molecules"
              definition="non-carbon based molecules"
            />

            <Term
              term="ionic bond"
              definition="Electrons are transferred from one atom to another"
            />

            <Term
              term="covalent bond"
              definition="Electrons are shared between atoms"
            />

            <Term
              term="hydrogen bond"
              definition="Attraction between a hydrogen atom and another atom"
            />

            <Term
              term="hydrophobic interaction"
              definition="interaction between nonpolar molecules"
            />

            <Term
              term="van der Waals forces"
              definition="Weak attraction between molecules"
            />

            <Term
              term="What are influenced by characteristics of covalent bonds?"
              definition="Molecular shape, polarity, and intermolecular forces"
            />

            <Term
              term="Electronegativity"
              definition="the attractive force of an atom for electrons in a covalent bond"
            />

            <Term
              term="Surface Tension"
              definition="atoms w/ similar electronegativities: share electrons equally (nonpolar)
              atoms w/ different electronegativities: share electrons unequally (polar)"
            />

            <Term
              term="Cohesion"
              definition="Attraction between molecules of the same substance"
            />

            <Term
              term="Adhesion"
              definition="Attraction between molecules of different substances"
            />

            <Term
              term="Surface Tension"
              definition="Water molecules at the surface are hydrogen-bonded to other
              molecules below them, making the surface difficult to puncture"
            />

            <Term
              term="Cohesion"
              definition="Attraction between molecules of the same substance"
            />

            <Term
              term="Adhesion"
              definition="Attraction between molecules of different substances"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
