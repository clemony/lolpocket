import { inject, provide, reactive, Ref, ref, computed, CSSProperties } from 'vue'
import { JSX } from 'vue/jsx-runtime'

export interface TabsInternalCellProps {
  onClick: (value: string) => void
  onMouseOver: (e: MouseEvent) => void
  activeClassName?: string
  activeStyle?: CSSProperties
  hideBorder?: boolean
}

export type TabsInternalCell = (props: TabsInternalCellProps) => JSX.Element

export interface TabsHeaderItem {
  value: string
  cell: TabsInternalCell
}

export interface TabsConfig {
  register?: (item: TabsHeaderItem) => void
  currentValue?: Ref<string>
  inGroup: boolean
  leftSpace?: Ref<string | undefined>
}

// Default configuration for the context
const defaultContext: TabsConfig = {
  inGroup: false,
}

// Key to inject and provide the context
const TabsContextKey = Symbol('TabsContext')

// Provide TabsContext in a parent component
export const provideTabsContext = (config: TabsConfig) => {
  provide(TabsContextKey, reactive(config))
}

// Use TabsContext in a child component
export const useTabsContext = (): TabsConfig => {
  const context = inject<TabsConfig>(TabsContextKey, defaultContext)
  return context
}