import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import ProductSpotlight from "@/components/ProductSpotlight";
import Features from "@/components/Features";
import Guarantee from "@/components/Guarantee";
import ForBusiness from "@/components/ForBusiness";
import Testimonials from "@/components/Testimonials";
import WhyLocal from "@/components/WhyLocal";
import CrimeStats from "@/components/CrimeStats";
import Comparison from "@/components/Comparison";
import Pricing from "@/components/Pricing";
import DefendCare from "@/components/DefendCare";
import CustomQuote from "@/components/CustomQuote";
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
        <Guarantee />
        <ForBusiness />
        <Testimonials />
        <WhyLocal />
        <CrimeStats />
        <Comparison />
        <Pricing />
        <DefendCare />
        <CustomQuote />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
