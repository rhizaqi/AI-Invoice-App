import Faqs from "../../components/Landing/Faqs";
import Features from "../../components/Landing/Features";
import Footer from "../../components/Landing/Footer";
import Header from "../../components/Landing/Header";
import Hero from "../../components/Landing/Hero";
import Testimonial from "../../components/Landing/Testimonial";

export default function LandingPage() {
  return (
    <div className="bg-[#ffffff] text-gray-600">
      <Header />
      <main>
        <Hero />
        <Features />
        <Testimonial />
        <Faqs />
        <Footer />
      </main>
    </div>
  );
}
