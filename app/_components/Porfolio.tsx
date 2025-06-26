import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const Porfolio = () => {
  const heroTechStack = [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind",
    "Node.js",
    "PostgreSQL",
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className=" bg-white text-black min-h-screen [family-name:var(--font-geist-sans)]">
      <main className="w-full">
        {/* hero  section*/}
        <section
          id="hero"
          className="min-h-screen flex items-center justify-center px-6 relative"
        >
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-30"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white"></div>
          </div>

          <div className="w-full max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left section */}
              <div className="space-y-8">
                {/* Greetings */}
                <div className="space-y-2">
                  <p className="text-lg text-gray-600">Hello, I&apos;m</p>
                  <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    Lesuuh Ueh-Kabari
                  </h1>
                  <div className="flex items-center space-x-3">
                    <div className="h-1 w-12 bg-black"></div>
                    <p className="text-xl text-gray-700 font-medium">
                      Frontend Developer
                    </p>
                  </div>
                </div>
                {/* Description */}
                <div className="space-y-4">
                  <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                    I specialize in creating exceptional digital experiences
                    through clean code, thoughtful design, and modern web
                    technologies.
                  </p>
                  <div className="flex items-center space-x-6 text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span>Available for projects</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Based in Portharcourt</span>
                    </div>
                  </div>
                </div>
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={() => scrollToSection("projects")}
                    className="bg-black text-white hover:bg-gray-800 px-6 py-3 font-medium group"
                  >
                    View My Work
                    <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => scrollToSection("contact")}
                    className="border-gray-300 hover:border-black px-6 py-3 font-medium"
                  >
                    Let&apos;s Connect
                  </Button>
                </div>
              </div>
              {/* Righr section */}
              <div className="relative lg:block hidden">
                <div className="relative">
                  {/* Main Card */}
                  <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 relative z-10">
                    <div className="space-y-6">
                      {/* Code Preview */}
                      <div className="bg-gray-900 rounded-lg p-4 text-sm">
                        <div className="flex items-center space-x-2 mb-3">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <div className="font-mono text-gray-300 space-y-1">
                          <div>
                            <span className="text-blue-400">const</span>{" "}
                            <span className="text-white">developer</span> ={" "}
                            {`{`}
                          </div>
                          <div className="ml-4">
                            <span className="text-green-400">name</span>:{" "}
                            <span className="text-yellow-300">
                              &apos;Lesuuh Ueh-Kabari&apos;
                            </span>
                            ,
                          </div>
                          <div className="ml-4">
                            <span className="text-green-400">skills</span>: [
                            <span className="text-yellow-300">
                              &apos;React&apos;
                            </span>
                            ,{" "}
                            <span className="text-yellow-300">
                              &apos;Next.js&apos;
                            </span>
                            ],
                            <span className="text-yellow-300">
                              &apos;Next.js&apos;
                            </span>
                            ],
                          </div>
                          <div className="ml-4">
                            <span className="text-green-400">passion</span>:{" "}
                            <span className="text-yellow-300">
                              &apos;Creating amazing UX&apos;
                            </span>
                          </div>
                          <div>{`}`}</div>
                        </div>
                      </div>

                      {/* Tech Stack */}
                      <div className="space-y-3">
                        <h3 className="font-semibold text-gray-900">
                          Current Tech Stack
                        </h3>
                        <div className="grid grid-cols-3 gap-3">
                          {heroTechStack.map((tech) => (
                            <div
                              key={tech}
                              className="bg-gray-50 rounded-lg p-3 text-center"
                            >
                              <div className="text-xs font-medium text-gray-700">
                                {tech}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 bg-blue-500 text-white p-3 rounded-xl shadow-lg z-20">
                    <div className="text-xs font-medium">
                      Currently Building
                    </div>
                    <div className="text-sm font-bold">AI Chat App</div>
                  </div>

                  <div className="absolute -bottom-4 -left-4 bg-green-500 text-white p-3 rounded-xl shadow-lg z-20">
                    <div className="text-xs font-medium">Latest Project</div>
                    <div className="text-sm font-bold">E-commerce Platform</div>
                  </div>

                  {/* Background Decoration */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl -z-10 opacity-50"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
};

export default Porfolio;
