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
    class="
      pointer-events-none relative -mr-4 h-8 min-w-10 overflow-hidden rounded-md
      *:size-4 **:transition-all **:duration-200
    "
    variant="ghost"
    hover="outline">
    <icon
      name="more"
      class="absolute group-open/b:opacity-0 group-hover:opacity-0" />
    <icon
      name="add"
      class="
        absolute scale-0 opacity-0 group-hover-closed:opacity-100
        group-hover-closed/b:scale-100
      " />
    <icon
      name="minus"
      class="
        absolute scale-x-0 opacity-0 group-open/b:scale-x-100
        group-open/b:opacity-50 group-hover-open/b:opacity-0
      " />

    <icon
      name="lucide:arrow-up-to-line"
      class="
        absolute top-3.25 origin-top scale-y-0 opacity-0 delay-[translate_0.5]
        group-hover-open/b:-translate-y-1.25 group-hover-open/b:scale-y-100
        group-hover-open/b:opacity-100
      " />
  </Button>
  <Button
    v-else
    v-tippy="props.tip"
    variant="ghost"
    size="12"
    class="
      text-5w-full! group/button relative grid place-items-center justify-start
      px-3 font-medium tracking-tight text-bc/80 hover:inset-shadow-sm
    ">
    <icon
      name="more"
      class="
        absolute left-[11px] m-auto size-4.5 scale-x-100 opacity-70
        transition-all duration-500 group-hover/button:scale-x-0
        group-hover/button:opacity-0
      " />

    <icon
      name="add"
      class="
        absolute left-[11px] m-auto size-4.5 scale-y-0 opacity-0 transition-all
        duration-500 group-hover/button:scale-y-100
        group-hover/button:opacity-80
      " />
  </Button>
</template>

<style scoped></style>
