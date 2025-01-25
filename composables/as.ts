export const as = computedAsync(async () => {
  return await useAccountStore()
}, null)
