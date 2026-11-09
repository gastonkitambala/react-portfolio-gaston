import { motion } from "framer-motion";
import { LuArrowRight, LuDownload } from "react-icons/lu";
import { CONTACT, HERO_CONTENT, NAME, RESUME_URL, ROLE } from "../constants";
import { EASE } from "../constants/motion";
import profilePic from "../assets/hero.webp";
import SocialLinks from "./SocialLinks";

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, delay, ease: EASE },
});

const Hero = () => {
  return (
    <section
      id="top"
      className="grid min-h-[calc(100dvh-4rem)] items-center gap-12 pb-20 pt-28 lg:grid-cols-[1.25fr_1fr] lg:gap-16 lg:pt-32"
    >
      <div>
        <motion.h1
          {...fadeUp(0)}
          className="text-4xl font-medium leading-[1.05] tracking-[-0.02em] text-neutral-50 sm:text-6xl lg:text-7xl lg:tracking-[-0.03em]"
        >
          {NAME}
        </motion.h1>

        <motion.p {...fadeUp(0.05)} className="mt-4 text-xl text-neutral-300 sm:text-2xl">
          {ROLE}
          <span className="text-neutral-500"> · {CONTACT.address}</span>
        </motion.p>

        <motion.p
          {...fadeUp(0.1)}
          className="mt-6 max-w-xl text-lg leading-8 text-neutral-400"
        >
          {HERO_CONTENT}
        </motion.p>

        <motion.div {...fadeUp(0.15)} className="mt-10 flex flex-wrap items-center gap-3">
          <a href="#projects" className="btn-primary group">
            View my work
            <LuArrowRight
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-0.5"
            />
          </a>
          <a href={RESUME_URL} download className="btn-secondary">
            <LuDownload aria-hidden="true" />
            Download CV
          </a>
          <span aria-hidden="true" className="mx-2 hidden h-6 w-px bg-white/10 sm:block" />
          <SocialLinks />
        </motion.div>
      </div>

      <motion.img
        {...fadeUp(0.1)}
        src={profilePic}
        alt={`Portrait of ${NAME}`}
        width={1145}
        height={1374}
        fetchPriority="high"
        className="mx-auto aspect-[4/5] w-full max-w-sm rounded-2xl border border-white/10 object-cover object-top lg:max-w-md"
      />
    </section>
  );
};

export default Hero;
