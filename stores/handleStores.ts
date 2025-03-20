/* import { useSidebarStore } from 'stores/sidebarStore'
 */
export const as = computedAsync(async () => {
  return await useAccountStore()
}, null)
export const ans = computedAsync(async () => {
  return await useAnalysisStore()
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

export const is = computedAsync(async () => {
  return await useItemStore()
}, null)

export const rs = computedAsync(async () => {
  return await useRuneStore()
}, null)

export const cs = computedAsync(async () => {
  return await useChampStore()
}, null)

export const us = computedAsync(async () => {
  return await useUiStore()
}, null)
