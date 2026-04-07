export function winrateColor(value: number) {
  return value >= 51 ? "insp" : value >= 50 ? "sorc" : value < 50 ? "dom" : "p3"
}

export function borderColorWinrate(value: number) {
  return value >= 51
    ? "border-insp"
    : value >= 50
      ? "border-sorc"
      : value < 50
        ? "border-dom"
        : "border-p3"
}

export function outlineColorWinrate(value: number) {
  return value >= 51
    ? "outline-insp"
    : value >= 50
      ? "outline-sorc"
      : value < 50
        ? "outline-dom"
        : "outline-p3"
}

export const tierText: Record<string, string> = {
  "LP+": "text-lp",
  S: "text-g",
  A: "text-mr",
  B: "text-platinum",
  C: "text-tiny-carrot",
  D: "text-dom"
}

export const tierBg: Record<string, string> = {
  "LP+": "bg-lp",
  S: "bg-g",
  A: "bg-sorc",
  B: "bg-win",
  C: "bg-silver",
  D: "bg-bronze"
}

export const twText: Record<string, string> = {
  p0: "text-p0",
  p1: "text-p1",
  p2: "text-p4",
  p3: "text-p3",
  p4: "text-p4",
  insp: "text-insp-500",
  sorc: "text-sorc-500",
  pre: "text-pre-500",
  res: "text-res-500",
  dom: "text-dom",
  onhit: "text-onhit",
  primary: "text-n5"
}

export const twBg: Record<string, string> = {
  p0: "bg-p0",
  p1: "bg-p1",
  p2: "bg-p4",
  p3: "bg-p3",
  p4: "bg-p4",
  primary: "bg-p5",
  insp: "bg-insp",
  sorc: "bg-sorc",
  pre: "bg-pre",
  res: "bg-res",
  dom: "bg-dom",
  shadow: "bg-n2",
  encore: "bg-encore",
  contaminate: "bg-contaminate",
  diminuendo: "bg-(--color-insp)!",
  spark: "bg-spark",
  flow: "bg-flow",
  whimsy: "bg-whimsy",
  cask: "bg-cask",
  onslaught: "bg-onslaught",
  legends: "bg-legends"
}

export const twBorder: Record<string, string> = {
  p0: "border-p0",
  p1: "border-p1",
  p2: "border-p4",
  p3: "border-p3",
  p4: "border-p4",
  primary: "border-p5",
  insp: "border-insp",
  sorc: "border-sorc",
  pre: "border-pre",
  res: "border-res",
  dom: "border-dom"
}

export const twRing: Record<string, string> = {
  p0: "ring-p0",
  p1: "ring-p1",
  p2: "ring-p4",
  p3: "ring-p3",
  p4: "ring-p4",
  insp: "ring-insp",
  sorc: "ring-sorc",
  pre: "ring-pre",
  res: "ring-res",
  dom: "ring-dom",
  primary: "ring-",
  "primary-500": "ring-n5",
  "insp-500": "ring-insp-500",
  "sorc-500": "ring-sorc-500",
  "pre-500": "ring-pre-500",
  "res-500": "ring-res-500",
  "dom-500": "ring-dom-500",
  "primary-200": "ring-np",
  "insp-200": "ring-insp-200",
  "sorc-200": "ring-sorc-200",
  "pre-200": "ring-pre-200",
  "res-200": "ring-res-200",
  "dom-200": "ring-dom-200"
}

export const twRingOffset: Record<string, string> = {
  p0: "ring-offset-p0",
  p1: "ring-offset-p1",
  p2: "ring-offset-p4",
  p3: "ring-offset-p3",
  p4: "ring-offset-p4",
  primary: "ring-offset-p5",
  insp: "ring-offset-insp",
  sorc: "ring-offset-sorc",
  pre: "ring-offset-pre",
  res: "ring-offset-res",
  dom: "ring-offset-dom",
  "primary-50": "ring-offset-p1",
  "insp-50": "ring-offset-insp-50",
  "sorc-50": "ring-offset-sorc-50",
  "pre-50": "ring-offset-pre-50",
  "res-50": "ring-offset-res-50",
  "dom-50": "ring-offset-dom-50"
}

export const twDropShadow: Record<string, string> = {
  insp: "drop-shadow-(--color-insp-700)",
  sorc: "drop-shadow-(--color-sorc-700)",
  pre: "drop-shadow-(--color-pre-700)",
  res: "drop-shadow-(--color-res-700)",
  dom: "drop-shadow-(--color-dom-700)"
}
