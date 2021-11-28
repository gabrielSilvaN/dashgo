import { Icon, Link as ChakraLink, LinkProps, Text } from "@chakra-ui/react";
import { ActiveLink } from "components/ActiveLink";
import { ElementType } from "react";

interface NavLinkProps extends LinkProps {
  text: string;
  icon: ElementType;
  href: string;
}

export function NavLink({ icon, text, href, ...rest }: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink {...rest} display="flex" alignItems="center">
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {text}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
}
