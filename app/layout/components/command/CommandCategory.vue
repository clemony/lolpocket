<script lang="ts" setup>
const { name, results } = defineProps<{
  name: string
  results?: any
}>()

const variants = {
  hidden: {
    maxHeight: 0,
    opacity: 0,
  },
  visible: {
    maxHeight: '100%',
    opacity: 1,
  },
}

const contentVariants = {
  hidden: {
    maxHeight: 0,
    opacity: 0,
    transform: 'translateY(-4px)',
  },
  exit: {
    maxHeight: 0,
    opacity: 0,
    transform: 'translateY(-4px)',
  },
  visible: {
    maxHeight: '100%',
    opacity: 1,
    transform: 'translateY(0)',
  },
}
</script>

<template>
  <Collapsible
    :default-open="true"
    :disabled="results.length <= 0">
    <CollapsibleTrigger as-child>
      <button
        :variants="variants"
        initial="hidden"
        animate="visible"
        exit="hidden"
        class="
          g group sticky top-0 left-0 z-1 flex h-10 w-full cursor-pointer
          items-center gap-3 px-6 font-medium backdrop-blur-md
        ">
        <div class="absolute top-0 left-0 z-0 size-full backdrop-blur-md" />

        <span
          class="
            tldr-20 z-1 flex items-center gap-3 text-bc/40 capitalize
            group-hover:text-bc/80 group-hover:**:text-bc/60
          ">
          <slot name="icon" />
          {{ name }}
        </span>

        <Grow />

        <Badge
          class="z-1 mr-1 group-hover:opacity-100">
          {{ results.length ?? "no results" }}
        </Badge>

        <PlusMinusExpand
          v-if="results.length"
          class="text-bc!" />
      </button>
    </CollapsibleTrigger>

    <div
      v-if="results.length"
      as-child
      :variants="contentVariants"
      initial="hidden"
      animate="visible"
      exit="exit"
      class="overflow-hidden">
      <CollapsibleContent
        class="
          CollapsibleContent mx-7 mb-1 before:absolute before:top-2.5
          before:left-0 before:w-px before:bg-black-30/64
        "
        :class="{
          'before:h-[calc(100%-36px)]': results.length > 3,
          'before:h-[calc(100%-4px)]': results.length <= 3,
        }">
        <ul
          class="relative ml-2 flex flex-col pr-7 pl-2"
          :transition="{
            staggerChildren: 0.5,
            type: 'spring',
            bounce: 0.2,
          }">
          <slot />
        </ul>
      </CollapsibleContent>
    </div>
  </Collapsible>
</template>
