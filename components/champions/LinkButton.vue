<script lang="ts" setup>
  const props = defineProps<{
    link: string
  }>()
</script>

<template>
  <NuxtLink
    :to="props.link"
    class="btn btn-md hover:border-b2 hover:bg-b2 btn-ghost !text-3 !font-normal size-full justify-start px-2 py-1.5 text-left cursor-pointer"
    ><slot
  /></NuxtLink>
</template>

<style scoped></style>
