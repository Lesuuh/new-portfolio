"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

import {
  Send,
  CheckCircle,
  Mail,
  Github,
  Twitter,
  Linkedin,
} from "lucide-react";
import Link from "next/link";
import { githubRepo, linkedin, twitter } from "../data";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Replace with your actual form submission
      // Example: Formspree, EmailJS, or your own API
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error(error);
      setStatus("idle");
    }
  };

  if (status === "success") {
    return (
      <section id="contact" className="py-20 px-6 bg-gray-800">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-900/50 rounded-full mb-6">
            <CheckCircle className="w-8 h-8 text-green-400" />
          </div>
          <h2 className="text-3xl font-bold mb-4 text-gray-100">
            Message Sent!
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Thanks for reaching out. I&apos;ll get back to you within 24 hours.
          </p>
          <Button
            onClick={() => setStatus("idle")}
            variant="outline"
            className="bg-gray-700 text-gray-100 border-gray-600 hover:bg-gray-600"
          >
            Send Another Message
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 px-6 bg-gray-800">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-100">
            Let&apos;s Work Together
          </h2>
          <p className="text-gray-400 text-lg">
            Open to frontend opportunities, freelance projects, and
            collaborations.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-gray-900 w-full px-3 border-gray-600 text-gray-100 placeholder:text-gray-500 h-12 focus:outline-none focus:ring-0 focus:border-gray-600"
            />
          </div>

          <div>
            <input
              name="email"
              type="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-gray-900 w-full px-3 border-gray-600 text-gray-100 placeholder:text-gray-500 h-12 focus:outline-none focus:ring-0 focus:border-gray-600"
            />
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Tell me about your project..."
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="bg-gray-900 w-full px-3 py-3 border-gray-600 text-gray-100 placeholder:text-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600"
            />
          </div>

          <Button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-blue-600 text-white hover:bg-blue-500 h-12 text-base"
          >
            {status === "loading" ? (
              "Sending..."
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </>
            )}
          </Button>
        </form>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-400 mb-6">
            Or reach out directly
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
          {/* <div className="flex justify-center items-center space-x-6">
            <a
              href="mailto:lesuuh01@gmail.com"
              className="flex items-center space-x-2 text-gray-400 hover:text-gray-100 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>Email</span>
            </a>
            <a
              href="https://github.com/lesuuh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-400 hover:text-gray-100 transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://twitter.com/UKLesuuh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-400 hover:text-gray-100 transition-colors"
            >
              <Twitter className="w-5 h-5" />
              <span>Twitter</span>
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
}
