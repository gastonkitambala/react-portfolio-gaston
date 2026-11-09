import { motion } from "framer-motion";
import { reveal } from "../constants/motion";

// Signature detail: a silkscreen-style index label with a single accent pin,
// used only on section headers.
export const Eyebrow = ({ index, label }) => (
  <p className="mb-4 flex items-center gap-2 font-mono text-xs text-neutral-500">
    <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
    {index} · {label}
  </p>
);

const Section = ({ id, index, eyebrow, title, children }) => {
  return (
    <section id={id} className="border-t border-white/5 py-20 lg:py-28">
      <motion.header {...reveal} className="mb-12">
        <Eyebrow index={index} label={eyebrow} />
        <h2 className="text-3xl font-medium text-neutral-50 sm:text-4xl sm:tracking-[-0.01em]">
          {title}
        </h2>
      </motion.header>
      {children}
    </section>
  );
};

export default Section;
