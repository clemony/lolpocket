<script lang="ts" setup>
import { UButton, UInput } from "#components"
import type { MaybeElement, MaybeElementRef } from "@vueuse/core"
import type { ContextMenuItemProps } from "reka-ui"
import type { ShallowRef } from "vue"
import { generateName } from "~/domain/pocket/generateStrings"
import { folderActions, pocketActions } from "~/domain/pocket/ui/contextActions"
import type { TreeItemExt } from "~/domain/pocket/ui/treeItems"

const props = withDefaults(
  defineProps<{
    item: TreeItemExt
    open?: boolean
    type?: "button" | "folder"
  }>(),
  {
    open: false,
    type: "button"
  }
)

const emit = defineEmits<{
  "update:open": [value: boolean]
  "update:label": [value: string]
}>()

const buttonProps = computed(() => {
  const { children, contextItems, ...rest } = props.item
  return rest
})

const newLabel = shallowRef<string>("")
const editing = shallowRef<boolean>(false)
const toggleEditing = useToggle(editing)

function toggleEdit() {
  newLabel.value = props.item.label || ""
  toggleEditing()
}

function toggleOpen() {
  if (props.type !== "folder" || editing.value) return
  emit("update:open", !props.open)
}

const component = computed(() => (editing.value ? UInput : UButton))

const actions = computed<ContextMenuItemProps[]>(() =>
  props.type === "folder"
    ? (folderActions(props.item, toggleEdit).value as ContextMenuItemProps[])
    : (pocketActions(props.item, toggleEdit).value as ContextMenuItemProps[])
)

function setName() {
  emit("update:label", newLabel.value)
  editing.value = false
}
</script>

<template>
  <UContextMenu
    size="sm"
    :items="actions"
    :ui="{ content: 'min-w-44', itemLeadingIcon: '**:stroke-[2.3]' }">
    <component
      :is="component"
      ref="button"
      v-model:model-value="newLabel"
      :autofocus="editing"
      :variant="editing ? 'outline' : 'ghost'"
      block
      :ui="{
        ...buttonProps?.ui,
        root: cn('m-0! h-9! max-h-9! w-full grow! border-0!'),
        base: cn(
          'm-0! h-9! max-h-9! w-full grow! flex-nowrap justify-start border-0! px-2.5',
          {}
        ),
        trailing: editing ? '' : ''
      }"
      @keydown.enter="setName"
      @blur="setName"
      @click="toggleOpen">
      <template #leading>
        <div v-if="props.type === 'folder'" class="anchor size-4.5">
          <Icon
            :name="props.item.icon"
            :class="
              cn(
                props.item?.ui?.linkLeadingIcon,
                'absolute size-4.5',
                props.open && props.item?.openIcon && 'opacity-0'
              )
            " />
          <Icon
            :name="props.item?.openIcon ?? ''"
            :class="
              cn(
                'absolute size-4.5 opacity-0',
                props.item?.ui?.linkLeadingIcon,
                props.open && 'opacity-100'
              )
            " />
        </div>
        <UAvatar v-else v-bind="props.item.avatar" />
      </template>

      <span
        v-if="!editing"
        class="w-full truncate text-start text-md text-nowrap"
        >{{ props.item.label ?? "" }}</span
      >

      <template #trailing>
        <Icon
          v-if="item.trailingIcon && !editing"
          :name="item.trailingIcon"
          :class="
            cn(
              'opacity-50 transition-all duration-200 ease-in-out **:stroke-[2.3] group-hover/btn:opacity-100',
              props.open && '-rotate-180'
            )
          "
          class="size-4" />
        <template v-if="editing">
          <LazyInputClear
            v-if="newLabel !== '' && newLabel !== item.label"
            @clear-input="newLabel = ''" />
          <LazyUButton
            size="xs"
            icon="i-sparkle"
            :ui="{ base: 'max-size-6! size-6! max-w-6! min-w-6!' }"
            @click.stop="newLabel = generateName()" />
        </template>
      </template>
    </component>
  </UContextMenu>
</template>
