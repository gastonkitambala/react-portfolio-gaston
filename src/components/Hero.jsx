import { motion } from "framer-motion";
import { LuArrowRight, LuDownload, LuMapPin } from "react-icons/lu";
import { CONTACT, HERO_CONTENT, NAME, RESUME_URL, ROLE } from "../constants";
import profilePic from "../assets/hero.webp";
import SocialLinks from "./SocialLinks";

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, delay, ease: "easeOut" },
});

const Hero = () => {
  return (
    <section
      id="top"
      className="grid min-h-[calc(100dvh-4rem)] items-center gap-12 pb-20 pt-28 lg:grid-cols-[1.25fr_1fr] lg:gap-16 lg:pt-32"
    >
      <div>
        <motion.p
          {...fadeUp(0)}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-neutral-300"
        >
          <LuMapPin aria-hidden="true" className="text-accent" />
          {CONTACT.address}
        </motion.p>

        <motion.h1
          {...fadeUp(0.05)}
          className="text-5xl font-semibold tracking-tight text-neutral-50 sm:text-6xl lg:text-7xl"
        >
          {NAME}
        </motion.h1>

        <motion.p
          {...fadeUp(0.1)}
          className="mt-4 text-xl text-neutral-300 sm:text-2xl"
        >
          {ROLE}
        </motion.p>

        <motion.p
          {...fadeUp(0.15)}
          className="mt-6 max-w-xl text-base leading-relaxed text-neutral-400"
        >
          {HERO_CONTENT}
        </motion.p>

        <motion.div {...fadeUp(0.2)} className="mt-10 flex flex-wrap items-center gap-3">
          <a href="#projects" className="btn-primary group">
            View my work
            <LuArrowRight
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </a>
          <a href={RESUME_URL} download className="btn-secondary">
            <LuDownload aria-hidden="true" />
            Download CV
          </a>
          <SocialLinks className="sm:ml-2" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative isolate mx-auto w-full max-w-sm lg:max-w-none"
      >
        <div
          aria-hidden="true"
          className="absolute -inset-4 -z-10 rounded-[2rem] bg-accent/10 blur-3xl"
        />
        <img
          src={profilePic}
          alt={`Portrait of ${NAME}`}
          width={1200}
          height={900}
          fetchPriority="high"
          className="aspect-[4/5] w-full rounded-2xl border border-white/10 object-cover object-[50%_30%]"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
