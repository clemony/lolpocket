<script lang="ts" setup>
const { active, className } = defineProps<{
  active?: boolean
  className?: HTMLAttributes["class"]
}>()
</script>

<template>
  <Icon
    :class="cn('size-4', active ? '[&_circle]:hidden' : '', className)"
    name="i-radio" />
</template>
