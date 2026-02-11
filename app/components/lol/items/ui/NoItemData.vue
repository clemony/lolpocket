<script lang="ts" setup>
const { class: className, simple } = defineProps<{
  class?: HTMLAttributes['class']
  simple?: boolean
}>()
</script>

<template>
  <ChampStatRowWrapper
    class="items-center justify-center"
    :simple>
    <Element
      class="text-xs font-medium text-pc/70 fx-0"
      base="btn"
      size="xs">
      No data
    </Element>
  </ChampStatRowWrapper>
</template>
