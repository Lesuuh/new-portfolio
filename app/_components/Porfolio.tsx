"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowUpRight,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

const Porfolio = () => {
  const heroTechStack = [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind",
    "Node.js",
    "PostgreSQL",
  ];
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A modern e-commerce platform built with Next.js, featuring real-time inventory, payment processing, and admin dashboard.",
      tech: ["Next.js", "TypeScript", "Stripe", "Prisma", "PostgreSQL"],
      image: "/placeholder.svg?height=200&width=300",
      github: "#",
      live: "#",
      status: "Completed",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      tech: ["React", "Node.js", "Socket.io", "MongoDB", "Tailwind CSS"],
      image: "/placeholder.svg?height=200&width=300",
      github: "#",
      live: "#",
      status: "In Progress",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Data visualization dashboard for business analytics with interactive charts, real-time data updates, and export functionality.",
      tech: ["Vue.js", "D3.js", "Express", "Redis", "Chart.js"],
      image: "/placeholder.svg?height=200&width=300",
      github: "#",
      live: "#",
      status: "Completed",
    },
    {
      title: "AI Chat Interface",
      description:
        "Modern chat interface with AI integration, real-time messaging, and smart response suggestions.",
      tech: ["React", "OpenAI", "WebSocket", "Node.js"],
      image: "/placeholder.svg?height=200&width=300",
      github: "#",
      live: "#",
      status: "In Progress",
    },
    {
      title: "Portfolio Website",
      description:
        "Responsive portfolio website with modern design, smooth animations, and optimized performance.",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
      image: "/placeholder.svg?height=200&width=300",
      github: "#",
      live: "#",
      status: "Completed",
    },
    {
      title: "Weather App",
      description:
        "Beautiful weather application with location-based forecasts, interactive maps, and detailed weather data.",
      tech: ["React", "Weather API", "Mapbox", "Chart.js"],
      image: "/placeholder.svg?height=200&width=300",
      github: "#",
      live: "#",
      status: "Completed",
    },
  ];

  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Supabase",
    "Firebase",
    "Zustand",
    "React/Tanstack Query",
    "Git",
  ];

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

  return (
    <div className=" bg-white text-black min-h-screen [family-name:var(--font-geist-sans)]">
      <main className="w-full py-5">
        {/* Hero  section*/}
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
              <div className="space-y-6 lg:space-y-8 ">
                {/* Greetings */}
                <div className="space-y-1 lg:space-y-2">
                  <p className="text-lg text-gray-600">Hello, I&apos;m</p>
                  <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    Lesuuh Ueh-Kabari
                  </h1>
                  <div className="flex items-center space-x-3">
                    <div className="h-1 w-12 bg-black"></div>
                    <p className="text-lg lg:text-xl text-gray-700 font-medium">
                      Frontend Developer
                    </p>
                  </div>
                </div>
                {/* Description */}
                <div className="space-y-4">
                  <p className="text-base text-gray-600 leading-relaxed max-w-lg">
                    I specialize in creating exceptional digital experiences
                    through clean code, thoughtful design, and modern web
                    technologies.
                  </p>
                  <div className="flex items-center space-x-6 text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span>Available for hire and projects</span>
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
              <div className="relative lg:block ">
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
                    <div className="text-sm font-bold">
                      AI Interview Platform
                    </div>
                  </div>

                  <div className="absolute -bottom-4 -left-4 bg-green-500 text-white p-3 rounded-xl shadow-lg z-20">
                    <div className="text-xs font-medium">Latest Project</div>
                    <div className="text-sm font-bold">E-commerce Website</div>
                  </div>

                  {/* Background Decoration */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl -z-10 opacity-50"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -transform-x-1/2">
            <div className="flex flex-col items-center text-gray-400 space-y-2">
              <span className="text-xs uppercase tracking-wide">Scroll</span>
              <div className="w-px h-8 bg-gray-300"></div>
            </div>
          </div>
        </section>

        {/* About me */}
        <section id="about" className="py-24 bg-gray-50 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  I&apos;m a passionate frontend developer with 5+ years of
                  experience creating digital experiences that users love. I
                  specialize in React, Next.js, and modern web technologies.
                </p>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  When I&apos;m not coding, you&apos;ll find me exploring new
                  design trends, contributing to open source projects, or
                  sharing knowledge with the developer community.
                </p>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-white border border-gray-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-gray-900 to-gray-600 flex items-center justify-center text-white text-6xl font-bold">
                  AC
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Projects Section */}
        <section id="projects" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                A collection of projects that showcase my skills and passion for
                creating exceptional web experiences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-0">
                    <div className="relative">
                      <div className="aspect-video bg-gray-100 overflow-hidden">
                        <Image
                          width={100}
                          height={100}
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
                              ? "bg-blue-100 text-blue-800 border-blue-200"
                              : "bg-green-100 text-green-800 border-green-200"
                          }`}
                        >
                          {project.status}
                        </Badge>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-gray-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.tech.slice(0, 3).map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs border-gray-300 text-gray-600"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.tech.length > 3 && (
                          <Badge
                            variant="outline"
                            className="text-xs border-gray-300 text-gray-500"
                          >
                            +{project.tech.length - 3}
                          </Badge>
                        )}
                      </div>

                      <div className="flex space-x-3">
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 border-gray-300 hover:border-black text-xs"
                        >
                          <Github className="w-3 h-3 mr-1" />
                          Code
                        </Button>
                        <Button
                          size="sm"
                          className="flex-1 bg-black text-white hover:bg-gray-800 text-xs"
                          disabled={project.status === "In Progress"}
                        >
                          <ExternalLink className="w-3 h-3 mr-1" />
                          {project.status === "In Progress"
                            ? "Coming Soon"
                            : "Live Demo"}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button
                variant="outline"
                className="border-gray-300 hover:border-black"
              >
                View All Projects
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section id="contact" className="py-24 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">
              Let&apos;s Work Together
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              I&apos;m always interested in new opportunities and exciting
              projects. Let&apos;s discuss how we can bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button className="bg-black text-white hover:bg-gray-800 w-full sm:w-auto">
                <Mail className="w-4 h-4 mr-2" />
                lesuuh01@gmail.com
              </Button>
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-gray-300 hover:border-black"
                >
                  <Github className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-gray-300 hover:border-black"
                >
                  <Linkedin className="w-4 h-4" />
                </Button>
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
