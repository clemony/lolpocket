<script lang="ts" setup>
const { class: className, set } = defineProps<{
  class?: HTMLAttributes['class']
  set: number[]
}>()
</script>

<template>
  <div class="w-full flex items-center gap-2 py-1">
    <template
      v-for="i in 6"
      :key="i">
      <Item
        v-if="set[i]"
        :id="set[i]"
        class="size-16" />
      <Placeholder
        v-else
        class="size-16" />
    </template>
  </div>
</template>
