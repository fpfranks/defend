import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import WhyLocal from "@/components/WhyLocal";
import Comparison from "@/components/Comparison";
import CrimeStats from "@/components/CrimeStats";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <WhyLocal />
        <CrimeStats />
        <Comparison />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
