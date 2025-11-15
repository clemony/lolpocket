<script lang="ts" setup>
const { class: className, note } = defineProps<{
  class?: HTMLAttributes['class']
  note: string | null
}>()
</script>

<template>
  <div
    v-if="note"
    :class="cn('line-clamp-2 text-2 text-bc/60', className)">
    {{ note.substring(0, 200) || "" }}
  </div>
</template>
