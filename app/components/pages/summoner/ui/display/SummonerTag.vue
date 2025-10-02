<script setup lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import { Primitive } from 'reka-ui'

const {
  as: el = 'span',
  class: className,
  noTag,
  summoner
} = defineProps<
  PrimitiveProps & {
    as?: string
    class?: HTMLAttributes['class']
    summoner?: Summoner
    noTag?: boolean
  }
>()

const tag = computed(() => {
  if (summoner?.tag) {
    return summoner.tag
  }
  else {
    return as().account?.tag ?? null
  }
})
</script>

<template>
  <Primitive
    v-if="tag"
    :as="el"
    :class="cn('inline-flex items-center leading-0 antialiased', className)">
    <icon
      v-if="!noTag"
      name="lucide:hash"
      class="size-3.75 inline align-bottom" />
    {{ tag }}
  </Primitive>

  <span
    v-else
    :class="cn('', className)">Disconnected</span>
</template>
