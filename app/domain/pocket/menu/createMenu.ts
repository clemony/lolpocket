import { SparkleIcon } from "#components"
import type { DropdownMenuItem } from "@nuxt/ui"
import { newPocket } from "~/domain/pocket/newPocket"
import { newRandomPocket } from "~/domain/pocket/newRandomPocket"
import { itemLabelUi } from "~~/layers/ui/app/variants/menu"

const map = shallowRef<MapKey>(11)
const position = shallowRef<PositionKey>("all")
const mapOpen = shallowRef(false)
const positionOpen = shallowRef(false)

const indicator: Record<string, string> = {
  size: "sm",
  variant: "ghost",
  color: "base"
}

const labelUi = {
  ...itemLabelUi,
  label: cn("pb-2!", itemLabelUi.label)
}

const maps = {
  SR: 11,
  ARAM: 12,
  All: 0
}

const mapItems = Object.entries(maps).map(([label, value]) => ({
  label,
  icon: `i-lp-${value}`,
  value: value as MapKey,
  ui: {
    item: "col-start-2 gap-2",
    itemLabel: "capitalize font-medium",
    itemLeadingIcon: " scale-110"
  }
}))

const positionItems = positionSchema.options.map((p) => ({
  label: p,
  icon: `i-lp-${p}`,
  value: p,
  ui: {
    itemLabel: "capitalize",
    item: "c gap-2 checked:bg-p2/60",
    itemTrailing: "rounded-full",
    itemLeadingIcon: " scale-110"
  }
}))

interface NewOptions extends DropdownMenuItem {
  location: string
  folder?: {
    disabled: boolean
  }
  pocket?: {
    disabled: boolean
  }
}

export const newItemOptions = (options: NewOptions | undefined) =>
  computed<DropdownMenuItem[]>(
    () =>
      [
        ...computed(() =>
          !options?.folder?.disabled
            ? [
                {
                  label: "New Folder",
                  icon: "i-folder-add",
                  ui: {
                    itemLeadingIcon: " "
                  },
                  onSelect() {
                    user().newPocketFolder({ location: options?.location })
                  }
                },
                {
                  type: "separator"
                }
              ]
            : []
        ).value,
        {
          label: "New Pocket",
          slot: "empty",
          icon: "i-lp-pocket-plus",
          ui: {
            itemLeadingIcon: "**:stroke-[10%] scale-90"
          },
          onClick: () =>
            newPocket({ location: String(options?.location) ?? undefined })
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
              icon: cn("size-3.75! scale-90", options?.ui?.itemLeadingIcon),
              inactveIcon:
                "group-aria-[expanded=true]/btn:opacity-0 group-data-[state=open]/btn:opacity-0",
              activeIcon:
                "group-aria-[expanded=true]/btn:opacity-100 group-data-[state=open]/btn:opacity-100"
            }
          }),
          label: "Magic Pocket",
          ui: {
            item: "group/btn",
            content: "max-w-64 "
          },

          content: { sideOffset: options?.content?.sideOffset ?? -8 },
          children: [
            {
              type: "label",
              label: "Position",
              slot: "select",
              ui: labelUi,
              select: {
                modelValue: position,
                items: positionItems,
                open: positionOpen,
                ui: { content: "-translate-y-14 bg-p0/94 p-0.5" }
              }
            },
            {
              type: "label",
              label: "Map",
              slot: "select",
              ui: labelUi,
              select: {
                modelValue: map,
                items: mapItems,
                open: mapOpen,
                ui: {
                  content: "-translate-y-14 bg-p0/94 p-0.5 max-h-100 h-max!"
                }
              }
            },
            {
              type: "separator"
            },
            {
              label: "Generate",
              color: "neutral",
              icon: "i-activity",
              variant: "solid",
              ui: {
                item: " px-3 group/item gap-2 mb-1 mt-2 flex justify-center rounded-lg bg-neutral hover:bg-n3 fx-noise-3 fx-1 justify-center w-[calc(100%-0.5rem)] mx-auto",
                itemLabel: "text-nc! font-semibold",
                itemLeadingIcon:
                  "text-nc scale-110 group-hover/item:text-nc! group-[data=highlighted]/item:text-nc! group-active/item:text-nc! text-nc! **:text-nc!"
              },
              onSelect() {
                newRandomPocket({
                  map: map.value,
                  location: String(options?.location),
                  position: position.value
                })
              }
            }
          ]
        }
      ].filter(Boolean) as DropdownMenuItem[]
  )
