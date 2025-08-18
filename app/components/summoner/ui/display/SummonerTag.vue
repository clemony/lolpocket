<script setup lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import { Primitive } from 'reka-ui'

const { class: className, summoner, as = 'span' } = defineProps<PrimitiveProps & {
  as?: string
  class?: HTMLAttributes['class']
  summoner?: Summoner
}>()

const tag = computed (() => {
  if (summoner?.tag) {
    return summoner.tag
  }

  else {
    const as = useAccountStore()
    return as.userAccount?.riot.tag ?? null
  }
})
</script>

<template>
  <Primitive
    v-if="tag"
    :as="as"
    :class="cn('inline-flex items-center leading-0 antialiased', className)">
    <icon
      name="lucide:hash"
      class="size-3.75 inline align-bottom" />
    {{ tag }}
  </Primitive>

  <span
    v-else
    :class="cn('', className)">
    Disconnected
  </span>
</template>
