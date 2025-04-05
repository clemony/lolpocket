export default defineNuxtRouteMiddleware(async (to, from) => {
  const ds = useDataStore()
  if (!ds) {
    await ds.loadData
  }

  !ds.champions.length ? getChampsFromDatabase() : ''
  !ds.items ? getItemsFromDatabase() : ''
  !ds.paths.length ? getRuneData() : ''
  // console.log('💠 - useDataStore - SRitems:', ds.items);
  // console.log('💠 - champions:', ds.champions);
  // console.log('💠 - paths:', ds.paths);
})
