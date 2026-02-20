<script lang="ts" setup>
const { class: className, simple } = defineProps<{
  class?: HTMLAttributes["class"]
  simple?: boolean
}>()
</script>

<template>
  <ChampStatRowWrapper class="items-center justify-center" :simple>
    <span class="fx-0 text-xs font-medium text-pc/70" base="btn" size="xs">
      No data
    </span>
  </ChampStatRowWrapper>
</template>
