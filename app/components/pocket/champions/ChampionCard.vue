<script setup lang="ts">
const { class: className, k } = defineProps<{
  class?: HTMLAttributes['class']
  k: string
}>()
</script>

<template>
  <Card
    class=" shrink-0 relative shadow-sm shadow-black/10 inset-shadow-sm inset-shadow-black/10 drop-shadow-sm overflow-hidden grid place-items-center h-36 w-[170px] ">
    <Champion
      :k
      type="centered"
      class="size-[260%] translate-y-[16%] object-center absolute" />
  </Card>
</template>