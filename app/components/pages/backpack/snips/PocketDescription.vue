<script lang="ts" setup>
const { class: className, note } = defineProps<{
  class?: HTMLAttributes['class']
  note: string | null
}>()
</script>

<template>
  <div v-if="note" :class="cn('text-bc/60 line-clamp-2 text-sm', className)">
    {{ note.substring(0, 200) || "" }}
  </div>
</template>
