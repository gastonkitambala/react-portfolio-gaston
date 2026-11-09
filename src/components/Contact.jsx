import { motion } from "framer-motion";
import { LuDownload, LuMail, LuMapPin } from "react-icons/lu";
import { CONTACT, NAME, RESUME_URL } from "../constants";
import { reveal } from "../constants/motion";
import { Eyebrow } from "./Section";
import SocialLinks from "./SocialLinks";

const Contact = () => {
  const tel = CONTACT.phoneNo.replace(/[^\d+]/g, "");

  return (
    <section id="contact" className="border-t border-white/5 py-20 lg:py-28">
      <motion.div
        {...reveal}
        className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-16 text-center sm:px-12"
      >
        <Eyebrow index="06" label="Contact" />
        <h2 className="text-3xl font-medium text-neutral-50 sm:text-5xl sm:tracking-[-0.02em]">
          Open to full stack roles
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-neutral-400">
          Available for full stack positions and collaborations. The fastest way
          to reach me is by email, in English or French.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a href={`mailto:${CONTACT.email}`} className="btn-primary">
            <LuMail aria-hidden="true" />
            {CONTACT.email}
          </a>
          <a href={RESUME_URL} download className="btn-secondary">
            <LuDownload aria-hidden="true" />
            Download CV
          </a>
        </div>
        <p className="mt-6 inline-flex flex-wrap items-center justify-center gap-2 text-sm text-neutral-500">
          <LuMapPin aria-hidden="true" />
          {CONTACT.address}
          <span aria-hidden="true">·</span>
          <a
            href={`tel:${tel}`}
            className="tabular-nums transition-colors hover:text-neutral-200"
          >
            {CONTACT.phoneNo}
          </a>
        </p>
      </motion.div>

      <footer className="mt-16 flex flex-col-reverse items-center justify-between gap-4 text-sm text-neutral-500 sm:flex-row">
        <p>© {new Date().getFullYear()} {NAME}</p>
        <SocialLinks />
      </footer>
    </section>
  );
};

export default Contact;
