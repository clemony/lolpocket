<script lang="ts" setup>
const { class: className, simple } = defineProps<{
  class?: HTMLAttributes['class']
  simple?: boolean
}>()
</script>

<template>
  <ChampStatRowWrapper class="items-center justify-center" :simple>
    <Element
      class="text-bc/70 fx-0 text-xs font-medium"
      base="btn"
      size="7"
      variant="base"
    >
      No data
    </Element>
  </ChampStatRowWrapper>
</template>
