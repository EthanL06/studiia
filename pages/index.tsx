import type { NextPage } from "next";

import Navbar from "@/global/Navbar";
import {
  Term,
  StatsGroup,
  StudyButtonGroup,
  Settings,
  HeaderInfo,
  Flashcard,
} from "@/components/sets";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />

      <div className="flex w-full flex-col items-center">
        <main className="mt-10 flex w-full flex-col px-4 md:w-[44rem]">
          <HeaderInfo />
          <div className="my-10 flex flex-col-reverse gap-y-8 xxs:flex-col">
            <StudyButtonGroup />
            <Flashcard
              term="Cohesion"
              definition="An attraction between molecules of the same substance"
            />
          </div>
          <Settings
            authorImage="https://thispersondoesnotexist.com/image"
            author="robinjr26"
          />
          <StatsGroup learning={3} reviewing={2} mastered={15} />
        </main>

        <div className="relative mt-8 flex w-full justify-center rounded-t-3xl bg-slate-300/25 px-6 pt-10 pb-32 sm:px-12 md:px-24 lg:px-[12rem]">
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
