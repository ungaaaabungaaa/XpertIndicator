'use client'
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="56" viewBox="0 0 32 32" width="56">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="#5350F2"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "40x Challenge",
    "AI Indicator",
    "Reviews",
    "Contact Us",
    "About Us",
  ];

  return (
    <Navbar className="bg-custom-navbar text-white" isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-purple-x  text-inherit text-2xl">HappyMo</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-purple-x  text-inherit">HappyMo</p>
        </NavbarBrand>
        <NavbarItem>
          <Link className="text-grey visible" href="#">
          40x Challenge
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link className="text-grey" aria-current="page" href="#">
          AI Indicator
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-grey" color="foreground" href="#">
          Reviews
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-grey" color="foreground" href="#">
          About Us 
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-grey" color="foreground" href="#">
          Contact Us 
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex lg:block">
          <Button as={Link} color="warning" href="#" className="bg-login-button" variant="flat">
            AI Indicator
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="warning" className="bg-signup-button" href="#" variant="flat">
            40x Start Now
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="bg-custom-navbar text-white">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full bg-custom-navbar text-white"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

