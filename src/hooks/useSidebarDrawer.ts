import { useContext } from "react";
import { sidebarDrawerContext } from "contexts/SidebarDrawerContext";

export const useSidebarDrawer = () => useContext(sidebarDrawerContext);
