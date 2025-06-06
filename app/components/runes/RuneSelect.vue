<script setup lang="ts">
import { AnimatePresence, motion } from 'motion-v'

const { runes } = defineProps<{
  runes: any
}>()

const emit = defineEmits(['update:rune'])

const selected = ref(null)
</script>

<template>
  <div class=" !px-0 !m-0 items-center justify-center gap-y-10 flex flex-col relative  w-full rounded-xl transition-all duration-500 **:select-none pb-16 pt-12">
    <template v-if="runes && runes.length">
      <div
        v-for="(slot, i) in runes" :key="i"
        class="cursor-pointer flex  justify-evenly w-full gap-3 ">
        <AnimatePresence
          v-for="rune in slot"
          :key="rune.id">
          <motion.div
            v-tippy="rune.name === 'empty' ? 'Select a Path' : rune.name"

            :initial="{ opacity: 0, scale: 0.8 }"
            :animate="{ opacity: 1, scale: 1 }"
            :exit="{ opacity: 0, scale: 0.8 }"
            :transition="{ type: 'spring' }"
            class="size-fit rounded-full items-center justify-center"
            :class="`col-start-${rune.runeIndex + 1}`">
            <label
              :class="{
                'to-b1/40  rounded-full opacity-100 scale-105 grayscale-0 ': selected == rune.key,
                'h-full rounded-full opacity-75 transition-all duration-300 hover:opacity-100 hover:grayscale-0 group/r border-transparent relative cursor-pointer size-20 grid place-items-center aspect-square grayscale': rune.name !== 'empty',
              }">

              <input
                v-model="selected"
                :value="rune.key"
                type="radio"
                class="peer hidden"
                @change="emit('update:rune', selected)" />

              <img

                :src="`/img/runes/${rune.path}/${rune.key}.webp`"
                :alt="rune.name"
                class="size-full inset-shadow-sides inset-shadow-black/60 rounded-full tldr-30 drop-shadow-[2px_2px_2px_#00000080]"
                :class="{ 'opacity-94 ': selected == rune.key }" />
            </label>
          </motion.div>
        </AnimatePresence>
      </div>
    </template>

    <div v-else class="size-full grid grid-cols-3 gap-y-14">
      <Placeholder v-for="i in 9" :key="i" class="size-18 rounded-full place-self-center" />
    </div>
  </div>
</template>