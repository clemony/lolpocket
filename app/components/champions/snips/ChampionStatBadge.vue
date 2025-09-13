<script setup lang="ts">
import { statIndex } from '#shared/appdata'

const { class: className, stat: st, value } = defineProps<{
  class?: HTMLAttributes['class']
  stat: string
  value: Record<string, number>
}>()

const stat = computed (() => statIndex.find(s => s.id === st) || null)
</script>

<template>
  <Button
    v-tippy="{ content: value.min != value.max ? `${value.min} -> ${value.max}` : null, placement: 'right', theme: 'basic', arrow: false }"
    class="!gap-4 px-4"
    variant="ghost"
    hover="ghost">
    <component
      :is="stat.icon"
      :class="cn('!size-4 shrink-0 dst', { 'scale-120': ['manaRegen', 'healthRegen'].includes(stat.id) })" />
    <span class="grow text-start">{{ stat.name }}</span>

    <h5
      class="font-medium  text-bc/80">
      {{ value.current }}
    </h5>
  </Button>
</template>