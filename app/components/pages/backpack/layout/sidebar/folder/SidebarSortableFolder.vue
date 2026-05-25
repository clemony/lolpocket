<script lang="ts" setup>
import { RestrictToVerticalAxis } from "@dnd-kit/abstract/modifiers"
import { useSortable } from "@dnd-kit/vue/sortable"
import { useBackpack } from "~/domain/backpack/useBackpack"
import { useFolderChildren } from "~/domain/pocket/folder/useFolder"

const props = withDefaults(
  defineProps<{
    item: SortableFolder
    disabled?: boolean
    collapsed?: boolean
    index: number
  }>(),
  {
    disabled: false
  }
)

const safeItem = computed(() => safeObject(toValue(props.item)))
const safeChildren = computed(() => safeObject(toValue(props.item.children)))

const { sidebarFolderRefs } = useBackpack()

watchEffect(() => {
  if (
    !safeChildren.value.length &&
    sidebarFolderRefs.value[safeItem.value.id] === true
  ) {
    sidebarFolderRefs.value[safeItem.value.id] =
      !sidebarFolderRefs.value[safeItem.value.id]
  }
})

const handle = useTemplateRef<HTMLElement>("handle")
const element = useTemplateRef<HTMLElement>("element")
const { children, childRefs, childKey } = useFolderChildren(props.item)
const open = computed<boolean>(
  () => sidebarFolderRefs.value[safeItem.value.id] ?? false
)

const { isDragging, isDropping } = useSortable({
  ...safeItem.value.sortable,
  index: computed(() => props.index),
  element,
  handle: element,
  modifiers: [RestrictToVerticalAxis]
  //disabled: dragState.value?.sourceType === "pocket"
})
</script>

<template>
  <UCollapsible
    v-if="safeItem.id"
    ref="element"
    v-model:open="sidebarFolderRefs[safeItem.id]"
    as="div"
    :disabled="!safeChildren.length"
    :ui="{
      root: cn('group/collapse-child w-full max-w-full overflow-hidden', {
        'pr-4': safeItem.sortable.type === 'subfolder'
      }),
      content: cn(
        'relative my-0! ml-4.5 grid max-h-fit w-full max-w-[calc(100%-var(--spacing)*4.5)] auto-rows-auto gap-y-1.5 overflow-hidden pl-1.5',
        'before:pointer-events-none before:absolute before:inset-y-2 before:left-px before:w-px before:border-l before:border-l-p4/60'
        /*     {
          'max-h-0! ease-spring soft transition duration-600': isDragging
        } */
      )
    }">
    <SidebarFolderButton
      ref="handle"
      :index
      :open="computed<boolean>(() => open)"
      :folder="safeItem"
      @click.stop />
    <template #content>
      <div
        v-if="item.subfolders?.value.length"
        ref="container"
        class="flex w-full max-w-full flex-col gap-0.5 overflow-hidden pr-4 pl-1.5">
        <SidebarSortableFolder
          v-for="(sub, i) in item.subfolders.value"
          :key="sub.id"
          :index="i"
          :item="sub" />
      </div>
      <div
        v-if="children.length"
        class="flex w-full flex-col gap-px overflow-hidden py-0.5 pl-1">
        <SidebarPocketButton
          v-for="(child, i) in children"
          :key="childKey(child)"
          :ref="childRefs.set"
          :index="i"
          :item="child"
          @dblclick.stop.prevent />
      </div>
      <div
        v-if="!children.length && !item.subfolders?.value.length"
        class="not-draggable grid w-full auto-rows-fr items-center gap-y-0.5 py-3 pl-6">
        <span class="text-xs italic">Empty</span>
      </div>
    </template>
  </UCollapsible>
</template>
