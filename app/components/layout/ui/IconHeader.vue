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
        'relative flex  items-center  w-fit max-w-220 ',
        className,
      )
    ">
    <div
      class="w-fit absolute flex  flex-nowrap  items-center gap-6"
      :style="{
        transform: `translateY(${y})`,
      }">
      <!-- icon -->

      <div class="size-20 place-items-center relative grid">
        <slot name="icon" />
      </div>
      <div class="flex flex-col w-full">
        <!-- header pre-text -->
        <div
          class="inline-flex max-h-4 **:text-3 dst flex-nowrap text-nowrap lowercase gap-3 pl-0.5 font-normal">
          <slot name="pre-header" />
        </div>
        <div class="flex items-center justify-between w-full gap-8 mb-1 max-h-12">
          <!-- header name -->

          <slot name="title" />
        </div>

        <!-- header sub-text -->
        <div
          class="inline-flex max-h-4 **:text-3 dst flex-nowrap text-nowrap lowercase gap-4 pl-0.5 font-normal">
          <slot name="subheader" />
        </div>
      </div>
    </div>
  </header>
</template>
