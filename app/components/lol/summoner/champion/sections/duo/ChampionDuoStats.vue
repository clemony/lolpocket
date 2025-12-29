<script lang="ts" setup>
const { class: className } = defineProps<{
  class?: HTMLAttributes['class']

}>()
const duoRef = useTemplateRef('duoRef')

const { isActive, progressBetween } = useScrollSection(
  'duos',
  duoRef
)
</script>

<template>
  <div
    id="duos"
    ref="duoRef"

    :class="cn('', className)">
  </div>
</template>