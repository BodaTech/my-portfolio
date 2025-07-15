import { ArrowRight, ChevronDown } from "lucide-react";
import type React from "react";

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <>
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative"
      >
        <div className="container mx-auto px-6 text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent leading-tight">
              Abderrahmane B.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Full-Stack Developer | AI & Data Science Engineer
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-xl mx-auto">
              Turning complex projects into smart solutions and building seamless
              digital experiences with purpose-driven design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => scrollToSection("projects")}
                className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
              >
                View My Work
                <ArrowRight className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="border-2 border-white/20 hover:border-white/40 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-white/5 backdrop-blur-sm"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </section>
    </>
  );
};

export default Hero;
