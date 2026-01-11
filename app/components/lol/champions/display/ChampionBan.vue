<script lang="ts" setup>
const { id, class: className } = defineProps<{
  class?: HTMLAttributes['class']
  id: number
}>()
</script>

<template>
  <div
    :class="cn('relative grid size-7 place-items-center', className)">
    <ChampionIcon
      :id
      :data-id="id"
      data-tip="id"
      :class="cn('z-0 size-full rounded-full object-contain opacity-70 brightness-110 contrast-120 grayscale', { '  *:opacity-100 brightness-0 contrast-0': !id || id <= 0 })" />
    <Icon
      v-if="id && id > 0"
      name="slash"
      class="absolute z-3 size-10 -scale-x-100 -rotate-30 opacity-65 **:stroke-[2.3] **:text-tint-b2/40" />
  </div>
</template>