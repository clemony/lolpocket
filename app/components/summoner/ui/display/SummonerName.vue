<script setup lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import { Primitive } from 'reka-ui'

const {
  as: el = 'span',
  class: className,
  summoner,
} = defineProps<
  PrimitiveProps & {
    as?: string
    class?: HTMLAttributes['class']
    summoner?: Summoner | Partial<Summoner>
  }
>()
const name = computed(() => {
  if (!summoner && !as()?.account)
    return null

  if (summoner)
    return summoner.name

  return (as()?.account?.name || as()?.account?.username) ?? 'Summoner'
})
</script>

<template>
  <Primitive
    v-if="name"
    :as="el"
    :class="cn('align-baseline truncate', className)">
    {{ name ?? null }}
  </Primitive>
</template>

<style scoped></style>
