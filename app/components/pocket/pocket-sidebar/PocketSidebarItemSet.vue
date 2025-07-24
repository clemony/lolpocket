<script lang="ts" setup>
import { AnimatePresence, easeOut, motion } from 'motion-v'
import { PopoverAnchor, PopoverContent, PopoverPortal } from 'reka-ui'

const { pocket, set } = defineProps<{
  pocket: Pocket
  set: ItemSet
}>()

const variants = {
  closed: {
    height: '60px',
    width: '60px',
    borderRadius: '0.5rem',
    zIndex: 1,
    translate: '0px 0px',
  },
  open: {
    width: '300px',
    height: 'max-content',
    zIndex: 20,
    borderRadius: '1rem',
    padding: '10px',
    translate: '-20px -40px',
  },
}

const setWrapperVariants = {
  closed: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '60px',
    gap: '2px',
  },
  open: {
    gap: '10px',
    width: '280px',
  },
}

const itemVariants = {
  closed: {
    height: '23px',
    width: '23px',
  },
  open: {
    height: '40px',
    width: '40px',
  },
}

const hovered = ref(false)
</script>

<template>
  <Popover
    v-model:open="hovered"
    @click="navigateTo(`/pocket/${pocket.key}/items`)">
    <PopoverTrigger
      class=" p-1.5 bg-b2/80 backdrop-blur-md flex flex-wrap cursor-pointer !z-1 hover:!z-2 size-20 items-between rounded-lg pointer-events-auto justify-between !gap-0.75 !border-b3/50 border">
      <template v-if="set.items && set.items?.length">
        <template
          v-for="(item, i) in set.items"
          :key="item">
          <Item
            v-if="i < 4"
            :id="item"
            class="pointer-events-none rounded-lg size-7.5">
          </Item>
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
            class="bg-b2/90 backdrop-blur-md border-b3/50 overflow-hidden border grid items-center shadow-smooth"
            :style="{
              transformOrigin: 'var(--reka-popover-content-transform-origin)',
            }"
            @mouseenter="hovered = true"
            @mouseleave="hovered = false">
            <div class="w-full flex pb-2 items-center">
              <span class="grow capitalize font-medium tracking-tight">
                {{ set.name }}
              </span>

              <button
                class="btn btn-sm btn-square btn-ghost"
                @click="deleteItemSet(pocket, set)">
                <icon name="trash" />
              </button>
            </div>

            <motion.div
              v-if="set.items && set.items?.length"
              class=" p-1.5 cursor-pointer  rounded-lg justify-start flex-wrap   "
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
                  class="pointer-events-none shadow-sm drop-shadow-sm rounded-lg size-full">
                </Item>
              </motion.div>
            </motion.div>
          </motion.div>
        </PopoverContent>
      </AnimatePresence>
    </PopoverPortal>
  </Popover>
</template>