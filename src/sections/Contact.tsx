import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <>
      <section id="contact" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Ready to bring your ideas to life? I'd love to hear about your
              project and discuss how we can create something amazing together.
            </p>
            <div className="glass-card p-8 rounded-3xl backdrop-blur-md bg-white/5 border border-white/10">
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a
                  href="abderrahmanebouda123@gmail.com"
                  className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  <Mail className="w-5 h-5" />
                  Send Email
                </a>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/BodaTech" target="_blank"
                    className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href="https://linkedin.com/in/boudaoud-abderrahmane"  target="_blank"
                    className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};


export default Contact