declare global {

type TemplateResult = string | {
  html: string
  type?: string
  isPp?: boolean
  isLevelScaling?: boolean
}

interface ParseState {
  i: number
  str: string
}

interface PpInput {
  values: string // from raw param[0], possibly cleaned
  type: string
  levels?: string
  key?: string
  key1?: string
  color?: string
}

interface RdInput {
  melee: string
  ranged: string
  isPp: boolean
}
  type TipInput = string[]
type AsInput = any

  type FormatMapArgs =
    | { type: 'pp', input: PpInput, depth: number }
    | { type: 'rd', input: RdInput, depth: number }
    | { type: 'tip', input: TipInput, depth: number }
    | { type: 'as', input: AsInput, depth: number }

    type FormatFn<T> = (args: T) => string | TemplateResult

    type ComplexFormatMap = {
      [K in FormatMapArgs['type']]: FormatFn<Extract<FormatMapArgs, { type: K }>>
    }

    type SimpleFormatFn = (result: string, params?: string[]) => string | TemplateResult

    type FormatMap = Partial<ComplexFormatMap> & {
      [key: string]: SimpleFormatFn | FormatFn<any>
    }

}
export { }
