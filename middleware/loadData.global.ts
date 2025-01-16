import { getChampsFromDatabase, getItemsFromDatabase, getRuneData } from 'shared/supabase/supaIndex'

export default defineNuxtRouteMiddleware(async (to, from) => {
  const ds = useDataStore()
  if (!ds) {
    await ds.loadData
  }

  !ds.champions.length ? getChampsFromDatabase() : ''
  !ds.SRitems.length ? getItemsFromDatabase() : ''
  !ds.paths.length ? getRuneData() : ''
  //console.log('💠 - useDataStore - SRitems:', ds.SRitems);
  //console.log('💠 - champions:', ds.champions);
  //console.log('💠 - paths:', ds.paths);
})
