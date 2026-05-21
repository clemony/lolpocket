<script lang="ts" setup>
import type { Folder } from "#shared/schema"
import { useSortable } from "@dnd-kit/vue/sortable"
import { useTableInject } from "~/composables/ui/useTableProvider"
import { useFolderChildren } from "~/domain/pocket/folder/useFolder"
import { clickFriendlySensors } from "~/domain/pocket/helpers/sortableSensors"
import { asFolder } from "~/domain/pocket/helpers/typeAssert"

const { folder, header, index } = defineProps<{
  folder: Folder
  index?: number
  header?: boolean
}>()
const { children, childKey, childData } = useFolderChildren(
  computed(() => asFolder(folder))
)
const { isRowSelected, setRowSelected } = useTableInject<Pocket>()
const modelValue = ref<Folder[]>([])

const element = useTemplateRef<HTMLElement>("element")
const handle = useTemplateRef<HTMLElement>("handle")

useSortable({
  id: computed(() => folder.id),
  index: computed(() => index ?? 0),
  group: folder.location || "folders",
  type: "folder",
  accept: "pocket",
  element,
  handle,
  sensors: clickFriendlySensors,
  data: computed(() => ({ kind: "folder" as const, id: folder.id }))
})
</script>

<template>
  <div
    v-if="header"
    :id="folder.id"
    class="flex h-18 w-[calc(100%-2rem)] flex-nowrap items-center justify-between justify-self-center border-b border-p3/60 px-2">
    <div class="flex items-center gap-2">
      <h3 class="text-md! font-medium text-pc/80">
        {{ folder.label }}
      </h3>

      <UBadge
        v-if="children.length"
        size="sm"
        :label="children.length"
        class="shadow-xs"
        variant="outline" />
    </div>

    <div class="flex items-center gap-1">
      <NewOptionsMenu
        color="primary"
        variant="ghost"
        :options="{
          folder: { disabled: true },
          pocket: { location: folder.id }
        }"
        :ui="{ trailingIcon: 'hidden' }" />
    </div>
  </div>

  <div
    ref="element"
    class="tmd:grid-cols-2 relative grid grid-cols-1 gap-8 p-8 lg:grid-cols-3 xl:grid-cols-4">
    <span ref="handle" class="absolute hidden size-0" />
    <template v-if="children.length">
      <template v-for="(item, i) in children" :key="childKey(item)">
        <LazyBackpackPocketCard
          v-if="item && childData(item)?.key"
          :pocket="childData(item)"
          :index="i" />
      </template>
    </template>
    <div
      v-else
      class="sortable-placeholder relative col-span-full grid size-full place-items-center group-has-[.sortable-ghost]/sortable:hidden">
      <UBadge label="Empty" variant="outline" />
    </div>
  </div>
</template>
