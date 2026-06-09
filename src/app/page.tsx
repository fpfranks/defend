import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import MobileCtaBar from "@/components/MobileCtaBar";
import SocialProof from "@/components/SocialProof";
import CrimeStats from "@/components/CrimeStats";
import ProblemStatement from "@/components/ProblemStatement";
import WhyLocal from "@/components/WhyLocal";
import ProductSpotlight from "@/components/ProductSpotlight";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Comparison from "@/components/Comparison";
import Testimonials from "@/components/Testimonials";
import ForBusiness from "@/components/ForBusiness";
import Pricing from "@/components/Pricing";
import DefendCare from "@/components/DefendCare";
import CustomQuote from "@/components/CustomQuote";
import FAQ from "@/components/FAQ";
import Guarantee from "@/components/Guarantee";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        {/* 1. Hero — what this is, who it's for, what to do */}
        <Hero />
        {/* 2. Social proof — immediate credibility */}
        <SocialProof />
        {/* 3. Problem awareness — make the risk real */}
        <CrimeStats />
        {/* 4. Why systems fail — reframe competitors */}
        <ProblemStatement />
        {/* 5. Why Defend is different — local advantage */}
        <WhyLocal />
        {/* 6. Product demonstration */}
        <ProductSpotlight />
        {/* 7. Feature breakdown */}
        <Features />
        {/* 8. Installation process */}
        <HowItWorks />
        {/* 9. Comparison table */}
        <Comparison />
        {/* 10. Customer reviews */}
        <Testimonials />
        {/* 11. Business/landlord segment */}
        <ForBusiness />
        {/* 12. Pricing */}
        <Pricing />
        {/* 13. Defend Care support plan */}
        <DefendCare />
        {/* 14. Custom quote calculator */}
        <CustomQuote />
        {/* 15. FAQ — handle objections before the form */}
        <FAQ />
        {/* 16. Risk reversal — remove final hesitation */}
        <Guarantee />
        {/* 17. Final CTA */}
        <Contact />
      </main>
      {/* Extra padding so content isn't hidden behind the mobile CTA bar */}
      <div className="h-20 md:hidden" />
      <Footer />
      <MobileCtaBar />
    </>
  );
}
