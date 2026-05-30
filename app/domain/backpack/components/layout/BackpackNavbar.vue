<script lang="ts" setup>
import type { ButtonProps, DropdownMenuItem, ListboxItem } from "@nuxt/ui"
import { useTableInject } from "~/composables/ui/useTableProvider"
import { useBackpack } from "~/domain/backpack/composables/useBackpack"

const { view } = useBackpack()

const viewModes = [
  {
    label: " ",
    value: "empty0",
    icon: "",
    ui: {
      trigger: "size-0 max-w-0 absolute"
    },
    disabled: true
  },
  {
    label: "Gallery",
    value: "gallery",
    icon: "i-gallery"
  },
  {
    label: "Table",
    value: "table",
    icon: "i-square-list"
  },
  {
    label: " ",
    value: "empty1",
    icon: "",
    ui: {
      trigger: "size-0 max-w-0 absolute"
    },
    disabled: true
  }
]

const sortItems = computed<DropdownMenuItem[]>(() => [
  {
    label: "Group by",
    type: "label",
    ui: {
      label: "pb-0.5!"
    }
  },
  {
    type: "separator"
  },
  {
    label: "Folder",
    icon: "i-folder",
    type: "checkbox",
    ui: {
      itemLeadingIcon: "**:stroke-[2.3]"
    }
  },
  {
    label: "Patch",
    icon: "i-lp-riot-circle",
    type: "checkbox",
    ui: {
      itemLeadingIcon: "scale-112"
    }
  }
])

const route = useRoute()

const isTable = computed(() => route.path.endsWith("/table"))
watch(
  () => route.path,
  (path) => {
    view.value = path.endsWith("/table") ? "table" : "gallery"
  },
  { immediate: true }
)
watch(
  () => view.value,
  (v) => {
    if (v && v === "table" && !isTable.value) {
      navigateTo(`${route.path.replace(/\/$/, "")}/table`)
    } else if (v && v === "gallery" && isTable.value) {
      const path = route.path.replace(/\/table$/, "")
      navigateTo(path)
    }
  }
)
const { columnVisibility, tableApi } = useTableInject()
const columnsVisible = computed<ListboxItem[] | undefined>(() =>
  tableApi.value
    ?.getAllColumns()
    .filter((c) => c.getIsPinned() === false)
    .map((c) => ({
      id: c.id,
      checked: c.getIsVisible(),
      onSelect(e: Event) {
        e.preventDefault()
        c.toggleVisibility()
      },
      slot: "check",
      indicator: {
        size: "sm",
        color: "neutral",
        class: "rounded-full! overflow-hidden"
      },
      label: capitalize(c.id)
    }))
    .filter(Boolean)
)

const options = computed(() => {
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
    },
    {
      label: "Cozy",
      id: "cozy",
      icon: "",
      slot: "check"
    },
    {
      label: "Table",
      type: "label"
    },
    {
      type: "separator"
    },
    {
      label: "Columns",
      icon: "i-lucide-columns",
      type: "label"
    },
    ...(columnsVisible.value ?? [])
  ].filter(Boolean)
})

const collapseTrigger: ButtonProps = {
  variant: "link",
  block: true,
  trailingIcon: "i-up",
  ui: {
    base: "px-2.5",
    label: "text-sm font-semibold ",
    trailingIcon:
      "data-[state=open]/collapse:-rotate-180 trasition-rotate size-4 duration-200 ease-spring-soft"
  }
}
</script>

<template>
  <div class="flex h-10 grow -translate-y-0.5 justify-end self-end">
    <div class="flex items-center gap-2 rounded-xl px-3">
      <LazyUDropdownMenu
        :content="{
          onCloseAutoFocus: (event: Event) => event.preventDefault()
        }"
        :items="sortItems">
        <Tooltip label="Sort">
          <UButton
            icon="i-swap-2"
            variant="ghost"
            :ui="{
              base: 'h-9 max-h-9 rounded-xl!',
              leadingIcon: 'rotate-90 **:stroke-[2]'
            }" />
        </Tooltip>
      </LazyUDropdownMenu>

      <UTabs
        v-model:model-value="view"
        :items="viewModes"
        variant="lift"
        :content="false"
        color="primary"
        size="md"
        :ui="{
          root: 'w-max',
          list: 'shrink-0 px-0',
          label: 'hidden',
          trigger: 'w-16',
          indicator: 'h-10 rounded-t-3xl',
          leadingIcon: cn('size-4.5')
        }">
        <template #leading="{ item }">
          <Tooltip :label="item.label">
            <div class="anchor absolute inset-0 z-3 size-full">
              <Icon :name="String(item.icon)" :class="cn('size-4.5')" />
            </div>
          </Tooltip>
        </template>
      </UTabs>

      <UPopover
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

        <template #content>
          <UCollapsible :ui="{ content: 'p-2' }">
            <UButton v-bind="collapseTrigger" label="Gallery" />
          </UCollapsible>
          <UCollapsible>
            <UButton v-bind="collapseTrigger" label="Table" />
            <template #content>
              <UListbox :items="columnsVisible" class="flex flex-col gap-1">
                <template #item-trailing="{ item }">
                  <Checkbox v-model="item.checked" v-bind="item.indicator" />
                </template>
              </UListbox>
            </template>
          </UCollapsible>
        </template>
      </UPopover>
    </div>
  </div>
</template>
