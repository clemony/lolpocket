import { useTempStore } from '@stores/tempStore'
import type { Champion, Item, Rune } from '@/types/dataTypes'
import type { drawer } from '@/types/utilityTypes'

export function toggleDrawerState(
    drawerData,
    pocket?,
    champion?: Champion,
    item?: Item,
    rune?: Rune
) {
    console.log('💠 - toggleDrawerState - champion:', champion)
    console.log('💠 - toggleDrawerState - pocket:', pocket)
    console.log('💠 - toggleDrawerState - drawerData:', drawerData)
    const ts = useTempStore()

    ts.drawerValue = drawerData

    if (pocket != null) {
        ts.drawerPocket = pocket
    } else if (champion != null) {
        ts.selectedChampion = champion
    } else if (item != null) {
        ts.selectedItem = item
    } else if (rune != null) {
        ts.selectedRune = rune
    }
    ts.drawerState = !ts.drawerState

    if (!ts.drawerState) {
        ts.drawerPocket = null
        ts.selectedChampion = null
        ts.selectedItem = null
        ts.selectedRune = null
        ts.drawerValue = null as drawer
    }
}