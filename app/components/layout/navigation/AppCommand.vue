<script lang="ts" setup>
import type { ReferenceElement } from "reka-ui"
import { focusTrigger, onContentInteractOutside } from "./command/useCommand"
import { useCommandFocusNavigation } from "./command/useCommandFocusNavigation"

const route = useRoute()

const selected = ref<string | null>(null)
const inSubmenu = ref<boolean>(false)
const open = ref<boolean>(false)
const query = shallowRef<string>("")
const panelMeasure = useTemplateRef<HTMLElement>("panelMeasure")
const panelRoot = useTemplateRef<HTMLElement>("panelRoot")
const commandInput = useTemplateRef<{ inputRef: HTMLInputElement | null }>(
  "commandInput",
)
const reference = computed(() => commandInput.value?.inputRef ?? undefined)
const { height: panelHeight } = useElementSize(panelMeasure)
const panelStyle = computed(() => {
  const height = Math.ceil(panelHeight.value)

  if (!open.value || height <= 0) {
    return undefined
  }

  return { height: `${height}px` }
})

const content = {
  align: "center" as const,
  sideOffset: 4,
  onInteractOutside: (e: Event) => onContentInteractOutside(e, reference.value),
}

useCommandFocusNavigation({
  open,
  panel: panelRoot,
  trigger: reference,
})

defineShortcuts({
  meta_k: {
    usingInput: true,
    handler: () => focusTrigger(open, reference.value),
  },
})

watch(selected, (next, previous) => {
  if (next == null || next === previous) {
    return
  }
  open.value = false
})

watch(
  () => route.fullPath,
  () => {
    open.value = false
    selected.value = null
    inSubmenu.value = false
  },
)
</script>

<template>
  <div class="relative">
    <CommandInput
      ref="commandInput"
      v-model:open="open"
      @update:model-value="(value: string) => (query = value)" />

    <UPopover
      v-model:open="open"
      :reference="reference"
      :content="content"
      :ui="{
        content: 'overflow-hidden rounded-xl bg-p0/94 p-0!',
      }"
      @update:open="(nextOpen) => (!nextOpen ? (selected = null) : undefined)">
      <template #content>
        <div
          ref="panelRoot"
          class="w-179 overflow-hidden transition-[height] duration-120 ease-out motion-reduce:transition-none"
          :style="panelStyle">
          <div ref="panelMeasure" class="w-179">
            <LazyCommandMenu
              v-if="!query"
              :reference="panelMeasure"
              @update:open="(e: Event) => (open = false)" />
            <LazyCommandPalette
              v-else
              v-model="selected"
              v-model:in-submenu="inSubmenu"
              :reference="panelMeasure"
              :query="query" />
          </div>
        </div>
      </template>
    </UPopover>
  </div>
</template>
