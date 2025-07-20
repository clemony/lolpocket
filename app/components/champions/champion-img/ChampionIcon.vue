<script setup lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import { Primitive } from 'reka-ui'

const { id, alt, class: className, as = 'div' } = defineProps<PrimitiveProps & {
  id: number
  alt?: string
  class?: HTMLAttributes['class']
  as?: string
}>()

const loaded = ref(false)
</script>

<template>
  <Primitive :as="as" :class="cn('overflow-hidden bg-b2/40 size-16 grid place-items-center  relative shadow-sm drop-shadow-sm', className)">
    <Img :quality="100" :img="`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/${id}.png`" :alt="alt || `Champion ${id} icon`"  :class="cn('scale-118 size-full absolute object-center opacity-0 transition-opacity duration-300', {'opacity-100': loaded})" @load="loaded = true"/>
<icon v-if="!loaded" name="svg-spinners:3-dots-fade" class="absolute opacity-80" />
    <slot />
  </Primitive>
</template>
