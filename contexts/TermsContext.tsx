import { createContext, useState } from "react";
import data from "./data";

export type TermType = {
  term: string;
  definition: string;
};

interface TermsContextType {
  terms: TermType[];
  addTerm: (term: TermType) => void;
  getTerm: (index: number) => TermType;
  getTermCount: () => number;
}

type TermsContextProviderProps = {
  children: React.ReactNode;
};

export const TermsContext = createContext({} as TermsContextType);

export const TermsContextProvider = ({
  children,
}: TermsContextProviderProps) => {
  const [terms, setTerms] = useState<TermType[]>(data);

  const addTerm = (term: TermType) => {
    setTerms([...terms, term]);
  };

  const getTerm = (index: number) => {
    return terms[index];
  };

  const getTermCount = () => {
    return terms.length;
  };

  return (
    <TermsContext.Provider value={{ terms, addTerm, getTerm, getTermCount }}>
      {children}
    </TermsContext.Provider>
  );
};
