import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/hooks";
import { useRouter } from "next/router";
import { createContext, useEffect } from "react";

type SidebarDrawerContextProps = UseDisclosureReturn;

const sidebarDrawerContext = createContext({} as SidebarDrawerContextProps);

const SidebarDrawerContextProvider: React.FC = ({ children }) => {
  const disclosure = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    disclosure.onClose();
  }, [router.asPath]);

  return (
    <sidebarDrawerContext.Provider value={disclosure}>
      {children}
    </sidebarDrawerContext.Provider>
  );
};

export { SidebarDrawerContextProvider, sidebarDrawerContext };
