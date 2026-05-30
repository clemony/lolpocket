<script lang="ts" setup>
import type { PocketPinButton } from "#components"
import { UButton } from "#components"
import type { ButtonProps, DropdownMenuItem } from "@nuxt/ui"
import { useBackpack } from "~/domain/backpack/composables/useBackpack"

const route = useRoute("pocket")
const store = pocketStore()
const pocket = computed(() => store.getPocket(String(route.params.pocket_key)))

const folderItems = computed(() => [
  {
    label: "Guide",
    icon: ""
  },
  {
    label: "Champions",
    icon: ""
  },
  {
    label: "Items",
    icon: ""
  },
  {
    label: "Runes",
    icon: ""
  }
])
const { sidebarCollapsed, toggleSidebar } = useBackpack()
const toggle = computed<ButtonProps>(() => ({
  variant: "ghost",
  color: "neutral",
  size: "md",
  ui: {
    base: cn("anchor", {
      "": sidebarCollapsed.value
    }),
    leadingIcon: "size-4.5"
  },
  icon: sidebarCollapsed.value
    ? "i-icon-park-outline-left-expand"
    : "i-icon-park-outline-left-bar",
  onClick() {
    toggleSidebar()
  }
}))

const dropdownOpen = shallowRef<boolean>(false)
const options = computed<DropdownMenuItem[]>(() => {
  return [
    {
      label: "Density",
      type: "label"
    },
    {
      label: "Compact",
      id: "compact",
      icon: "",
      slot: "check"
    }
  ]
})

const tabs = shallowRef<string>("")

onMounted(() => {
  const t = route.path.split("/")
  if (t && t.length === 4) tabs.value = "Guide"
  if (t && t.length === 5) tabs.value = t.pop() as string
})
</script>

<template>
  <UTabs
    v-model:model-value="tabs"
    variant="lift"
    :ui="{
      trigger: 'flex flex-nowrap',
      list: 'w-full before:absolute before:bottom-0 before:z-0 before:h-px before:w-full before:-translate-y-px before:bg-p3',
      leadingIcon: 'absolute! hidden',
      root: 'w-full pt-6.5'
    }"
    :content="false"
    size="lg"
    color="base"
    :items="folderItems"
    value-key="label"
    @update:model-value="
      navigateTo(`/backpack/folders/${pocket?.key}/${tabs.toLowerCase()}`)
    ">
    <template #list-leading>
      <div class="relative flex w-64 shrink-0 grow self-center pr-6 pl-1">
        <div class="absolute inset-0 flex -translate-y-6 items-center gap-2">
          <UButton v-bind="toggle" />
          <PocketIconSelect v-if="pocket" :pocket />
          <h1 class="truncate text-4xl">
            {{ pocket?.label }}
          </h1>
        </div>
      </div>
    </template>
    <template #list-trailing>
      <PocketLikes v-if="pocket" :pocket />
      <PocketPinButton v-if="pocket" :pocket />
      <UDropdownMenu
        v-model:open="dropdownOpen"
        component="dropdown"
        :content="{
          align: 'end',
          onCloseAutoFocus: (event: Event) => event.preventDefault()
        }"
        :ui="{ content: 'min-w-64' }"
        :items="options">
        <Tooltip label="Backpack Options">
          <UButton
            icon="i-gear"
            variant="ghost"
            :ui="{
              base: 'h-9 max-h-9 rounded-xl',
              leadingIcon: 'rotate-90 **:stroke-[2]'
            }" />
        </Tooltip>
      </UDropdownMenu>
    </template>
  </UTabs>
</template>
