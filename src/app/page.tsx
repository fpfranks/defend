import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import ProductSpotlight from "@/components/ProductSpotlight";
import Features from "@/components/Features";
import WhyLocal from "@/components/WhyLocal";
import CrimeStats from "@/components/CrimeStats";
import Comparison from "@/components/Comparison";
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
        <ProductSpotlight />
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
