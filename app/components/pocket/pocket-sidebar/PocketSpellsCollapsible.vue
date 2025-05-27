<script lang="ts" setup>
import { VueDraggable } from 'vue-draggable-plus'
import { summonerSpells } from '~~/data/data/spells'

const props = defineProps<{
  pocket: Pocket
}>()

const pocket = computed (() => {
  return props.pocket
})

const dragging = ref(false)
const dragData = ref(null)
function onStart(e) {
  dragData.value = e.data
  nextTick(() => {
    dragging.value = true
  })
}

function onEnd(e) {
  dragData.value = null
  dragging.value = false
}

const img = computed (() => {
  return dragging.value
    ? {
        0: `/img/spells/${(dragData.value?.[0] ?? getRandom(summonerSpells.map(s => s.name))).toLowerCase()}.webp`,
        1: `/img/spells/${(dragData.value?.[1] ?? getRandom(summonerSpells.map(s => s.name))).toLowerCase()}.webp`,
      }
    : {
        0: `/img/spells/${pocket.value?.spells?.[0]?.[0] ?? getRandom(summonerSpells.map(s => s.name))}.webp`,
        1: `/img/spells/${pocket.value?.spells?.[0]?.[1] ?? getRandom(summonerSpells.map(s => s.name))}.webp`,
      }
})
const isOpen = ref(false)
const toggleOpen = useToggle(isOpen)
function handleClick(i) {
  if (i != 0)
    return
  toggleOpen()
}
</script>

<template>
  <Collapsible v-model:open="isOpen" as="div" class="field-box relative">
    <CollapsibleTrigger class="w-full group/state group" @click.stop.prevent>
      <Btn field class="w-full h-22 pl-4 pr-2 py-3 [&_.trash-button]:hidden">
        <LazySpellSet :set="pocket.spells[0]" :pocket="pocket" :set-index="0" hydrate-on-visible class="cursor-pointer" />

        <Grow />
        <PlusMinusExpand />
      </Btn>
    </CollapsibleTrigger>
    <LazyCollapsibleContent class="CollapsibleContent ">
      <VueDraggable
        v-if="pocket.spells"
        v-model="pocket.spells"
        ghost-class=".spell-set-ghost"
        drag-class=".spell-set-drag"
        chosen-class=".spell-set-chosen"
        direction="vertical"
        draggable=".draggable-spells"
        class="grid h-full w-98 pr-12 pl-4 z-1  pt-1 gap-4"
        @start="onStart($event)" @end="onEnd($event)">
        <div v-for="(set, i) in pocket.spells" :key="i" class="draggable-spells cursor-move items-center w-full first:absolute first:pr-12 first:w-94 first:top-3 first:left-4 h-16 flex gap-7 " @click="handleClick(i)">
          <LazySpellSet :set="set" :pocket="pocket" :set-index="i" hydrate-on-visible />
        </div>
      </VueDraggable>

      <Separator class="bg-b3/40 mt-4" />
      <Btn class="rounded-t-none w-full !text-2 !font-medium justify-end opacity-70 hover:opacity-100 !gap-2" @click="newSpellSet(pocket.key)">
        <icon name="add-sm" />New Spell Set
      </Btn>
    </LazyCollapsibleContent>
  </Collapsible>
</template>