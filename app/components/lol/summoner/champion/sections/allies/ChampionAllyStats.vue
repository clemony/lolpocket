<script lang="ts" setup>
const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
}>()

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

    :class="cn('', className)">
  </div>
</template>