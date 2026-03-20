<script lang="ts" setup>
import type { PopoverProps } from "@nuxt/ui"
import { buildSummonerRootPath } from "~/domain/summoner/utils/route"
import { getSummonerIcon } from "~/domain/utils/img"
import { focusTrigger, onContentInteractOutside } from "./build/helpers"
import { useCommandFocusNavigation } from "./build/useCommandFocusNavigation"

const route = useRoute()

const open = ref(false)
const query = shallowRef<string>("")
const panelMeasure = useTemplateRef<HTMLElement>("panelMeasure")
const panelRoot = useTemplateRef<HTMLElement>("panelRoot")
const commandInput = useTemplateRef<{ inputRef: HTMLInputElement | null }>(
  "commandInput"
)
const reference = computed(() => commandInput.value?.inputRef ?? undefined)
const searchQuery = computed(() => query.value.trim())
const hasQuery = computed(() => searchQuery.value.length > 0)
const { height: panelHeight } = useElementSize(panelMeasure)
const panelStyle = computed(() => {
  const height = Math.ceil(panelHeight.value)

  if (!open.value || height <= 0) {
    return undefined
  }

  return { height: `${height}px` }
})

const content: PopoverProps["content"] = {
  align: "center" as const,
  sideOffset: 4,
  updatePositionStrategy: "always",
  onInteractOutside: (e: Event) => onContentInteractOutside(e, reference.value)
}

function closeCommand(resetQuery = true) {
  open.value = false

  if (resetQuery) {
    query.value = ""
  }
}

useCommandFocusNavigation({
  open,
  panel: panelRoot,
  trigger: reference
})

defineShortcuts({
  meta_k: {
    usingInput: true,
    handler: () => focusTrigger(open, reference.value)
  }
})

watch(
  () => route.fullPath,
  () => {
    closeCommand()
  }
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
        content: 'overflow-hidden rounded-xl bg-p0/94 p-0!'
      }"
      @update:open="(nextOpen) => (!nextOpen ? closeCommand() : undefined)">
      <template #content>
        <div
          ref="panelRoot"
          class="w-179 overflow-hidden transition-[height] duration-120 ease-out motion-reduce:transition-none"
          :style="panelStyle">
          <div ref="panelMeasure" class="w-179">
            <div class="flex h-10 items-center border-b border-p3 px-3">
              <UUser
                size="2xs"
                :ui="{
                  root: 'gap-1',
                  name: 'text-lg font-bold text-n2',
                  wrapper: 'inline-flex items-center gap-1 align-baseline',
                  description:
                    'ml-0.5 inline-flex items-center align-baseline text-sm font-medium text-n4'
                }"
                :name="user().account?.name || user().account?.name || 'Hello.'"
                :to="buildSummonerRootPath(user().account)"
                :avatar="{
                  src: getSummonerIcon(user().account?.icon),
                  icon: 'i-plug'
                }">
                <template #description>
                  <Icon name="i-hash" class="inline size-3.25 text-n4" />{{
                    user().account?.tag
                  }}
                </template>
              </UUser>
            </div>
            <LazyCommandMenu
              v-if="!hasQuery"
              :reference="panelMeasure"
              @close="closeCommand()" />
            <LazyCommandPalette
              v-else
              :reference="panelMeasure"
              :query="searchQuery"
              @close="closeCommand()" />
          </div>
        </div>
      </template>
    </UPopover>
  </div>
</template>
