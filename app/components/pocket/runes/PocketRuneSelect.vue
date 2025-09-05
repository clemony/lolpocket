<script setup lang="ts">
import { AnimatePresence, motion } from 'motion-v'

const { pathRunes, path, runes, limit } = defineProps<{
  pathRunes: number[]
  runes: RunePath
  path: string | undefined
  limit?: boolean
}>()
const emit = defineEmits<{
  (e: 'update:runes', currentSet: number[]): void
}>()

const currentRunes = ref<number[]>([])

const currentSet = computed(() => [
  currentRunes.value[0],
  currentRunes.value[1],
  currentRunes.value[2],
])

function handleChange(slotTier: number, selectedKey: number) {
  console.log('🌱 - handleChange - selectedKey:', selectedKey)
  console.log('🌱 - handleChange - slotTier:', slotTier)
  currentRunes.value[slotTier] = selectedKey
  emit('update:runes', currentRunes.value)
}

const loaded = ref(false)
watch(() => pathRunes, (newVal) => {
  currentRunes.value = newVal
  loaded.value = false
})

onMounted(() => {
  currentRunes.value = pathRunes
})

/*             :initial="{ opacity: 0, scale: 0.8 }"
            :animate="{ opacity: 1, scale: 1 }"
            :exit="{ opacity: 0, scale: 0.8 }"
            :transition="{ type: 'spring' }" */

/* const gridCols = computed (() => runes.slots[0].runes.length) */
</script>

<template>
  <div
    class="items-center field-box justify-center gap-y-16 flex flex-col relative  w-full rounded-xl transition-all duration-500 **:select-none pb-16 pt-12">
    <template v-if="runes">
      <div
        v-for="(slot, i) in runes.slots.filter(r => r.tier != 0)"
        :key="i"
        class="cursor-pointer flex h-16 justify-evenly w-full gap-3 ">
        <div
          v-for="rune, ix in slot.runes"
          :key="rune.id"
          :title="rune.name === 'empty' ? 'Select a Path' : rune.name"
          class="size-fit rounded-full items-center justify-stretch"
          :class="`col-start-${rune[ix] + 1}`">
          <label
            :class="cn('h-full rounded-full opacity-75 transition-all duration-300 hover:opacity-100 hover:grayscale-0 hover:ring hover:ring-neutral relative cursor-pointer  grid place-items-center aspect-square grayscale', {
              'opacity-100 scale-110  grayscale-0 ': currentSet.includes(rune.id),

              'drop-shadow-sm shadow-sm shadow-black/20': loaded,
            })">

            <input
              v-model="currentSet[i]"
              :value="rune.id"
              type="radio"
              :name="`tier-${i}`"
              class="peer hidden"
              @change="handleChange(i, rune.id)" />
            <Placeholder
              v-if="rune.name === ''"
              class="size-17 cursor-not-allowed border rounded-full border-b3/50 bg-gradient-to-br shadow-inset-sm from-b3/60 to-b3/80" />

            <img
              v-else
              :src="`/img/runes/${path}/${rune.id}.webp`"
              :alt="rune.name"
              class="size-16 transition-all duration-300 bg-b3/80 rounded-full "
              :class="{
                /* ring-2 ring-offset-6 ring-neutral/40 ring-offset-b2 */
                'opacity-94': currentSet.includes(rune.id),
                /* drop-shadow-[2px_2px_2px_#00000080] */
                ' inset-shadow-sides inset-shadow-black/60 ': loaded,
              }"
              @load="loaded = true" />
          </label>
        </div>
      </div>
    </template>
    <div
      v-else
      class="size-full grid grid-cols-3 gap-y-14">
      <Placeholder
        v-for="i in 9"
        :key="i"
        class="size-18 rounded-full place-self-center" />
    </div>
  </div>
</template>