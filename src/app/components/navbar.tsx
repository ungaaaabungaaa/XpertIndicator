'use client'
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
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
    "Indicator",
    "About Us",
    "Contact Us",
  ];

  return (
    <Navbar className="bg-custom-navbar" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <AcmeLogo />
          <p className="text-inherit font-bold text-2xl text-purple-x  cursor-pointer">HappyMo</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" className="text-grey hover:text-white hover:font-bold" href="">
            40X Challenge
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link aria-current="page"  className="text-grey hover:text-white hover:font-bold" href="#">
            Indicator
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground"  className="text-grey hover:text-white hover:font-bold" href="#">
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground"  className="text-grey hover:text-white hover:font-bold" href="#">
            Contact Us
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="lg:flex">
         <Button as={Link} className="bg-login-button " href="#" variant="flat">
            AI Indicator
          </Button>
        </NavbarItem>
        <NavbarItem>
        <Button as={Link} className="bg-signup-button" href="#" variant="flat">
            40x Start Now
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
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

