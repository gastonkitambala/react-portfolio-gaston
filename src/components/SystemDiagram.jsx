import { Fragment } from "react";
import {
  LuBox,
  LuCalendar,
  LuDatabase,
  LuFileSpreadsheet,
  LuGlobe,
  LuImage,
  LuLock,
  LuMail,
  LuMonitor,
  LuServer,
  LuWorkflow,
} from "react-icons/lu";

const ICONS = {
  client: LuMonitor,
  server: LuServer,
  database: LuDatabase,
  ai: LuImage,
  state: LuBox,
  logic: LuWorkflow,
  lock: LuLock,
  file: LuFileSpreadsheet,
  mail: LuMail,
  calendar: LuCalendar,
  external: LuGlobe,
};

// Pad + trace + pad, drawn like a PCB track. The accent lives only here, so
// the data flow is the one coloured thing in the diagram.
const Trace = ({ label }) => (
  <div className="flex items-center justify-center gap-3 py-1 md:min-w-28 md:shrink-0 md:flex-col md:gap-2 md:px-2 md:py-0 md:pt-6">
    <span aria-hidden="true" className="flex flex-col items-center md:w-full md:flex-row">
      <span className="h-1.5 w-1.5 shrink-0 rounded-full border border-accent" />
      <span className="h-4 w-px bg-accent/60 md:h-px md:w-auto md:flex-1" />
      <span className="h-1.5 w-1.5 shrink-0 rounded-full border border-accent" />
    </span>
    <span className="whitespace-nowrap font-mono text-xs text-neutral-500">
      <span className="sr-only">connected via </span>
      {label}
    </span>
  </div>
);

// High-level system design: tiers of components laid out left-to-right
// (top-to-bottom on mobile), with a labelled trace between each tier.
const SystemDiagram = ({ title, architecture }) => {
  const { summary, tiers, links } = architecture;

  return (
    <figure aria-label={`System design for ${title}`}>
      <figcaption className="mb-5">
        <p className="font-mono text-xs text-neutral-500">How it works</p>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-neutral-400">{summary}</p>
      </figcaption>

      <div className="flex flex-col gap-2 md:flex-row md:items-stretch md:gap-0">
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
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-white/5 text-neutral-400">
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

            {i < links.length && <Trace label={links[i]} />}
          </Fragment>
        ))}
      </div>
    </figure>
  );
};

export default SystemDiagram;
