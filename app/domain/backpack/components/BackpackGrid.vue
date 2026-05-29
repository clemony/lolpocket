<script lang="ts" setup>
import { useVisiblePocketChildren } from "~/domain/backpack/composables/useVisiblePocketChildren"

const { folder } = defineProps<{
  folder: SortableFolder
}>()
console.log("🥸 - folder:", folder)

const children = computed(() => toValue(folder?.children))
const visibleChildren = useVisiblePocketChildren(children, "grid")
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
        v-if="children?.length"
        size="sm"
        :label="children.length"
        class="shadow-xs"
        variant="outline" />
    </div>

    <div class="flex items-center gap-1">
      <FolderOptionsMenu
        color="primary"
        variant="outline"
        :options="{
          folder: { disabled: true },
          location: folder.id
        }"
        :ui="{ trailingIcon: 'hidden' }" />
    </div>
  </div>

  <div
    v-if="children?.length"
    class="relative grid w-full grid-cols-1 gap-4 p-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    <template v-for="(item, i) in visibleChildren" :key="item.key">
      <LazyPocketCardOrButton
        v-if="item && item.key"
        list="grid"
        :item="item"
        :index="i" />
    </template>
  </div>
  <div
    v-else
    class="relative col-span-full grid size-full max-h-90 place-items-center group-has-[.sortable-ghost]/sortable:hidden">
    <UBadge label="Empty" variant="outline" />
  </div>
</template>
