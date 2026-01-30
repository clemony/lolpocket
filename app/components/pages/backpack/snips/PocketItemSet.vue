<script lang="ts" setup>
const { class: className, set } = defineProps<{
  class?: HTMLAttributes['class']
  set: number[]
}>()
</script>

<template>
  <div class="flex w-full items-center gap-2 py-1">
    <template v-for="i in 6" :key="i">
      <Item v-if="set[i]" :id="set[i]" class="size-14" />
      <Placeholder v-else class="size-14" />
    </template>
  </div>
</template>
