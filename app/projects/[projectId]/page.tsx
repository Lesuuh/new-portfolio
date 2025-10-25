"use client";

import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { useParams } from "next/navigation";
import { projects } from "@/app/data";
import Image from "next/image";

export default function ProjectDetail() {
  const { projectId } = useParams();
  const project = projects.find((item) => item.id === +projectId!);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 text-gray-100">
            Project Not Found
          </h1>
          <Link href="/">
            <Button className="bg-blue-600 text-white hover:bg-blue-500">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center space-x-2 text-gray-400 hover:text-gray-100 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Portfolio</span>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900" />
        <div className="relative z-10 text-center space-y-4 px-4">
          <h1 className="text-5xl font-bold tracking-tight">{project.title}</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            {project.description}
          </p>
          <div className="flex justify-center gap-3">
            {project.status && (
              <Badge
                className={`px-3 py-1 ${
                  project.status === "In Progress"
                    ? "bg-blue-900 text-blue-300 border-blue-700"
                    : "bg-green-900 text-green-300 border-green-700"
                }`}
              >
                {project.status}
              </Badge>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-20 space-y-20">
        {/* Overview */}
        <section>
          <h2 className="text-3xl font-semibold border-l-4 border-blue-600 pl-3 mb-6">
            Overview
          </h2>
          <p className="text-gray-300 leading-relaxed max-w-2xl">
            {project.overview}
          </p>
        </section>

        {/* Project Image Showcase */}
        <section className="flex justify-center">
          <div className="relative w-full max-w-3xl aspect-video rounded-2xl overflow-hidden border border-gray-700 shadow-2xl shadow-black/40">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={`${project.title} showcase`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </section>

        {/* Key Features */}
        {project.keyFeatures?.length > 0 && (
          <section className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <ul className="space-y-2 text-gray-300 list-disc list-inside">
              {project.keyFeatures.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Technical Highlights */}
        {project.technicalHighlights?.length > 0 && (
          <section>
            <h2 className="text-2xl font-semibold mb-4 border-l-4 border-blue-600 pl-3">
              Technical Highlights
            </h2>
            <ul className="space-y-2 text-gray-300 list-disc list-inside">
              {project.technicalHighlights.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Impact */}
        {project.impact?.length > 0 && (
          <section className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
            <h2 className="text-2xl font-semibold mb-4">Impact</h2>
            <ul className="space-y-2 text-gray-300 list-disc list-inside">
              {project.impact.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Challenges */}
        {project.challenges?.length > 0 && (
          <section>
            <h2 className="text-2xl font-semibold mb-4 border-l-4 border-blue-600 pl-3">
              Challenges
            </h2>
            <ul className="space-y-2 text-gray-300 list-disc list-inside">
              {project.challenges.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Metrics */}
        {project.metrics && (
          <section>
            <h2 className="text-2xl font-semibold mb-8 border-l-4 border-blue-600 pl-3">
              Metrics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Object.entries(project.metrics).map(([key, value]) => (
                <div
                  key={key}
                  className="bg-gray-800/70 border border-gray-700 rounded-xl p-6 transition-transform hover:-translate-y-1 hover:border-blue-600"
                >
                  <p className="text-3xl font-bold text-gray-100 mb-1">
                    {value}
                  </p>
                  <p className="text-sm text-gray-400 capitalize">
                    {key.replace(/([A-Z])/g, " $1").trim()}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Tech Stack */}
        <section className="pt-6 border-t border-gray-800">
          <h2 className="text-2xl font-semibold mb-4 border-l-4 border-blue-600 pl-3">
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="text-sm py-2 px-4 border-gray-600 text-gray-300 hover:border-blue-500 transition"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="pt-10">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-10 text-center space-y-5 shadow-lg shadow-gray-900/30">
            <h3 className="text-3xl font-semibold text-gray-100">
              Ready to build something this polished?
            </h3>
            <p className="text-gray-400">
              Let’s collaborate on your next digital experience.
            </p>
            <Link href="/#contact">
              <Button className="bg-blue-600 text-white hover:brightness-110 hover:shadow-md transition">
                Let’s Talk
              </Button>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-10 border-t border-gray-800 text-center text-gray-500 text-sm">
        © 2025 Lesuuh Ueh-Kabari. All rights reserved.
      </footer>
    </div>
  );
}
