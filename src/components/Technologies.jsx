import { motion } from "framer-motion";
import { LuCheckCircle, LuCloud, LuCode, LuCpu, LuDatabase, LuLayers } from "react-icons/lu";
import { SKILLS } from "../constants";
import { reveal } from "../constants/motion";
import Section from "./Section";

const ICONS = {
  languages: LuCode,
  frameworks: LuLayers,
  database: LuDatabase,
  devops: LuCloud,
  embedded: LuCpu,
  practices: LuCheckCircle,
};

const Technologies = () => {
  return (
    <Section id="skills" index="04" eyebrow="Skills" title="Tools I work with">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map(({ title, icon, items }) => {
          const Icon = ICONS[icon];
          return (
            <motion.div
              key={title}
              {...reveal}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-soft text-accent">
                  <Icon aria-hidden="true" />
                </span>
                <h3 className="font-semibold text-neutral-50">{title}</h3>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {items.map((item) => (
                  <li key={item} className="tag">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};

export default Technologies;
