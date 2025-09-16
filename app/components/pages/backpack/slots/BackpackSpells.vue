<script lang="ts" setup>
const props = defineProps<{
  pocket: Pocket
}>()

const pocket = computed(() => {
  return props.pocket
})

const spells = computed(() => {
  return pocket.value.spells[0]
})
</script>

<template>
  <div class="flex gap-1.5 opacity-50 justify-end self-start">
    <img
      v-for="spell in spells"
      :key="spell"
      :src="`/img/spells/${spell}.webp`"
      class="size-6 rounded-full shadow-sm drop-shadow-sm" />
  </div>
</template>
