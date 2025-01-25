<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  pocket: pocket
  class?: HTMLAttributes['class']
  imgClass?: HTMLAttributes['class']
  iconClass?: HTMLAttributes['class']
}>()

const pocket = ref(props.pocket)

const regex = /\.webp/g
const iconImg = computed(() => {
  const match = !!pocket.value.icon.match(regex)
  return match
})
</script>

<template>
  <div
    v-if="pocket"
    :class="cn('shadow-warm pointer-events-none relative grid size-12 shrink-0 place-items-center transition-all duration-300', props.class)"
  >
    <div
      v-if="iconImg"
      class="grid size-full place-items-center overflow-hidden rounded-full"
    >
      <img
        :src="pocket.icon"
        :class="cn('scale-[115%]', props.imgClass)"
      />
    </div>

    <div
      v-else
      class="grid size-full place-items-center"
      :style="{
        background: pocket.bgColor,
        color: pocket.iconColor,
      }"
    >
      <icon
        :name="pocket.icon"
        :class="cn('p-1.25 size-full', props.iconClass)"
      />
    </div>
  </div>
</template>

<style scoped></style>
