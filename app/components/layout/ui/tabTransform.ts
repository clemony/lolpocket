import type { MotionValue } from "motion-v"

export function tabTransform(scrollY: MotionValue<number>) {
  // Smooth sticky state (0 → not sticky, 1 → sticky)
  const stickyRaw: MotionValue<number> = useMotionValue(0)
  const sticky = useSpring(stickyRaw, {
    damping: 18,
    mass: 0.7,
    stiffness: 180,
  })

  useMotionValueEvent(scrollY, "change", (latest) => {
    stickyRaw.set(latest > 220 ? 1 : 0)
  })

  // Individual tab transforms
  const tabPaddingX = useTransform(sticky, [0, 1], ["3rem", "3rem"])

  // Nav container transforms
  const gap = useTransform(sticky, [0, 1], ["0.5rem", "0rem"])
  const translateY = useTransform(sticky, [0, 1], ["-6%", "-13%"])
  const translateX = useTransform(sticky, [0, 1], ["0%", "-0%"])
  const opacity = useTransform(sticky, [0, 1], ["1", "0.95"])

  return {
    sticky,
    stickyRaw,
    style: { gap, opacity, translateX },
    tabPaddingX,
    translateY,
  }
}
