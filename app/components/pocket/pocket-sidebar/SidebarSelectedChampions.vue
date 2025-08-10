<script lang="ts" setup>
import { AnimatePresence, motion } from 'motion-v'

const { pocket } = defineProps<{
  pocket: Pocket
}>()

const ix = useIndexStore()

const variants = {
  visible: {
    opacity: [0, 100],
    scale: [0, 1],
  },
  hidden: {
    opacity: 0,
    scale: 0,
  },
}
</script>

<template>
  <div
    class=" w-full min-h-24 overflow-hidden bg-b2 field-box border-b3/60 p-3 py-3 px-2"
    @click="navigateTo(`/pocket/${pocket.key}`)">
    <AnimatePresence
      as="div"
      layout
      mode="sync"
      class="size-full relative min-h-24 gap-2 justify-evenly items-center flex-wrap flex">
      <button
        v-if="!pocket?.champions || !pocket?.champions?.length"
        class="size-full cursor-pointer grid place-items-center absolute group/box">
        <i-lol-champ
          class="size-8  group-hover/box:opacity-10 transition-all duration-500"
          :class="{ 'opacity-0 scale-0 ': pocket?.champions && pocket?.champions?.length }" />

        <span class="absolute opacity-0 transition-opacity duration-700 text-3  tracking-tight font-semibold ease-out group-hover/box:opacity-100">
          Select Champions
        </span>
      </button>

      <template v-if="pocket?.champions && pocket?.champions?.length">
        <motion.div
          v-for="champion in pocket?.champions"
          :key="champion"
          animate="visible"
          initial="hidden"
          exit="hidden"
          :transition="{
            type: 'spring',
            bounce: 0.2,
            duration: 0.4,
          }"
          :variants="variants"
          layout
          class="max-w-full min-w-[31%] flex grow">
          <Champion
            :img="getSplash(champion, 'centered')"
            :alt="champion"
            class="aspect-auto h-24 *:!scale-260 *:translate-y-10 rounded-lg   hover:ring hover:ring-neutral/80 " />
        </motion.div>
      </template>
    </AnimatePresence>
  </div>
</template>