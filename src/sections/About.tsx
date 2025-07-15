const About = () => {
  return (
    <>
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="glass-card p-8 rounded-3xl backdrop-blur-md bg-white/5 border border-white/10">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I'm a passionate full-stack developer with over 4 years of experience creating digital solutions that make a difference. My journey began with a fascination for how technology can transform ideas into reality.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                I specialize in modern web technologies, mobile development, and emerging techs.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">10+</div>
                  <div className="text-sm text-gray-400">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">4+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400 mb-2">15+</div>
                  <div className="text-sm text-gray-400">Technologies</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About
