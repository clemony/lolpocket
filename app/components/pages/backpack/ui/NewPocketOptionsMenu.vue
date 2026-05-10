<script lang="ts" setup>
import type { ButtonProps, DropdownMenuItem, DropdownMenuProps } from "@nuxt/ui"
import { newPocket } from "~/domain/pocket/newPocket"
import { newRandomPocket } from "~/domain/pocket/newRandomPocket"

const props = withDefaults(
  defineProps<
    ButtonProps & {
      menu?: DropdownMenuProps
      collapsed?: boolean
      location?: string
    }
  >(),
  {
    variant: "ghost",
    collapsed: false,
    size: "md",
    color: "primary",
    location: "pockets",
    icon: "i-more"
  }
)

const items: DropdownMenuItem[] = [
  {
    label: "Create Pocket",
    type: "label"
  },
  {
    type: "separator"
  },
  {
    label: "New Pocket",
    slot: "empty",
    icon: "i-lp-pocket-plus",
    ui: {
      itemLeadingIcon: "**:stroke-[2.3]"
    },
    onClick: () => newPocket({ location: String(props.location) ?? undefined })
  },
  {
    label: "Pocket Wizard",
    icon: "i-wand",
    onClick: () => {}
  },
  {
    type: "label",
    label: "Magic Pocket"
  },
  {
    type: "separator"
  },
  {
    label: "SR Pocket",
    slot: "sparkle",
    ui: {
      item: "group/btn"
    },
    onSelect() {
      newRandomPocket({
        map: 11,
        location: String(props.location)
      })
    }
  },

  {
    slot: "sparkle",
    label: "ARAM Pocket",
    ui: {
      item: "group/btn"
    },
    onSelect() {
      newRandomPocket({
        map: 12,
        location: String(props.location)
      })
    }
  }
]

const delegated = reactiveOmit(props, "class", "menu")
</script>

<template>
  <UDropdownMenu
    :items
    :orientation="props?.collapsed ? 'vertical' : 'horizontal'"
    :ui="{ content: 'min-w-54' }"
    :content="{
      align: collapsed ? 'center' : 'end',
      side: collapsed ? 'right' : 'bottom',
      onCloseAutoFocus: (event) => event.preventDefault()
    }">
    <template #default="{ open }">
      <Tooltip as-child label="New Pocket Options">
        <UButton
          tabindex="-1"
          v-bind="delegated"
          :square="props?.collapsed"
          :active="open"
          :ui="{
            ...props.ui,
            base: cn(
              'open:btn-active',
              { 'anchor size-9 shrink-0': props?.collapsed },
              props.ui?.base
            ),
            leadingIcon: 'group-aria-[expanded=true]/btn:opacity-100',
            trailingIcon: cn(
              'transition-rotate right-2 opacity-70 duration-200 ease-in-out not-group-hover/btn:not-group-active/btn:not-group-open/btn:text-pc group-open/btn:-rotate-180 group-open/btn:text-nc! group-active/btn:**:text-nc! group-aria-[expanded=true]/btn:-rotate-180 group-aria-[expanded=true]/btn:text-nc! group-aria-[expanded=true]/btn:opacity-100!',
              props.ui?.trailingIcon
            )
          }" />
      </Tooltip>
    </template>

    <template #default-trailing>
      <span class="align-baseline text-xs text-n5 italic">(default)</span>
    </template>
    <template #sparkle-leading>
      <span class="size-4">
        <SparkleIcon
          :ui="{
            root: cn(
              'size-3.5 not-group-hover/btn:not-group-active/btn:not-group-open/btn:text-pc group-open/btn:**:text-nc! group-active/btn:**:text-nc!',
              props.ui?.leadingIcon
            ),
            icon: 'aria-expanded/btn:text-nc',
            activeIcon:
              'group-aria-[expanded=true]/btn:text-nc group-aria-[expanded=true]/btn:opacity-100'
          }" />
      </span>
    </template>
  </UDropdownMenu>
</template>
