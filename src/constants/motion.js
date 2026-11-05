// Short, subtle fade-up used by every section. Respects reduced motion via
// the <MotionConfig reducedMotion="user"> in App.
export const reveal = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.4, ease: "easeOut" },
};
