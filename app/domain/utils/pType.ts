export function pType(pocket: Pocket | string) {
  if (typeof pocket === "string") {
    const store = pocketStore()
    return computed(() => store.getPocket(pocket))
  } else return pocket as unknown as Pocket
}
