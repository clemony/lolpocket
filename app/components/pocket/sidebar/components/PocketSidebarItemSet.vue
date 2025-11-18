<script lang="ts" setup>
import type { ItemSet, Pocket } from '~~/shared/schema'
import { AnimatePresence, easeOut, motion } from 'motion-v'
import { PopoverAnchor, PopoverContent, PopoverPortal } from 'reka-ui'

const { pocket, set } = defineProps<{
  pocket: Pocket
  set: ItemSet
}>()

const variants = {
  closed: {
    width: '60px',
    borderRadius: '0.5rem',
    height: '60px',
    translate: '0px 0px',
    zIndex: 1,
  },
  open: {
    width: '300px',
    borderRadius: '1rem',
    height: 'max-content',
    padding: '10px',
    translate: '-20px -40px',
    zIndex: 20,
  },
}

const setWrapperVariants = {
  closed: {
    width: '60px',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '2px',
  },
  open: {
    width: '280px',
    gap: '10px',
  },
}

const itemVariants = {
  closed: {
    width: '23px',
    height: '23px',
  },
  open: {
    width: '40px',
    height: '40px',
  },
}

const hovered = ref(false)
</script>

<template>
  <Popover
    v-model:open="hovered"
    @click="navigateTo(`/pocket/${pocket.key}/items`)">
    <PopoverTrigger
      class="
        items-between pointer-events-auto z-1! flex size-20 cursor-pointer
        flex-wrap justify-between gap-0.75! rounded-lg border border-b3/50!
        bg-b2/80 p-1.5 backdrop-blur-md hover:z-2!
      ">
      <template v-if="set.items && set.items?.length">
        <template
          v-for="(item, i) in set.items"
          :key="item">
          <Item
            v-if="i < 4"
            :id="item"
            class="pointer-events-none size-7.5 rounded-lg"></Item>
        </template>
      </template>
    </PopoverTrigger>

    <PopoverPortal>
      <AnimatePresence>
        <PopoverContent
          :side-offset="-60"
          align="start"
          as-child>
          <motion.div
            initial="closed"
            animate="open"
            :variants="variants"
            exit="closed"
            :transition="{
              delay: 0.2,
            }"
            class="
              grid items-center overflow-hidden border border-b3/50 bg-b2/90
              shadow-smooth backdrop-blur-md
            "
            :style="{
              transformOrigin: 'var(--reka-popover-content-transform-origin)',
            }"
            @focusin="hovered = true"
            @focusout="hovered = false"
            @mouseenter="hovered = true"
            @mouseleave="hovered = false">
            <div class="flex w-full items-center pb-2">
              <span class="grow font-medium tracking-tight capitalize">
                {{ set.name }}
              </span>

              <button
                class="btn btn-square btn-ghost btn-sm"
                @click="deleteItemSet(pocket, set)">
                <icon name="trash" />
              </button>
            </div>

            <motion.div
              v-if="set.items && set.items?.length"
              class="cursor-pointer flex-wrap justify-start rounded-lg p-1.5"
              initial="closed"
              animate="open"
              exit="closed"
              :variants="setWrapperVariants"
              :transition="{ delay: 0.3, ease: 'easeOut' }">
              <motion.div
                v-for="item in set.items"
                :key="item"
                :variants="itemVariants"
                initial="closed"
                animate="open"
                exit="closed"
                :transition="{ delay: 0.2, type: 'spring', bounce: 0.25 }">
                <Item
                  :id="item"
                  class="
                    pointer-events-none size-full rounded-lg shadow-sm
                    drop-shadow-sm
                  "></Item>
              </motion.div>
            </motion.div>
          </motion.div>
        </PopoverContent>
      </AnimatePresence>
    </PopoverPortal>
  </Popover>
</template>
