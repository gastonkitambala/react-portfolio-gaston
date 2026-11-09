import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { LuArrowUpRight } from "react-icons/lu";
import { PROJECTS } from "../constants";
import { reveal } from "../constants/motion";
import Section from "./Section";
import SystemDiagram from "./SystemDiagram";

const Projects = () => {
  return (
    <Section id="projects" index="03" eyebrow="Projects" title="Selected work">
      <div className="space-y-8">
        {PROJECTS.map((project) => (
          <motion.article
            key={project.title}
            {...reveal}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-colors hover:border-white/20"
          >
            {/* Overview: the stretched link makes this whole block clickable */}
            <div
              className={`relative ${project.image ? "md:grid md:grid-cols-[1.3fr_1fr]" : ""}`}
            >
              {project.image && (
                <div className="aspect-video overflow-hidden border-b border-white/10 bg-neutral-900 md:aspect-auto md:h-full md:border-b-0 md:border-r">
                  <img
                    src={project.image}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              )}
              <div className="flex flex-col p-6">
                <h3 className="text-lg font-medium text-neutral-50">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="after:absolute after:inset-0 after:content-['']"
                  >
                    {project.title}
                  </a>
                </h3>
                <p className="mt-2 max-w-prose leading-relaxed text-neutral-400">
                  {project.description}
                </p>
                {project.highlights && (
                  <ul className="mt-4 max-w-prose list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-neutral-400 marker:text-neutral-600">
                    {project.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
                <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
                  {project.technologies.map((tech) => (
                    <li key={tech} className="tag">
                      {tech}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-2 pt-6 text-sm font-medium">
                  <span className="inline-flex items-center gap-1 text-accent">
                    {project.linkLabel}
                    <LuArrowUpRight
                      aria-hidden="true"
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </span>
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-10 inline-flex items-center gap-1.5 text-neutral-400 transition-colors hover:text-neutral-50"
                    >
                      <FaGithub aria-hidden="true" />
                      Source code
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 bg-white/[0.015] p-6">
              <SystemDiagram title={project.title} architecture={project.architecture} />
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
