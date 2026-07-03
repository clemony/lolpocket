<script lang="ts" setup>
import type { ButtonProps } from "@nuxt/ui"
import { useBackpack } from "~/domain/backpack/composables/useBackpack"

type TypeVariant<T extends string = string> = "tab" | "button"
const props = withDefaults(
  defineProps<
    ButtonProps & {
      type?: TypeVariant
    }
  >(),
  {
    variant: "outline"
  }
)

const { view } = useBackpack()
const viewModes = [
  {
    label: "Gallery",
    value: "gallery",
    icon: "i-gallery"
  },
  {
    label: "Table",
    value: "table",
    icon: "i-square-list"
  }
]

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

const isTab = computed(() => props.type === ("tab" as TypeVariant))

function toggleBackpackView() {
  view.value = view.value === "table" ? "gallery" : "table"
}
</script>

<template>
  <UTabs
    v-if="isTab"
    v-model:model-value="view"
    :items="viewModes"
    :content="false"
    size="sm"
    :ui="{
      root: 'ml-6 w-fit -translate-y-1 justify-self-start',
      list: 'h-9 w-fit items-center rounded-xl bg-transparent inset-shadow-none inset-ring-0',
      label: 'hidden',
      trigger: 'h-8 w-9',
      indicator: 'h-8 rounded-[0.6rem]'
    }">
    <template #leading="{ item }">
      <Tooltip :label="item.label">
        <div class="anchor absolute inset-0 z-3 size-full">
          <Icon
            :name="String(item.icon)"
            :class="
              cn(
                'size-4.5 group-not-active/trigger:opacity-40 group-not-active/trigger:group-hover/trigger:opacity-100'
              )
            " />
        </div>
      </Tooltip>
    </template>
  </UTabs>

  <UButton
    v-else
    v-bind="props"
    :ui="{
      base: cn('h-9 max-h-9 rounded-xl px-2.5!', {
        'bg-p1 fx-noise! fx-depth! inset-shadow-xs shadow-none drop-shadow-none':
          view === 'table'
      }),
      leadingIcon: '**:stroke-[2]'
    }"
    :icon="view === 'table' ? 'i-square-list' : 'i-gallery'"
    @click="toggleBackpackView" />
</template>
