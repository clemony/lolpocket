<script lang="ts" setup>
import { LazyEditableButton, LazyUButton } from "#components"
import type { ButtonProps } from "@nuxt/ui"
import { useIconSet } from "~/domain/pocket/folder/useIconSet"

const props = withDefaults(
  defineProps<
    ButtonProps & {
      item: Folder
      collapsed?: boolean
      editable?: boolean
      contextOpen?: boolean
      open?: ComputedRef<boolean | undefined>
      count?: number
      accept?: string | string[]
      index: number
      group: string
    }
  >(),
  {
    editable: false
  }
)

const emit = defineEmits(["update:open"])
const userStore = user()

const set = computed(() =>
  useIconSet(
    props.item?.iconKey,
    computed(() => props.open?.value ?? false)
  )
)

function handleEdit(event: string) {
  userStore.updateFolderName(props.item.id, event)
}

const edit = computed(() => (!props.editable ? undefined : useEditableButton()))

const route = useRoute()

const variant = computed<ButtonProps>(() => {
  return props.item.id === route.params.id
    ? { variant: "soft", color: "primary" }
    : {
        variant: "solid",
        color: "transparent"
      }
})

const shared = computed<ButtonProps>(() => ({
  ...variant.value,
  active: props.contextOpen,
  icon: set.value.icon,
  label: props.item.label || userStore.createEntitledName(),
  as: "div",
  trailingIcon:
    props.count || !props.item?.children?.value.length ? undefined : "i-up"
}))
</script>

<template>
  <button
    ref="element"
    class="group/btn h-10 max-h-10 w-full overflow-hidden pl-0.5">
    <LazyEditableButton
      v-if="editable"
      v-bind="shared"
      :ui="{
        base: 'my-0! w-full grow gap-2.5 hover:bg-p1',
        leadingIcon: cn('size-4.5', set.class),
        trailingIcon: cn('trailing-rotate', {
          '-rotate-180': open
        })
      }"
      :value="props.item.label || ''"
      @click="emit('update:open', $event)"
      @update:label="handleEdit($event)">
      <template #trailing>
        <div class="flex items-center gap-2">
          <SidebarBadge
            v-if="!edit?.editing"
            :label="item?.children?.value.length || 0" />

          <Icon
            v-if="item?.children?.value.length"
            name="up"
            :class="cn('trailing-rotate', props.ui?.trailingIcon)" />
        </div>
      </template>
      <template #input-actions>
        <LazyUButton
          v-if="edit?.editing"
          size="xs"
          icon="i-sparkle"
          :ui="{ base: 'max-size-6! size-6! max-w-6! min-w-6! rounded-sm' }"
          @pointerdown.prevent.stop
          @click.stop.prevent="edit?.randomizeHistoryName()" />
        <SidebarBadge v-else :label="item?.children?.value.length || 0" />
      </template>
    </LazyEditableButton>

    <UButton
      v-else
      v-bind="shared"
      :ui="{
        base: 'my-0! w-full grow gap-2.5 hover:bg-p1',
        leadingIcon: cn('size-4.5', set.class),
        trailingIcon: cn('trailing-rotate', {
          '-rotate-180': props?.open
        })
      }"
      @click="emit('update:open', $event)">
      <span
        class="grow truncate text-start align-baseline text-md font-medium tracking-tight">
        {{ props.item?.label }}
      </span>

      <template #trailing>
        <div class="flex items-center gap-2">
          <SidebarBadge
            :label="props?.count || props.item?.children?.value.length || 0" />

          <Icon
            :name="
              props?.count || props.item?.children?.value.length
                ? 'i-up'
                : 'i-ui-none'
            "
            :class="
              cn(
                'trailing-rotate pointer-events-none size-4 shrink-0 align-icon',
                props.ui?.trailingIcon
              )
            " />
        </div>
      </template>
    </UButton>
  </button>
</template>
