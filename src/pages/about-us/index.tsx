import Container from '@/components/Container';
import Culture from '@/composites/about-us/Culture';
import TeamMember from '@/composites/about-us/TeamMember';
import TopSide from '@/composites/about-us/TopSide';
import Head from 'next/head';
import React from 'react'

const AboutUs = () => {
  return (
    <>
      <Head>
        <title>TeamUp Agency - About Us</title>
        <meta name="description" content="TeamUp Agency - About Us" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className="my-[64px]">
        <TopSide />
        <Culture />
        <TeamMember />
      </Container>
    </>
  );
}

export default AboutUs