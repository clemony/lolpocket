<script lang="ts" setup>
const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
  role: string
}>()
</script>

<template>
  <component
    :is="`i-roles-${role}`"
    v-if="role"
    :class="cn('size-4 ml-auto mr-1', className)" />
</template>