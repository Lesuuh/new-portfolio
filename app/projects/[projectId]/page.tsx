"use client";

import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { useParams } from "next/navigation";
import { projects } from "@/app/data";
import Image from "next/image";
import Contact from "@/app/_components/Contact";

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
            <Button className="bg-blue-600 text-white hover:bg-blue-500 shadow-md transition-all duration-300">
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
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center space-x-2 text-gray-400 hover:text-gray-100 transition-colors duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Portfolio</span>
            </Link>
            <div className="font-medium text-lg text-gray-100">
              Lesuuh Ueh-Kabari
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content - Two Column Layout */}
      <section className="py-28 px-6">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Project Details */}
          <div className="space-y-8">
            <div>
              <Badge
                variant={
                  project.status === "In Progress" ? "default" : "secondary"
                }
                className={`mb-4 ${
                  project.status === "In Progress"
                    ? "bg-blue-900 text-blue-300 border-blue-600"
                    : "bg-green-900 text-green-300 border-green-600"
                }`}
              >
                {project.status}
              </Badge>
              <h1 className="text-4xl font-bold text-gray-100 mb-4">
                {project.title}
              </h1>
              <p className="text-lg text-gray-400 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4 text-gray-100">
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="border-gray-600 text-gray-300"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
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
                  href={project.status === "Completed" ? project.live : ""}
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
          </div>

          {/* Right Column: Project Image */}
          <div className="w-full aspect-[1/1] relative">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-contain rounded-2xl shadow-md border border-gray-700"
            />
          </div>
        </div>
      </section>

      {/* Simple CTA */}
      <section className="py-16 px-6 bg-gray-800">
        <Contact />
      </section>
    </div>
  );
}
