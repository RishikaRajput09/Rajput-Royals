import HeroSection from "@/Components/UI/HeroSection";
import WelcomeSection from "@/Components/UI/Welcome";
import AmenitiesSection from "@/Components/UI/Amenities";
import HighlightsSection from "@/Components/UI/Highlight";
import GallerySection from "@/Components/UI/Gallery";
import AboutSection from "@/Components/UI/Aboutus";
import TestimonialsSection from "@/Components/UI/Testimonials";
import ContactFAQSection from "@/Components/UI/Contact";

export default function Home() {
  return (
    <>
      <HeroSection/>
      <WelcomeSection/>
      <AmenitiesSection/>
      <HighlightsSection/>
      <GallerySection/>
      <AboutSection/>
      <TestimonialsSection/>
      <ContactFAQSection/>
    </>
  );
}