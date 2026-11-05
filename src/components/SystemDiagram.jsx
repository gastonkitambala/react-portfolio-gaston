import { Fragment } from "react";
import {
  LuArrowLeftRight,
  LuArrowUpDown,
  LuBox,
  LuDatabase,
  LuMonitor,
  LuServer,
  LuSparkles,
  LuWorkflow,
} from "react-icons/lu";

const ICONS = {
  client: LuMonitor,
  server: LuServer,
  database: LuDatabase,
  ai: LuSparkles,
  state: LuBox,
  logic: LuWorkflow,
};

// High-level system design: tiers of components laid out left-to-right
// (top-to-bottom on mobile), with a labelled connector between each tier.
const SystemDiagram = ({ title, architecture }) => {
  const { summary, tiers, links } = architecture;

  return (
    <figure aria-label={`System design for ${title}`}>
      <figcaption className="mb-5">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-500">
          How it works
        </p>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-neutral-400">{summary}</p>
      </figcaption>

      <div className="flex flex-col gap-2 md:flex-row md:items-stretch">
        {tiers.map((tier, i) => (
          <Fragment key={tier.label}>
            <div className="flex flex-1 flex-col">
              <p className="mb-2 font-mono text-xs text-neutral-500">{tier.label}</p>
              <ul className="flex flex-1 flex-col gap-2">
                {tier.nodes.map(({ name, detail, icon }) => {
                  const Icon = ICONS[icon];
                  return (
                    <li
                      key={name}
                      className="flex flex-1 items-center gap-3 rounded-lg border border-white/10 bg-neutral-950/60 p-3"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-accent-soft text-accent">
                        <Icon aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block text-sm font-medium text-neutral-100">{name}</span>
                        <span className="block text-xs text-neutral-500">{detail}</span>
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {i < links.length && (
              <div className="flex items-center justify-center gap-2 py-1 text-neutral-500 md:flex-col md:px-1 md:pt-6">
                <LuArrowUpDown aria-hidden="true" className="md:hidden" />
                <LuArrowLeftRight aria-hidden="true" className="hidden md:block" />
                <span className="whitespace-nowrap font-mono text-xs">
                  <span className="sr-only">connected via </span>
                  {links[i]}
                </span>
              </div>
            )}
          </Fragment>
        ))}
      </div>
    </figure>
  );
};

export default SystemDiagram;
