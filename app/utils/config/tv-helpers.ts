import type { tv, VariantProps } from 'tailwind-variants'

/**
 * Wrapper for tailwind-variants that preserves full typing in Vue.
 */
export function defineTv<T extends ReturnType<typeof tv>>(variants: T) {
  return variants
}

/**
 * Helper to extract variant props cleanly.
 */
export type TvProps<T extends ReturnType<typeof tv>> = VariantProps<T>