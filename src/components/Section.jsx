import { motion } from "framer-motion";
import { reveal } from "../constants/motion";

const Section = ({ id, index, eyebrow, title, children }) => {
  return (
    <section id={id} className="border-t border-white/5 py-20 lg:py-28">
      <motion.header {...reveal} className="mb-12">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
          {index} / {eyebrow}
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-neutral-50 sm:text-4xl">
          {title}
        </h2>
      </motion.header>
      {children}
    </section>
  );
};

export default Section;
