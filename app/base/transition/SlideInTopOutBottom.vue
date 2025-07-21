<script lang="ts" setup>
const {class: className, as="div", mode="out-in" } = defineProps<{
class?: HTMLAttributes['class']
as?: string
mode?: "out-in" | "in-out"
}>()
</script>

<template>
     <transition-slide group :as="as" :class="cn(className)" :mode="mode"   :offset="{
      enter: [0, '-100%'],
      leave: [0, '100%']
    }">
    <slot  />
     </transition-slide>
</template>