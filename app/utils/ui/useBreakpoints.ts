export function useBreakpoint(breakpoint) {
  const breakpoints = useBreakpoints({
    x0: 0, // optional
    x640: 640,
    x1024: 1024,
    x1280: 1280,
  })

  // Can be 'mobile' or 'tablet' or 'laptop' or 'desktop'
  const activeBreakpoint = breakpoints.active()

  const greaterOrEqual = breakpoints.greaterOrEqual(breakpoint)
  const greaterThan = breakpoints.greater(breakpoint)
  const lessOrEqual = breakpoints.smallerOrEqual(breakpoint)
  const lessThan = breakpoints.smaller(breakpoint)

  return {
    activeBreakpoint,
    greaterOrEqual,
    greaterThan,
    lessOrEqual,
    lessThan,
  }
}
