import type { ProgressProps } from "@nuxt/ui"

export interface BarStat {
  color: ProgressProps["color"]
  class?: string
  max: number
  tip: string
  value: number
  icon: {
    name: string
    class?: string
  }
}
