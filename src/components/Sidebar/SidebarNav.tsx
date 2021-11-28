import { Stack } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink text="Dashboard" href="/dashboard" icon={RiDashboardLine} />
        <NavLink text="Usuários" href="/users" icon={RiContactsLine} />
      </NavSection>

      <NavSection title="AUTOMAÇÃO">
        <NavLink text="Formulários" href="/forms" icon={RiInputMethodLine} />
        <NavLink text="Automação" href="/automation" icon={RiGitMergeLine} />
      </NavSection>
    </Stack>
  );
}
