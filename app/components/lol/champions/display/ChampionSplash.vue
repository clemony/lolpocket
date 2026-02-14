<script setup lang="ts">
import { getSplash } from "~/domain/utils/img"

const {
  id,
  class: className,
  k,
  ratio,
  src,
  type,
} = defineProps<{
  k?: string
  id?: number
  ratio?: number
  src?: string
  type?: SplashType
  class?: HTMLAttributes["class"]
}>()
const splashKey = computed<string | number | null>(() => k ?? id ?? null)
const splashType = computed<SplashType>(() => type ?? "centered")
const splashSrc = computed(
  () =>
    src ||
    (splashKey.value ? getSplash(splashKey.value, splashType.value) : undefined)
)

const lower = [
  "Seraphine",
  "Sett",
  "Illaoi",
  "Irelia",
  "Yuumi",
  "Senna",
  "Taric",
  "Morgana",
  "Mordekaiser",
  "Darius",
  "Ryze",
]
const mid = ["Fiora", "Fizz", "Lilia", "Nami", "DrMundo"]
const left = ["Ivern", "Riven", "Ryze", "Hwei", "", ""]
const out = [
  "Yuumi",
  "KogMaw",
  "Mordekaiser",
  "TahmKench",
  "Zac",
  "Kindred",
  "Yorick",
  "Zed",
  "Alistar",
  "Xayah",
  "Malzahar",
  "Anivia",
  "Aatrox",
  "Evelynn",
  "Fiddlesticks",
  "Ivern",
  "Yone",
]

const key = computed(() => k ?? (id != null ? String(id) : ""))
const y = computed(() =>
  key.value && lower.includes(key.value)
    ? `30%`
    : key.value && mid.includes(key.value)
      ? "20%"
      : "40%"
)
/* , {'translate-y-10': } */
const x = computed(() =>
  key.value && left.includes(key.value) ? "70%" : "50%"
)
</script>

<template>
  <Img
    :src="splashSrc"
    :ratio
    :class="
      cn(
        'overflow-hidden rounded-lg object-cover shadow-sm drop-shadow-sm select-none',
        className
      )
    "
    :alt="`${k}-Splash`" />
</template>
