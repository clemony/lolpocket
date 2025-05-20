<script setup lang="ts">
import { AnimatePresence, motion } from 'motion-v'

const ps = usePocketStore()
const us = useUiStore()

const pinned = computed (() => {
  return ps.pockets.filter(p => p.location.pinned == true)
})

const variants = {
  open: { height: `calc((33px * ${pinned.value.length}) + 40px)` },
  closed: { height: '30px' },
}

const pinVariants = {

}
</script>

<template>
  <motion.div
    class="rounded-box -mt-1 w-12 h-[30px] items-end group/pin relative  grid btn btn-ghost !p-0 hover:bg-b3/40"
    :variants="variants"
    :animate="us.pinnedOpen ? 'open' : 'closed'"
    while-hover="open">
    <div class="size-full justify-items-center grid  items-end  overflow-hidden pb-[6px]">
      <div class="mb-16">
        <button
          v-for="pocket in pinned"
          :key="pocket.key"
          v-tippy="{ content: pocket.name, placement: 'right', offset: [0, 20] }"
          class="opacity-0 group-hover/pin:opacity-100 first:mt-[4px]  group/icon cursor-pointer h-[33px] w-full grid  transition-opacity dr-40  place-items-center flex relative" :class="{ 'opacity-100': us.pinnedOpen }"
          @click="navigateTo(`/pocket/${pocket.key}`)">
          <PocketIcon  :url="pocket.icon" class="group-hover/icon:ring group-hover/icon:ring-neutral/70 drop-shadow-sm shadow-sm size-9 pointer-events-none tldr-30" />
        </button>
      </div>
      <motion.label
        :style="{
          '--pin-bg': 'color-mix(in oklch, var(--b2) 100%, black 2%)',
          '--depth': 0,
        }"
        class="self-end cursor-pointer w-12 h-12 grid hover:border-x hover:border-b  hover:border-b3  place-items-center group/pin-btn absolute  rounded-b-box hover:bg-[color-mix(in_oklch,var(--b2)_100%,black_2%)] tldr-0 bottom-0 bg-[color-mix(in_oklch,var(--b2)_100%,white_80%)] mask-alpha mask-t-from-black mask-t-from-80% mask-t-to-transparent "
        @while-hover="{
          /* bg-[var(--pin-bg)] */
        }">
        <motion.span v-if="!us.pinnedOpen" key="pin-btn" layout>
          <icon name="pin-solid" class="size-6 group-hover/pin-btn:opacity-95 opacity-65 dst tldr-20" />
        </motion.span>
        <motion.div v-if="us.pinnedOpen" key="pin-btn" layout class="relative size-full grid place-items-center">
          <icon name="pin" class="size-4.5 opacity-100 group-hover/pin-btn:opacity-0 tldr-20 dst absolute" />
          <icon name="iconoir:pin-slash" class="size-4.5 opacity-0 group-hover/pin-btn:opacity-100 tldr-20 dst absolute" />
        </motion.div>

        <input v-model="us.pinnedOpen" type="checkbox" class="peer hidden" />
      </motion.label>
    </div>
  </motion.div>
</template>