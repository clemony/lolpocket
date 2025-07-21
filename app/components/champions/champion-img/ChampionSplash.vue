<script setup lang="ts">
const { champKey, type = 'centered', class: className,  loaded: watchLoad
}
  = defineProps<{
    loaded: boolean
    champKey: string
    type?: SplashType
    class?: HTMLAttributes['class']
  }>()
const emit = defineEmits(['loaded'])
const loaded = ref(false)
const img = ref(null)

watch(
  () => watchLoad,
  (newVal) => {
    if (newVal == false)
      loaded.value = false
    img.value = getSplash(champKey, type)
  },
)

function onLoad() {
  loaded.value = true
  emit('loaded')
}

onMounted (async () => {
  img.value = getSplash(champKey, type)
})
</script>

<template>
  <div class="size-full" :class="cn('grid place-items-center  overflow-hidden  relative cursor-pointer shadow-sm drop-shadow-sm bg-no-repeat rounded-lg  size-full **:select-none  group relative', { 'inset-shadow-[0px_0px_10px_4px_#00000040] fade-in animate-in duration-400': loaded }, className)">
    <Img
      :img="img"
      class="object-center"
      :alt="`${champKey}-Splash`"
      @load="onLoad()">
      <slot />
    </Img>
  </div>
</template>

<style scoped></style>
