<script lang="ts" setup>
const { ranks } = defineProps<{
  ranks: string[]
}>()
</script>

<template>
  <p
    v-if="ranks"
    class="text-xs mt-1">
    <span
      v-for="(rank, i) in ranks"
      :key="rank">
      {{ rank.charAt(0) + rank.slice(1).toLowerCase() }}
      <span v-if="i != ranks.length - 1">
        ,&nbsp;
      </span>
    </span>
  </p>
</template>