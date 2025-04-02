<script lang="ts" setup>
const props = defineProps<{
  champion: Champion
}>()

const emit = defineEmits(['done'])
function onComplete() {
  console.log('💠 - onComplete - \'done\':', 'done')
  emit('done')
}
const { ready } = useTimeout(1500, { controls: true, callback: onComplete },
)

const translateX = ref(0)
const translateY = ref(0)

onMounted(() => {
  const popover = document.querySelector('.popover-content')
  if (popover) {
    const rect = popover.getBoundingClientRect()
    const viewportCenterX = window.innerWidth / 2
    const viewportCenterY = window.innerHeight / 2

    // Calculate translation values to move the element to the center
    translateX.value = viewportCenterX - (rect.left + rect.width / 2)
    translateY.value = viewportCenterY - (rect.top + rect.height / 2)
  }
})

const animate = {
  opacity: [1, 1, 0.5, 0],
  scale: [1, 1, 2],
  filter: [0, 0, 'blur(20px)'],
  z: [0, 0, 100],
  rotateY: [0, 0, 25],
  rotateX: [0, 0, 5],
  transformPerspective: [0, 0, 400],

}
</script>

<template>
  <LazyPopoverContent
    :avoid-collisions="false"
    position-strategy="fixed"
    align="start"
    side="bottom"
    as-child
    class="!p-0  popover-content border-0 *:[&_.champ-splash]:!w-(--reka-popover-trigger-width) w-(--reka-popover-trigger-width) *:[&_.champ-splash]:!h-(--reka-popover-trigger-height)  z-[1001] bg-transparent overflow-hidden"
    :style="{ '--reka-popover-content-transform-origin': 'center' }">
    <Motion
      as="div" :initial="{
        opacity: 0 }"
      :animate="animate"
      :exit="{ opacity: 0, scale: 0.95 }"
      :transition="{ duration: 2, ease: 'easeIn' }">
      <Motion
        as="div" :initial="{
          opacity: 0 }"
        :animate="{ opacity: 1, scale: 1 }"
        :exit="{ opacity: 0, scale: 0.95 }"
        :transition="{ duration: 0.3, ease: 'easeInOut' }">
        <ChampionSplash
          :champion="props.champion" class="size-full object-cover champ-splash " />
      </Motion>
    </Motion>
  </LazyPopoverContent>
</template>