<script setup lang="ts">
const { as = 'div', class: className } = defineProps<{
  class?: HTMLAttributes['class']
  as?: string
}>()

const vRef = useTemplateRef<HTMLVideoElement>('vRef')

onMounted(() => {
  vRef.value.playbackRate = 0.5
})
</script>

<template>
  <TransitionFade
    group
    :tag="as"
    :class="cn('size-full relative overflow-hidden', className)">
    <video-background
      ref="vRef"
      class="absolute h-full top-0 left-0 w-auto object-cover z-0"
      src="https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-static-assets/global/default/videos/progress-bar-main-loop.webm" />
    <div class="absolute z-1 top-0 left-0 size-full">
      <slot />
    </div>
  </TransitionFade>
</template>
