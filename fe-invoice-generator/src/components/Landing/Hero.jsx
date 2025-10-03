import { Link } from "react-router-dom";
import Front_Img from "../../assets/preview_image.png";

export default function Hero() {
  const isAuthenticated = false;

  return (
    <section className="relative bg-[#fbfbfb] overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.5] bg-[size:60px_60px]"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-blue-950 leading-tight mb-6">
            Ai-Powered Invoicing, Made Effortless
          </h1>
          <p className="text-xl sm:text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
            Let our AI create invoice from simple text, generate payment
            reminders, and provide smart insights to help manage your finance.
          </p>
          <div className="flex flex-cols sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            {isAuthenticated ? (
              <Link to="/dashboard" className=""></Link>
            ) : (
              <Link to="/signup" className="">
                Get started for Free
              </Link>
            )}
            <a href="#features" className="">
              Learn More
            </a>
          </div>
        </div>
      </div>

      <div className="">
        <img src={Front_Img} alt="Invoice App Screenshot" className="" />
      </div>
    </section>
  );
}
