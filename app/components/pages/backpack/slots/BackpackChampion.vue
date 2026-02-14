<script setup lang="ts">
const props = defineProps<{
  pocket: Pocket
}>()

const pocket = computed(() => {
  return props.pocket
})

const champion = computed(() => {
  return pocket.value.champions?.[0] ?? null
})
</script>

<template>
  <h1
    v-if="champion"
    class="dst grow pb-3 font-serif text-3xl! font-bold opacity-90">
    <!--     {{ champion.key }} -->
  </h1>
</template>
