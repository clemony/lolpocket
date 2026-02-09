<script lang="ts" setup>
const props = defineProps<{
  pocket: Pocket
}>()

const pocket = computed(() => {
  return props.pocket
})

const spells = computed(() => {
  return pocket.value.spells?.[0]
})
</script>

<template>
  <div class="flex justify-end gap-1.5 self-start opacity-50">
    <img
      v-for="spell in spells"
      :key="spell"
      class="size-6 rounded-full shadow-sm drop-shadow-sm"
      :src="`/img/spells/${spell}.webp`">
  </div>
</template>
