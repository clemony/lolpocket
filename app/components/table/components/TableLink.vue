<script lang="ts" setup>
const props = defineProps<{
  params: any
}>()
</script>

<template>
  <div class="size-full flex items-center group">
    <NuxtLink
      :to="`/pocket/${props.params.data.key}`"
      class="hover:underline group-hover:underline size-fulltracking-tighter text-4 leading-none font-bold items-center truncate flex gap-2">
      {{ params.value }}
      <icon
        name="link"
        class="size-4  tldr-15  shrink-0 opacity-0 group-hover:opacity-100" />
    </NuxtLink>
  </div>
</template>

<style scoped>

</style>