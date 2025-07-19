<script setup lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import { Primitive } from 'reka-ui'

const { id, alt, class: className, as = 'div' } = defineProps<PrimitiveProps & {
  id: number
  alt?: string
  class?: HTMLAttributes['class']
  as?: string
}>()
</script>

<template>
  <Primitive :as="as" :class="cn('overflow-hidden size-16  shadow-sm drop-shadow-sm', className)">
    <Img :quality="100" :img="`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/${id}.png`" :alt="alt || `Champion ${id} icon`" class="scale-118 size-full" />

    <slot />
  </Primitive>
</template>
