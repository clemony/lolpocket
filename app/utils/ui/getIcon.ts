export function getIcon(icon: IconObject | ComputedRef<IconObject> | undefined) {
  return icon ? unref(icon) : undefined
}