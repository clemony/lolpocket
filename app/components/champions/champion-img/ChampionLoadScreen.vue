<script setup lang="ts">
const { champKey, class: className, quality = 20, bgPosition = '50% -1.8rem', bgSize = '190%' }
  = defineProps<{
    champKey: string | null
    type?: SplashType
    class?: HTMLAttributes['class']
    bgSize?: string
    bgPosition?: string
    quality?: number
  }>()
const emit = defineEmits(['loaded'])
const loaded = ref(false)
const img = computed (() => getSplash(champKey, 'load'))

function onLoad() {
  loaded.value = true
  emit('loaded')
}
</script>

<template>
  <div
    class="size-full" :class="cn('grid justify-center  overflow-hidden  relative cursor-pointer bg-no-repeat rounded-lg  size-full **:select-none  group ', className)"

    :style="{
      objectPosition: bgPosition,
    }">
    <Img
      :img="img"
      :quality="quality"
      :style="{
        width: bgSize,
        height: bgSize,
      }"
      class="object-cover absolute -top-8" :class="{ 'inset-shadow-[0px_0px_10px_4px_#00000040] animate-in fade-in zoom-in duration-500 ': loaded }"
      :alt="`${champKey}-Splash`"
      @load="onLoad()">
      <slot />
    </Img>
  </div>
</template>

<style scoped></style>
