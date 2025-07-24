export interface TemplateResult {
  html: string
  exportType?: string
  isPp?: boolean
  isLevelScaling?: boolean
}

export interface ParseState {
  i: number
  str: string
}

export interface PpInput {
  values: string // from raw param[0], possibly cleaned
  exportType: string
  levels?: string
  key?: string
  key1?: string
  color?: string
}

export interface RdInput {
  melee: string
  ranged: string
  isPp: boolean
}
export type TipInput = string[]
export type AsInput = any

export type FormatMapArgs
  = | { exportType: 'pp', input: PpInput, depth: number }
    | { exportType: 'rd', input: RdInput, depth: number }
    | { exportType: 'tip', input: TipInput, depth: number }
    | { exportType: 'as', input: AsInput, depth: number }

export type FormatFn<T> = (args: T) => string | TemplateResult

export type ComplexFormatMap = {
  [K in FormatMapArgs['exportType']]: FormatFn<
    Extract<FormatMapArgs, { exportType: K }>
  >
}

export type SimpleFormatFn = (
  result: string,
  params?: string[]
) => string | TemplateResult

export type FormatMap = Partial<ComplexFormatMap> & {
  [key: string]: SimpleFormatFn | FormatFn<any>
}
