<script lang="ts" setup>
const props = defineProps<{
  pocket: pocket
}>()

const pocket = computed (() => {
  return props.pocket
})
const primary = computed (() => {
  const r = pocket.value.runes
  return r.default && r.default.primary ? r.default.primary : r.sets[0].primary ? r.sets[0].primary : null
})

const secondary = computed (() => {
  const r = pocket.value.runes
  return r.default && r.default.secondary ? r.default.secondary : r.sets[0] && r.sets[0].secondary ? r.sets[0].secondary : null
})

const hasOneRune = computed (() => {
  if (secondary.value == null || !secondary.value)
    return
  const r = Object.values(secondary.value.runes).flatMap(r => r.id)
  return r.filter(r => r != 0)
})
</script>

<template>
  <div class="relative size-22">
    <div class="grid z-0 place-items-center size-22 mt-5 relative aspect-square   backdrop-blur-md  shadow-outline shadow-black/15    overflow-visible  rounded-full  ring-1 ring-b2 bg-gradient-to-br from-b1/90 to-b1/40">
      <img v-if="primary.runes[0].id != 0" :src="`/img/runes/${primary.path}/${primary.runes[0].name.replace(' ', '')}.webp`" class="object-contain h-18 drop-shadow-sm opacity-98" />

      <!-- no keystone -->

      <i-rune-icon v-else class="size-10 text-bc/60 dst" />
    </div>

    <!-- secondary -->
    <div v-if="secondary.path && hasOneRune.length" class="shadow-outline shadow-black/15 absolute -right-4 -bottom-5  grid aspect-square size-11 place-items-center  rounded-full  transition-all duration-500 bg-gradient-to-br from-b2 to-b3 ring-1 ring-b2">
      <div class="from-b1/90 to-b1/40 grid size-full place-items-center rounded-full bg-gradient-to-br p-1 backdrop-blur-md overflow-hidden ">
        <img :src="`/img/runes/${secondary.path}.webp`" class=" shrink-0 h-7 w-auto object-contain transition-all duration-200 dst" />
      </div>
    </div>
  </div>
</template>