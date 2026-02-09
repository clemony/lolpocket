<script setup lang="ts">
const { class: className, stat: s } = defineProps<{
  class?: HTMLAttributes['class']
  stat: StatIndex | string
}>()

const stat = computed<StatIndex | undefined>(() =>
  typeof s !== 'string' ? s : statIndex[s]
)
</script>

<template>
  <Icon
    v-if="stat?.icon"
    :name="stat.icon"
    :class="
      cn(
        'size-4 shrink-0 text-shadow-xs',
        {
          'scale-115': ['manaRegen', 'healthRegen', 'goldPer10'].includes(
            stat?.id,
          ),
          'mt-px scale-94': ['armor', 'movespeed'].includes(stat?.id),
          'mt-px scale-90': stat.id === 'health',
        },
        className,
      )
    " />
</template>
