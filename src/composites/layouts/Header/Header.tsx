import Button from "@/components/Button";
import Container from "@/components/Container";
import { ArrowOutward, Hamburger } from "@/components/Icons";
import { Menu } from "@headlessui/react";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <nav className="border-b border-[#6B6C75]">
      <Container className="hidden py-6 md:flex justify-between w-full items-center">
        <Link href="/">
          <img className="w-[80px]" src="/images/logo/logo-teamup.svg" />
        </Link>
        <div className="flex gap-[40px] text-white">
          <Link href="/about-us">About Us</Link>
          <Link href="#">Our Work</Link>
          <Link href="#">Pricing</Link>
        </div>
        <Link href="/contact-us">
          <Button
            className="border border-white rounded-full py-4 px-6 leading-[160%] tracking-wider"
            icon={<ArrowOutward className="w-6 h-6 text-white" />}
          >
            Contact
          </Button>
        </Link>
      </Container>

      <Container className="flex items-center justify-between md:hidden py-6">
        <Menu as="div" className="relative">
          <Menu.Button className="border border-white rounded-full flex items-center justify-center w-[56px] h-[56px]">
            <Hamburger className="w-6 h-6 text-white" />
          </Menu.Button>
          <Menu.Items
            as="div"
            className="absolute left-0 top-[70px] p-4 bg-purple text-white w-[200px] rounded-lg flex flex-col gap-6"
          >
            <Menu.Item as="div">
              <Link href="/about-us">About Us</Link>
            </Menu.Item>
            <Menu.Item as="div">
              <Link href="/#">Our Work</Link>
            </Menu.Item>
            <Menu.Item as="div">
              <Link href="/#">Pricing</Link>
            </Menu.Item>
            <Menu.Item as="div">
              <Link href="/contact-us">Contact Us</Link>
            </Menu.Item>
          </Menu.Items>
        </Menu>
        <Link href="/">
          <img className="w-[80px]" src="/images/logo/logo-teamup.svg" />
        </Link>
      </Container>
    </nav>
  );
};

export default Header;
