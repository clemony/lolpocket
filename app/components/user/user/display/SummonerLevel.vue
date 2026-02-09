<script setup lang="ts">
import type { PrimitiveProps } from "reka-ui"
import { Primitive } from "reka-ui"
import type { VariantProps } from "tailwind-variants"
import { tv } from "tailwind-variants"

const {
  as: el = "span",
  class: className,
  noTag,
  summoner,
} = defineProps<
  PrimitiveProps & {
    class?: HTMLAttributes["class"]
    noTag?: boolean
    variant?: LevelVariantProps["variant"]
    summoner?: Summoner | Partial<Summoner>
    as?: string
  }
>()

const levelVariants = tv({
  variants: {
    variant: {
      badge:
        "bottom-0.5 badge badge-neutral bg-neutral/75 badge-sm text-2xs backdrop-blur-sm",
    },
  },
  base: "inline leading-none lowercase antialiased",
})

type LevelVariantProps = VariantProps<typeof levelVariants>
const summonerLevel = computed(() => {
  if (summoner) {
    return summoner.level
  } else {
    return as().account?.level ?? 0
  }
})
</script>

<template>
  <Primitive :as="el" :class="cn(levelVariants({ variant }), className)">
    {{ !noTag ? "lv. " : null }}{{ summonerLevel || "0" || "" }}
  </Primitive>
</template>
