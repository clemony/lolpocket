<script setup lang="ts">
const { class: className, stat: s } = defineProps<{
  class?: HTMLAttributes['class']
  stat: StatIndex | string
}>()

const stat = computed<StatIndex>(() =>
  typeof s !== 'string' ? s : statIndex[s],
)
</script>

<template>
  <Icon
    v-if="stat"
    :name="stat.icon"
    :class="
      cn(
        'size-4 shrink-0 text-shadow-xs',
        {
          'scale-115': ['manaRegen', 'healthRegen', 'goldPer10'].includes(
            stat?.id,
          ),
          'scale-94 mt-px': ['armor', 'movespeed'].includes(stat?.id),
          'scale-90 mt-px': stat.id === 'health',
        },
        className,
      )
    " />
</template>
