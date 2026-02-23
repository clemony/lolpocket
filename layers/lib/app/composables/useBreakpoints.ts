import { breakpointsTailwind } from "@vueuse/core"

export const breakpoints = useBreakpoints({
  desktop: 1024,
  tablet: 640,
})

export const twBreakpoints = useBreakpoints(breakpointsTailwind, {})

export const smAndLarger = twBreakpoints.greaterOrEqual("sm") // sm and larger
export const largerThanSm = twBreakpoints.greater("sm") // only larger than sm
export const lgAndLarger = twBreakpoints.greaterOrEqual("lg") // lg and smaller
export const smallerThanLg = twBreakpoints.smaller("lg") // only smaller than lg
