import Features from "../../components/Landing/Features";
import Header from "../../components/Landing/Header";
import Hero from "../../components/Landing/Hero";
import Testimonial from "../../components/Landing/Testimonial";


export default function LandingPage() {
  return (
    <div className="bg-[#ffffff] text-gray-600">
      <Header />
      <main className="mb-[96]">
        <Hero />
        <Features />
        <Testimonial/>
      </main>
    </div>
  );
}
