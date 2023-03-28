import Button from "@/components/Button";
import Container from "@/components/Container";
import { ArrowOutward } from "@/components/Icons";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <nav className="border-b border-[#6B6C75]">
      <Container className="py-6 flex justify-between w-full items-center">
        <img className="w-[80px]" src="/images/logo/logo-teamup.svg" />
        <div className="flex gap-[40px] text-white">
          <Link href="#">About Us</Link>
          <Link href="#">Our Work</Link>
          <Link href="#">Pricing</Link>
        </div>
        <Button className="border border-white rounded-full py-4 px-6 leading-[160%] tracking-wider" icon={<ArrowOutward className="w-6 h-6 text-white" />}>
          Contact
        </Button>
      </Container>
    </nav>
  );
};

export default Header;
