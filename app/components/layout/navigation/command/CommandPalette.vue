<script lang="ts" setup>
import type { ReferenceElement } from "reka-ui"
import { internalInputProps } from "./useCommand"
import { useCommandGroups } from "./useCommandGroups"

const props = defineProps<{
  query?: string
  reference: HTMLElement | null
}>()

const emit = defineEmits(["update:open"])

const hotkeysOpen = shallowRef<boolean>(false)
const menuLevel = shallowRef<number>(0)
const inSubmenu = defineModel<boolean>("inSubmenu", { default: false })
const { resultGroups } = useCommandGroups(menuLevel)

function onBackClick(_event: MouseEvent): void {
  inSubmenu.value = false
  menuLevel.value = menuLevel.value - 1
}
</script>

<template>
  <LazyUCommandPalette
    ref="commandPalette"
    :search-term="props.query"
    value-key="value"
    :autofocus="false"
    :input="internalInputProps"
    :back="{
      onClick: onBackClick,
    }"
    size="lg"
    :multiple="false"
    :highlight-on-hover="false"
    :highlight="false"
    selection-behavior="replace"
    :fuse="{
      fuseOptions: {
        keys: ['keys', 'label', 'suffix', 'prefix'],
      },
      resultLimit: 50,
      ignoreLocation: false,
      matchAllWhenSearchEmpty: false,
    }"
    :virtualize="{ estimateSize: 30 }"
    :groups="resultGroups"
    :ui="{
      root: 'max-h-180 max-w-179 [&_svg]:size-4.25 [&_svg]:**:stroke-[2.4]',
      empty: 'p-0!',
      back: '-translate-x-1 rounded-full p-0 pl-px opacity-50 hover:opacity-90 [&_svg]:box-content [&_svg]:size-4 [&_svg]:rounded-full [&_svg]:border [&_svg]:border-transparent [&_svg]:ring [&_svg]:ring-transparent [&_svg]:**:stroke-[2.4] hover:[&_svg]:border-neutral hover:[&_svg]:bg-neutral hover:[&_svg]:text-nc hover:[&_svg]:shadow-xs hover:[&_svg]:ring-neutral',
      input: cn(
        'z-2 h-0 border-0 p-0 ring-0! [&_button]:w-full! [&_input]:opacity-0 [&_span]:h-11 [&_span]:w-full [&_span]:px-4 [&_svg]:hidden!',
        {
          hidden: !inSubmenu || !query,
        },
      ),
      viewport: cn('max-w-179! p-0!', {
        'gap-2': !inSubmenu && !query,
      }),
      group: cn('max-w-179 px-3', {
        'border-0': !inSubmenu && !query,
      }),
      content:
        'h-max w-full max-w-179 flex-1 divide-y divide-p3 overflow-x-hidden p-0',
    }"
    @entry-focus.prevent>
    <!-- empty -->
    <template #empty>
      <span v-if="props.query" class="p-2 text-n5">No commands found</span>
    </template>
    <!-- trailing -->

    <template #item-trailing="{ item }">
      <Icon
        v-if="item?.trailingIcon"
        :name="item?.trailingIcon"
        :class="
          cn(
            'opacity-50 group-hover/item:opacity-100',
            item?.ui?.itemTrailingIcon,
          )
        " />
    </template>

    <!-- item-command -->
    <template #item-command="{ item }">
      <LazyItemCommand :id="item.id" />
    </template>

    <!-- footer -->

    <template #footer>
      <CommandFooter
        :reference="reference"
        @update:open-hotkeys="(e) => (hotkeysOpen = e)" />
    </template>
  </LazyUCommandPalette>
</template>
