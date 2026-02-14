import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import VideoPreview from "@/components/sections/VideoPreview";
import Curriculum from "@/components/sections/Curriculum";
import WhyVibeCoding from "@/components/sections/WhyVibeCoding";
import Instructor from "@/components/sections/Instructor";
import Transformation from "@/components/sections/Transformation";
import SocialProof from "@/components/sections/SocialProof";
import GiftBenefit from "@/components/sections/GiftBenefit";
import RegistrationForm from "@/components/sections/RegistrationForm";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";

export default function Home() {
  return (
    <main className="bg-[#0A0A0A] text-white">
      <Header />
      <Hero />
      <VideoPreview />
      <Curriculum />
      <WhyVibeCoding />
      <Instructor />
      <Transformation />
      <SocialProof />
      <GiftBenefit />
      <RegistrationForm />
      <FAQ />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
