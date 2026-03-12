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
