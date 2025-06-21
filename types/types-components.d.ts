declare global {
  interface CustomRadioGroupProps extends PrimitiveProps, FormFieldProps {
    contrast?: boolean
  }

  type Side = 'top' | 'right' | 'bottom' | 'left'
  type Align = 'start' | 'center' | 'end'

  interface Tabs {
    currentValue: {
      pos: number
      width: number
    }
    returnValue: {
      pos: number
      width: number
    }
  }
}
export {}
