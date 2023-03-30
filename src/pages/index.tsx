import Container from "@/components/Container";
import Hero from "@/composites/home/Hero";
import MoreAboutUs from "@/composites/home/MoreAboutUs";
import OurClients from "@/composites/home/OurClients";
import OurExpertise from "@/composites/home/OurExpertise";
import OurProject from "@/composites/home/OurProject";
import PricingPlan from "@/composites/home/PricingPlan";
import Testimoni from "@/composites/home/Testimoni";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>TeamUp Agency - Home Page</title>
        <meta name="description" content="TeamUp Agency - Home Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Hero />
        <MoreAboutUs />
        <OurClients />
        <OurExpertise />
        <OurProject />
        <PricingPlan />
        <Testimoni />
      </Container>
    </>
  );
}
