import {
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
  createContext,
} from "react";

interface NavbarContextType {
  isNavbarOpen: boolean;
  setIsNavbarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NavbarContext = createContext({} as NavbarContextType);

export const NavbarContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth > 768) {
  //       setIsNavbarOpen(false);
  //     }
  //   };

  //   window.addEventListener("resize", handleResize);

  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  return (
    <NavbarContext.Provider value={{ isNavbarOpen, setIsNavbarOpen }}>
      {children}
    </NavbarContext.Provider>
  );
};
