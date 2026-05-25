<script lang="ts" setup>
import { useSortable } from "@dnd-kit/vue/sortable"
import { useTableInject } from "~/composables/ui/useTableProvider"
import { useFolderChildren } from "~/domain/pocket/folder/useFolder"
import { clickFriendlySensors } from "~/domain/pocket/helpers/sortableSensors"
import { asSortableFolder } from "~/domain/pocket/helpers/typeAssert"

const { folder, header, index } = defineProps<{
  folder: SortableFolder
  index?: number
  header?: boolean
}>()
const { children, childKey, childData } = useFolderChildren(
  computed(() => asSortableFolder(folder))
)
const { isRowSelected, setRowSelected } = useTableInject<Pocket>()
const modelValue = ref<Folder[]>([])

const element = useTemplateRef<HTMLElement>("element")
const handle = useTemplateRef<HTMLElement>("handle")

useSortable({
  ...toValue(folder.sortable),
  index: computed(() => index ?? 0),
  element,
  handle
})
</script>

<template>
  <div
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
        variant="outline"
        :options="{
          folder: { disabled: true },
          pocket: { location: folder.id }
        }"
        :ui="{ trailingIcon: 'hidden' }" />
    </div>
  </div>

  <div
    ref="element"
    class="tmd:grid-cols-2 relative grid grid-cols-1 gap-4 p-8 lg:grid-cols-3 xl:grid-cols-4">
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
      class="relative col-span-full grid size-full place-items-center group-has-[.sortable-ghost]/sortable:hidden">
      <UBadge label="Empty" variant="outline" />
    </div>
  </div>
</template>
