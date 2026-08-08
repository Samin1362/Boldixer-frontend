/**
 * Hairline reading-progress rail pinned to the top of the viewport.
 *
 * Entirely CSS — see the `scroll-progress` utility in globals.css, which drives
 * it off a scroll-linked animation timeline. No scroll listener, no state, no
 * client bundle. Hidden where `animation-timeline` is unsupported and under
 * reduced motion.
 */
export function ScrollProgress() {
  return (
    <div
      aria-hidden="true"
      className="scroll-progress bg-brand pointer-events-none fixed inset-x-0 top-0 z-120 h-[3px]"
    />
  );
}
