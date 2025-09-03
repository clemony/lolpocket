<script lang="ts" setup>
import { motion } from 'motion-v'

const { champion, pocket } = defineProps<{
  champion: string
  pocket: Pocket
}>()

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

const werid = computed (() => isOdd(pocket.champions?.length - (pocket.main?.champion ? 1 : 0)))
console.log('🌱 - werid:', werid)
</script>

<template>
  <div class="max-w-full relative w-[47%] grow min-w-[31%] ">
    <AnimatePresence mode="popLayout">
      <motion.div
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
        :class="cn('size-full overflow-hidden shadow-sm drop-shadow-sm flex rounded-lg hover:ring-1.5 hover:ring-neutral/80 group/c')">
        <Champion
          :img="getSplash(champion, 'tile')"
          :alt="champion"
          :class="cn('aspect-auto inset-shadow-sm inset-shadow-black/26 h-24  group-hover/c:*:-translate-y-12 relative *:!scale-120 *:-translate-y-8 rounded-lg *:transition-all *:duration-500 *:ease-out overflow-hidden', { 'group-last/c:*:-translate-y-26 group-last/c:group-hover/c:*:-translate-y-31': isOdd(pocket.champions?.length - (pocket.main?.champion ? 1 : 0)) })">
        </Champion>
        <div
          :class="cn('size-full  opacity-0 flex-nowrap text-nc transition-all duration-200  flex items-center justify-between  !cursor-pointer absolute bg-neutral/60 left-0 pl-3 pr-2 bottom-0 group-hover/c:opacity-100')"
          @click="removeChampion(champion, pocket)">
          <h2 class="text-wrap text-pretty">
            {{ hyphenateChampionName(ix().champNameByKey(champion)) }}
          </h2>
          <button
            :title="`Remove ${champion}`"
            :aria-label="`remove ${champion} from pocket`"
            class="size-10 group/bbb grid place-items-center btn-square  cursor-pointer rounded-lg"
            hover="btn">
            <icon
              name="x"
              class="!size-6 text-nc group-hover/bbb:**:stroke-4 transition duration-200" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  </div>
</template>