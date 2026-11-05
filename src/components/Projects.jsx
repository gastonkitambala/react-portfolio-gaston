import { motion } from "framer-motion";
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
            className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-colors duration-200 hover:border-white/20"
          >
            {/* Overview: the stretched link makes this whole block clickable */}
            <div className="relative md:grid md:grid-cols-[1.3fr_1fr]">
              <div className="aspect-video overflow-hidden border-b border-white/10 bg-neutral-900 md:aspect-auto md:h-full md:border-b-0 md:border-r">
                <img
                  src={project.image}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-col p-6">
                <h3 className="text-lg font-semibold text-neutral-50">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="after:absolute after:inset-0 after:content-['']"
                  >
                    {project.title}
                  </a>
                </h3>
                <p className="mt-2 flex-1 leading-relaxed text-neutral-400">
                  {project.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
                  {project.technologies.map((tech) => (
                    <li key={tech} className="tag">
                      {tech}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-accent">
                  {project.linkLabel}
                  <LuArrowUpRight
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </p>
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
