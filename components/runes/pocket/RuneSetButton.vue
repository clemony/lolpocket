<script lang="ts" setup>
const props = defineProps<{
  set: RuneSet
  pocket: pocket
  class?: HTMLAttributes['class']
  pathClass?: HTMLAttributes['class']
  noCheck?: boolean
}>()
const rs = useRuneStore()

const pocket = ref(props.pocket)

const set = computed (() => {
  return props.set
})
const secondaryRunes = computed (() => {
  const a = Object.values(set.value.secondary.runes)
  a.filter(r => r.name != 'empty')
  return a.length > 0 ? a : ''
})
const showEmptySecondary = computedAsync (() => {
  return set.value.secondary.runes[3].name == 'empty' && set.value.secondary.runes[1].name == 'empty' && set.value.secondary.runes[2].name == 'empty'
})
function handleSet() {
  rs.selectedRuneSet = set.value
  console.log('💠 - handleSet - rs.selectedRuneSet:', rs.selectedRuneSet)
}

const selectedSet = computedAsync (() => {
  return rs.selectedRuneSet
})

onMounted (async () => {
  await rs.selectedRuneSet
})
</script>

<template>
  <button
    v-if="set && set.key"
    :key="set.key"
    class=" shadow-outline shadow-black/15 "
    :class="cn('relative !pointer-events-auto size-18 grid aspect-square cursor-pointer   place-items-center overflow-visible items-center rounded-full transition-all duration-500 ring-1 ring-b2 ', props.class, { 'shadow-black': set == selectedSet})"
    @click="handleSet()">
    <!--    <div v-if="set == rs.selectedRuneSet && !props.noCheck" v-tippy="'Default Set'" class="absolute size-fit rounded-full shadow-warm-2 drop-shadow-sm -bottom-1 z-1 -left-1.5">
      <input type="checkbox" :checked="set == rs.selectedRuneSet" class="peer checkbox checkbox-neutral checkbox-sm drop-shadow-sm rounded-full pointer-events-none " />
    </div> -->

    <input
      id="runeSets"

      v-model="rs.selectedRuneSet"
      :value="set"
      type="radio"
      class="peer hidden"

      @change="rs.selectedRuneSet = set" />

    <div class="from-b1/90 to-b1/40 grid place-items-center rounded-full bg-gradient-to-br aspect-square  backdrop-blur-md overflow-hidden size-full ">
      <div class="p-1.5 size-full grid place-items-center">
        <i-rune-icon v-if="!set.primary.runes || !set.primary.runes[0].id || set.primary.runes[0].name == 'empty'" class="size-9.5 opacity-40 dst" />
        <img
          v-else
          :src="`/img/runes/${set.primary.path}/${set.primary.runes[0].name.replace(/\s/g, '')}.webp`"

          class="object-contain transition-all duration-200 drop-shadow-sm" />
      </div>
    </div>

    <div
      class=" shadow-outline shadow-black/15" :class="cn('absolute -right-2 -bottom-2  grid aspect-square size-11 place-items-center  rounded-full  transition-all duration-500 bg-gradient-to-br from-b2 to-b3 ring-1 ring-b2', props.pathClass)">
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