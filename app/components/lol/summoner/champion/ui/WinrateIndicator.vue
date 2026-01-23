<script lang="ts" setup>
const { class: className, value } = defineProps<{
  class?: HTMLAttributes['class']
  value: number
}>()
</script>

<template>
  <span

    class="bg-b1 absolute -top-1.75 -right-1.75 grid size-5.75 place-items-center rounded-full">
    <Icon
      name="tabler:circle-filled"
      :class="cn('dss size-4', { 'text-challenger brightness-95': value >= 51, 'text-domination ': value <= 49, 'text-bc/20': value < 51 && value > 49 })" />
  </span>
</template>