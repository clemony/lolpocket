<script lang="ts" setup>
import { useBackpack } from "~/domain/backpack/useBackpack"
import { defaultPocketFolders } from "~/domain/pocket/folder/defaultFolders"
import { iconSets } from "~~/layers/ui/app/assets/icons/icon-sets"

const { collapse = false } = defineProps<{
  collapse?: boolean
}>()
const items = computed(() => [
  ...Object.values(defaultPocketFolders).map((p) => ({
    ...p,
    icon: iconSets[p.iconKey]?.icon,
    class: iconSets[p.iconKey]?.ui?.open
  })),
  {
    label: "Search Results",
    id: "search",
    icon: "i-search",
    class: "**:stroke-[2.2]",
    slot: "search" as const,
    content: ""
  }
])
const { folderId, onFolderUpdate } = useBackpack()
</script>

<template>
  <UTabs
    v-model:model-value="folderId"
    :items
    color="neutral"
    value-key="id"
    size="md"
    :ui="{
      root: 'h-12! w-full',
      list: 'h-12 shrink-0 rounded-2xl px-1.5 inset-shadow-[-1px_-1px_3px_rgba(0,0,0,0.1)] inset-ring-p4/30',
      label: 'hidden',
      indicator: 'h-9 rounded-xl'
    }"
    @update:model-value="onFolderUpdate($event)">
    <template #leading="{ item }">
      <UTooltip
        :text="`View: ${item.label}`"
        as="div"
        :ui="{ content: 'capitalize' }"
        :content="{ side: 'bottom' }">
        <div class="absolute inset-0 grid size-full place-items-center">
          <Icon
            :name="String(item.icon)"
            :class="
              cn(
                'size-4.5!',
                item.class,
                ['pinned', 'favorites'].includes(item.id)
                  ? '**:stroke-[2.5]'
                  : '**:stroke-[2.4]'
              )
            " />
        </div>
      </UTooltip>
    </template>
  </UTabs>
</template>
