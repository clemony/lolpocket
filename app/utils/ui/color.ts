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
  insp: "text-insp",
  sorc: "text-sorc",
  pre: "text-pre",
  res: "text-res",
  dom: "text-dom"
}

export const twBg: Record<string, string> = {
  p0: "bg-p0",
  p1: "bg-p1",
  p2: "bg-p4",
  p3: "bg-p3",
  p4: "bg-p4",
  insp: "bg-insp",
  sorc: "bg-sorc",
  pre: "bg-pre",
  res: "bg-res",
  dom: "bg-dom"
}
