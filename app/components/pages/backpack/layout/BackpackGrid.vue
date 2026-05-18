<script lang="ts" setup>
import type { Folder } from "#shared/schema"
import { VueDraggable } from "vue-draggable-plus"
import { useFolderChildren } from "~/domain/pocket/folder/useFolder"
import { asFolder } from "~/domain/pocket/helpers/typeAssert"

const { folder, header } = defineProps<{
  folder: Folder
  header?: boolean
}>()
const { children, childKey } = useFolderChildren(
  computed(() => asFolder(folder))
)

const modelValue = ref<Folder[]>([])
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

  <VueDraggable
    v-model:model-value="modelValue"
    :group="{ name: 'pocket', pull: true, put: true }"
    :animation="1"
    sort
    ease="ease-in-out"
    filter=".sortable-placeholder"
    class="pocket-sortable group/sortable relative grid grid-cols-1 gap-8 p-8 transition-all duration-300 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    <template v-if="children.length">
      <div v-for="item in children" :key="childKey(item)">
        <LazyBackpackPocketCard
          v-if="item && item.pocket"
          :pocket="item.pocket" />
      </div>
    </template>
    <div
      v-else
      class="sortable-placeholder relative col-span-full grid size-full place-items-center group-has-[.sortable-ghost]/sortable:hidden">
      <UBadge label="Empty" variant="outline" />
    </div>
  </VueDraggable>
</template>
