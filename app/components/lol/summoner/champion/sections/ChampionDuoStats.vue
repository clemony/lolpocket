<script lang="ts" setup>
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
    class="w-full">
  </div>
</template>