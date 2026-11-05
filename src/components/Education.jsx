import { motion } from "framer-motion";
import { LuGraduationCap } from "react-icons/lu";
import { EDUCATION } from "../constants";
import { reveal } from "../constants/motion";
import Section from "./Section";

const Education = () => {
  return (
    <Section id="education" index="05" eyebrow="Education" title="Education">
      <div className="grid gap-4 md:grid-cols-2">
        {EDUCATION.map((education) => (
          <motion.div
            key={education.title}
            {...reveal}
            className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 text-lg text-neutral-300">
              <LuGraduationCap aria-hidden="true" />
            </span>
            <div>
              <p className="font-mono text-xs text-neutral-500">{education.year}</p>
              <h3 className="mt-1 font-semibold text-neutral-50">{education.title}</h3>
              <p className="mt-1 text-neutral-300">{education.school}</p>
              <p className="mt-1 text-sm text-neutral-500">{education.city}</p>
              <p className="mt-3 text-sm leading-relaxed text-neutral-400">{education.details}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Education;
