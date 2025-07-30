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
  console.log(project);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Link href="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center space-x-2 text-gray-600 hover:text-black transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Portfolio</span>
            </Link>
            <div className="font-medium text-lg">Lesuuh Ueh-Kabari</div>
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
                    ? "bg-blue-100 text-blue-800 border-blue-200"
                    : "bg-green-100 text-green-800 border-green-200"
                }`}
              >
                {project.status}
              </Badge>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {project.title}
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4 text-gray-900">
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="border-gray-300"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="bg-black text-white hover:bg-gray-800 w-full sm:w-auto">
                <Github className="w-4 h-4 mr-2" />
                View Code
              </Button>
              <Button
                variant="outline"
                className="border-gray-300 hover:border-black bg-transparent w-full sm:w-auto"
                disabled={project.status === "In Progress"}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                {project.status === "In Progress" ? "Coming Soon" : "Live Demo"}
              </Button>
            </div>
          </div>

          {/* Right Column: Project Image */}
          <div className="w-full aspect-[1/1] relative">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-contain rounded-2xl shadow-xs"
            />
          </div>
        </div>
      </section>

      {/* Simple CTA */}
      <section className="py-16 px-6 bg-gray-50">
        <Contact />
      </section>
    </div>
  );
}
