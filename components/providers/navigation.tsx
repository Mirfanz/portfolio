"use client";

import {
  createContext,
  MutableRefObject,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

interface NavContextProps {
  active: string;
  homeRef: MutableRefObject<HTMLElement | null>;
  servicesRef: MutableRefObject<HTMLElement | null>;
  resumeRef: MutableRefObject<HTMLElement | null>;
  projectsRef: MutableRefObject<HTMLElement | null>;
  contactRef: MutableRefObject<HTMLElement | null>;
}

const NavContext = createContext<NavContextProps | null>(null);

export function NavProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [active, setActive] = useState<string>("home");
  const homeRef = useRef<HTMLElement | null>(null);
  const servicesRef = useRef<HTMLElement | null>(null);
  const resumeRef = useRef<HTMLElement | null>(null);
  const projectsRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    onscroll = () => {
      const y = scrollY;
      if (y >= (contactRef.current?.offsetTop ?? 0) - 100) setActive("contact");
      else if (y >= (projectsRef.current?.offsetTop ?? 0) - 100)
        setActive("projects");
      else if (y >= (resumeRef.current?.offsetTop ?? 0) - 100)
        setActive("resume");
      else if (y >= (servicesRef.current?.offsetTop ?? 0) - 100)
        setActive("services");
      else if (y >= (homeRef.current?.offsetTop ?? 0) - 100) setActive("home");
    };
  }, [homeRef, servicesRef, resumeRef, projectsRef, contactRef]);

  return (
    <NavContext.Provider
      value={{
        active,
        homeRef,
        servicesRef,
        resumeRef,
        projectsRef,
        contactRef,
      }}
    >
      {children}
    </NavContext.Provider>
  );
}

export function useNav() {
  const navContext = useContext(NavContext);

  if (!navContext) throw new Error("NavProvider needed");
  return navContext;
}
