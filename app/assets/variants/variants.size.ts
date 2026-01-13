const STEP = 0.25
const MAX = 16

function range(step: number, max: number) {
  const out: number[] = []
  for (let v = step; v <= max; v += step) out.push(+v.toFixed(2))
  return out
}

const sizes = range(STEP, MAX)

const gc =
  "relative grid aspect-square place-items-center p-0 shrink-0 *:absolute"

const sv: Record<string, string[]> = {
  px: [gc, "size-px text-2"],
}

export const heightVariants: Record<string, string> = {}

for (const h of range(STEP, MAX)) {
  heightVariants[h] = `h-${h} ${h <= 7 ? "rounded-md" : "rounded-lg"}`
}

for (const s of sizes) {
  sv[s] = [gc, `size-${s} text-2`]
}

export const sizeVariants: Record<string, any> = {
  ...heightVariants,
  auto: "h-max w-full rounded-lg",
  fit: "w-fit h-fit rounded-lg",
  max: "w-max h-fit rounded-lg",
  none: "",
}

for (const s of sizes) {
  sizeVariants[`sq-${s}`] = [sv[s], s < 9 ? "rounded-md" : "rounded-lg"]
  sizeVariants[`c-${s}`] = [sv[s], "rounded-full"]
}

Object.assign(sizeVariants, {
  sq: [gc, "rounded-lg"],
  c: [gc, "rounded-full"],

  icon: "grid aspect-square relative place-items-center size-4.5 *:absolute",
  "icon-sm": "grid aspect-square relative place-items-center size-4 *:absolute",
})
