<script setup lang="ts">
const { champKey, type = 'centered', bgSize = 'cover', class: className, bgPosition = 'center', loaded: watchLoad, quality = 20,
}
  = defineProps<{
    loaded: boolean
    champKey: string
    type?: SplashType
    class?: HTMLAttributes['class']
    bgSize?: string
    bgPosition?: string
    quality?: number
  }>()
const emit = defineEmits(['loaded'])
const ix = useIndexStore()
const loaded = ref(false)
const img = ref(null)

watch(
  () => watchLoad,
  (newVal) => {
    console.log('💠 - newVal:', newVal)
    if (newVal == false)
      loaded.value = false
    img.value = getSplash(champKey, type)
  },
)

function onLoad() {
  loaded.value = true
  console.log('💠 - onLoad - loaded.value:', loaded.value)
  emit('loaded')
}

onMounted (async () => {
  img.value = getSplash(champKey, type)
})
</script>

<template>
  <div class="size-full" :class="cn('grid place-items-center  overflow-hidden  relative cursor-pointer shadow-sm drop-shadow-sm bg-no-repeat rounded-lg  size-full **:select-none  group relative', { 'inset-shadow-[0px_0px_10px_4px_#00000040]': loaded }, className)">
    <NuxtImg
      :src="img"
      :quality="quality"
      class="object-center"
      :alt="`${champKey}-icon`"
      @load="loaded = true">
      <slot />
    </NuxtImg>
  </div>
</template>

<style scoped></style>
