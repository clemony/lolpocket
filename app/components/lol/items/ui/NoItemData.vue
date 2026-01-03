<script lang="ts" setup>
const { class: className, simple } = defineProps<{
  class?: HTMLAttributes['class']
  simple?: boolean
}>()
</script>

<template>
  <ChampStatRowWrapper
    :simple
    class="items-center justify-center">
    <Element
      base="btn"
      size="7"
      class="text-1 font-medium text-bc/70 fx-0"
      variant="base">
      No data
    </Element>
  </ChampStatRowWrapper>
</template>