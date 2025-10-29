<script setup lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { VariantProps } from 'tailwind-variants'
import { Primitive } from 'reka-ui'
import { tv } from 'tailwind-variants'

const {
  as: el = 'span',
  class: className,
  noTag,
  summoner,
} = defineProps<
  PrimitiveProps & {
    class?: HTMLAttributes['class']
    noTag?: boolean
    variant?: LevelVariantProps['variant']
    summoner?: Summoner | Partial<Summoner>
    as?: string
  }
>()

const levelVariants = tv({
  base: 'inline leading-none lowercase antialiased',
  variants: {
    variant: {
      badge: 'badge badge-sm badge-neutral text-0 bg-neutral/75 bottom-0.5 backdrop-blur'
    }
  },
})

type LevelVariantProps = VariantProps<typeof levelVariants>
const summonerLevel = computed(() => {
  if (summoner) {
    return summoner.level
  }
  else {
    return as().account.level
  }
})
</script>

<template>
  <Primitive
    :as="el"
    :class="cn(levelVariants({ variant }), className)">
    {{ !noTag ? "lv. " : null }}{{ summonerLevel || "0" || "" }}
  </Primitive>
</template>

<style scoped></style>
