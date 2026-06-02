import type { ContextMenuItem } from "@nuxt/ui"
import { separatorItem } from "~/domain/backpack/utils/folder/menuItems"

export function useSortMenu() {
  const account = user()
  const { localSettings } = storeToRefs(account)

  return computed<ContextMenuItem>(() => {
    return {
      label: "Sort by",
      icon: "i-tabler-sort-ascending",
      ui: {
        leadingIcon: "scale-120",
        content: "min-w-48 self-end"
      },
      children: [
        {
          as: "label",
          slot: "radio" as const,
          ui: {
            item: "group/radio",
            itemLeadingIcon: "**:stroke-[2.4] scale-110"
          },
          label: "Name",
          value: "alpha",
          name: "sort-radio",
          for: "sort-radio",
          itemTrailingIcon:
            localSettings.value.sidebar_sort_method === "alpha"
              ? "i-radio"
              : "i-radio-off",
          icon: "i-lucide-a-large-small",
          modelValue: localSettings.value.sidebar_sort_method,
          checked: localSettings.value.sidebar_sort_method === "alpha",
          onSelect($event) {
            $event.preventDefault()
            account.updateSortMethod("alpha")
          }
        },
        {
          slot: "radio" as const,
          ui: {
            itemLeadingIcon: "**:stroke-[2.6] scale-94"
          },
          as: "label",
          for: "sort-radio",
          icon: "i-lucide-clock-fading",
          label: "Date Created",
          value: "date",
          name: "sort-radio",
          modelValue: localSettings.value.sidebar_sort_method,
          checked: localSettings.value.sidebar_sort_method === "date",
          onSelect($event: Event) {
            $event.preventDefault()
            account.updateSortMethod("date")
          }
        },
        separatorItem,
        {
          icon:
            localSettings.value.sidebar_sort_mode === "asc"
              ? "i-swap-left"
              : "i-swap-right",
          label:
            localSettings.value.sidebar_sort_mode === "asc"
              ? "Ascending"
              : "Descending",

          ui: {
            itemLeadingIcon: " rotate-90 **:stroke-[2.6]"
          },
          as: "label",
          checked: localSettings.value.sidebar_sort_mode === "asc",
          slot: "switch",
          trueValue: "asc",
          falseValue: "desc",
          onSelect($event) {
            $event.preventDefault()
            localSettings.value.sidebar_sort_mode = "asc"
          }
        }
        /*
        {
          type: "separator"
        },
        {
          ui: {
            itemLeadingIcon: localSettings.value.sidebar_sort_folder_first
              ? ""
              : " scale-84 **:stroke-[10%]!"
          },
          icon: localSettings.value.sidebar_sort_folder_first
            ? "i-folder"
            : "i-lp-pocket",
          as: "label",
          checked: localSettings.value.sidebar_sort_folder_first,
          slot: "switch",
          label: localSettings.value.sidebar_sort_folder_first
            ? "Folders top"
            : "Pockets top",
          onSelect($event: Event) {
            $event.preventDefault()
            localSettings.value.sidebar_sort_folder_first =
              !localSettings.value.sidebar_sort_folder_first
          }
        } */
      ]
    }
  })
}
