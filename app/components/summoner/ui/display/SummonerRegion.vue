<script setup lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import { Primitive } from 'reka-ui'

const {
  as: el = 'span',
  class: className,
  noIcon,
  summoner,
} = defineProps<
  PrimitiveProps & {
    class?: HTMLAttributes['class']
    summoner?: Summoner | Partial<Summoner>
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
        'inline lowercase leading-none antialiased',
        className,
      )
    ">
    <icon
      v-show="!noIcon"
      name="at"
      class="dst inline size-3.25 " />
    {{ region }}
  </Primitive>

  <span
    v-else
    :class="cn('', className)">Runeterra</span>
</template>
