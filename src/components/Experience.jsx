import { motion } from "framer-motion";
import { EXPERIENCES } from "../constants";
import { reveal } from "../constants/motion";
import Section from "./Section";

const Experience = () => {
  return (
    <Section id="experience" index="02" eyebrow="Experience" title="Where I've worked">
      <ol>
        {EXPERIENCES.map((experience, index) => (
          <motion.li
            key={index}
            {...reveal}
            className="lg:grid lg:grid-cols-[10rem_1fr] lg:gap-12"
          >
            <p className="mb-2 font-mono text-xs leading-7 text-neutral-500 lg:mb-0 lg:text-right">
              {experience.year}
            </p>

            <div className={`relative border-l border-white/10 pl-8 ${
                index < EXPERIENCES.length - 1 ? "pb-12" : ""
              }`}>
              {/* 10px dot centred on the 1px rail */}
              <span
                aria-hidden="true"
                className={`absolute -left-[5.5px] top-2 h-2.5 w-2.5 rounded-full ring-4 ring-neutral-950 ${
                  index === 0 ? "bg-accent" : "bg-neutral-600"
                }`}
              />
              <h3 className="text-lg font-medium leading-7 text-neutral-50">
                {experience.role}
                <span className="font-normal text-neutral-400"> · {experience.company}</span>
              </h3>
              <p className="mt-1 text-sm text-neutral-500">{experience.location}</p>
              <ul className="mt-4 max-w-2xl space-y-2 leading-7 text-neutral-400">
                {experience.highlights.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-3 h-1 w-1 shrink-0 rounded-full bg-neutral-500"
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
            </div>
          </motion.li>
        ))}
      </ol>
    </Section>
  );
};

export default Experience;
