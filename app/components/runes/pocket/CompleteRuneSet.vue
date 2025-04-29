<script lang="ts" setup>
const props = defineProps<{
  set?: RuneSet
  modelValue?: RuneSet
}>()

const set = computed (() => {
  return props.set ? props.set : props.modelValue
})

const showEmptySecondary = computedAsync (() => {
  return set.value.secondary.runes[3].name == 'empty' && set.value.secondary.runes[1].name == 'empty' && set.value.secondary.runes[2].name == 'empty'
})
</script>

<template>
  <button
    v-if="set"
    :key="set.key" class="grid grid-cols-2 gap-2  place-items-center ">
    <div class="relative !pointer-events-auto size-17 shadow-outline shadow-black/15 grid aspect-square cursor-pointer   place-items-center overflow-visible items-center rounded-full transition-all duration-500 ring-1 ring-b2 ">
      <div class="from-b1/90 to-b1/40 grid place-items-center rounded-full bg-gradient-to-br aspect-square  backdrop-blur-md overflow-hidden size-full p-1.5 ">
        <i-rune-icon v-if="!set.primary.runes || !set.primary.runes[0].id || set.primary.runes[0].name == 'empty'" class="size-9.5 opacity-40 dst" />
        <img
          v-else
          :src="`/img/runes/${set.primary.path}/${set.primary.runes[0].name.replace(/\s/g, '')}.webp`"

          class="object-contain transition-all duration-200 drop-shadow-sm" />
      </div>
    </div>

    <div
      class=" shadow-outline shadow-black/15 grid aspect-square size-14 place-items-center  rounded-full  transition-all duration-500 bg-gradient-to-br from-b2 to-b3 ring-1 ring-b2">
      <div class="from-b1/90 to-b1/40 grid size-full place-items-center rounded-full bg-gradient-to-br p-1 backdrop-blur-md overflow-hidden ">
        <i-rune-icon v-if="showEmptySecondary" class="size-6 opacity-40 dst" />
        <img
          v-else
          :src="set.secondary.path == 'empty' ? '/img/runes/blankRune.webp' : `/img/runes/${set.secondary.path}.webp`"
          class=" shrink-0 h-7 w-auto object-contain transition-all duration-200 dst" />
      </div>
    </div>
  </button>
</template>

<style scoped>

</style>