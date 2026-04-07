<script lang="ts" setup>
import { asCommandItem } from "./build/helpers"
import type { CommandItem } from "./build/useCommandGroups"
import { useCommandGroups } from "./build/useCommandGroups"
import ChampionCommand from "./reference-cards/ChampionCommand.vue"
import ItemCommand from "./reference-cards/ItemCommand.vue"
import RuneCommand from "./reference-cards/RuneCommand.vue"
import SpellCommand from "./reference-cards/SpellCommand.vue"

const props = defineProps<{
  query?: string
  reference: HTMLElement | null
}>()

const emit = defineEmits<{
  close: []
}>()

const hotkeysOpen = shallowRef(false)
const { resultGroups } = useCommandGroups({
  onNavigate: () => emit("close")
})
</script>

<template>
  <UCommandPalette
    :search-term="props.query"
    :input="false"
    value-key="value"
    :autofocus="false"
    size="lg"
    :multiple="false"
    :highlight-on-hover="false"
    selection-behavior="replace"
    :fuse="{
      fuseOptions: {
        ignoreLocation: false,
        keys: ['keys', 'label', 'suffix', 'prefix']
      },
      resultLimit: 50,
      matchAllWhenSearchEmpty: false
    }"
    :virtualize="{ estimateSize: 30 }"
    :back="{
      variant: 'solid',
      color: 'neutral',
      ui: {
        base: 'btn-2xs'
      }
    }"
    :groups="resultGroups"
    :ui="{
      root: 'max-h-180 w-full',
      back: 'm-2 mb-0 rounded-full p-0 pl-px opacity-60 hover:opacity-100 [&_svg]:box-content [&_svg]:size-4 [&_svg]:rounded-full [&_svg]:border [&_svg]:border-transparent [&_svg]:ring [&_svg]:ring-transparent [&_svg]:**:stroke-[2.4] hover:[&_svg]:border-neutral hover:[&_svg]:bg-neutral hover:[&_svg]:text-nc hover:[&_svg]:shadow-xs hover:[&_svg]:ring-neutral',
      empty: 'p-0!',
      viewport: 'max-w-179! p-0! *:overflow-y-auto',
      group: 'max-w-179 px-3',
      content:
        'h-max w-full max-w-179 flex-1 divide-y divide-p3 overflow-x-hidden overflow-y-auto p-0'
    }"
    @entry-focus.prevent>
    <template #empty>
      <span v-if="props.query" class="p-2 text-n5">No commands found</span>
    </template>

    <template #item-trailing="{ item }">
      <Icon
        v-if="asCommandItem(item)?.trailingIcon"
        :name="asCommandItem(item).trailingIcon ?? 'i-link'"
        :class="
          cn(
            'opacity-50 group-hover/item:opacity-100',
            asCommandItem(item)?.ui?.itemTrailingIcon
          )
        " />
    </template>

    <template #champion-command="{ item }">
      <ChampionCommand :id="Number(asCommandItem(item).id)" />
    </template>

    <template #item-command="{ item }">
      <ItemCommand :id="Number(asCommandItem(item).id)" />
    </template>

    <template #rune-command="{ item }">
      <RuneCommand :id="Number(asCommandItem(item).id)" />
    </template>

    <template #spell-command="{ item }">
      <SpellCommand :id="Number(asCommandItem(item).id)" />
    </template>
  </UCommandPalette>
</template>
