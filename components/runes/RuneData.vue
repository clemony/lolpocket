<script setup lang="ts">
import { formatDataText } from './data/format'

const ts = useTempStore()
const ds = useDataStore()
const rune = computed (() => {
  return ts.hoveredRune ? ts.hoveredRune : createDefaultRune()
})

const pathName = computed (() => {
  return getRunePathName(rune.value.id, ds.paths)
})
</script>

<template>
  <div class="relative -mt-2 flex w-110 justify-center flex-col   ">
    <div
      class="border-b3 mb-8 grid w-full grid-cols-[0.7fr_2fr]  border-b pb-6"
    >
      <div
        class="group/link relative col-start-1 h-full items-center justify-center"
      >
        <img
          :key="rune.name"
          :src="`/img/runes/${pathName.toLowerCase()}/${rune.name.replace(/\s/g, '')}.webp`"
          :alt="`${rune.name} Image`"
          class="'ring-b3 inset-shadow-sm pointer-events-none size-20 rounded-full bg-black ring-1 "
        />
      </div>

      <div class="grid h-full grid-cols-1 gap-2 py-2">
        <a
          v-tippy="{ content: 'View on Official Wiki', placement: 'right-end', offset: [-20, 3] }"
          class=" gap-3 items-center w-full transition-all duration-300 *:dst  flex"
          :href="getWikiLink(rune.name)"
          target="_blank"
          alt="link to league wiki"
        >
          <h1
            class=" leading-4   grow-underline tracking-tight dst"
          >
            {{ rune.name }}
          </h1>

          <icon name="link" class="size-4.5" />

        </a>

        <div class="flex gap-3 items-center w-full">
          <img :src="`img/runes/${pathName.toLowerCase()}.webp`" class="h-6 w-auto dst" />
          <span class="text-4 font-medium grow">{{ pathName }}</span>
        </div>
      </div>
    </div>

    <div :key="`${rune.name}2`" class="relative">
      <div
        id="runeStats"
        :key="`${rune.name}3`"
        class="max-w-105  !text-3 text-pretty whitespace-pre-line"
        v-html="formatDataText(rune.longDesc)"
      ></div>
    </div>
  </div>
</template>

<style scoped></style>
