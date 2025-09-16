<script lang="ts" setup>
const { results, name } = defineProps<{
  name: string
  results?: any
}>()

const variants = {
  hidden: {
    opacity: 0,
    maxHeight: 0,
  },
  visible: {
    opacity: 1,
    maxHeight: '100%',
  },
}

const contentVariants = {
  hidden: {
    opacity: 0,
    maxHeight: 0,
    transform: 'translateY(-4px)',
  },
  visible: {
    opacity: 1,
    maxHeight: '100%',
    transform: 'translateY(0)',
  },

  exit: {
    opacity: 0,
    maxHeight: 0,
    transform: 'translateY(-4px)',
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
        class="z-1 g h-10 flex gap-3 relative backdrop-brightness-40 sticky px-6 top-0 left-0 backdrop-blur-md items-center bg-black-21/69 font-medium w-full group cursor-pointer">
        <div
          class="backdrop-blur-md mix-blend-screen backdrop-brightness-[103.5%] size-full absolute top-0 left-0 z-0" />

        <span
          class="flex z-1 tldr-20 capitalize items-center group-hover:text-white/80 group-hover:**:text-white/60 text-white/40 gap-3">
          <slot name="icon" />
          {{ name }}
        </span>

        <Grow />

        <Badge class="mr-1 z-1 group-hover:opacity-100">
          {{ results.length ?? "no results" }}
        </Badge>

        <PlusMinusExpand
          v-if="results.length"
          class="!text-bc" />
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
        class="CollapsibleContent mb-1 mx-7 before:w-px before:absolute before:bg-black-30/64 before:left-0 before:top-2.5"
        :class="{
          'before:h-[calc(100%-36px)]': results.length > 3,
          'before:h-[calc(100%-4px)]': results.length <= 3,
        }">
        <ul
          class="flex relative flex-col ml-2 pl-2 pr-7"
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
