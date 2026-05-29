export function updatePocketLocation(pocketKey: string, newLocation: string) {
  const { pockets } = storeToRefs(pocketStore())
  if (!pockets.value) return
  pockets.value = pockets.value.map((p) =>
    p.key === pocketKey ? { ...p, location: newLocation } : p
  )
}
