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
    summoner?: Summoner
    as?: string
  }
>()

const levelVariants = tv({
  base: 'flex items-center lowercase leading-0 antialiased',
  variants: {
    variant: {
      badge: 'badge badge-sm badge-neutral text-0 bg-neutral/75 backdrop-blur bottom-0.5'
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
