import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Problem from "@/components/home/Problem";
import HowItWorks from "@/components/home/HowItWorks";
import Features from "@/components/home/Features";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Problem />
      <HowItWorks />
      <Features />
      <Testimonials />
      <CTASection />
    </>
  );
}
