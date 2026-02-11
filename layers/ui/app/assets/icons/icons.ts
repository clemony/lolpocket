import img from "./icon-img.json"
import symbols from "./icon-symbols.json"

export const icon = {
  class: "text-[var(--color-pc)] shrink-0 pointer-events-none",
  mode: "svg",
  size: "16px",
  aliases: {
    ...symbols,
    ...img,
  },
}
