<script lang="ts" setup>
const { class: className, mastery, params } = defineProps<{
  mastery?: PlayerChampionMastery
  params?: any
  class?: HTMLAttributes['class']
}>()

const data = computed (() => params?.data ? params?.data : mastery)
</script>

<template>
  <img
    :src="`/img/mastery/mastery-${data.level >= 10 ? 10 : data.level}.webp`"
    :alt="`mastery-${data.level >= 10 ? 10 : data.level}-badge`"
    :class="cn('aspect-square size-16 shrink-0 drop-shadow-sm drop-shadow-black/40', className)" />
</template>