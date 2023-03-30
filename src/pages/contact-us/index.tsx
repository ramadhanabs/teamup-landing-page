import Container from "@/components/Container";
import Collaboration from "@/composites/contact-us/Collaboration";
import ContactForm from "@/composites/contact-us/ContactForm";
import SocialMedia from "@/composites/contact-us/SocialMedia";
import TopSide from "@/composites/contact-us/TopSide";
import Head from "next/head";
import React from "react";

const ContactUs = () => {
  return (
    <>
      <Head>
        <title>TeamUp Agency - Contact Us</title>
        <meta name="description" content="TeamUp Agency - Contact Us" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className="my-[64px]">
        <TopSide />
        <ContactForm />
        <Collaboration />
        <SocialMedia />
      </Container>
    </>
  );
};

export default ContactUs;
