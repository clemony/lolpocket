<script setup lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import { Primitive } from 'reka-ui'

const {
  class: className,
  summoner,
  as: el = 'span',
  noIcon,
} = defineProps<
  PrimitiveProps & {
    class?: HTMLAttributes['class']
    summoner?: Summoner
    noIcon?: boolean
    as?: string
  }
>()

const region = computed(() => {
  if (!summoner && !as()?.account)
    return null

  if (summoner?.region) {
    return summoner.region
  }
  else {
    return as()?.account?.region ?? null
  }
})
</script>

<template>
  <Primitive
    v-if="region"
    :as="el"
    :class="
      cn(
        'flex items-center lowercase leading-0 antialiased gap-[2px]',
        className,
      )
    ">
    <icon
      v-show="!noIcon"
      name="at"
      class="size-3.25 dst" />
    {{ region }}
  </Primitive>

  <span
    v-else
    :class="cn('', className)">Runeterra</span>
</template>
