<script lang="ts" setup>
import { motion } from "motion-v"

const { class: className } = defineProps<{
  active?: boolean
  class?: HTMLAttributes["class"]
  justifyStart?: boolean
}>()
// const { stickyRaw, tabPaddingX, translateY } = await tabTransform()
</script>

<template>
  <motion.button
    role="tab"
    tabindex="0"
    :class="
      cn(
        'group/tab pointer-events-auto tabs-lift relative tabs flex w-max min-w-42 origin-bottom cursor-pointer items-start self-end border-b-0! border-b-transparent tabs-lg transition-none *:pointer-events-none'
      )
    ">
    <FakeTab />

    <div
      :class="
        cn(
          'tab absolute bottom-0! left-0 w-full grow origin-bottom border-b-0! border-b-transparent!',
          {
            'tab-active': active,
          }
        )
      " />

    <motion.div
      :class="
        cn(
          'relative z-3 flex h-10 w-full grow -translate-y-1 flex-nowrap items-center justify-center self-end text-sm font-medium text-pc/90 capitalize transition-[opacity,transform] duration-100 ease-out group-hover/tab:underline',
          {
            'opacity-60': !active,
            'opacity-100': active,
            'min-w-32 justify-start! px-0!': justifyStart,
          }
        )
      ">
      <slot />
    </motion.div>

    <FakeTab />
    <slot name="btn" />
  </motion.button>
</template>
