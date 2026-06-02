<script lang="ts" setup>
import {
  LazyCommandHotkeys,
  LazyCommandInbox,
  LazyCommandMenu,
  LazyCommandPalette
} from "#components"
import type { PopoverProps } from "@nuxt/ui"
import { focusTrigger, onContentInteractOutside } from "./build/helpers"
import { useCommandFocusNavigation } from "./build/useCommandFocusNavigation"
const route = useRoute()

const query = shallowRef<string>("")
const panelMeasure = useTemplateRef<HTMLElement>("panelMeasure")
const panelRoot = useTemplateRef<HTMLElement>("panelRoot")
const commandInput = useTemplateRef<{ inputRef: HTMLInputElement | null }>(
  "commandInput"
)

const { state, toggle, close } = useApp().command

const reference = computed(() => commandInput.value?.inputRef ?? undefined)
const searchQuery = computed(() => query.value.trim())
const hasQuery = computed(() => searchQuery.value.length > 0)
const { height: panelHeight } = useElementSize(panelMeasure)
const panelStyle = computed(() => {
  const height = Math.ceil(panelHeight.value)

  if (!state.value || height <= 0) {
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

useCommandFocusNavigation({
  state,
  panel: panelRoot,
  trigger: reference
})

defineShortcuts({
  meta_k: {
    usingInput: true,
    handler: () => focusTrigger(state, reference.value)
  }
})

const activeComponent = shallowRef<string | null>("menu")
const component: Record<string, Component> = {
  inbox: LazyCommandInbox,
  notifications: LazyCommandInbox,
  hotkeys: LazyCommandHotkeys,
  menu: LazyCommandMenu,
  search: LazyCommandPalette
}

watch(
  () => route.fullPath,
  (newVal, oldVal) => {
    close()
    if (oldVal !== newVal) query.value = ""
  }
)

const handleUpdate = (id: string) => {
  return activeComponent.value === id
    ? (activeComponent.value = "menu")
    : (activeComponent.value = id)
}

const modalOpen = shallowRef<boolean>(false)

watch(
  () => modalOpen.value,
  (v) => {
    console.log("💠 - watch - newVal:", v)
  }
)
</script>

<template>
  <div class="relative">
    <CommandInput
      ref="commandInput"
      v-model:open="state"
      @update:model-value="(value: string) => (query = value)" />

    <UPopover
      v-model:open="state"
      :reference="reference"
      :content="content"
      :ui="{
        content: cn(
          'overflow-hidden bg-p0/94 p-0! bg-blend-screen shadow-lg shadow-black/8 drop-shadow-none backdrop-blur-lg duration-300',
          {
            'opacity-0 pointer-events-none duration-50! shadow-none backdrop-blur-none z-0':
              modalOpen
          }
        )
      }">
      <template #content>
        <div
          ref="panelRoot"
          class="w-188 overflow-hidden transition-[height] duration-120 ease-out motion-reduce:transition-none"
          :style="panelStyle">
          <div ref="panelMeasure" class="w-188">
            <div class="relative flex max-h-180 w-full">
              <div class="relative max-h-[inherit] w-58 border-r border-p3/80">
                <LazyCommandSidebar
                  :active-component
                  @update:component="handleUpdate($event)" />
              </div>

              <component
                :is="component[activeComponent ?? 'menu']"
                :query="searchQuery"
                :active-component
                :reference="panelMeasure"
                @update-modal="modalOpen = $event"
                @close="close()" />
            </div>
            <LazyCommandFooter
              v-if="reference"
              :reference
              @update:open="(e: string) => handleUpdate(e)" />
          </div>
        </div>
      </template>
    </UPopover>
  </div>
</template>
