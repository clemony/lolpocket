/* eslint-disable regexp/optimal-quantifier-concatenation */
export function convertPatchToRiotFormat(patchNum) {
  const a = useDateFormat(useNow(), 'YY')
  return `${a.value}.${patchNum}`
}
export function normalizePatchNumber(patch) {
  let p = patch.replace(/\d+\.(\d+).*/, '$1')
  p = p.length < 2 ? `0${p}` : p
  return convertPatchToRiotFormat(p)
}

export async function getPatch() {
  const ds = useDataStore()
  const request = new Request('https://ddragon.leagueoflegends.com/api/versions.json', {
    method: 'GET',
  })

  try {
    const response = await fetch(request)
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }
    const json = await response.json()

    const patch = normalizePatchNumber(json[0])
    console.log('💠 - getPatch - patch:', patch)

    if (ds.currentPatch == patch && ds.currentPatchNotes && ds.currentPatchNotes.patch == patch)
      return

    ds.currentPatch = null
    ds.currentPatch = Number.parseFloat(patch)
  }
  catch (error: any) {
    console.error(error.message)
  }
}

export function getPatchList() {
  const ds = useDataStore()
  const allPatches = []
  // const season = useDateFormat(useNow(), 'YY')
  let patchNum = 25.01
  const latestPatch = Number.parseFloat(ds.currentPatch)

  while (patchNum <= latestPatch) {
    allPatches.push(patchNum.toFixed(2)) // Ensure proper formatting (e.g., "25.01")
    patchNum += 0.01 // Increment by 0.01
    patchNum = Number.parseFloat(patchNum.toFixed(2)) // Prevent floating-point precision errors
  }
  return allPatches
}