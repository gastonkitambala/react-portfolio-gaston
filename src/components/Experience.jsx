import { motion } from "framer-motion";
import { EXPERIENCES } from "../constants";
import { reveal } from "../constants/motion";
import Section from "./Section";

const Experience = () => {
  return (
    <Section id="experience" index="02" eyebrow="Experience" title="Where I've worked">
      <ol className="relative space-y-12 border-l border-white/10 pl-8 lg:ml-[11rem]">
        {EXPERIENCES.map((experience, index) => (
          <motion.li key={index} {...reveal} className="relative">
            <span
              aria-hidden="true"
              className={`absolute -left-[37px] top-1.5 h-2.5 w-2.5 rounded-full ring-4 ring-neutral-950 ${
                index === 0 ? "bg-accent" : "bg-neutral-600"
              }`}
            />
            <p className="mb-2 font-mono text-xs text-neutral-500 lg:absolute lg:-left-[13rem] lg:top-1 lg:w-40 lg:text-right">
              {experience.year}
            </p>
            <h3 className="text-lg font-semibold text-neutral-50">
              {experience.role}
              <span className="font-normal text-neutral-400"> · {experience.company}</span>
            </h3>
            <p className="mt-1 text-sm text-neutral-500">{experience.location}</p>
            <ul className="mt-4 max-w-2xl space-y-2 leading-relaxed text-neutral-400">
              {experience.highlights.map((item) => (
                <li key={item} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-[0.7em] h-1 w-1 shrink-0 rounded-full bg-neutral-500"
                  />
                  {item}
                </li>
              ))}
            </ul>
            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
              {experience.technologies.map((tech) => (
                <li key={tech} className="tag">
                  {tech}
                </li>
              ))}
            </ul>
          </motion.li>
        ))}
      </ol>
    </Section>
  );
};

export default Experience;
