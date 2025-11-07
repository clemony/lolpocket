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
    summoner?: Summoner | Partial<Summoner>
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
    :class="cn('inline leading-none antialiased', className)">
    <span class="max-size-3.25  relative inline size-3.25 overflow-hidden">
      <icon
        v-if="!noTag"
        name="lucide:hash"
        class="inline size-3.5" />
    </span>
    {{ tag }}
  </Primitive>

  <span
    v-else
    :class="cn('', className)">Disconnected</span>
</template>
