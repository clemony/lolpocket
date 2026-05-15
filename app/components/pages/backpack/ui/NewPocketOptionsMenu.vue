<script lang="ts" setup>
import { SparkleIcon } from "#components"
import type { ButtonProps, DropdownMenuItem, DropdownMenuProps } from "@nuxt/ui"
import { newPocket } from "~/domain/pocket/newPocket"
import { newRandomPocket } from "~/domain/pocket/newRandomPocket"
import { itemLabelUi } from "~~/layers/ui/app/variants/menu"

const props = withDefaults(
  defineProps<
    ButtonProps & {
      menu?: DropdownMenuProps
      collapsed?: boolean
      location?: string
    }
  >(),
  {
    variant: "solid",
    collapsed: false,
    size: "md",
    color: "neutral",
    location: "all",
    icon: "i-add",
    label: "New Pocket"
  }
)

const map = shallowRef<MapKey>(11)
const position = shallowRef<PositionKey>("all")

const items = computed<DropdownMenuItem[]>(() => [
  {
    label: "Create Pocket",
    type: "label",
    ui: itemLabelUi
  },
  {
    type: "separator"
  },
  {
    label: "New Pocket",
    slot: "empty",
    icon: "i-lp-pocket-plus",
    ui: {
      itemLeadingIcon: "**:stroke-[10%] scale-90"
    },
    onClick: () => newPocket({ location: String(props.location) ?? undefined })
  },
  {
    label: "Pocket Wizard",
    icon: "i-wand",
    ui: {
      itemLeadingIcon: "**:stroke-[12%]"
    },
    onClick: () => {}
  },
  {
    type: "separator"
  },
  {
    icon: h(SparkleIcon, {
      ui: {
        root: "size-4.5",
        icon: cn("size-3.5", props.ui?.leadingIcon),
        inactveIcon:
          "group-aria-[expanded=true]/btn:opacity-0 group-data-[state=open]/btn:opacity-0",
        activeIcon:
          "group-aria-[expanded=true]/btn:opacity-100 group-data-[state=open]/btn:opacity-100"
      }
    }),
    label: "Magic Pocket",
    ui: {
      item: "group/btn"
    },
    children: [
      {
        type: "label",
        label: "Map",
        ui: itemLabelUi
      },
      {
        type: "separator"
      },
      {
        label: "All",
        icon: "i-lp-0",
        slot: "radio",
        modelValue: map,
        checked: map.value === 0,
        onSelect(event: Event) {
          event?.preventDefault()
          map.value = 0
        }
      },
      {
        label: "Summoner's Rift",
        icon: "i-lp-11",
        slot: "radio",
        checked: map.value === 11,
        onSelect(event: Event) {
          event?.preventDefault()
          map.value = 11
        }
      },

      {
        label: "Howling Abyss",
        icon: "i-lp-12",
        checked: map.value === 12,
        slot: "radio",
        onSelect(event: Event) {
          event?.preventDefault()
          map.value = 12
        }
      },

      {
        type: "separator"
      },
      {
        type: "label",
        label: "Role",
        ui: itemLabelUi
      },
      {
        type: "separator"
      },
      ...positionSchema.options.map((p) => ({
        label: p,
        icon: `i-lp-${p}`,
        slot: "radio",
        checked: position.value === p,
        onSelect(event: Event) {
          event?.preventDefault()
          position.value = p
        },
        ui: {
          itemLabel: "capitalize"
        }
      })),
      {
        type: "separator"
      },
      {
        label: "Generate",
        color: "neutral",
        onSelect() {
          newRandomPocket({
            map: map.value,
            location: String(props.location),
            position: position.value
          })
        }
      }
    ]
  }
])

const delegated = reactiveOmit(props, "class", "menu")

const open = shallowRef<boolean>(false)
</script>

<template>
  <Menu
    v-model:open="open"
    :items
    component="dropdown"
    :orientation="props?.collapsed ? 'vertical' : 'horizontal'"
    :ui="{ content: 'min-w-54', label: '' }"
    :content="{
      align: collapsed ? 'center' : 'end',
      side: collapsed ? 'right' : 'bottom',
      onCloseAutoFocus: (event: Event) => event.preventDefault()
    }">
    <Tooltip
      :disabled="open || !collapsed"
      as-child
      label="Create New Pocket...">
      <UButton
        tabindex="-1"
        v-bind="delegated"
        :ui="{
          base: cn('py-0', { 'anchor p-0 ': props.square }, props.ui?.base),
          leadingIcon: cn(
            'scale-90 **:stroke-[12%]',
            { 'absolute scale-110 place-self-center': props.square },
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
