export type TabValue = 0 | 1

export const tabData = [
  {
    value: 0 as TabValue,
    icon: "i-mingcute-layout-grid-fill",
    label: "Grid",
    component: "~/components/pages/library/items/LibraryItemGrid.vue"
  },
  {
    value: 1 as TabValue,
    icon: "i-lucide-table-properties",
    label: "Table",
    component: "~/components/pages/library/items/LibraryItemTable.vue"
  }
]
