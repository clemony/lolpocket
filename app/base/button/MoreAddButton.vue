<script lang="ts" setup>
const props = defineProps<{
  tip?: string
}>()
</script>

<template>
  <Button
    v-tippy="props.tip"
    variant="ghost"
    size="lg"
    class="!text-lgw-full tracking-tight place-items-center font-medium text-bc/80 justify-start px-3 relative group/button grid hover:inset-shadow-sm">
    <icon
      name="more"
      class="size-4.5 opacity-70 group-hover/button:scale-x-0 group-hover/button:opacity-0 transition-all scale-x-100 absolute m-auto duration-500 left-[11px]" />

    <icon
      name="add"
      class="size-4.5 group-hover/button:opacity-80 group-hover/button:scale-y-100 scale-y-0 transition-all opacity-0 absolute left-[11px] m-auto duration-500" />
  </Button>
</template>

<style scoped></style>
