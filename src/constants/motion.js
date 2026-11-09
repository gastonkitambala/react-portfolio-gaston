// One easing curve for every entrance and transition on the site.
export const EASE = [0.22, 1, 0.36, 1];

// Short, subtle fade-up used by every section. Respects reduced motion via
// the <MotionConfig reducedMotion="user"> in App.
export const reveal = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.4, ease: EASE },
};
