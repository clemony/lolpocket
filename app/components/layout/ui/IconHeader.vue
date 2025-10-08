<script lang="ts" setup>
const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
}>()

const { scrollYProgress } = useScrollInject()
const y = useTransform(scrollYProgress, [0, 1], ['-3%', '-80%'])
</script>

<template>
  <header
    :class="
      cn(
        'relative flex flex-nowrap items-center gap-4  items-center h-20  w-fit max-w-220 ',
        className,
      )
    "
    :style="{
      transform: `translateY(${y})`,
    }">
    <!-- icon -->

    <div class="size-20 place-items-center relative grid">
      <slot name="icon" />
    </div>
    <div class="flex flex-col pt-1.5 justify-center gap-1.5 w-full">
      <!-- header name -->
      <div class="flex items-center  w-full gap-8 max-h-12">
        <slot name="title" />
      </div>

      <!-- header sub-text -->
      <div
        class="inline-flex **:text-3 dst flex-nowrap text-nowrap lowercase gap-2  font-normal">
        <slot name="subheader" />
      </div>
    </div>
  </header>
</template>
