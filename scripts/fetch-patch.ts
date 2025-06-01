import { writeFile } from 'node:fs/promises'
import { ofetch } from 'ofetch'

const MIN_PATCH_MAJOR = 15

function normalizePatch(patch: string): number {
  const [major, minor] = patch.split('.').map(Number)
  const formattedMinor = minor.toString().padStart(2, '0')
  return Number.parseFloat(`25.${formattedMinor}`) // assuming current year is 2025
}

async function main() {
  try {
    const versions = await ofetch<string[]>('https://ddragon.leagueoflegends.com/api/versions.json')

    const filtered = versions
      .map(v => v.split('.').slice(0, 2).join('.')) // trim to major.minor
      .filter((v) => {
        const [major] = v.split('.').map(Number)
        return major >= MIN_PATCH_MAJOR
      })

    const normalized = filtered.map(patch => normalizePatch(patch))

    await writeFile('./data/raw/patch-index-raw.json', JSON.stringify(filtered, null, 2))
    await writeFile('./data/index/patch-index.json', JSON.stringify(normalized, null, 2))

    console.log('✅ Patches written to rawPatches.json and normalizedPatches.json')
  }
  catch (e) {
    console.error('❌ Error fetching or writing patches:', e)
  }
}

main()

// if (ds.currentPatch == patch && ds.currentPatchNotes && ds.currentPatchNotes.patch == patch)
//   return

// ds.currentPatch = null
// ds.currentPatch =

// export function getPatchList() {
//   const ds = useDataStore()
//   const allPatches = []
//   // const season = useDateFormat(useNow(), 'YY')
//   let patchNum = 25.01
//   const latestPatch = Number.parseFloat(ds.currentPatch)

//   while (patchNum <= latestPatch) {
//     allPatches.push(patchNum.toFixed(2)) // Ensure proper formatting (e.g., "25.01")
//     patchNum += 0.01 // Increment by 0.01
//     patchNum = Number.parseFloat(patchNum.toFixed(2)) // Prevent floating-point precision errors
//   }
//   return allPatches
// }