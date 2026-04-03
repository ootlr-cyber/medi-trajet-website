import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import Stats from "@/components/home/Stats";
import Problem from "@/components/home/Problem";
import HowItWorks from "@/components/home/HowItWorks";
import Features from "@/components/home/Features";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";
import ResourcesSection from "@/components/home/ResourcesSection";

export const metadata: Metadata = {
  title: "MediTrajet | Transport médical partagé conventionné",
  description:
    "Plateforme de transport médical partagé : matching intelligent, suivi GPS, reporting ARS. Atteignez 50% de transport partagé (décret 2025). Démo gratuite.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Stats />
      <Problem />
      <HowItWorks />
      <Features />
      <Testimonials />
      <ResourcesSection />
      <CTASection />
    </>
  );
}
