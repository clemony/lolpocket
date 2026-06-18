<script setup lang="ts">
import { useScrollInject } from "~~/layers/lib/app/composables/navigation/useElementScroll"

const { class: className, placement = "left" } = defineProps<{
  class?: HTMLAttributes["class"]
  placement?: Side
  theme?: string
}>()

const { scrollTop } = useScrollInject()
</script>

<template>
  <Tooltip label="Top" :side="placement">
    <UButton
      icon="arrow-up"
      size="xl"
      color="base"
      rounded
      variant="solid"
      :ui="{
        base: cn(
          'aspect-square rounded-full bg-p0/60 backdrop-blur-md',
          className
        ),
      }"
      @click="scrollTop()" />
  </Tooltip>
</template>
