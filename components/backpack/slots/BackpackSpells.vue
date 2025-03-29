<script lang="ts" setup>
const props = defineProps<{
  pocket: pocket
}>()

const pocket = computed (() => {
  return props.pocket
})

const spells = computed (() => {
  const s = pocket.value.spells
  return s.default && Object.values(s.default).filter(s => s.name != null)
    ? s.default
    : s.sets[0] && Object.values(s.sets[0]).filter(s => s.name != null)
      ? s.sets[0]
      : null
})
</script>

<template>
  <div class="flex  gap-1.5 opacity-50 justify-end self-start ">
    <img v-for="spell in spells" :key="spell.name" :src="`/img/spells/${spell.name}.webp`" class="size-6 rounded-full shadow-sm drop-shadow-sm" />
  </div>
</template>