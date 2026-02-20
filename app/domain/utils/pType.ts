export function pType(pocket: Pocket | string) {
  if (typeof pocket === "string") return usePockets().getPocket(pocket)
  else return pocket as unknown as Pocket
}
