export function ckey(keyOrId: string | number): string {
  const key = ref<string>()

  if (typeof keyOrId === "number") key.value = champKeyById(keyOrId)
  else key.value = keyOrId

  return key.value
}
