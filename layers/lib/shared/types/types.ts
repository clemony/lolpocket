export type AnyObj = Record<string, unknown>

export type DeepMerge<T, U> = T extends AnyObj
  ? U extends AnyObj
    ? {
        [K in keyof T | keyof U]: K extends keyof U
          ? K extends keyof T
            ? DeepMerge<T[K], U[K]>
            : U[K]
          : K extends keyof T
            ? T[K]
            : never
      }
    : U
  : U

export type DeepMergeMany<
  T extends readonly unknown[],
  Acc = AnyObj,
> = T extends readonly [infer H, ...infer R]
  ? DeepMergeMany<R, DeepMerge<Acc, H>>
  : Acc

export interface RootProps {
  label: string
  to: string
  icon: string
  fillIcon: string
  class: string
  order: number
}

export type ValuesOf<T> = T[keyof T]
