<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  pocket: Pocket
  class?: HTMLAttributes['class']
  placeholderClass?: HTMLAttributes['class']
}>()

const pocket = ref(props.pocket)

const set = ref(pocket.value.runes[0])
</script>

<template>
  <template v-if="set && set[0][0] != 'empty'">
    <TextureOutline
      :src="set[0][0]"
      type="keystone"
      class="size-16 bg-b2/30 p-1.5" />
  </template>
  <TextureOutline
    v-else
    type="rune"
    :class="cn('size-16 p-4.5', props.placeholderClass)" />
</template>

<style scoped></style>
