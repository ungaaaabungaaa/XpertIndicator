'use client'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/navbar";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import React from "react";
import Image from 'next/image';
import Logo from "../../../public/navbar_icon.png"


export default function Nav_Bar() {
  return (
    <Navbar className="bg-custom-navbar">
      <NavbarBrand>
        <Image className="mr-8" src={Logo} alt="XpertIndicator Logo" width={28} height={28} />
        <p className="font-bold text-white">XpertIndicator</p>
      </NavbarBrand>
      <NavbarContent className="hidden md:flex md:gap-4" justify="center">
        <NavbarItem>
          <Link className="text-grey hover:text-white" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-grey hover:text-white" href="/features" aria-current="page">
           Features
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-grey hover:text-white" href="/news">
            News
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-grey hover:text-white"  href="/contact">
          Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden md:flex">
          <Button as={Link}  className="bg-login-button" href="/auth/login" variant="flat">
            login
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link}  className="bg-signup-button" href="/auth/register" variant="flat">
            Getting Started
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}