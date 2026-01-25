<script lang="ts" setup>
const { class: className, level, mastery, params } = defineProps<{
  mastery?: ChampionMastery
  params?: any
  level?: number
  class?: HTMLAttributes['class']
}>()

const data = computed (() => params?.data ? params?.data.level : level || mastery.level)
</script>

<template>
  <img
    :src="`/img/mastery/mastery-${data >= 10 ? 10 : data}.webp`"
    :alt="`mastery-${data >= 10 ? 10 : data}-badge`"
    :class="cn('aspect-square size-16 shrink-0 drop-shadow-sm drop-shadow-black/40', className)"
  >
</template>