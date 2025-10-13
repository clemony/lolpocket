<script lang="ts" setup>
const props = defineProps<{
  tip?: string
  hover?: boolean
}>()
</script>

<template>
  <Button
    v-if="props.hover"
    id="toggle-more-pockets"
    class="relative  min-w-10 h-8 -mr-4 pointer-events-none rounded-md *:size-4 overflow-hidden **:transition-all **:duration-200 "

    variant="ghost"
    hover="outline">
    <icon
      name="more"
      class="group-open/b:opacity-0 group-hover:opacity-0 absolute " />
    <icon
      name="add"
      class="group-hover-closed:opacity-100 opacity-0 scale-0 group-hover-closed/b:scale-100 absolute " />
    <icon
      name="minus"
      class="group-open/b:opacity-50 group-hover-open/b:opacity-0 opacity-0 scale-x-0 group-open/b:scale-x-100 absolute" />

    <icon
      name="lucide:arrow-up-to-line"
      class="group-hover-open/b:opacity-100 group-hover-open/b:-translate-y-1.25 delay-[translate_0.5] top-3.25 opacity-0  origin-top scale-y-0 group-hover-open/b:scale-y-100 absolute" />
  </Button>
  <Button
    v-else
    v-tippy="props.tip"
    variant="ghost"
    size="lg"
    class="!text-5w-full tracking-tight place-items-center font-medium text-bc/80 justify-start px-3 relative group/button grid hover:inset-shadow-sm">
    <icon
      name="more"
      class="size-4.5 opacity-70 group-hover/button:scale-x-0 group-hover/button:opacity-0 transition-all scale-x-100 absolute m-auto duration-500 left-[11px]" />

    <icon
      name="add"
      class="size-4.5 group-hover/button:opacity-80 group-hover/button:scale-y-100 scale-y-0 transition-all opacity-0 absolute left-[11px] m-auto duration-500" />
  </Button>
</template>

<style scoped></style>
