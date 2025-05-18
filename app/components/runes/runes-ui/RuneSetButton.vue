<script lang="ts" setup>
import RunePanelMenu from 'components/runes/runes-ui/RunePanelMenu.vue'

const { set, pocket, class: className, class: pathClass, setKey } = defineProps<{
  set?: RuneSet
  pocket?: Pocket
  class?: HTMLAttributes['class']
  pathClass?: HTMLAttributes['class']
  setKey?: number
}>()

const menu = shallowRef(RunePanelMenu)
const rs = useRuneStore()

const route = useRoute()

onMounted (async () => {
  await rs.selectedRuneSet
})/*
    v-tippy="{content: h(menu, {pocket: pocket, set: set}),   interactive: true, followCursor: false,}" */

const bgStyle = computed (() => {
  if (set != pocket.runes[rs.selectedRuneSet] || route.name != 'runes')
    return

  return {
    backgroundImage: `linear-gradient(-130deg, var(--color-${set[0].path.toLowerCase()}), var(--color-${set[1].path.toLowerCase()}) )`,
  }
})
</script>

<template>
  <div
    v-if="set"
    :key="setKey"
    :class="cn('relative !pointer-events-auto size-20 cursor-pointer transition-all overflow-hidden duration-500 grid  hover:ring hover:ring-neutral/40  aspect-square rounded-xl  place-items-center overflow-visible hover:!bg-b2/60 ease-out hover:!border-b3/30 z-0 *:z-2 ', className, { 'tldr-50  ring ring-b3/60  inset-shadow-sm after:size-full after:absolute after:rounded-xl after:z-1 after:bg-b1/65  ': set == pocket.runes[rs.selectedRuneSet] && route.name == 'runes' })" :style="bgStyle">
    <input
      v-model="rs.selectedRuneSet"
      :value="setKey"
      name="selected-rune-set"
      type="radio"
      class="peer hidden" @change="navigateTo(`/pocket/${pocket.key}/runes`)" />

    <div class="grid place-items-center aspect-square  size-full ">
      <div class="p-1.5 size-full grid place-items-center">
        <i-rune-icon v-if="!set.keystone || !set[0].path" class="size-6.5 opacity-40 dst" />
        <NuxtImg
          v-else
          :src="`/img/runes/${set[0].path}/${set.keystone}.webp`"

          class="h-14 transition-all duration-200 drop-shadow-sm drop-shadow-black/30" />
      </div>
    </div>

    <div
      v-if="set[1].runes[1] || set[1].runes[2] || set[1].runes[3]"
      :class="cn('absolute  right-0.5 top-0.5  grid aspect-square size-7 place-items-center   rounded-full', pathClass)">
      <div class=" grid size-full place-items-center rounded-full ">
        <img
          :src="!set[1].path ? '/img/runes/blankRune.webp' : `/img/runes/${set[1].path}.webp`"
          class=" shrink-0 h-6 w-auto object-contain drop-shadow-sm  transition-all duration-200 dst" />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>