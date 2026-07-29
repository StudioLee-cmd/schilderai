import React from "react";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Logos from "@/components/Logos";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Section from "@/components/Section";


import CostComparison from "@/components/CostComparison/CostComparison";
import FallingText from "@/components/FallingText";

import USPPillars from "@/components/USPPillars";

import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};


const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Logos />
      <USPPillars />
      <Container>
        <Benefits />

        <CostComparison />

      </Container>

      <Container>

        <Section
          id="testimonials"
          title="Wat Onze Klanten Zeggen"
          description="Ervaringen van bedrijven die al werken met SchilderAI."
        >
          <Testimonials />
        </Section>

        <FAQ />


      </Container>
      <FallingText />
    </>
  );
};

export default HomePage;