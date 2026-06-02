<script lang="ts" setup>
const { id, class: className } = defineProps<{
  class?: HTMLAttributes['class']
  id: number
}>()
</script>

<template>
  <div
    :class="
      cn(
        'relative grid size-7 place-items-center',
        { 'translate-y-0.75': id <= 0 },
        className,
      )
    ">
    <Champion
      v-if="id > 0"
      :id
      class="z-1 size-9 rounded-full object-contain opacity-80 ring-pc/60 brightness-110 contrast-120 grayscale transition-all duration-200 hover:scale-105 hover:opacity-100 hover:ring hover:brightness-100 hover:contrast-100 hover:grayscale-0"
      variant="btn" />
    <Icon
      v-else
      class="pointer-events-none absolute size-6 place-self-center opacity-40"
      name="lol:champ" />
  </div>
</template>
