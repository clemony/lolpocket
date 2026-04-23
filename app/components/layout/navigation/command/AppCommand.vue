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
import type { CommandGroup } from "./build/useCommandGroups"
import { useCommandGroups } from "./build/useCommandGroups"
const route = useRoute()

const open = ref(false)
const query = shallowRef<string>("")
const panelMeasure = useTemplateRef<HTMLElement>("panelMeasure")
const panelRoot = useTemplateRef<HTMLElement>("panelRoot")
const commandInput = useTemplateRef<{ inputRef: HTMLInputElement | null }>(
  "commandInput"
)

const { command } = safeObject(inject<UiController>("app"))

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

function closeCommand() {
  if (!command) return
  command.open.value = false
}
const activeComponent = shallowRef<string | null>("menu")
const component: Record<string, Component> = {
  inbox: LazyCommandInbox,
  hotkeys: LazyCommandHotkeys,
  menu: LazyCommandMenu,
  search: LazyCommandPalette
}

watch(
  () => route.fullPath,
  (newVal, oldVal) => {
    closeCommand()
    if (oldVal !== newVal) query.value = ""
  }
)
const { groups } = useCommandGroups()
const groupMap = computed<Record<string, CommandGroup | undefined>>(() =>
  Object.fromEntries(groups.value.map((group) => [group.id, group]))
)

const backpack = computed(() => safeObject(groupMap.value.backpack))

const handleUpdate = (id: string) => {
  return activeComponent.value === id
    ? (activeComponent.value = "menu")
    : (activeComponent.value = id)
}
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
        content:
          'z-[120] overflow-hidden rounded-xl bg-p0/94 p-0! bg-blend-screen shadow-lg shadow-black/8 drop-shadow-none backdrop-blur-lg'
      }">
      <template #content>
        <div
          ref="panelRoot"
          class="w-188 overflow-hidden transition-[height] duration-120 ease-out motion-reduce:transition-none"
          :style="panelStyle">
          <div ref="panelMeasure" class="w-188">
            <!--      <LazyCommandHeader :backpack /> -->
            <div class="relative flex max-h-180 w-full">
              <div class="relative max-h-[inherit] w-58 border-r border-p3/80">
                <LazyCommandSidebar :backpack />
              </div>

              <component
                :is="component[activeComponent ?? 'menu']"
                :groups="groupMap"
                :query="searchQuery"
                :reference="panelMeasure"
                @close="closeCommand()" />
            </div>
            <LazyCommandFooter
              v-if="reference"
              :reference
              @update:open="(e) => handleUpdate(e)" />
          </div>
        </div>
      </template>
    </UPopover>
  </div>
</template>
