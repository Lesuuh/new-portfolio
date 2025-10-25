"use client";

import { ArrowLeft, Github, ExternalLink } from "lucide-react";
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-gray-800/80 backdrop-blur-md border-b border-gray-700">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link
            href="/"
            className="flex items-center space-x-2 text-gray-400 hover:text-gray-100 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Portfolio</span>
          </Link>
        </div>
      </nav>

      {/* Main Content - Single Column */}
      <main className="max-w-4xl mx-auto px-6 py-16 space-y-16">
        {/* Header */}
        <header className="space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            {/* <Badge className="bg-green-900 text-green-300 border-green-600">
              {project.category}
            </Badge> */}
            <Badge
              className={`${
                project.status === "In Progress"
                  ? "bg-blue-900 text-blue-300 border-blue-600"
                  : "bg-green-900 text-green-300 border-green-600"
              }`}
            >
              {project.status}
            </Badge>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-gray-100">
            {project.title}
          </h1>

          <p className="text-xl text-gray-400 leading-relaxed">
            {project.description}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="bg-gray-700 text-gray-100 border-gray-600 hover:bg-gray-600"
              >
                <Github className="w-4 h-4 mr-2" />
                View Code
              </Button>
            </Link>

            {project.status === "Completed" && (
              <Link
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-blue-600 text-white hover:bg-blue-500">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Button>
              </Link>
            )}
          </div>
        </header>

        {/* Project Image */}
        <div className="w-full aspect-video relative rounded-xl overflow-hidden border border-gray-700">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Overview */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-100">Overview</h2>
          <div className="text-gray-300 leading-relaxed whitespace-pre-line">
            {project.fullDescription}
          </div>
        </section>

        {/* Metrics - If Available */}
        {project.metrics && (
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-100">Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {Object.entries(project.metrics).map(([key, value]) => (
                <div
                  key={key}
                  className="bg-gray-800 border border-gray-700 rounded-lg p-6"
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
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-100">
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="text-sm py-2 px-4 border-gray-600 text-gray-300"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="pt-8 border-t border-gray-700">
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 text-center space-y-4">
            <h3 className="text-2xl font-bold text-gray-100">
              Like what you see?
            </h3>
            <p className="text-gray-400">
              Let&apos;s discuss how I can help with your project
            </p>
            <Link href="/#contact">
              <Button className="bg-blue-600 text-white hover:bg-blue-500">
                Get In Touch
              </Button>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-700 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Lesuuh Ueh-Kabari. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
