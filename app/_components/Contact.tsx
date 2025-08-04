"use client";

import { Button } from "@/components/ui/button";
import ScrollReveal from "./ScrollReveal";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { githubRepo, linkedin, twitter } from "../data";

const Contact = () => {
  return (
    <ScrollReveal>
      <section id="contact" className="py-24 px-6 bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-100">
            Let&apos;s Work Together
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            I&apos;m always interested in new opportunities and exciting
            projects. Let&apos;s discuss how we can bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="mailto:lesuuh01@gmail.com">
              <Button className="bg-blue-600 text-white hover:bg-blue-500 w-full sm:w-auto shadow-md transition-all duration-300">
                <Mail className="w-4 h-4 mr-2" />
                lesuuh01@gmail.com
              </Button>
            </a>
            <div className="flex space-x-4">
              <Link href={githubRepo} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600 hover:text-gray-100 transition-all duration-300"
                >
                  <Github className="w-4 h-4" />
                </Button>
              </Link>
              <Link href={twitter} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600 hover:text-gray-100 transition-all duration-300"
                >
                  <Twitter className="w-4 h-4" />
                </Button>
              </Link>
              <Link href={linkedin} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600 hover:text-gray-100 transition-all duration-300"
                >
                  <Linkedin className="w-4 h-4 text-blue-400" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
};

export default Contact;
