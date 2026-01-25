export const floatingShiftSubtle = `
  opacity-0
  transition-[opacity,transform]

  data-[state=delayed-open]:opacity-100
  data-[state=open]:opacity-100
  data-[state=closed]:opacity-0

  data-[side=top]:-translate-y-5
  data-[side=bottom]:translate-y-5
  data-[side=left]:-translate-x-5
  data-[side=right]:translate-x-5

  data-[state=delayed-open]:translate-x-0
  data-[state=delayed-open]:translate-y-0
  data-[state=open]:translate-x-0
  data-[state=open]:translate-y-0

  data-[state=delayed-open]:duration-150
  data-[state=delayed-open]:ease-[cubic-bezier(.16,1,.3,1)]

  data-[state=open]:duration-150
  data-[state=open]:ease-[cubic-bezier(.16,1,.3,1)]

  data-[state=closed]:duration-75
  data-[state=closed]:ease-in
`
