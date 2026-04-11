<script lang="ts" setup>
import type { AccordionItem, NavigationMenuItem } from "@nuxt/ui"
import type { CommandGroup, CommandItem } from "./build/useCommandGroups"
import {
  getItems,
  isActive,
  isExternal,
  itemKey,
  itemSuffix,
  itemTarget,
  itemTrailingIcon,
  resolveDetailComponent,
  useCommandGroups
} from "./build/useCommandGroups"

const props = defineProps<{
  reference: HTMLElement | null
  groups: Record<string, CommandGroup | undefined>
}>()

const emit = defineEmits<{
  close: []
}>()
const groupMap = computed(() => safeObject(props.groups))
const route = useRoute()
const routeComponent = computed(() => route.matched[0]?.meta?.command ?? null)

const nexusToolsGroup = computed(() => [
  groupMap.value.nexus,
  groupMap.value.tools
])

const helpGroup = computed(() => safeObject(groupMap.value.help))

const referenceGroup = computed(() => ({
  library: groupMap.value.library,
  reference: groupMap.value.reference
}))

const stack = shallowRef<Array<{ title: string; items: CommandItem[] }>>([])
const activePrefix = computed(() => stack.value.at(-2)?.title ?? null)
const activeState = computed(() => stack.value.at(-1) ?? null)
const activeItems = computed(() => activeState.value?.items ?? [])
const activeLead = computed(
  () => activeItems.value.find((item) => item.slot === "label") ?? null
)
const activeListItems = computed(() =>
  activeItems.value.filter((item) => item.slot !== "label")
)

const detailEntry = computed(() => {
  const [entry] = activeListItems.value
  if (!entry || activeListItems.value.length !== 1) {
    return null
  }

  return resolveDetailComponent(entry.slot) ? entry : null
})

const activeDetailComponent = computed(() =>
  detailEntry.value ? resolveDetailComponent(detailEntry.value.slot) : null
)

watch(
  () => route.fullPath,
  () => {
    stack.value = []
  }
)

function closeMenu() {
  emit("close")
}

function openItem(item: CommandItem) {
  if (item.children?.length) {
    stack.value = [
      ...stack.value,
      {
        title: item.label ?? activeState.value?.title ?? "Browse",
        items: item.children
      }
    ]
    return
  }

  closeMenu()
}

function goBack() {
  stack.value = stack.value.slice(0, -1)
}
</script>

<template>
  <div class="flex max-h-180 min-h-0 grow flex-col">
    <template v-if="!activeState">
      <div
        class="grid min-h-0 flex-1 divide-y divide-p3 overflow-x-hidden overflow-y-auto overscroll-contain">
        <div v-if="routeComponent" class="border-b border-p3 py-2">
          <component :is="routeComponent" @update:open="closeMenu" />
        </div>

        <div class="w-full px-3">
          <template v-for="(item, i) in nexusToolsGroup" :key="i">
            <CommandGroup v-if="item" :items="item" class="border-y-0" />
          </template>
        </div>
        <ReferenceCommand
          v-if="referenceGroup.library || referenceGroup.reference"
          :groups="referenceGroup"
          @update:open="(item) => openItem(item)" />

        <div class="w-full space-y-1 py-3 pr-2 pl-3.5">
          <UUser
            size="xl"
            :ui="{
              root: cn('ml-1.25 py-2', helpGroup.description ? 'mb-1' : ''),
              name: 'mb-1',
              wrapper: 'pr-6'
            }"
            :name="helpGroup.label"
            :description="helpGroup.description ?? undefined" />

          <CommandCollapse
            v-for="(group, i) in helpGroup.items"
            :key="i"
            :group />
        </div>
      </div>
    </template>

    <template v-else>
      <UButton
        variant="link"
        data-command-menu-item="true"
        class="flex h-10 shrink-0 items-center gap-2 border-b border-p3 px-3"
        @click="goBack">
        <span
          class="grid size-6 place-items-center rounded-md group-hover/btn:bg-neutral group-hover/btn:**:text-nc">
          <Icon name="i-arrow-left" size="2xs" class="size-4" />
        </span>

        <div
          class="inline-flex min-w-0 items-center gap-1.5 align-baseline *:align-baseline">
          <span
            v-if="activePrefix"
            class="truncate text-sm font-medium text-n5">
            {{ activePrefix }}
            <Icon
              name="i-right"
              class="ml-0.5 inline size-3 translate-y-[0.5px] align-baseline text-n5" />
          </span>
          <span class="truncate text-sm font-medium text-pc">
            {{ activeState.title }}
          </span>
          <span v-if="activeLead?.suffix" class="truncate text-xs text-n4">
            {{ itemSuffix(activeLead) }}
          </span>
        </div>
      </UButton>

      <div class="min-h-0 flex-1 overflow-y-auto p-3">
        <component
          :is="activeDetailComponent"
          v-if="activeDetailComponent && detailEntry"
          :id="Number(detailEntry.id)" />

        <div v-else class="space-y-1">
          <CommandButton
            v-for="item in activeListItems"
            :key="itemKey(item)"
            :item
            :value="item.value"
            @update:open="(item) => openItem(item as CommandItem)" />
        </div>
      </div>
    </template>
  </div>
</template>
