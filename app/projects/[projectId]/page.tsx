"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

import { projects } from "@/app/data";
import { useParams, useRouter } from "next/navigation";

import {
  AlertCircle,
  ArrowLeft,
  Github,
  // Sparkles,
  // Zap,
  // Target,
  // TrendingUp,
  // Code,
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
      <div className="min-h-screen bg-neutral-900 text-neutral-100 flex items-center justify-center p-4">
        <div className="text-center p-8 sm:p-12 bg-neutral-800 rounded-xl border border-red-700 max-w-sm">
          <AlertCircle className="w-8 h-8 mx-auto text-red-500 mb-4" />
          <h1 className="text-xl font-bold text-white">Project Not Found</h1>
          <p className="text-neutral-400 mt-2 text-sm">
            Could not load details for the requested project ID.
          </p>
          <button
            onClick={() => router.back()}
            className="mt-6 text-sm px-4 py-2 bg-neutral-700 text-white rounded-lg hover:bg-neutral-600 transition-all"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  // --- JSX Rendering ---
  return (
    <div
      className="min-h-screen bg-gradient-to-t from-neutral-900 via-neutral-800 to-neutral-900 text-neutral-100 font-sans"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-900/90 backdrop-blur-sm shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <Button
            variant="link"
            onClick={() => router.back()}
            className={`flex items-center space-x-2 text-[${GOLD_ACCENT}] hover:text-[${GOLD_HOVER}] transition-colors group`}
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs sm:text-sm font-medium">
              Back to Portfolio
            </span>
          </Button>
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-full hover:bg-neutral-700/50 text-[${GOLD_ACCENT}] hover:text-[${GOLD_HOVER}] transition-colors`}
              aria-label="View Github Repository"
            >
              <Github className="w-5 h-5" />
            </a>
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              <button
                className={`text-xs sm:text-sm px-3 sm:px-4 py-2 bg-[${GOLD_ACCENT}] text-neutral-950 rounded-lg hover:bg-[${GOLD_HOVER}] transition-all font-semibold`}
              >
                View Live
              </button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header
        className={`relative pt-24 pb-12 sm:pt-32 sm:pb-16 px-4 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6">
          <h1
            className={`text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[${GOLD_ACCENT}] leading-tight`}
          >
            {project.title}
          </h1>
          <p className="text-lg sm:text-2xl text-white font-light">
            {project.subtitle}
          </p>
          <p className="text-sm sm:text-lg text-neutral-400 leading-relaxed max-w-3xl mx-auto">
            {project.description}
          </p>
        </div>
      </header>

      {/* Hero Image */}
      <div className="px-4 pb-12 sm:pb-20">
        <div className="max-w-6xl mx-auto">
          <div
            className={`relative aspect-[16/9] sm:aspect-video rounded-xl sm:rounded-2xl overflow-hidden border border-[${GOLD_ACCENT}]/40 shadow-2xl group`}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>

      {/* <section className="px-4 pb-12 sm:pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-3 text-center">
            {Object.entries(project.metrics).map(([key, value]) => (
              <div
                key={key}
                className="bg-neutral-800/50 backdrop-blur-sm border border-[${GOLD_ACCENT}]/40 rounded-xl p-2 sm:p-3 hover:bg-[${GOLD_ACCENT}]/10 transition-colors"
              >
                <p className="text-white font-semibold text-sm sm:text-base">
                  {value}
                </p>
                <p className="text-neutral-300 text-[9px] sm:text-xs uppercase tracking-wider">
                  {key.replace(/([A-Z])/g, " $1").trim()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Main Content - Two Columns */}
      <main className="px-4 pb-12 sm:pb-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Left Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            <div
              className={`bg-neutral-800/60 backdrop-blur-sm border border-[${GOLD_ACCENT}]/40 rounded-xl p-5 sm:p-6 lg:sticky lg:top-24 space-y-4`}
            >
              <h3 className="text-sm font-semibold text-neutral-300 uppercase tracking-wide">
                Project Info
              </h3>
              <div className="grid grid-cols-3 gap-2 text-xs sm:text-sm md:grid-cols-3 lg:grid-cols-1 lg:space-y-3 lg:gap-0">
                <div className="col-span-1">
                  <p className="text-neutral-400 mb-1">Role</p>
                  <p className="text-white font-medium">{project.role}</p>
                </div>
                <div className="col-span-1">
                  <p className="text-neutral-400 mb-1">Timeline</p>
                  <p className="text-white font-medium">{project.timeline}</p>
                </div>
                <div className="col-span-1">
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
                    <Badge key={tech} variant="outline" className="text-[10px]">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Right Main Content */}
          <div className="lg:col-span-2 space-y-8 sm:space-y-12">
            {/* Overview (Problem + Solution) */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                {/* <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-100" /> */}
                Overview
              </h2>
              <p className="text-sm text-neutral-300 leading-relaxed">
                {project.problemStatement}
              </p>
              <p className="text-sm text-neutral-300 leading-relaxed">
                {project.solution}
              </p>
            </section>

            {/* Challenges & Solutions */}
            {project.challenges?.length > 0 && (
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                  {/* <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-100" /> */}
                  Challenges & Solutions
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {project.challenges.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-neutral-900/30 rounded-xl p-4 sm:p-5 hover:border-[${GOLD_HOVER}] transition-colors"
                    >
                      <h3 className="text-base font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="text-sm text-neutral-300">
                        {item.description}
                      </p>
                      <p className="text-sm text-neutral-400 italic mt-2">
                        → {item.solution}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Features & Technical Highlights Combined */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                {/* <Target className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-100" /> */}
                Features & Technical Highlights
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {project.technicalHighlights?.map((item, idx) => (
                  <div key={idx} className="bg-neutral-900/20 rounded-xl p-4">
                    <h3 className="text-base font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm text-neutral-300">
                      {item.description}
                    </p>
                  </div>
                ))}
                {project.keyFeatures?.map((feature, idx) => (
                  <div key={idx} className="bg-neutral-900/20 rounded-xl p-4">
                    <h3 className="text-base font-semibold text-white">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-neutral-300">
                      {feature.description}
                    </p>
                  </div>
                ))}
                
              </div>
            </section>

            {/* Impact & Metrics */}
            <section className="bg-neutral-900/40 rounded-xl p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                {/* <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-100" /> */}
                Impact & Metrics
              </h2>
              <ul className="mt-4 space-y-2">
                {project.impact.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-sm sm:text-base text-neutral-300"
                  >
                    • {item}
                  </li>
                ))}
              </ul>
              {project.metrics && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 text-center">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div
                      key={key}
                      className="bg-[${GOLD_ACCENT}]/20 rounded-xl p-2 sm:p-3 font-semibold"
                    >
                      <p className="text-white text-sm sm:text-base">{value}</p>
                      <p className="text-neutral-300 text-[9px] sm:text-xs uppercase tracking-wider">
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className={`py-6 px-4 border-t border-[${GOLD_ACCENT}]/40`}>
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs sm:text-sm text-neutral-400">
            © 2025 Lesuuh Ueh-Kabari. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ProjectDetail;
