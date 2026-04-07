<script lang="ts" setup>
const {
  class: className,
  color,
  size = "md",
  inset
} = defineProps<{
  class?: HTMLAttributes["class"]
  color: string
  size?: string
  inset?: boolean
}>()
</script>

<template>
  <div
    :class="
      cn(
        'absolute z-2 inline-grid place-items-center rounded-full *:[grid-area:1/1]',
        {
          'before:absolute before:z-0 before:size-full before:scale-160 before:place-self-center before:rounded-full before:bg-p0':
            inset
        },
        className
      )
    ">
    <div
      :class="
        cn(
          'z-1 status animate-ping rounded-full saturate-110',
          twStatusSize[size],
          twBg[color]
        )
      " />
    <div
      :class="
        cn(
          'z-2 status rounded-full saturate-110',
          twStatusSize[size],
          twBg[color]
        )
      " />
  </div>
</template>
