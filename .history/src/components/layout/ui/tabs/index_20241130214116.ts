// Tabs.ts
import Tabs from './SlideTabs.vue'
import TabsItem from './SlideTabsItem.vue'

export type TabsComponentType = typeof Tabs & {
  Item: typeof TabsItem
  Tab: typeof TabsItem
}

// Attach subcomponents to the Tabs component
(Tabs as TabsComponentType).Item = TabsItem
(Tabs as TabsComponentType).Tab = TabsItem

export type { TabsProps } from './SlideTabs.vue'
export default Tabs as TabsComponentType