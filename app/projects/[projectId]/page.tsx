"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
// Removed Next.js specific imports: Link, useParams, Image
import { projects } from "@/app/data";
import { useParams, useRouter } from "next/navigation";

import {
  AlertCircle,
  ArrowLeft,
  Github,
  Sparkles,
  Zap,
  Target,
  TrendingUp,
  Code,
} from "../../_components/Icons";
import { Badge } from "@/app/_components/Badge";
import { Button } from "@/app/_components/Button";

// --- Configuration and Mock Data ---
const GOLD_ACCENT = "#bfa76f"; // Primary Muted Gold
const GOLD_HOVER = "#d8bf80"; // Lighter Gold for hover effects

const ProjectDetail = () => {
  const { projectId } = useParams();
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  // Find the project based on the mock ID
  const project = projects.find((p) => p.id === Number(projectId));

  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
    // Add the transition class
    setIsVisible(true);
  }, []);

  // Handle case where project data might be missing (e.g., if mock ID is wrong)
  if (!project) {
    return (
      <div className="min-h-screen bg-neutral-900 text-neutral-100 flex items-center justify-center p-8">
        <div className="text-center p-12 bg-neutral-800 rounded-xl border border-red-700">
          <AlertCircle className="w-10 h-10 mx-auto text-red-500 mb-4" />
          <h1 className="text-2xl font-bold text-white">Project Not Found</h1>
          <p className="text-neutral-400 mt-2">
            Could not load details for the requested project ID.
          </p>
          <button
            onClick={() => router.back()}
            className="mt-6 inline-block text-sm px-4 py-2 bg-neutral-700 text-white rounded-lg hover:bg-neutral-600 transition-all"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  // --- JSX Rendering ---
  return (
    <div className="min-h-screen bg-gradient-to-t from-neutral-900 via-neutral-800 to-neutral-900 text-neutral-100 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-900/90 backdrop-blur-sm shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* Back Button (using a standard anchor tag for simplicity) */}
          <a
            href="#" // Placeholder for back action
            className={`flex items-center space-x-2 text-[${GOLD_ACCENT}] hover:text-[${GOLD_HOVER}] transition-colors group`}
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Back to Portfolio</span>
          </a>

          <div className="flex items-center gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-[${GOLD_ACCENT}] hover:text-[${GOLD_HOVER}] transition-colors`}
            >
              <Github className="w-5 h-5" />
            </a>
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              <button
                className={`text-sm px-4 py-2 bg-[${GOLD_ACCENT}] text-neutral-950 rounded-lg hover:bg-[${GOLD_HOVER}] transition-all`}
              >
                View Live
              </button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Immersive */}
      <header
        className={`relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Badges */}
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Badge
              variant="outline"
              className={`bg-[${GOLD_ACCENT}] text-neutral-950`}
            >
              {project.category}
            </Badge>
            <Badge
              variant="outline"
              className={`border-[${GOLD_ACCENT}] text-[${GOLD_ACCENT}]`}
            >
              {project.status}
            </Badge>
            <Badge
              variant="outline"
              className={`border-[${GOLD_ACCENT}] text-[${GOLD_ACCENT}]`}
            >
              {project.timeline}
            </Badge>
          </div>

          {/* Title & Subtitle */}
          <div className="space-y-3">
            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[${GOLD_ACCENT}] leading-tight`}
            >
              {project.title}
            </h1>
            <p className="text-xl sm:text-2xl text-white font-light">
              {project.subtitle}
            </p>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed max-w-3xl mx-auto">
            {project.description}
          </p>
        </div>
      </header>

      {/* Hero Image - Full Bleed with Parallax Effect */}
      <div className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-[${GOLD_ACCENT}]/40 shadow-2xl group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent)]"></div>
            {/* Replaced Next.js <Image> with standard <img> */}
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              style={{ objectFit: "cover" }} // Added objectFit style for responsive image behavior
            />
            <div
              className={`absolute inset-0 bg-gradient-to-t from-[${GOLD_ACCENT}]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
            ></div>
          </div>
        </div>
      </div>

      {/* Metrics Bar */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(project.metrics).map(([key, value]) => (
              <div
                key={key}
                className={`bg-neutral-800/60 backdrop-blur-sm border border-[${GOLD_ACCENT}]/40 rounded-xl p-6 text-center hover:border-[${GOLD_HOVER}] hover:bg-[${GOLD_ACCENT}]/10 transition-all duration-300 group`}
              >
                <p className="text-3xl sm:text-4xl font-bold text-neutral-400 mb-2 group-hover:scale-110 transition-transform">
                  {value}
                </p>
                <p className="text-xs sm:text-sm text-neutral-300 uppercase tracking-wider">
                  {key.replace(/([A-Z])/g, " $1").trim()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content - Two Column Layout */}
      <main className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Sidebar - Sticky */}
            <aside className="lg:col-span-1 space-y-6">
              {/* Project Info Card */}
              <div
                className={`bg-neutral-800/60 backdrop-blur-sm border border-[${GOLD_ACCENT}]/40 rounded-xl p-6 sticky top-24 space-y-4`}
              >
                <h3 className="text-sm font-semibold text-neutral-300 uppercase tracking-wide">
                  Project Info
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-neutral-400 mb-1">Role</p>
                    <p className="text-white font-medium">{project.role}</p>
                  </div>
                  <div>
                    <p className="text-neutral-400 mb-1">Timeline</p>
                    <p className="text-white font-medium">{project.timeline}</p>
                  </div>
                  <div>
                    <p className="text-neutral-400 mb-1">Status</p>
                    <p className="text-white font-medium">{project.status}</p>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className={`pt-4 border-t border-[${GOLD_ACCENT}]/40`}>
                  <h3 className="text-sm font-semibold text-neutral-300 uppercase tracking-wide mb-3">
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Content Column */}
            <div className="lg:col-span-2 space-y-16">
              {/* Problem Statement */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <AlertCircle className="w-6 h-6 text-neutral-100" />
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    The Challenge
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                  {project.problemStatement}
                </p>
              </section>

              {/* Solution */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <Sparkles className="w-6 h-6 text-neutral-100" />
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    The Solution
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                  {project.solution}
                </p>
              </section>

              {/* Key Features Grid */}
              <section>
                <div className="flex items-center gap-3 mb-8">
                  <Target className="w-6 h-6 text-neutral-100" />
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    Key Features
                  </h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {project.keyFeatures.map((feature, idx) => (
                    <div
                      key={idx}
                      className={`bg-neutral-900/30 backdrop-blur-sm border border-[${GOLD_ACCENT}]/40 rounded-xl p-5 hover:border-[${GOLD_HOVER}] hover:bg-[${GOLD_ACCENT}]/10 transition-all duration-300 group`}
                    >
                      <h3
                        className={`text-base font-semibold text-white mb-2 group-hover:text-[${GOLD_ACCENT}] transition-colors`}
                      >
                        {feature.title}
                      </h3>
                      <p className="text-sm text-neutral-300 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Technical Highlights */}
              <section
                className={`bg-neutral-900/30 backdrop-blur-sm border border-[${GOLD_ACCENT}]/40 rounded-xl p-8`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Code className="w-6 h-6 text-neutral-100" />
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    Technical Highlights
                  </h2>
                </div>
                <div className="space-y-5">
                  {project.technicalHighlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center">
                        <span className="text-sm font-bold text-neutral-100">
                          {idx + 1}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-white mb-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-neutral-300 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Challenges & Solutions */}
              <section>
                <div className="flex items-center gap-3 mb-8">
                  <Zap className="w-6 h-6 text-neutral-100" />
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    Challenges & Solutions
                  </h2>
                </div>
                <div className="space-y-6">
                  {project.challenges.map((item, idx) => (
                    <div
                      key={idx}
                      className={`bg-neutral-900/30 backdrop-blur-sm border border-[${GOLD_ACCENT}]/40 rounded-xl p-6 hover:border-[${GOLD_HOVER}] transition-colors`}
                    >
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-neutral-300 mb-3">
                        {item.description}
                      </p>
                      <div
                        className={`pl-4 border-l-2 border-[${GOLD_ACCENT}]/40`}
                      >
                        <p className="text-sm text-neutral-300 italic">
                          → {item.solution}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Impact */}
              <section
                className={`bg-neutral-900/30 backdrop-blur-sm border border-[${GOLD_ACCENT}]/40 rounded-xl p-8`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <TrendingUp className="w-6 h-6 text-neutral-100" />
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    Impact & Results
                  </h2>
                </div>
                <div className="space-y-3">
                  {project.impact.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div
                        className={`flex-shrink-0 w-5 h-5 rounded-full bg-[${GOLD_ACCENT}] flex items-center justify-center mt-0.5`}
                      >
                        <div className="w-2 h-2 bg-neutral-950 rounded-full"></div>
                      </div>
                      <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Testimonial */}
              {project.testimonial && (
                <section
                  className={`bg-gradient-to-t from-neutral-900/50 to-neutral-900/30 backdrop-blur-sm border border-[${GOLD_ACCENT}]/40 rounded-xl p-8`}
                >
                  <div className="flex gap-2 mb-4">
                    <span className="text-4xl text-neutral-700">&quot;</span>
                  </div>
                  <p className="text-lg text-neutral-200 leading-relaxed mb-6 italic">
                    {project.testimonial.quote}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center">
                      <span className="text-lg font-bold text-neutral-100">
                        {project.testimonial.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {project.testimonial.author}
                      </p>
                      <p className="text-xs text-neutral-300">
                        {project.testimonial.role}
                      </p>
                    </div>
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* CTA Section */}
      {/* <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto">
          <div
            className={`relative overflow-hidden bg-gradient-to-t from-neutral-900 to-neutral-950 border border-[${GOLD_ACCENT}]/40 rounded-2xl p-12 text-center`}
          >
       
            <div
              className={`absolute top-0 left-0 w-40 h-40 bg-[${GOLD_ACCENT}]/10 rounded-full blur-3xl`}
            ></div>
            <div
              className={`absolute bottom-0 right-0 w-40 h-40 bg-[${GOLD_ACCENT}]/10 rounded-full blur-3xl`}
            ></div>

            <div className="relative z-10 space-y-6">
              <h3 className="text-3xl sm:text-4xl font-bold text-white">
                Let&apos;s Build Something Great
              </h3>
              <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
                Interested in working together? I&apos;m available for freelance
                projects and full-time opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <a href="#contact">
                  <Button
                    variant="primary"
                    className={`w-full sm:w-auto min-w-[200px] bg-[${GOLD_ACCENT}] hover:bg-[${GOLD_HOVER}] text-neutral-950`}
                  >
                    Get In Touch
                  </Button>
                </a>
                <a href="#">
                  <Button
                    variant="white"
                    className={`w-full sm:w-auto min-w-[200px] border border-[${GOLD_ACCENT}] text-[${GOLD_ACCENT}] hover:bg-[${GOLD_ACCENT}]/10`}
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    More Projects
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <footer
        className={`py-8 px-4 sm:px-6 lg:px-8 border-t border-[${GOLD_ACCENT}]/40 `}
      >
        <div className="max-w-6xl mx-auto text-center">
          <p className={` text-sm`}>
            © 2025 Lesuuh Ueh-Kabari. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ProjectDetail;
