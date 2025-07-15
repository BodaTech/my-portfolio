import type React from "react";

interface NavigationProps{
    isScrolled: boolean,
    scrollToSection: (sectionId: string) => void,
    activeSection: string
}

const Navigation: React.FC<NavigationProps> = ({
    isScrolled,
    scrollToSection,
    activeSection
}) => {
  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/20 backdrop-blur-md border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Portfolio
            </div>
            <div className="hidden md:flex space-x-8">
              {["Hero", "About", "Skills", "Projects", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`text-sm font-medium transition-all duration-300 hover:text-blue-400 ${
                      activeSection === item.toLowerCase()
                        ? "text-blue-400"
                        : "text-gray-300"
                    }`}
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation
