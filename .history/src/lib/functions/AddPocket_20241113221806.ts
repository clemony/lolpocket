import { useRuneStore } from '@/stores/runeStore'
import { hexoid } from 'hexoid'
import { pocketChampions, pocketItems, pocketRunes, pocket } from 'types'
import { createDefaultItem, createDateObject } from './CreateDefault'
import { generateRandomString } from './Keygen'
import { newItemSet } from './PocketUtilities'
import { usePocketStore } from '@/stores/pocketStore'
const toID = hexoid()

export function addPocket(
    name: string,
    tags: Array<string>,
    icon: string,
    bgColor: string,
    iconColor: string,
    key?: string
) {
    const aKey = toID()

    const pocketChampionsValue: pocketChampions = {
        key: key || aKey,
        champions: [],
        starred: '',
    }

    const pocketItemsValue: pocketItems = {
        key: key || aKey,
        itemSets: [],
        starred: 0,
        alts: {
            alt1: [createDefaultItem()],
            alt2: [createDefaultItem()],
            alt3: [createDefaultItem()],
            alt4: [createDefaultItem()],
            alt5: [createDefaultItem()],
            alt6: [createDefaultItem()],
        },
        start: undefined,
        core: undefined,
        final: undefined,
    }

    const pocketRunesValue: pocketRunes = {
        key: key || aKey,
        runeSets: [],
        starred: 0,
        selected: 0,
    }

    // Create the new pocket
    const newPocket: pocket = {
        name: name || generateRandomString(),
        tags: tags || [''],
        pinned: false,
        key: key || aKey,
        icon: icon || 'teenyicons:folder-outline',
        bgColor: bgColor || '#000',
        iconColor: iconColor || '#FFF',
        champions: [pocketChampionsValue],
        items: [pocketItemsValue],
        runes: [pocketRunesValue],
        notes: '',
        dateCreated: [createDateObject()],
        dateUpdated: [createDateObject()],
        component: null,
        fullWidth: false,
    }

    const rs = useRuneStore()
    const ps = usePocketStore()

    ps.pockets.push(newPocket)
    newItemSet(newPocket.key)
    rs.newRuneSet(newPocket.key)
    console.log('pinia pocket added')
}
