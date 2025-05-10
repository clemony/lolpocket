<script setup lang="ts">
import { formatDataText } from 'components/runes/data/format'

const rs = useRuneStore()
const ds = useDataStore()

const rune = computed (() => {
  return rs.hoveredRune
})

const pathName = computed (() => {
  return getRunePathName(rune.value.id, ds.paths)
})
</script>

<template>
  <Collapsible v-if="rune">
    <CollapsibleTrigger class="w-full group/btn">
      <NavBtn>
        <img
          v-if="rune"
          :key="rune.name"
          :src="`/img/runes/${pathName.toLowerCase()}/${rune.name.replace(/\s/g, '')}.webp`"
          :alt="`${rune.name} Image`"
          class="'pointer-events-none size-8.5 rounded-full  bg-black ring-1 shadow-sm drop-shadow-sm ring-b3 inset-shadow-sm " />
        {{ rune.name }}
        <Grow />

        <icon name="up-sm" class="group-data-[state=open]/btn:rotate-180 size-4.5 tldr-20 " />
      </NavBtn>
    </CollapsibleTrigger>
    <CollapsibleContent class="px-3">
      <div class="flex flex-col  pl-4 gap-2 pt-2 pb-3 w-full pr-8">
        <div class="flex gap-3 items-center text-2">
          <img :src="`/img/runes/${pathName}.webp`" class="h-6 w-auto dst" :class="{ '!h-5': pathName.toLowerCase() == 'inspiration' }" />
          <span class="font-medium grow">{{ pathName }}</span>
        </div>
        <a
          class="items-center hover:underline underline-offset-2 border-b-transparent transition dr-20 text-2 flex gap-3 group/link"
          :href="getWikiLink(rune.name)"
          target="_blank"
          alt="link to league wiki">
          <icon name="la:wikipedia-w" class="size-5 dst" />
          Official Wiki
          <icon name="link"  class="size-3.5 opacity-0 tldr-20 group-hover/link:opacity-100"/>
        </a>
      </div>
      <div :key="`${rune.name}2`" class="relative">
        <div
          id="runeStats"
          :key="`${rune.name}3`"
          class="max-w-105  !text-3 text-pretty whitespace-pre-line"
          v-html="formatDataText(rune.longDesc)"></div>
      </div>
    </CollapsibleContent>
  </Collapsible>
</template>

<style scoped></style>
