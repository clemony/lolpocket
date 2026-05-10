// Updated Patch 16.9 - 05/08/2026 03:28:22 PM CDT
import type { Path } from '#shared/types'

export const pathIndex: Record<number, Path> = {
  8000: {
    id: 8000,
    name: "Precision",
    tooltip: "Improved attacks and sustained damage",
    icon: "i-rune-8000",
    color: "pre"
  },
  8100: {
    id: 8100,
    name: "Domination",
    tooltip: "Burst damage and target access ",
    icon: "i-rune-8100",
    color: "dom"
  },
  8200: {
    id: 8200,
    name: "Sorcery",
    tooltip: "Empowered abilities and resource manipulation",
    icon: "i-rune-8200",
    color: "sorc"
  },
  8300: {
    id: 8300,
    name: "Inspiration",
    tooltip: "Creative tools and rule bending ",
    icon: "i-rune-8300",
    color: "res"
  },
  8400: {
    id: 8400,
    name: "Resolve",
    tooltip: "Durability and crowd control",
    icon: "i-rune-8400",
    color: "insp"
  }
}