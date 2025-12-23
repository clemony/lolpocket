<script lang="ts" setup>
const allyRef = useTemplateRef('allyRef')

const { isActive, progressBetween } = useScrollSection(
  'allies',
  allyRef
)

watch(progressBetween, (v) => {
  if (isActive.value) {
    console.log('ally progress', v)
  }
}, { immediate: false })
</script>

<template>
  <div
    id="allies"
    ref="allyRef"
    class="w-full">
  </div>
</template>