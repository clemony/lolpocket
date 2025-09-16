export type Json<D extends number = 9, DA extends any[] = []> =
  | string
  | number
  | boolean
  | null
  | (D extends DA["length"] ? any
    : { [key: string]: Json<D, [0, ...DA]> | undefined })
  | (D extends DA["length"] ? any : Json<D, [0, ...DA]>[])
