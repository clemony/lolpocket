<script lang="ts" setup>
const { set, pocket, class: className, class: pathClass, setKey } = defineProps<{
  set?: RuneSet
  pocket?: Pocket
  class?: HTMLAttributes['class']
  pathClass?: HTMLAttributes['class']
  setKey?: number
}>()

const rs = useRuneStore()

/*
function handleSet() {
pocket.runes[rs.selectedRuneSet] = set
}
 */
const selectedSet = computedAsync (() => {
  return rs.selectedRuneSet
})

onMounted (async () => {
  await rs.selectedRuneSet
})
</script>

<template>
  <Placeholder
    v-if="set"
    :key="setKey"
    class=" "
    :class="cn('relative !pointer-events-auto size-20 cursor-pointer transition-all duration-500 grid aspect-square rounded-full place-items-center overflow-visible hover:!bg-b3/60 ease-out  ', className, { 'grayscale-100 hover:grayscale-0': set != pocket.runes[rs.selectedRuneSet] })">
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

          class="h-14 transition-all duration-200 drop-shadow-sm" />
      </div>
    </div>

    <div
      v-if="set[1].runes[1] || set[1].runes[2] || set[1].runes[3]"
      :class="cn('absolute  right-0.5 top-0.5  grid aspect-square size-7 place-items-center  drop-shadow-black/6 rounded-full drop-shadow-sm ring ring-b3/20', pathClass)">
      <div class=" grid size-full place-items-center rounded-full ">
        <img
          :src="!set[1].path ? '/img/runes/blankRune.webp' : `/img/runes/${set[1].path}.webp`"
          class=" shrink-0 h-6 w-auto object-contain transition-all duration-200 dst" />
      </div>
    </div>
  </Placeholder>
</template>

<style scoped>

</style>