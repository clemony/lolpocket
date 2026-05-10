import type { CSSProperties } from "vue"

export function svgMaskStyle(
  svg: string,
  options?: { inverted?: boolean; maskSize?: number }
): CSSProperties {
  const svgMask = `url("data:image/svg+xml,${encodeURIComponent(svg)}") center / ${
    options?.maskSize ? `${options?.maskSize}%` : "86%"
  } no-repeat`

  if (options?.inverted) {
    return {
      mask: `linear-gradient(#fff 0 0), ${svgMask}`,
      maskComposite: "exclude",
      WebkitMask: `linear-gradient(#fff 0 0), ${svgMask}`,
      WebkitMaskComposite: "xor"
    }
  }

  return {
    mask: svgMask,
    WebkitMask: svgMask
  }
}
