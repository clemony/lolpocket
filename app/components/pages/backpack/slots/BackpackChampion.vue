<script setup lang="ts">
import type { Pocket } from '~~/shared/schema/schema.pocket'

const props = defineProps<{
  pocket: Pocket
}>()

const pocket = computed(() => {
  return props.pocket
})

const champion = computed(() => {
  return pocket.value.champions[0] ?? null
})
</script>

<template>
  <h1
    v-if="champion"
    class="grow pb-3 font-serif text-7! font-bold opacity-90 dst">
    <!--     {{ champion.key }} -->
  </h1>
</template>
