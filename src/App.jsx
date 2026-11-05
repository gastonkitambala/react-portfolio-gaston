import { MotionConfig } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";

const App = () => {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-dvh bg-neutral-950 font-sans text-neutral-300 antialiased selection:bg-accent selection:text-neutral-950">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-neutral-50 focus:px-4 focus:py-2 focus:text-neutral-950"
        >
          Skip to content
        </a>
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 -z-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(52,211,153,0.10),transparent)]"
        />
        <Navbar />
        <main id="main" className="relative mx-auto max-w-6xl px-5 sm:px-8">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Technologies />
          <Education />
          <Contact />
        </main>
      </div>
    </MotionConfig>
  );
};

export default App;
