import type { SpringOptions } from "motion-v"
import type { InjectionKey, Ref } from "vue"
import { inject, provide } from "vue"

type ProfileScrollBody = Readonly<Ref<HTMLElement | null>>

const ProfileScrollBodyKey: InjectionKey<ProfileScrollBody> =
  Symbol("ProfileScrollBody")

export function provideProfileScrollBody(body: ProfileScrollBody) {
  provide(ProfileScrollBodyKey, body)
}

export function useProfileScrollBody() {
  return inject(ProfileScrollBodyKey, null)
}

export const useProfileScroll = (container: Ref<HTMLElement | null>) => {
  const { scrollY } = useScroll({
    container,
    offset: ["start end", "end end"],
  })

  const scrollProgress = useSpring(scrollY, {
    skipInitialAnimation: true,
    stiffness: 180,
    damping: 30,
    mass: 0.5,
  } as SpringOptions)

  const baseStyle = useTransform(scrollProgress, [0, 162], {
    padding: ["0 10px 0 26px", "0 10px 0 16px"],
  })

  const headerStyle = useTransform(scrollY, [0, 152], {
    height: [216, 62],

    outline: [
      "1px solid  var(--color-p2)",
      "1px solid color-mix( in oklab, var(--color-p0) 80%, transparent 10%)",
    ],
    backgroundColor: [
      "var(--color-p0)",
      "color-mix( in oklab, var(--color-p0) 50%, transparent 50%)",
    ],
  })
  const imageHeight = useTransform(scrollY, [0, 162], [156, 0])

  const avatarSize = ["82px", "42px"]

  const avatarRootStyle = useTransform(scrollY, [0, 162], {
    width: avatarSize,
  })

  const avatarStyle = useTransform(scrollY, [0, 162], {
    transform: ["translateY(-22px)", "translateY(0px)"],
    height: avatarSize,
    width: avatarSize,
  })

  const outlineStyle = useTransform(scrollY, [0, 138, 139], {
    outline: [
      "8px solid color-mix(in oklab, var(--color-p0) 100%, transparent 0%)",
      "8px solid color-mix(in oklab, var(--color-p0) 100%, transparent 0%)",
      "8px solid color-mix(in oklab, var(--color-p0) 0%, transparent 100%)",
    ],
  })

  const pingSize = ["8px", "5px"]
  const pingStyle = useTransform(scrollY, [0, 162], {
    // scale: ["100%", "40% !important"],
    height: pingSize,
    width: pingSize,
    outline: ["3px solid  var(--color-p0)", "2px solid var(--color-p0)"],
    transform: ["translate(-8px, -8px) ", "translate(-4px, -4px)"],
  })

  const headerWrapperStyle = useTransform(scrollY, [0, 162], {
    transform: ["translateY(-6px)", "translateY(0px)"],
  })

  const h1Style = useTransform(scrollY, [0, 162], {
    fontSize: ["3.5rem", "2rem"],
  })

  const badgeStyle = useTransform(scrollY, [0, 162], {
    transform: ["translateY(0px)", "translateY(8px)"],
  })

  return {
    baseStyle,
    headerStyle,
    imageHeight,
    avatarRootStyle,
    avatarStyle,
    outlineStyle,
    pingStyle,
    headerWrapperStyle,
    h1Style,
    badgeStyle,
  }
}
