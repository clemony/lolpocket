<script setup lang="ts">
import { Presence } from 'reka-ui'

const { champion, class: className, pocket: p } = defineProps<{
  class?: HTMLAttributes['class']
  champion: ChampionIndex
  pocket: Pocket
}>()

const pocket = computed (() => p)

const open = shallowRef<boolean>(false)
const hover = shallowRef<boolean>(false)
const debounced = refDebounced(hover, 400)

const active = computed (() => open.value || debounced.value)

watch(() => active.value, (newVal) => {
  console.log('💠 - watch - newVal:', newVal)
})
</script>

<template>
  <Popover
    ref="target"
    v-model:open="open">
    <PopoverTrigger
      class="hover:ring hover:ring-offset-3 ring-offset-b1 ring-bc/50 data-[state=open]:ring-offset-3 data-[state=open]:ring group cursor-pointer rounded-lg size-26 "
      @mouseover="hover = true"
      @mouseleave="!open ? hover = false : null"
      @focusin="hover = true"
      @focusout="!open ? hover = false : null"
      @dblclick="pocket.champions.push(champion.key)">
      <ChampionIcon
        :id="champion.id"
        class="rounded-lg"
        :title="champion.name">
        <PrismaticShine
          v-if="active === true"
          class="scale-111 " />
      </ChampionIcon>
    </PopoverTrigger>
    <PopoverContent
      v-if="open"
      align="start"
      class="w-54 p-1.5">
      <PopoverItem
        class=""
        @click="navigateTo(`/champions/${champion.key}`)">
        <icon
          name="open"
          class="size-5" />
        {{ champion.name }} Info
      </PopoverItem>
      <DropdownMenuSeparator />
      <tippy
        :tag="null"
        placement="right-start"
        :interactive="true"
        :offset="[0, 6]"
        theme="base"
        :hide-on-click="true">
        <PopoverItem
          as="label">
          <icon
            name="add" />
          <input
            v-model="pocket.champions"
            :aria-label="champion.name"
            type="checkbox"
            :value="champion.key"
            class="peer hidden" />
          Add to pocket
        </PopoverItem>

        <template #content>
          <button
            class="w-48 rounded-lg cursor-pointer hover:underline h-7 flex justify-between items-center"
            @click="as().settings.closedDblClickChampion">
            ...or double-click icon.

            <icon
              name="x"
              class="size-4" />
          </button>
        </template>
      </tippy>
    </PopoverContent>
  </Popover>
</template>