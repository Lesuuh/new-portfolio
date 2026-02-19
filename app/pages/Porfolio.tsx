"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { skills, heroTechStack, featuredProjects, experiences } from "../data";
import { Button } from "../_components/Button";
import { Badge } from "../_components/Badge";
import { Card } from "../_components/Card";
import {
  ArrowDown,
  Download,
  Mail,
  Github,
  Twitter,
  ExternalLink,
  LinkedIn,
} from "../_components/Icons";
import { Project } from "../types";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "works", "projects", "contact"];
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
      setMobileMenuOpen(false);
    }
  };

  const router = useRouter();

  const handleCardClick = (project: Project) => {
    router.push(`/projects/${project.id}`);
  };

  return (
    <div className="bg-gradient-to-t from-neutral-900 via-neutral-800 to-neutral-900 text-neutral-100 min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-500  bg-neutral-900/90 backdrop-blur-sm shadow-xl">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <div className="font-semibold text-lg text-[#bfa76f] tracking-tight">
            Lesuuh
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {["hero", "about", "works", "projects", "contact"].map(
              (section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm transition-colors relative group ${
                    activeSection === section
                      ? `text-[#bfa767] font-medium` // Active link text in gold
                      : "text-neutral-300 hover:text-neutral-200"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                  {/* Active Indicator - Gold Bar */}
                  {activeSection === section && (
                    <span
                      className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-[#bfa767] rounded-full`}
                    ></span>
                  )}
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-transparent group-hover:bg-neutral-700 transition-colors duration-300 opacity-50"></span>
                </button>
              ),
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-neutral-300 p-2"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  mobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-neutral-700/40 bg-neutral-950">
            <div className="px-4 py-4 space-y-3">
              {["hero", "about", "works", "projects", "contact"].map(
                (section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      activeSection === section
                        ? "text-white bg-neutral-800 font-medium"
                        : "text-neutral-300"
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                ),
              )}
            </div>
          </div>
        )}
      </nav>

      <main className="pt-16">
        {/* Hero Section */}
        <section
          id="hero"
          className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20"
        >
          <div className="max-w-2xl mx-auto w-full">
            {/* Profile Image - Mobile First */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent)] pointer-events-none"></div>

                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-neutral-700/40 shadow-xl relative">
                  <Image
                    src="/images/me.webp"
                    alt="Lesuuh Ueh-Kabari"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 8rem, 10rem"
                    priority
                  />
                </div>
                <div className="absolute bottom-4 right-1 bg-[#bfa76f] w-8 h-8 rounded-full border-4 border-neutral-950 flex items-center justify-center">
                  <div className="w-2 h-2 bg-neutral-950 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Hero Content */}
            <div className="text-center space-y-6">
              <div className="space-y-3">
                <p className="text-sm sm:text-base text-neutral-300 font-medium">
                  Frontend Developer
                </p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#bfa76f] leading-tight">
                  Lesuuh Ueh-Kabari
                </h1>
                <div className="flex items-center justify-center space-x-3">
                  <div className="h-px w-12 bg-[#bfa76f]"></div>
                  <p className="text-base sm:text-lg ">
                    Building Production-Ready Solutions
                  </p>
                  <div className="h-px w-12 bg-[#bfa76f]"></div>
                </div>
              </div>

              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-xl mx-auto">
                I build fast, scalable web applications that solve real
                problems. From government exam systems to AI-powered platforms,
                I turn complex requirements into clean, production-ready code.
              </p>

              {/* Status Badge */}
              <div className="flex items-center justify-center space-x-2 text-sm ">
                <div className="w-2 h-2 bg-[#bfa76f] rounded-full animate-pulse"></div>
                <span>Available for hire and projects</span>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                <Button
                  onClick={() => scrollToSection("projects")}
                  className="group shadow-lg bg-[#bfa76f] text-neutral-950 hover:bg-[#d8bf80]"
                >
                  View My Work
                  <ArrowDown className="w-4 h-4 ml-2 group-hover:translate-y-0.5 transition-transform" />
                </Button>
                <a
                  href="/_1lesuuhCV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  <Button
                    variant="white"
                    className="w-full  group text-neutral-950 "
                  >
                    <Download className="w-4 h-4 mr-2 group-hover:scale-105 transition-transform" />
                    Download Resume
                  </Button>
                </a>
              </div>

              {/* Tech Stack */}
              <div className="pt-8">
                <p className="text-xs sm:text-sm text-neutral-400 mb-3 uppercase tracking-wide">
                  Tech Stack
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {heroTechStack.map((tech) => (
                    <Badge key={tech} className="text-xs sm:text-sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="flex flex-col items-center mt-12 sm:mt-16 text-[#bfa76f] space-y-2">
              <span className="text-xs uppercase tracking-wide">Scroll</span>
              <div className="w-px h-8 bg-[#bfa76f] animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="py-16 sm:py-24 px-4 sm:px-6 bg-neutral-800/60"
        >
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center text-[#bfa76f]">
              About Me
            </h2>

            <div className="space-y-6 text-neutral-100 leading-relaxed">
              <p className="text-base sm:text-lg">
                Frontend developer with experience building production
                applications for diverse clients—from government agencies to
                consumer platforms. I specialize in React, TypeScript, and
                Next.js, with a track record of delivering performant,
                accessible web applications.
              </p>

              <div className="space-y-4 py-6">
                <h3 className="text-xl font-semibold text-[#bfa76f]">
                  What I bring:
                </h3>
                <div className="space-y-4 text-sm sm:text-base">
                  {[
                    {
                      title: "Full-stack capability",
                      desc: "Complete features from database to UI",
                    },
                    {
                      title: "Performance-focused",
                      desc: "Optimized bundles, code splitting, fast load times",
                    },
                    {
                      title: "Real-world experience",
                      desc: "Exam systems, real-time platforms, complex flows",
                    },
                    {
                      title: "Production-ready",
                      desc: "Clean architecture, proper error handling",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start space-x-3 p-3 rounded-lg bg-neutral-850/40"
                    >
                      <div className="w-1.5 h-1.5 bg-[#bfa76f] rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="font-semibold">{item.title}:</span>{" "}
                        <span className="text-neutral-200">{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-sm text-neutral-300 pt-4 border-t border-neutral-700/40">
                📍 Based in Port Harcourt, Nigeria • Available for remote
                opportunities
              </p>

              {/* Skills */}
              <div className="pt-6">
                <h3 className="text-lg font-semibold text-[#bfa76f] mb-4">
                  Skills & Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="text-xs sm:text-sm border-[#bfa76f] text-[#bfa76f] hover:bg-[#d8bf80] hover:text-neutral-950"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Work Section */}
        <section id="works" className="py-20">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center tracking-tight">
              Work Experience
            </h2>

            <div className="space-y-8">
              {experiences.map((exp, i) => (
                <div key={i} className="group">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-lg md:text-xl font-semibold text-[#bfa76f] group-hover:text-[#d8bf80] transition-colors">
                      {exp.role}
                    </h3>
                    <span className="text-xs md:text-sm text-neutral-500">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-sm font-medium text-neutral-300 mb-2">
                    {exp.company}
                  </p>

                  <ul className="space-y-1 text-sm text-neutral-400 leading-relaxed">
                    {exp.description.map((d, j) => (
                      <li
                        key={j}
                        className="pl-3 relative before:content-['–'] before:absolute before:left-0 before:text-[#bfa76f]/70"
                      >
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#bfa76f]">
                Featured Projects
              </h2>
              <p className="text-neutral-300 text-base sm:text-lg max-w-2xl mx-auto">
                Production applications showcasing full-stack capabilities and
                problem-solving skills.
              </p>
            </div>

            <div className="space-y-6">
              {featuredProjects.map((project) => (
                <Card
                  key={project.id}
                  onClick={() => handleCardClick(project)}
                  className="group overflow-hidden hover:border-[#bfa76f] transition-all duration-300 cursor-pointer"
                >
                  <div className="grid sm:grid-cols-2 gap-0">
                    {/* Image Section */}
                    <div className="relative aspect-video sm:aspect-square bg-neutral-800 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-contain group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* <div className="absolute top-3 left-3">
                        <Badge className="bg-[#bfa76f]  text-xs">
                          {project.category}
                        </Badge>
                      </div> */}
                    </div>

                    {/* Info Section */}
                    <div className="p-6 flex flex-col justify-between">
                      <div className="space-y-3">
                        <h3 className="text-xl sm:text-2xl font-bold text-[#bfa76f] group-hover:text-[#d8bf80] transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5 pt-2">
                          {project.tech.map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="text-xs border-[#bfa76f] text-[#bfa76f] hover:bg-[#d8bf80] hover:text-neutral-950"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-3 pt-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Button
                            variant="primary"
                            size="sm"
                            className="w-full border-[#bfa76f] text-[#bfa76f] hover:bg-[#d8bf80] hover:text-neutral-950"
                          >
                            <Github className="w-3.5 h-3.5 mr-1.5" />
                            Code
                          </Button>
                        </a>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Button
                            size="sm"
                            variant="white"
                            className="w-full bg-[#bfa76f] text-neutral-950 hover:bg-[#d8bf80]"
                          >
                            <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                            Live Demo
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-16 sm:py-24 px-4 sm:px-6 bg-neutral-800/60"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#bfa76f]">
              Let&apos;s Work Together
            </h2>
            <p className="text-neutral-300 text-base sm:text-lg mb-8 sm:mb-12 max-w-xl mx-auto">
              Have a project in mind? I&apos;m available for freelance work and
              full-time opportunities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:lesuuh01@gmail.com">
                <Button className="w-full sm:w-auto min-w-[200px] bg-[#bfa76f] text-neutral-950 hover:bg-[#d8bf80]">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Me
                </Button>
              </a>
              <a
                href="/_1lesuuhCV.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="white"
                  className="w-full sm:w-auto min-w-[200px] border-[#bfa76f] text-[#bfa76f] hover:bg-[#d8bf80] hover:text-neutral-950"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6 mt-12 pt-12 border-t border-[#bfa76f]/40">
              <a
                href="mailto:lesuuh01@gmail.com"
                className="text-white hover:text-[#d8bf80] transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/lesuuh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#d8bf80] transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com/UKLesuuh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#d8bf80] transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/uklesuuh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#d8bf80] transition-colors"
              >
                <LinkedIn className="w-6 h-6" />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 border-t border-[#bfa76f]/40">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#bfa76f] text-sm">
            © 2025 Lesuuh Ueh-Kabari. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
