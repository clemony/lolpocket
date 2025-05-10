<script setup lang="ts">

const {name, champKey, class: className} = defineProps<{
  name: string
  champKey?: string
  class?: HTMLAttributes['class']
}>()
/*
      v-tippy="{content: `${champion.name}`, hideOnClick: true,   delay: [100, 0]}" */

const trigger = ref(null)
const isHovered = useElementHover(trigger)
</script>

<template>
  <label
    :class=" cn('shadow-sm overflow-hidden drop-shadow-sm relative rounded-lg **:select-none p-0',className)">
      <slot />

      <Img
        :key="name"
:quality="100"
        :img="`/img/champion/${champKey}.webp`"
        :alt="`${name} Image`"
        class="size-full scale-115" />

      <PrismaticShine v-if=" isHovered"  class="absolute scale-107 top-0 left-0 z-1" />
  
  </label>
</template>

<style scoped></style>
