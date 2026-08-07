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
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "experience", "projects", "contact"];
      const scrollPosition = window.scrollY + 300;

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

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMobileMenuOpen(false);
  };

  const handleCardClick = (project: Project) => {
    router.push(`/projects/${project.id}`);
  };

  const navItems = [
    // { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50 selection:bg-gold selection:text-neutral-950">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-neutral-800/70 bg-neutral-950/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <button
            onClick={() => scrollToSection("home")}
            className="text-lg font-bold tracking-tight text-gold transition-opacity hover:opacity-80"
          >
            Lesuuh
          </button>
          {/* Desktop navigation */}{" "}
          <div className="hidden items-center gap-7 md:flex">
            {" "}
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative py-1 text-sm transition-colors cursor-pointer ${activeSection === item.id ? "font-medium text-gold" : "text-neutral-400 hover:text-neutral-100"}`}
              >
                {" "}
                {item.label}{" "}
                {activeSection === item.id && (
                  <span className="absolute -bottom-2 left-0 right-0 mx-auto h-0.5 w-4 rounded-full bg-gold" />
                )}{" "}
              </button>
            ))}{" "}
          </div>
          {/* Mobile menu button */}{" "}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="rounded-lg p-2 text-neutral-300 transition-colors hover:bg-neutral-800 hover:text-white md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {" "}
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  mobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />{" "}
            </svg>{" "}
          </button>
        </div>
        {/* Mobile navigation */}{" "}
        {mobileMenuOpen && (
          <div className="fixed inset-0 h-screen z-50 bg-neutral-950 flex flex-col items-center justify-center p-6 md:hidden">
            {/* Top Bar with Close Button */}
            <div className="absolute top-5 right-5 flex items-center  pb-4 ">
              {/* <span className="text-xl font-bold tracking-tight">Brand</span> */}
              <button
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
                className="rounded-lg p-2 text-4xl text-neutral-400 hover:bg-neutral-800 hover:text-white"
              >
                &times;
              </button>
            </div>
            {/* Navigation Links */}{" "}
            <div className="">
              {" "}
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`block w-full rounded-xl px-6 py-4 text-center text-2xl cursor-pointers font-medium transition-colors ${activeSection === item.id ? "bg-neutral-800 text-amber-400" : "text-neutral-300 hover:bg-neutral-800 hover:text-white"}`}
                >
                  {" "}
                  {item.label}{" "}
                </button>
              ))}{" "}
            </div>{" "}
            {/* Footer */}{" "}
            <div className="absolute bottom-0 pb-4  text-center text-xs text-neutral-500">
              {" "}
              © {new Date().getFullYear()} Brand. All rights reserved.{" "}
            </div>{" "}
          </div>
        )}
      </nav>

      <main className="">
        {/* =========================================================
            HERO
        ========================================================= */}
        <section
          id="home"
          className="relative flex min-h-screen items-center overflow-hidden px-4 pb-20 pt-28 sm:px-6 lg:px-8"
        >
          {/* Subtle background glow */}
          <div className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-gold/5 blur-3xl" />

          <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
            {/* Hero copy */}
            <div className="order-2 text-center lg:order-1 lg:text-left">
              <div className="mb-6 flex items-center justify-center gap-3 lg:justify-start">
                <span className="h-px w-8 bg-gold" />
                <span className="text-sm font-medium uppercase tracking-[0.2em] text-gold">
                  Frontend Developer
                </span>
              </div>

              <h1 className="max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                I build{" "}
                <span className="text-amber-800">
                  reliable web applications
                </span>{" "}
                that solve real problems.
              </h1>

              <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-neutral-400 sm:text-lg lg:mx-0 lg:text-xl lg:leading-8">
                I&apos;m Lesuuh, a frontend developer focused on React,
                TypeScript, and Next.js. I turn complex requirements into
                intuitive interfaces and production-ready applications.
              </p>

              {/* Availability */}
              <div className="mt-6 flex items-center justify-center gap-2 text-sm text-neutral-300 lg:justify-start">
                <span className="h-2 w-2 animate-pulse rounded-full bg-gold" />
                <span>Open to frontend and full-stack opportunities</span>
              </div>

              {/* CTA */}
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
                <Button
                  onClick={() => scrollToSection("projects")}
                  className="group bg-gold text-neutral-950 shadow-lg shadow-gold/10 hover:bg-gold-hover cursor-pointer"
                >
                  View My Work
                  <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                </Button>

                <a
                  href="/_1lesuuhCV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="white"
                    className="w-full border border-neutral-700 bg-transparent text-neutral-100  sm:w-auto cursor-pointer"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Resume
                  </Button>
                </a>
              </div>

              {/* Tech stack */}
              <div className="mt-10 border-t border-neutral-800 pt-7">
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">
                  Core stack
                </p>

                <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
                  {heroTechStack.map((tech) => (
                    <Badge
                      key={tech}
                      className="border-neutral-700 bg-neutral-900 text-xs text-neutral-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Profile image */}
            <div className="order-1 flex justify-center lg:order-2">
              <div className="relative">
                <div className="absolute -inset-8 rounded-full bg-gold/5 blur-2xl" />

                <div className="relative h-52 w-52  overflow-hidden rounded-full border border-neutral-700 bg-neutral-900 shadow-2xl sm:h-72 sm:w-72 lg:h-80 lg:w-80">
                  <Image
                    src="/images/me.webp"
                    alt="Lesuuh Ueh-Kabari"
                    fill
                    priority
                    className="object-cover"
                    // sizes="(max-width: 640px) 13rem, 16rem"
                  />
                </div>

                <div className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full border-4 border-neutral-950 bg-gold">
                  <div className="h-2 w-2 rounded-full bg-neutral-950" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            ABOUT
        ========================================================= */}
        <section
          id="about"
          className="border-y border-neutral-800/70 bg-neutral-900/40 px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <div>
                <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-gold">
                  About
                </p>

                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Building software with purpose.
                </h2>
              </div>

              <div className="space-y-6">
                <p className="text-base leading-8 text-neutral-300 sm:text-lg">
                  I&apos;m a frontend developer focused on React, TypeScript,
                  and Next.js. I enjoy taking complex product requirements and
                  turning them into interfaces that are clear, responsive, and
                  dependable.
                </p>

                <p className="text-base leading-8 text-neutral-400">
                  My experience spans examination platforms, P2P payment
                  systems, gaming platforms, and full-stack products. I care
                  about clean architecture, thoughtful state management,
                  performance, and building features that work beyond the happy
                  path.
                </p>

                <div className="grid gap-3 pt-3 sm:grid-cols-2">
                  {[
                    {
                      title: "Frontend",
                      desc: "React, TypeScript, Next.js, responsive UI",
                    },
                    {
                      title: "State & Data",
                      desc: "React Query, Zustand, Context API, APIs",
                    },
                    {
                      title: "Backend",
                      desc: "Node.js, Express, Supabase, Firebase",
                    },
                    {
                      title: "Engineering",
                      desc: "Performance, reusable architecture, UX",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-xl border border-neutral-800 bg-neutral-950/50 p-4"
                    >
                      <h3 className="font-semibold text-neutral-100">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-neutral-500">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="border-t border-neutral-800 pt-5 text-sm text-neutral-500">
                  Based in Port Harcourt, Nigeria · Available for remote
                  opportunities
                </p>
              </div>
            </div>

            {/* Skills */}
            <div className="mt-16 border-t border-neutral-800 pt-10">
              <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.18em] text-gold">
                    Toolkit
                  </p>
                  <h3 className="mt-1 text-xl font-semibold">
                    Technologies I work with
                  </h3>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="border-neutral-700 text-neutral-300 hover:border-gold hover:text-gold"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            EXPERIENCE
        ========================================================= */}
        <section
          id="experience"
          className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 max-w-2xl">
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-gold">
                Experience
              </p>

              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Where I&apos;ve worked.
              </h2>

              <p className="mt-4 leading-7 text-neutral-400">
                Real product work, collaboration, and the engineering problems
                behind the interfaces.
              </p>
            </div>

            <div className="space-y-10">
              {experiences.map((exp, i) => (
                <div
                  key={i}
                  className="grid gap-6 border-t border-neutral-800 pt-8 md:grid-cols-[220px_1fr] md:gap-12"
                >
                  <div>
                    <p className="text-sm text-neutral-500">{exp.period}</p>
                  </div>

                  <div>
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-neutral-100 sm:text-2xl">
                        {exp.role}
                      </h3>

                      <p className="mt-1 font-medium text-gold">
                        {exp.company}
                      </p>
                    </div>

                    <ul className="space-y-4">
                      {exp.description.map((description, j) => (
                        <li
                          key={j}
                          className="relative pl-5 text-sm leading-7 text-neutral-400 sm:text-base"
                        >
                          <span className="absolute left-0 top-3 h-1.5 w-1.5 rounded-full bg-gold" />
                          {description}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            PROJECTS
        ========================================================= */}
        <section
          id="projects"
          className="border-y border-neutral-800/70 bg-neutral-900/40 px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 max-w-2xl">
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-gold">
                Selected Work
              </p>

              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Projects that demonstrate how I build.
              </h2>

              <p className="mt-4 leading-7 text-neutral-400">
                A selection of applications built around real workflows, product
                requirements, and technical challenges.
              </p>
            </div>

            <div className="space-y-8">
              {featuredProjects.map((project, index) => (
                <Card
                  key={project.id}
                  onClick={() => handleCardClick(project)}
                  className="group cursor-pointer overflow-hidden border-neutral-800 bg-neutral-950 transition-all duration-300 hover:border-gold/60"
                >
                  <div className="grid md:grid-cols-[1.05fr_0.95fr]">
                    {/* Project image */}
                    <div className="relative aspect-video overflow-hidden bg-neutral-900 md:aspect-auto md:min-h-[360px]">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 55vw"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent" />

                      <div className="absolute left-5 top-5">
                        <span className="rounded-full border border-neutral-700 bg-neutral-950/80 px-3 py-1 text-xs font-medium text-neutral-300 backdrop-blur">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </div>

                    {/* Project information */}
                    <div className="flex flex-col justify-between p-6 sm:p-8">
                      <div>
                        <div className="mb-4 flex items-start justify-between gap-4">
                          <h3 className="text-2xl font-bold tracking-tight text-neutral-100 transition-colors group-hover:text-gold sm:text-3xl">
                            {project.title}
                          </h3>

                          <ExternalLink className="mt-1 h-5 w-5 shrink-0 text-neutral-600 transition-colors group-hover:text-gold" />
                        </div>

                        <p className="leading-7 text-neutral-400">
                          {project.description}
                        </p>

                        <div className="mt-6 flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="border-neutral-700 text-xs text-neutral-400"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Button className="w-full bg-gold text-neutral-950 hover:bg-gold-hover cursor-pointer ">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </Button>
                        </a>

                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Button
                            variant="white"
                            className="w-full border border-neutral-700 bg-transparent text-neutral-200 cursor-pointer"
                          >
                            <Github className="mr-2 h-4 w-4" />
                            View Code
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

        {/* =========================================================
            CONTACT
        ========================================================= */}
        <section id="contact" className="px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-gold">
              Contact
            </p>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Let&apos;s build something useful.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-neutral-400 sm:text-lg sm:leading-8">
              I&apos;m currently open to frontend and full-stack opportunities.
              If you&apos;re looking for someone who can turn product
              requirements into reliable interfaces and features, let&apos;s
              talk.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a href="mailto:lesuuh01@gmail.com">
                <Button className="w-full min-w-[180px] bg-gold text-neutral-950 hover:bg-gold-hover sm:w-auto cursor-pointer">
                  <Mail className="mr-2 h-4 w-4" />
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
                  className="w-full min-w-[180px] border border-neutral-700 bg-transparent text-neutral-200 cursor-pointer sm:w-auto"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Resume
                </Button>
              </a>
            </div>

            {/* Social links */}
            <div className="mt-14 flex justify-center gap-5">
              <a
                href="mailto:lesuuh01@gmail.com"
                className="rounded-lg border border-neutral-800 p-3 text-neutral-400 transition-all hover:border-gold hover:text-gold"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>

              <a
                href="https://github.com/lesuuh"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-neutral-800 p-3 text-neutral-400 transition-all hover:border-gold hover:text-gold"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>

              <a
                href="https://twitter.com/UKLesuuh"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-neutral-800 p-3 text-neutral-400 transition-all hover:border-gold hover:text-gold"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/uklesuuh"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-neutral-800 p-3 text-neutral-400 transition-all hover:border-gold hover:text-gold"
                aria-label="LinkedIn"
              >
                <LinkedIn className="h-5 w-5" />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-800 px-4 py-7 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-neutral-500">
            © 2026 Lesuuh Ueh-Kabari. All rights reserved.
          </p>

          <button
            onClick={() => scrollToSection("home")}
            className="text-sm text-neutral-500 transition-colors hover:text-gold cursor-pointer"
          >
            Back to top ↑
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
