"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { projects } from "@/app/data";
import { useParams, useRouter } from "next/navigation";
import {
  AlertCircle,
  ArrowLeft,
  Github,
  ExternalLink,
} from "../../_components/Icons";
import { Badge } from "@/app/_components/Badge";
import { Button } from "@/app/_components/Button";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  const project = projects.find((p) => p.id === Number(projectId));

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsVisible(true);
  }, []);

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-neutral-950 px-4 text-neutral-100">
        <div className="w-full max-w-md rounded-2xl border border-neutral-800 bg-neutral-900 p-8 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-red-500/20 bg-red-500/10">
            <AlertCircle className="h-6 w-6 text-red-400" />
          </div>

          <h1 className="mt-5 text-xl font-bold text-white">
            Project Not Found
          </h1>

          <p className="mt-2 text-sm leading-6 text-neutral-500">
            The project you&apos;re looking for could not be found.
          </p>

          <button
            onClick={() => router.back()}
            className="mt-6 inline-flex items-center rounded-lg border border-neutral-700 px-4 py-2 text-sm font-medium text-neutral-200 transition-colors hover:border-neutral-500 hover:bg-neutral-800"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const hasChallenges =
    Array.isArray(project.challenges) && project.challenges.length > 0;

  const hasTechnicalHighlights =
    Array.isArray(project.technicalHighlights) &&
    project.technicalHighlights.length > 0;

  const hasKeyFeatures =
    Array.isArray(project.keyFeatures) && project.keyFeatures.length > 0;

  const hasImpact = Array.isArray(project.impact) && project.impact.length > 0;

  const hasMetrics = project.metrics && Object.keys(project.metrics).length > 0;

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50 selection:bg-gold selection:text-neutral-950">
      {/* =========================================================
          NAVIGATION
      ========================================================= */}
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-neutral-800/70 bg-neutral-950/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <button
            onClick={() => router.back()}
            className="group flex items-center gap-2 text-sm font-medium text-neutral-400 transition-colors hover:text-gold"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Projects</span>
          </button>

          <div className="flex items-center gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View GitHub repository"
              className="rounded-lg border border-neutral-800 p-2.5 text-neutral-400 transition-all hover:border-neutral-600 hover:bg-neutral-900 hover:text-gold"
            >
              <Github className="h-5 w-5" />
            </a>

            <a href={project.live} target="_blank" rel="noopener noreferrer">
              <Button className="bg-gold text-sm text-neutral-950 hover:bg-gold-hover">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </Button>
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* =========================================================
            HERO
        ========================================================= */}
        <header
          className={`px-4 pb-10 pt-32 transition-all duration-700 sm:pb-14 sm:pt-40 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
          }`}
        >
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-gold" />
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
                Project Case Study
              </span>
              <span className="h-px w-8 bg-gold" />
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-neutral-300 sm:text-xl">
              {project.subtitle}
            </p>

            <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-neutral-500 sm:text-base">
              {project.description}
            </p>
          </div>
        </header>

        {/* =========================================================
            HERO IMAGE
        ========================================================= */}
        <section className="px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="group relative aspect-video overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 shadow-2xl shadow-black/30">
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 1200px"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.015]"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </section>

        {/* =========================================================
            PROJECT CONTENT
        ========================================================= */}
        <main className="px-4 pb-20 sm:px-6 sm:pb-28 lg:px-8">
          <div className="mx-auto max-w-6xl">
            {/* Project metadata */}
            <section className="mb-16 grid border-y border-neutral-800 py-7 sm:grid-cols-3 sm:divide-x sm:divide-neutral-800">
              <div className="pb-5 sm:pb-0 sm:pl-0">
                <p className="text-xs font-medium uppercase tracking-[0.15em] text-neutral-500">
                  Role
                </p>
                <p className="mt-2 text-sm font-medium text-neutral-100">
                  {project.role}
                </p>
              </div>

              <div className="border-t border-neutral-800 pt-5 sm:border-t-0 sm:px-8 sm:pt-0">
                <p className="text-xs font-medium uppercase tracking-[0.15em] text-neutral-500">
                  Timeline
                </p>
                <p className="mt-2 text-sm font-medium text-neutral-100">
                  {project.timeline}
                </p>
              </div>

              <div className="border-t border-neutral-800 pt-5 sm:border-t-0 sm:px-8 sm:pt-0">
                <p className="text-xs font-medium uppercase tracking-[0.15em] text-neutral-500">
                  Status
                </p>
                <p className="mt-2 text-sm font-medium text-neutral-100">
                  {project.status}
                </p>
              </div>
            </section>

            <div className="grid gap-16 lg:grid-cols-[220px_1fr] lg:gap-20">
              {/* =====================================================
                  SIDEBAR
              ===================================================== */}
              <aside className="lg:sticky lg:top-24 lg:self-start">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-gold">
                  Technologies
                </p>

                <div className="mt-4 flex flex-wrap gap-2 lg:block lg:space-y-2">
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

                <div className="mt-8 hidden border-t border-neutral-800 pt-7 lg:block">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">
                    Explore
                  </p>

                  <div className="mt-4 space-y-3">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-gold"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live application
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-gold"
                    >
                      <Github className="h-4 w-4" />
                      Source code
                    </a>
                  </div>
                </div>
              </aside>

              {/* =====================================================
                  MAIN CASE STUDY
              ===================================================== */}
              <article className="min-w-0 space-y-16">
                {/* Overview */}
                <section>
                  <SectionHeading number="01" title="Overview" />

                  <div className="mt-6 space-y-5">
                    <p className="text-base leading-8 text-neutral-300">
                      {project.problemStatement}
                    </p>

                    <p className="text-base leading-8 text-neutral-400">
                      {project.solution}
                    </p>
                  </div>
                </section>

                {/* Key Features */}
                {hasKeyFeatures && (
                  <section>
                    <SectionHeading number="02" title="Key Features" />

                    <div className="mt-7 grid gap-px overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-800 sm:grid-cols-2">
                      {project.keyFeatures.map((feature, idx) => (
                        <div
                          key={idx}
                          className="bg-neutral-950 p-6 transition-colors hover:bg-neutral-900"
                        >
                          <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-lg border border-neutral-800 text-xs font-medium text-gold">
                            {String(idx + 1).padStart(2, "0")}
                          </div>

                          <h3 className="font-semibold text-neutral-100">
                            {feature.title}
                          </h3>

                          <p className="mt-2 text-sm leading-6 text-neutral-500">
                            {feature.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* Technical Highlights */}
                {hasTechnicalHighlights && (
                  <section>
                    <SectionHeading
                      number={hasKeyFeatures ? "03" : "02"}
                      title="Technical Highlights"
                    />

                    <div className="mt-7 space-y-0 divide-y divide-neutral-800 border-y border-neutral-800">
                      {project.technicalHighlights.map((item, idx) => (
                        <div
                          key={idx}
                          className="grid gap-3 py-6 sm:grid-cols-[180px_1fr] sm:gap-8"
                        >
                          <h3 className="font-semibold text-neutral-100">
                            {item.title}
                          </h3>

                          <p className="text-sm leading-7 text-neutral-500">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* Challenges */}
                {hasChallenges && (
                  <section>
                    <SectionHeading
                      number={
                        hasKeyFeatures && hasTechnicalHighlights
                          ? "04"
                          : hasKeyFeatures || hasTechnicalHighlights
                            ? "03"
                            : "02"
                      }
                      title="Challenges & Solutions"
                    />

                    <div className="mt-7 space-y-5">
                      {project.challenges.map((item, idx) => (
                        <div
                          key={idx}
                          className="rounded-2xl border border-neutral-800 bg-neutral-900/30 p-6 sm:p-7"
                        >
                          <div className="flex gap-4">
                            <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold text-xs font-bold text-neutral-950">
                              {idx + 1}
                            </span>

                            <div className="min-w-0">
                              <h3 className="font-semibold text-neutral-100">
                                {item.title}
                              </h3>

                              <p className="mt-3 text-sm leading-7 text-neutral-500">
                                {item.description}
                              </p>

                              <div className="mt-5 border-l border-gold/50 pl-4">
                                <p className="text-xs font-medium uppercase tracking-[0.12em] text-gold">
                                  Solution
                                </p>

                                <p className="mt-2 text-sm leading-7 text-neutral-400">
                                  {item.solution}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* Impact */}
                {(hasImpact || hasMetrics) && (
                  <section>
                    <SectionHeading number="05" title="Impact" />

                    {hasImpact && (
                      <ul className="mt-7 space-y-4">
                        {project.impact.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex gap-3 text-sm leading-7 text-neutral-400 sm:text-base"
                          >
                            <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {hasMetrics && (
                      <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-800 sm:grid-cols-4">
                        {Object.entries(project.metrics ?? {}).map(
                          ([key, value]) => (
                            <div
                              key={key}
                              className="bg-neutral-950 p-5 text-center"
                            >
                              <p className="text-xl font-bold text-gold sm:text-2xl">
                                {value}
                              </p>

                              <p className="mt-1 text-[10px] font-medium uppercase tracking-wider text-neutral-500">
                                {key.replace(/([A-Z])/g, " $1").trim()}
                              </p>
                            </div>
                          ),
                        )}
                      </div>
                    )}
                  </section>
                )}

                {/* Bottom CTA */}
                <section className="border-t border-neutral-800 pt-12">
                  <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-7 text-center sm:p-10">
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-gold">
                      Interested in the project?
                    </p>

                    <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                      Explore the live application.
                    </h2>

                    <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-neutral-500">
                      See the project in action or take a look at the source
                      code to explore the implementation.
                    </p>

                    <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button className="w-full bg-gold text-neutral-950 hover:bg-gold-hover sm:w-auto">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          View Live Demo
                        </Button>
                      </a>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="white"
                          className="w-full border border-neutral-700 bg-transparent text-neutral-200 hover:border-neutral-500 hover:bg-neutral-900 sm:w-auto"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          View Source Code
                        </Button>
                      </a>
                    </div>
                  </div>
                </section>
              </article>
            </div>
          </div>
        </main>
      </main>

      {/* =========================================================
          FOOTER
      ========================================================= */}
      <footer className="border-t border-neutral-800 px-4 py-7 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-neutral-500">
            © 2026 Lesuuh Ueh-Kabari. All rights reserved.
          </p>

          <button
            onClick={() => router.back()}
            className="text-sm text-neutral-500 transition-colors hover:text-gold"
          >
            Back to projects ↑
          </button>
        </div>
      </footer>
    </div>
  );
};

const SectionHeading = ({
  number,
  title,
}: {
  number: string;
  title: string;
}) => {
  return (
    <div className="flex items-center gap-4">
      <span className="text-xs font-medium tracking-[0.15em] text-gold">
        {number}
      </span>

      <div className="h-px flex-1 bg-neutral-800" />

      <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
        {title}
      </h2>
    </div>
  );
};

export default ProjectDetail;
