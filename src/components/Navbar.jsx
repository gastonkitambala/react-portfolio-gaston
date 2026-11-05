import { useEffect, useState } from "react";
import { LuDownload, LuMenu, LuX } from "react-icons/lu";
import logo from "../assets/gik.png";
import { NAV_LINKS, RESUME_URL } from "../constants";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-200 ${
        scrolled || open
          ? "border-b border-white/5 bg-neutral-950/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        <a href="#top" className="flex items-center" aria-label="Back to top">
          <img className="h-10 w-10" src={logo} alt="" width={40} height={40} />
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="inline-flex min-h-11 items-center rounded-md px-3 text-sm text-neutral-400 transition-colors duration-200 hover:text-neutral-50"
              >
                {label}
              </a>
            </li>
          ))}
          <li className="ml-3">
            <a href={RESUME_URL} download className="btn-secondary min-h-9 px-4">
              <LuDownload aria-hidden="true" />
              Download CV
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="icon-link md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <LuX aria-hidden="true" /> : <LuMenu aria-hidden="true" />}
        </button>
      </nav>

      {open && (
        <ul id="mobile-menu" className="space-y-1 px-5 pb-5 md:hidden">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => setOpen(false)}
                className="flex min-h-11 items-center rounded-md px-3 text-neutral-300 hover:bg-white/5 hover:text-neutral-50"
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={RESUME_URL}
              download
              onClick={() => setOpen(false)}
              className="flex min-h-11 items-center gap-2 rounded-md px-3 text-accent hover:bg-white/5"
            >
              <LuDownload aria-hidden="true" />
              Download CV
            </a>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Navbar;
