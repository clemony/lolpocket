<script lang="ts" setup>
const props = defineProps<{
  title?: string
  slide?: boolean
  expand?: boolean
}>()

const classObject= 'shadow-warm-soft overflow-visible bg-b2/30 drop-shadow-xs border-b3/40 justify-center **:select-none text-2 overflow-visible field grid relative '
</script>

<template>
  <transition-slide v-if="props.slide" group :class="classObject">
    <div class="field-legend capitalize text-bc !overflow-visible">
      {{ props.title }}
      <slot name="title" />
    </div>
    <slot />
  </transition-slide>


  <transition-expand v-else-if="props.expand" group  :class="classObject">
    <div class="field-legend capitalize text-bc !overflow-visible">
      {{ props.title }}
      <slot name="title" />
    </div>
    <slot />
  </transition-expand>

  <div v-else  :class="classObject">
    <div class="field-legend capitalize text-bc !overflow-visible">
      {{ props.title }}
      <slot name="title" />
    </div>
    <slot />
  </div>
</template>

<style scoped>

</style>