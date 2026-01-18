import UrgencyBar from "@/components/UrgencyBar";
import HeroSection from "@/components/HeroSection";
import FormulaSection from "@/components/FormulaSection";
import BenefitsSection from "@/components/BenefitsSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import DeliverySection from "@/components/DeliverySection";
import FAQSection from "@/components/FAQSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <UrgencyBar />
      <main>
        <HeroSection />
        <FormulaSection />
        <BenefitsSection />
        <TargetAudienceSection />
        <TestimonialsSection />
        <DeliverySection />
        <FAQSection />
        <GuaranteeSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
