<script lang="ts" setup>
const { label, isTrue } = defineProps<{
  label: string | number
  isTrue: boolean | undefined
}>()
</script>

<template>
  <UBadge
    size="xs"
    :color="isTrue ? 'neutral' : 'primary'"
    :label
    :ui="{
      base: 'h-4.25! rounded-[0.44rem] px-1.5',
      label: cn('text-xs font-semibold', {
        'text-pc/80': isTrue
      })
    }" />
</template>
