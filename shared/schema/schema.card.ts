import * as v from "valibot"

// Card
export const cardSchema = v.nullable(
  v.object({
    key: v.string(),
    champion: v.string(),
    items: MinMaxArray(v.fallback(v.array(itemSetSchema), []), 0, 4),
    runes: runeSetSchema,

    color: v.fallback(v.string(), "#FFFFFF"),
    // Style
    align: v.nullable(v.string()),
    filter: v.fallback(
      v.union([v.literal("color"), v.literal("grayscale")]),
      "grayscale"
    ),
    font: v.strictTuple([
      v.fallback(v.string(), "var(--font-serif)"),
      v.fallback(v.string(), "var(--font-sans)")
    ]),
    splash: v.nullable(v.string())
  })
)

export type Card = v.InferOutput<typeof cardSchema>
