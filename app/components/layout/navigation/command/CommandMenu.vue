<script lang="ts" setup>
import type { CommandGroup, CommandItem } from "./build/useCommandGroups"
import {
  getItems,
  isExternal,
  itemKey,
  itemSuffix,
  itemTarget,
  itemTrailingIcon,
  pageCommands,
  resolveDetailComponent,
  useCommandGroups
} from "./build/useCommandGroups"

const props = defineProps<{
  reference: HTMLElement | null
}>()

const emit = defineEmits<{
  close: []
}>()
const { pageItems } = useCommandGroups()
const route = useRoute()
const routeComponent = computed(() => route.matched[0]?.meta?.command ?? null)

const hotkeysOpen = shallowRef(false)

const stack = shallowRef<Array<{ title: string; items: CommandItem[] }>>([])
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
  <div class="flex max-h-180 min-h-0 flex-col">
    <template v-if="!activeState">
      <div v-if="routeComponent" class="border-b border-p3 px-3 py-2">
        <component :is="routeComponent" @update:open="closeMenu" />
      </div>

      <div class="grid min-h-0 flex-1 divide-y divide-p3">
        <div class="min-h-0 overflow-y-auto p-3">
          <ReferenceCommand
            :pages="pageItems"
            @update:open="(e) => openItem(e)" />
          <HelpCommand :pages="pageItems" @update:open="(e) => openItem(e)" />
        </div>
      </div>
    </template>

    <template v-else>
      <div class="flex h-11 items-center gap-2 border-b border-p3 px-3">
        <UButton
          data-command-menu-item="true"
          icon="i-arrow-left"
          size="2xs"
          variant="solid"
          color="neutral"
          class="rounded-full"
          @click="goBack" />

        <div class="min-w-0">
          <p class="truncate text-sm font-semibold text-pc">
            {{ activeState.title }}
          </p>
          <p v-if="activeLead?.suffix" class="truncate text-xs text-n4">
            {{ itemSuffix(activeLead) }}
          </p>
        </div>
      </div>

      <div class="min-h-0 flex-1 overflow-y-auto p-3">
        <component
          :is="activeDetailComponent"
          v-if="activeDetailComponent && detailEntry"
          :id="Number(detailEntry.id)" />

        <div v-else class="space-y-1">
          <UButton
            v-for="item in activeListItems"
            :key="itemKey(item)"
            data-command-menu-item="true"
            :to="item.to"
            :target="itemTarget(item)"
            :external="isExternal(item) || undefined"
            :variant="isReactive(item) ? 'soft' : 'ghost'"
            color="neutral"
            class="flex w-full items-center justify-start rounded-lg px-2.5 py-2 text-left"
            @click="openItem(item)">
            <template #leading>
              <UAvatar
                v-if="item.avatar?.src"
                :src="item.avatar.src"
                size="2xs"
                class="shrink-0" />
              <Icon
                v-else-if="item.icon"
                :name="item.icon"
                :class="
                  cn('size-4.5 shrink-0 text-n4', item.ui?.itemLeadingIcon)
                " />
            </template>

            <div class="min-w-0 grow">
              <p class="truncate text-sm font-medium text-pc">
                {{ item.label }}
              </p>
              <p v-if="item.suffix" class="mt-0.5 line-clamp-2 text-xs text-n4">
                {{ itemSuffix(item) }}
              </p>
            </div>

            <template #trailing>
              <Icon
                :name="itemTrailingIcon(item)"
                class="size-4 shrink-0 opacity-45" />
            </template>
          </UButton>
        </div>
      </div>
    </template>

    <CommandFooter
      :reference="props.reference"
      @update:open-hotkeys="(value) => (hotkeysOpen = value)" />
  </div>
</template>
