/* eslint-disable @next/next/no-img-element */
import { projects } from "@/data";
import Link from "next/link";
import React from "react";
import { DiJavascript1 } from "react-icons/di";
import { FaCodeFork, FaStar } from "react-icons/fa6";
import { SiTypescript } from "react-icons/si";

const RecentProjects = () => {
  return (
    <div className="pb-10 pt-20">
      <h1 className="heading mb-10" id="projects">
        Recent <span className="text-purple">projects</span>
      </h1>
      <section className="mb-12">
        <div className="grid gap-4">
          <div className="rounded-lg border bg-white text-card-foreground shadow-sm p-6">
            <div className="flex items-start justify-between">
              <div>
                <a
                  href="https://github.com/Srinu126/react-job-portal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-medium hover:text-black text-black transition-colors"
                >
                  react-job-portal
                </a>
              </div>
            </div>
            <div className="flex text-black gap-4 mt-4">
              <div className="flex items-center gap-1">
                <DiJavascript1 className="h-4 w-4" />
                <span className="text-sm">JavaScript</span>
              </div>
              <div className="flex items-center gap-1">
                <FaStar className="h-4 w-4" />
                <span className="text-sm">0</span>
              </div>
              <div className="flex items-center gap-1">
                <FaCodeFork className="h-4 w-4" />
                <span className="text-sm">0</span>
              </div>
            </div>
          </div>

          <div className="rounded-lg border bg-white text-card-foreground shadow-sm p-6">
            <div className="flex items-start justify-between">
              <div>
                <a
                  href="https://github.com/Srinu126/blog-with-next.js"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-medium hover:text-black text-black transition-colors"
                >
                  blog-with-next.js
                </a>
              </div>
            </div>
            <div className="flex text-black gap-4 mt-4">
              <div className="flex items-center gap-1">
                <DiJavascript1 className="h-4 w-4" />
                <span className="text-sm">JavaScript</span>
              </div>
              <div className="flex items-center gap-1">
                <FaStar className="h-4 w-4" />
                <span className="text-sm">0</span>
              </div>
              <div className="flex items-center gap-1">
                <FaCodeFork className="h-4 w-4" />
                <span className="text-sm">0</span>
              </div>
            </div>
          </div>

          <div className="rounded-lg border bg-white text-card-foreground shadow-sm p-6">
            <div className="flex items-start justify-between">
              <div>
                <a
                  href="https://github.com/Srinu126/real-estate-app-with-mern"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-medium hover:text-black  text-black transition-colors"
                >
                  real-estate-app-with-mern
                </a>
              </div>
            </div>
            <div className="flex text-black gap-4 mt-4">
              <div className="flex items-center gap-1">
                <DiJavascript1 className="h-4 w-4" />
                <span className="text-sm">JavaScript</span>
              </div>
              <div className="flex items-center gap-1">
                <FaStar className="h-4 w-4" />
                <span className="text-sm">0</span>
              </div>
              <div className="flex items-center gap-1">
                <FaCodeFork className="h-4 w-4" />
                <span className="text-sm">0</span>
              </div>
            </div>
          </div>

          <div className="rounded-lg border bg-white text-card-foreground shadow-sm p-6">
            <div className="flex items-start justify-between">
              <div>
                <a
                  href="https://github.com/Srinu126/nextjs_tms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-medium hover:text-black text-black transition-colors"
                >
                  nextjs_tms
                </a>
              </div>
            </div>
            <div className="flex text-black gap-4 mt-4">
              <div className="flex items-center gap-1">
                <SiTypescript className="h-4 w-4" />
                <span className="text-sm">TypeScript</span>
              </div>
              <div className="flex items-center gap-1">
                <FaStar className="h-4 w-4" />
                <span className="text-sm">0</span>
              </div>
              <div className="flex items-center gap-1">
                <FaCodeFork className="h-4 w-4" />
                <span className="text-sm">0</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center">
          <a
            href="https://github.com/Srinu126"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            View more on GitHub →
          </a>
        </div>
      </section>
    </div>
  );
};

export default RecentProjects;
