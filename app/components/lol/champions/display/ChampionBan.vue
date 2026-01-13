<script lang="ts" setup>
const { id, class: className } = defineProps<{
  class?: HTMLAttributes['class']
  id: number
}>()
</script>

<template>
  <div
    :class="cn('relative grid size-7 place-items-center', className)">
    <div class="absolute grid size-9 place-items-center rounded-full bg-tint-b2/40">
      <ChampionIcon
        :id
        :class="cn('z-1 size-7 rounded-full object-contain opacity-70 ring-bc/60 brightness-110 contrast-120 grayscale transition-all duration-200 hover:scale-105 hover:opacity-100 hover:ring hover:brightness-100 hover:contrast-100 hover:grayscale-0', { 'pointer-events-none  *:opacity-100 brightness-0 contrast-0': !id || id <= 0 })" />
      <!--     <Icon
        v-if="id && id > 0"
        name="slash"
        class="absolute z-3 size-10 -scale-x-100 -rotate-30 opacity-65 **:stroke-[2.3] **:text-tint-b2/40" /> -->
    </div>
  </div>
</template>