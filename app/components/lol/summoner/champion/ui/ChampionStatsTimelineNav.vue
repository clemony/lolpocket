<script lang="ts" setup>
import type { ShallowRef } from 'vue'
import { useRouteHash } from '@vueuse/router'

const { summoner } = defineProps<{
  summoner: ShallowRef<Summoner>
}>()
const items = [
  {
    id: 'summary',
    name: 'summary',
    class: '**:stroke-[2]',
    icon: 'infinity'
  },
  {
    id: 'spells',
    name: 'spells',
    class: 'size-4.5 opacity-80',
    icon: 'role:mage',
  },
  {
    id: 'items',
    name: 'items',
    icon: 'lol:regen',
  },
  {
    id: 'runes',
    name: 'runes',
    class: 'size-5! fill-bc active:fill-nc',
    icon: 'lol:runes'
  },
  {
    id: 'skills',
    name: 'Abilities',
    icon: 'fluent-mdl2:venn-diagram',
  },
/*   {
    id: 'stats',
    name: 'Match Stats',
    class: 'size-4.5 **:stroke-[1.8]',
    icon: 'tabler:chart-arcs'
  },
  {
    id: 'duos',
    name: 'duos',
    icon: 'fluent-mdl2:venn-diagram',
  },
  {
    id: 'allies',
    name: 'allies',
    class: 'size-6',
    icon: 'heart-sm-outline',
  }, */
]

const { activeIndex, progressBetween, progressOverall, sections }
  = useScrollSectionsInject()
const section = useRouteHash()

const isActive = (i: number) => i === activeIndex.value
const isNext = (i: number) => i === activeIndex.value + 1
</script>

<template>
  <menu class="relative flex flex-col justify-center py-3">
    <!--    <Separator
      class="absolute inset-y-0 top-0 left-9 z-0 *:w-1"
      orientation="vertical">
      <div
        class="rounded-full bg-neutral transition-all"
        :style="{
          height: `${progressOverall}%`,
        }" />
    </Separator>
     <MasteryProgress
      :mastery
      progress
      :current="progressOverall" /> -->
    <Button
      v-for="item, i in items"
      :key="i"
      variant="link"
      as="a"
      :class="cn('flex items-center justify-start px-0 text-bc/50 duration-0 hover:text-bc', { 'text-bc': i === activeIndex })"
      size="12"
      @click="section = `#${item.id}`">
      <Icon
        name="right"
        :class="cn('size-4 opacity-0 transition-opacity duration-150', { 'opacity-100': i === activeIndex })" />
      <span :class="cn('text-3 font-light! capitalize', { 'text-5 font-bold! ': i === activeIndex })">
        {{ item.name }}
      </span>
    </Button>
  </menu>
</template>