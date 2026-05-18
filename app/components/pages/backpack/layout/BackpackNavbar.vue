<script lang="ts" setup>
import type { DropdownMenuItem } from "@nuxt/ui"
import { useBackpack } from "~/domain/backpack/useBackpack"

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
    label: "List",
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

const options = computed(() => {
  return [
    {
      label: "Table",
      type: "label"
    },
    {
      type: "separator"
    },
    {
      label: "Visible Columns",
      icon: "i-lucide-columns",
      type: "label"
    },
    {
      type: "checkbox"
    }
  ]
})
</script>

<template>
  <div class="flex grow items-end justify-end self-end">
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
              base: 'h-9 max-h-9 rounded-xl',
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
          root: 'w-max self-end',
          list: 'shrink-0 self-end px-0',
          label: 'hidden',
          trigger:
            'background-tab isolate w-16 rounded-t-3xl bg-transparent! data-[state=active]:border-b! data-[state=active]:border-b-p3!',
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

      <LazyUDropdownMenu
        :content="{
          onCloseAutoFocus: (event: Event) => event.preventDefault()
        }"
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
      </LazyUDropdownMenu>
    </div>
  </div>
</template>
