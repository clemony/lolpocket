// Tabs.ts
import Tabs from './Tabs.vue'
import TabsItem from './TabsItem.vue'

export type TabsComponentType = typeof Tabs & {
  Item: typeof TabsItem
  Tab: typeof TabsItem
}

// Attach subcomponents to the Tabs component
(Tabs as TabsComponentType).Item = TabsItem
(Tabs as TabsComponentType).Tab = TabsItem

export type { TabsProps } from './Tabs.vue'
export default Tabs as TabsComponentType