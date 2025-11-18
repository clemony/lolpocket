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
  if (summoner)
    return summoner.name
  if (as()?.user)
    return (as()?.account?.name || as()?.account?.username) ?? 'Summoner'

  else return null
})
</script>

<template>
  <Primitive
    v-if="name"
    :as="el"
    :class="cn('truncate align-baseline', className)">
    {{ name ?? null }}
  </Primitive>
</template>

<style scoped></style>
