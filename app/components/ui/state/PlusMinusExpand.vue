<script lang="ts" setup>
const { open } = defineProps<{
  open?: boolean
}>()
</script>

<template>
  <div class="place-items-center font-medium  text-bc/60 px-3.5 relative  grid">
    <icon
      name="add-sm"
      class="size-5 group-data-[state=open]:opacity-0 group-data-[state=open]:scale-y-0 transition-all scale-x-0 opacity-0 absolute m-auto duration-400 "
      :class="{ 'scale-x-100 opacity-60': !open }" />

    <icon
      name="minus-sm"
      :class="{ 'opacity-90  scale-y-100': open }"
      class="size-5 group-data-[state=open]:opacity-100 transition-all opacity-0 absolute m-auto duration-400" />
  </div>
</template>

<style scoped></style>
