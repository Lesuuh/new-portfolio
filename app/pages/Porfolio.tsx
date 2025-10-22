"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight, Download, ExternalLink, Github } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "../_components/ScrollReveal";
import AnimateCard from "../_components/AnimateCard";
import { heroTechStack, projects, skills } from "../data";
import Contact from "../_components/Contact";
import { useRouter } from "next/navigation";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "contacts", "projects", "about"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const router = useRouter();
  const handleViewProject = (projectId: number) => {
    router.push(`projects/${projectId}`);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 min-h-screen [family-name:var(--font-geist-sans)]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-800/80 backdrop-blur-lg border-b border-gray-700">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="font-medium text-lg text-gray-100">Lesuuh</div>
            <div className="hidden md:flex items-center space-x-8">
              {["hero", "about", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm transition-colors hover:text-gray-300 ${
                    activeSection === section
                      ? "text-gray-100 font-medium"
                      : "text-gray-400"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
            <a
              href="/_1LesuuhNewCV.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="sm"
                className="bg-gray-700 text-gray-100 border-gray-600 hover:bg-gray-600 hover:text-gray-50"
              >
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
            </a>
          </div>
        </div>
      </nav>
      <main className="w-full py-5">
        {/* Hero Section */}
        <ScrollReveal>
          <section
            id="hero"
            className="min-h-screen pt-16 lg:pt-0 flex items-center justify-center px-6 relative"
          >
            {/* Subtle Grid Background */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#4b5563_1px,transparent_1px),linear-gradient(to_bottom,#4b5563_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
            </div>

            <div className="w-full max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left section */}
                <div className="space-y-6 lg:space-y-8">
                  {/* Greetings */}
                  <div className="space-y-1 lg:space-y-2">
                    <p className="text-lg text-gray-400">Hello, I&apos;m</p>
                    <h1 className="text-3xl lg:text-5xl font-bold text-gray-100 leading-tight">
                      Lesuuh Ueh-Kabari
                    </h1>
                    <div className="flex items-center space-x-3">
                      <div className="h-1 w-12 bg-blue-500"></div>
                      <p className="text-lg lg:text-xl text-gray-300 font-medium">
                        Frontend Developer
                      </p>
                    </div>
                  </div>
                  {/* Description */}
                  <div className="space-y-4">
                    <p className="text-base text-gray-400 leading-relaxed max-w-lg">
                      I specialize in creating exceptional digital experiences
                      through clean code, thoughtful design, and modern web
                      technologies.
                    </p>
                    <div className="flex items-center space-x-6 text-sm text-gray-500">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span>Available for hire and projects</span>
                      </div>
                    </div>
                  </div>
                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      onClick={() => scrollToSection("projects")}
                      className="bg-blue-600 text-white hover:bg-blue-500 px-6 py-3 font-medium group shadow-md transition-all duration-300"
                    >
                      View My Work
                      <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => scrollToSection("contact")}
                      className="bg-gray-700 text-gray-100 border-gray-600 hover:bg-gray-600 hover:text-gray-50"
                    >
                      Let&apos;s Connect
                    </Button>
                  </div>
                </div>
                {/* Right section */}
                <div className="relative lg:block">
                  <div className="relative">
                    {/* Main Card */}
                    <div className="bg-gray-800 rounded-2xl shadow-xl border border-gray-700 p-8 relative z-10">
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
                              ,{" "}
                              <span className="text-yellow-300">
                                &apos;Supabase&apos;
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
                          <h3 className="font-semibold text-gray-100">
                            Current Tech Stack
                          </h3>
                          <div className="grid grid-cols-3 gap-3">
                            {heroTechStack.map((tech) => (
                              <div
                                key={tech}
                                className="bg-gray-700 rounded-lg p-3 text-center"
                              >
                                <div className="text-xs font-medium text-gray-300">
                                  {tech}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute -top-4 -right-4 bg-blue-600 text-white p-3 rounded-xl shadow-lg z-20">
                      <div className="text-xs font-medium">
                        Currently Building
                      </div>
                      <div className="text-sm font-bold">
<<<<<<< HEAD
                        Cyber - Modern E-commerce store for Gadgets
=======
                        Cybertech Shop - Modern tech e-commerce
>>>>>>> b3199cb (update currently building)
                      </div>
                    </div>

                    <div className="absolute -bottom-4 -left-4 bg-green-600 text-white p-3 rounded-xl shadow-lg z-20">
                      <div className="text-xs font-medium">Latest Project</div>
                      <div className="text-sm font-bold">
<<<<<<< HEAD
                        Intervue
=======
                        Whispers - Anonymous Blog
>>>>>>> b3199cb (update currently building)
                      </div>
                    </div>

                    {/* Background Decoration */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-3xl -z-10 opacity-50"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <div className="flex flex-col items-center text-gray-500 space-y-2">
                <span className="text-xs uppercase tracking-wide">Scroll</span>
                <div className="w-px h-8 bg-gray-600"></div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* About Me */}
        <ScrollReveal>
          <section id="about" className="py-24 bg-gray-800 px-6">
            <div className="max-w-5xl mx-auto w-full">
              <h2 className="text-4xl font-bold mb-12 text-center text-gray-100">
                About Me
              </h2>
              <div className="grid md:grid-cols-2 gap-12 items-center justify-center">
                <div>
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    I&apos;m a dedicated frontend developer with a strong focus
                    on building functional and user-friendly web applications. I
                    specialize in React, Tailwind CSS, and I&apos;m actively
                    expanding my skills with Next.js and modern web tools.
                  </p>
                  <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                    I enjoy solving real-world problems through code, exploring
                    practical UI patterns, and building projects that showcase
                    clean logic and useful features. Outside of coding, I love
                    learning new tech, collaborating with other developers, and
                    refining my skills through hands-on work.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="default"
                        className="bg-gray-700 border-gray-600 text-gray-300"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="w-full">
                  <Image
                    src="/images/portfolio-pic.jpg"
                    alt="Profile-pic"
                    width={400}
                    height={400}
                    className="rounded-sm border-8 border-gray-700 w-full"
                  />
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Projects Section */}
        <ScrollReveal>
          <section
            id="projects"
            className="py-20 px-6 animate-fade-in animation-delay-400"
          >
            <div className="max-w-5xl w-full mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4 text-gray-100">
                  Featured Projects
                </h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                  A collection of projects that showcase my skills and passion
                  for creating exceptional web experiences.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <AnimateCard key={index}>
                    <Card
                      onClick={() => handleViewProject(project.id)}
                      className="group cursor-pointer p-0 flex flex-col h-full overflow-hidden bg-gray-800 border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    >
                      <CardContent className="p-0 flex flex-col flex-1">
                        <div className="relative">
                          <div className="aspect-video bg-gray-700 overflow-hidden">
                            <Image
                              fill
                              src={project.image || "/placeholder.svg"}
                              alt={project.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <div className="absolute top-3 right-3">
                            <Badge
                              variant={
                                project.status === "In Progress"
                                  ? "default"
                                  : "secondary"
                              }
                              className={`text-xs font-medium ${
                                project.status === "In Progress"
                                  ? "bg-blue-900 text-blue-300 border-blue-600"
                                  : "bg-green-900 text-green-300 border-green-600"
                              }`}
                            >
                              {project.status}
                            </Badge>
                          </div>
                        </div>

                        <div className="p-6 flex flex-col justify-between flex-1">
                          <h3 className="text-xl font-bold mb-2 text-gray-100 group-hover:text-gray-300 transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed">
                            {project.description}
                          </p>

                          <div className="flex flex-wrap gap-1 mb-4">
                            {project.tech.slice(0, 4).map((tech, index) => (
                              <Badge
                                key={index}
                                variant="outline"
                                className="text-xs border-gray-600 text-gray-300"
                              >
                                {tech}
                              </Badge>
                            ))}
                            {project.tech.length > 3 && (
                              <Badge
                                variant="outline"
                                className="text-xs border-gray-600 text-gray-400"
                              >
                                +{project.tech.length - 3}
                              </Badge>
                            )}
                          </div>

                          <div className="flex space-x-3">
                            <Link
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full flex-1"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Button
                                variant="outline"
                                size="sm"
                                className="bg-gray-700 text-gray-100 border-gray-600 hover:bg-gray-600 hover:text-gray-50 w-full"
                              >
                                <Github className="w-3 h-3 mr-1" />
                                Code
                              </Button>
                            </Link>

                            <Link
                              href={
                                project.status === "Completed"
                                  ? project.live
                                  : ""
                              }
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full flex-1"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Button
                                size="sm"
                                className="flex-1 w-full bg-blue-600 text-white hover:bg-blue-500 text-xs"
                                disabled={project.status === "In Progress"}
                                onClick={(e) => e.stopPropagation()}
                              >
                                <ExternalLink className="w-3 h-3 mr-1" />
                                {project.status === "In Progress"
                                  ? "Coming Soon"
                                  : "Live Demo"}
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimateCard>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>
        {/* Contact Section */}
        <Contact />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
};

export default Portfolio;
