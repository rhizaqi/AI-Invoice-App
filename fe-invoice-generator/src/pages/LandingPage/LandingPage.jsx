import Header from "../../components/Landing/Header";
import Hero from "../../components/Landing/Hero";

export default function LandingPage() {
  return (
    <div className="bg-[#ffffff] text-gray-600">
      <Header />
      <main>
        <Hero/>
      </main>
    </div>
  );
}
