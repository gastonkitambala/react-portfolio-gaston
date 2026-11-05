import { motion } from "framer-motion";
import { LuDownload, LuMail, LuMapPin, LuPhone } from "react-icons/lu";
import { CONTACT, NAME, RESUME_URL } from "../constants";
import { reveal } from "../constants/motion";
import SocialLinks from "./SocialLinks";

const Contact = () => {
  const tel = CONTACT.phoneNo.replace(/[^\d+]/g, "");

  return (
    <section id="contact" className="border-t border-white/5 py-20 lg:py-28">
      <motion.div
        {...reveal}
        className="relative isolate overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] px-6 py-14 text-center sm:px-12"
      >
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-0 -z-10 h-40 w-2/3 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
        />
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
          06 / Contact
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-neutral-50 sm:text-5xl">
          Let&apos;s build something together
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-neutral-400">
          Open to new full stack opportunities and collaborations. The fastest
          way to reach me is by email.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a href={`mailto:${CONTACT.email}`} className="btn-primary">
            <LuMail aria-hidden="true" />
            {CONTACT.email}
          </a>
          <a href={`tel:${tel}`} className="btn-secondary">
            <LuPhone aria-hidden="true" />
            {CONTACT.phoneNo}
          </a>
          <a href={RESUME_URL} download className="btn-secondary">
            <LuDownload aria-hidden="true" />
            Download CV
          </a>
        </div>
        <p className="mt-6 inline-flex items-center gap-2 text-sm text-neutral-500">
          <LuMapPin aria-hidden="true" />
          {CONTACT.address}
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
