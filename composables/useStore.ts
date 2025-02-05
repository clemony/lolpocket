export const as = computedAsync(async () => {
  return await useAccountStore()
}, null)

export const ds = computedAsync(async () => {
  return await useDataStore()
}, null)

export const ps = computedAsync(async () => {
  return await usePocketStore()
}, null)

export const ts = computedAsync(async () => {
  return await useTempStore()
}, null)
