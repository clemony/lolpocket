import type { SizeColumnsToContentStrategy, SizeColumnsToFitGridStrategy, SizeColumnsToFitProvidedWidthStrategy } from 'ag-grid-community'

export type { MotionValue } from 'motion-v'

export type { UUID } from 'crypto'
export type { AcceptableValue, PrimitiveProps } from 'reka-ui'

export type AutoSizeStrategy
  = SizeColumnsToFitGridStrategy
    | SizeColumnsToFitProvidedWidthStrategy
    | SizeColumnsToContentStrategy
