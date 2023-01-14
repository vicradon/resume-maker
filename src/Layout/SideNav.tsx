import { Button, Flex } from "@chakra-ui/react";
import NavLink from "Components/NavLink";
import React from "react";

interface Props {}

export const links = [
  {
    href: "/",
    title: "Profile",
  },
  {
    href: "/education",
    title: "Education",
  },
  {
    href: "/work-experience",
    title: "Experience",
  },
  {
    href: "/skills",
    title: "Skills",
  },
  {
    href: "/projects",
    title: "Projects",
  },
];

function SideNav(props: Props) {
  const {} = props;

  return (
    <>
      <Flex marginBottom={"2rem"} rowGap={"1rem"} flexDirection={"column"}>
        {links.map((link) => {
          return (
            <NavLink key={link.href} href={link.href}>
              {link.title}
            </NavLink>
          );
        })}
      </Flex>

      <Button paddingX={"2rem"} colorScheme={"teal"}>
        Make
      </Button>
    </>
  );
}

export default SideNav;
