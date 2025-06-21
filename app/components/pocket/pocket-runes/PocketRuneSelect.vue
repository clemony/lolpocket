<script setup lang="ts">
import { AnimatePresence, motion } from 'motion-v'

const { pathRunes, path, runes, limit } = defineProps<{
  pathRunes: PathRunes
  runes: any
  path: string
  limit?: boolean
}>()

const emit = defineEmits<{
  (e: 'update:runes', currentSet: PathRunes): void
}>()

const currentRunes = ref<PathRunes>({
  1: null,
  2: null,
  3: null,
})

const currentSet = computed(() => [
  currentRunes.value[1],
  currentRunes.value[2],
  currentRunes.value[3],
])

function handleChange(slotIndex: number, selectedKey: string) {
  const runeSlot = (slotIndex + 1) as keyof PathRunes

  currentRunes.value[runeSlot] = selectedKey
  emit('update:runes', currentRunes.value)
}

watch(() => pathRunes, (newVal) => {
  currentRunes.value = newVal
})

onMounted(() => {
  currentRunes.value = pathRunes
})
</script>

<template>
  <Field class="ease !px-0 !m-0 items-center justify-center gap-y-16 flex flex-col relative  w-full rounded-xl transition-all duration-500 **:select-none pb-16 pt-12">
    <template v-if="runes && runes.length">
      <div
        v-for="(slot, i) in runes" :key="i"
        class="cursor-pointer flex h-16 justify-evenly w-full gap-3 ">
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
                'to-b1/40  rounded-full opacity-100 scale-105 grayscale-0 ': currentSet.includes(rune.key),
                'h-full rounded-full opacity-75 transition-all duration-300 hover:opacity-100 hover:grayscale-0 group/r border-transparent relative cursor-pointer size-21.5 grid place-items-center aspect-square grayscale': rune.name !== 'empty',
              }">

              <input
                v-model="currentRunes[i + 1]"
                :value="rune.key"
                type="radio"
                class="peer hidden"
                @change="handleChange(i, rune.key)" />

              <Placeholder
                v-if="rune.name === 'empty'"
                class="size-17 cursor-not-allowed border rounded-full border-b3/50 bg-gradient-to-br shadow-inset-sm from-b3/60 to-b3/80" />

              <img
                v-else
                :src="`/img/runes/${path}/${rune.key}.webp`"
                :alt="rune.name"
                class="size-16 inset-shadow-sides inset-shadow-black/60 rounded-full tldr-30 drop-shadow-[2px_2px_2px_#00000080]"
                :class="{
                  '     opacity-94 ': currentSet.includes(rune.key),
                  '': !currentSet.includes(rune.key),
                }" />
            </label>
          </motion.div>
        </AnimatePresence>
      </div>
    </template>

    <div v-else class="size-full grid grid-cols-3 gap-y-14">
      <Placeholder v-for="i in 9" :key="i" class="size-18 rounded-full place-self-center" />
    </div>
  </Field>
</template>