import type { PrimitiveProps } from 'reka-ui'

export interface CustomRadioGroupProps extends PrimitiveProps {
  contrast?: boolean
}

export type Side = 'top' | 'right' | 'bottom' | 'left'
export type Align = 'start' | 'center' | 'end'

export interface Tabs {
  currentValue: {
    pos: number
    width: number
  }
  returnValue: {
    pos: number
    width: number
  }
}
