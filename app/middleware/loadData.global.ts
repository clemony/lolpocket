export default defineNuxtRouteMiddleware(async (to, from) => {
  const ds = useDataStore()
  if (!ds) {
    await ds.loadData
  }


})
