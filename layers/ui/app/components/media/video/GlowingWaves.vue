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
    :class="cn('relative size-full overflow-hidden', className)"
  >
    <video-background
      ref="vRef"
      class="absolute top-0 left-0 z-0 h-full w-auto object-cover"
      src="https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-static-assets/global/default/videos/progress-bar-main-loop.webm"
    />
    <div class="absolute top-0 left-0 z-1 size-full">
      <slot />
    </div>
  </TransitionFade>
</template>
