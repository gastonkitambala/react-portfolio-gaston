import { motion } from "framer-motion";
import aboutImg from "../assets/about.webp";
import { ABOUT_TEXT, QUICK_FACTS } from "../constants";
import { reveal } from "../constants/motion";
import Section from "./Section";

const About = () => {
  return (
    <Section id="about" index="01" eyebrow="About" title="Shipping web apps, end to end">
      <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.2fr]">
        <motion.img
          {...reveal}
          src={aboutImg}
          alt="Itaka working at a desk with code on screen"
          width={1000}
          height={855}
          loading="lazy"
          className="aspect-[4/3] w-full rounded-2xl border border-white/10 object-cover lg:aspect-[4/5]"
        />

        <motion.div {...reveal}>
          <div className="max-w-prose space-y-5 text-base leading-relaxed text-neutral-400">
            {ABOUT_TEXT.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10">
            {QUICK_FACTS.map(({ label, value }) => (
              <div key={label} className="bg-neutral-950 p-5">
                <dt className="font-mono text-xs uppercase tracking-wider text-neutral-500">
                  {label}
                </dt>
                <dd className="mt-1 font-medium text-neutral-100">{value}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </Section>
  );
};

export default About;
