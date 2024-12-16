'use client'
import React from "react";
import { usePathname, useRouter } from 'next/navigation';
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
  const pathname = usePathname();
  const router = useRouter();

  // Menu items with corresponding links
  const menuItems = [
    { name: "40x Challenge", path: "/" },
    { name: "AI Indicator", path: "/features" },
  ];

  // Handle navigation on logo or brand name click
  const navigateToHome = () => {
    router.push('/');
  };

  return (
    <Navbar className="bg-custom-navbar text-white" isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3 cursor-pointer" justify="center">
        <NavbarBrand onClick={navigateToHome} style={{ cursor: 'pointer' }}>
          <AcmeLogo />
          <p className="font-bold text-purple-x text-inherit text-2xl">HappyMo</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 cursor-pointer justify-center items-center flex-grow" justify="center">
        <NavbarBrand onClick={navigateToHome} style={{ cursor: 'pointer' }}>
          <AcmeLogo />
          <p className="font-bold text-purple-x text-inherit">HappyMo</p>
        </NavbarBrand>
        <div className="flex justify-center items-center flex-grow gap-3">
          {menuItems.map((item, index) => (
            <NavbarItem key={index}>
              <Link className={`text-grey hover:text-white hover:font-bold cursor-pointer ${pathname === item.path ? 'font-bold' : ''}`} href={item.path}>
                {item.name}
              </Link>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden">
          <Button as={Link} color="warning" href="/checkout" className="bg-login-button" variant="flat">
            AI Indicator
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="warning" className="bg-signup-button" href="https://i.bybit.com/269r1abS?action=inviteToCopy" variant="flat">
            40x Start Now
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="bg-custom-navbar text-white">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              className={`w-full bg-custom-navbar text-white ${pathname === item.path ? 'font-bold' : ''}`}
              href={item.path}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

