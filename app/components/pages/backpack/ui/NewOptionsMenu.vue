<script lang="ts" setup>
import type { ButtonProps, DropdownMenuItem, DropdownMenuProps } from "@nuxt/ui"
import { newItemOptions } from "~/domain/pocket/menu/createMenu"

interface Option {
  disabled?: boolean
}
interface OptionsConfig {
  folder?: Option
  pocket?: Option
  location?: string
}

const props = withDefaults(
  defineProps<
    ButtonProps & {
      menu?: DropdownMenuProps & DropdownMenuItem
      collapsed?: boolean
      options?: OptionsConfig
    }
  >(),
  {
    variant: "solid",
    collapsed: false,
    size: "md",
    color: "neutral",
    activeColor: "neutral",
    activeVariant: "solid",
    location: "folders",
    icon: "i-add"
  }
)

const delegated = reactiveOmit(props, "class", "menu")

const open = shallowRef<boolean>(false)
</script>

<template>
  <Menu
    v-bind="props.menu"
    v-model:open="open"
    size="lg"
    :items="newItemOptions({ location: props.options?.location }).value"
    component="dropdown"
    :orientation="props?.collapsed ? 'vertical' : 'horizontal'"
    :ui="{
      ...props.menu?.ui,
      itemLeadingIcon: cn(
        'size-4.5 **:stroke-[10%]',
        props.menu?.ui?.itemLeadingIcon
      ),
      item: 'gap-2.5 pr-4',
      content: cn('min-w-54', props.menu?.ui?.content)
    }"
    :highlight="true"
    :content="{
      ...props.menu?.content,
      align: props.menu?.content?.align ?? (collapsed ? 'center' : 'end'),
      side: props.menu?.content?.side ?? (collapsed ? 'right' : 'bottom'),
      onCloseAutoFocus: (event: Event) => event.preventDefault()
    }">
    <Tooltip
      side="top"
      :disabled="open || props.disabled"
      as-child
      label="Menu">
      <UButton
        tabindex="-1"
        v-bind="delegated"
        :variant="open ? props.activeVariant : props.variant"
        :color="open ? props.activeColor : props.color"
        :ui="{
          base: cn('py-0', { 'anchor p-0 ': props.square }, props.ui?.base),
          leadingIcon: cn(
            'size-4.5 **:stroke-[9%]',
            {
              'absolute   place-self-center': props.square,
              'text-nc': open
            },
            props.ui?.leadingIcon
          ),
          label: cn(
            'grow pr-3 font-medium',
            { hidden: props.square },
            props.ui?.label
          )
        }">
      </UButton>
    </Tooltip>

    <template #default-trailing>
      <span class="align-baseline text-xs text-n5 italic">(default)</span>
    </template>
  </Menu>
</template>
