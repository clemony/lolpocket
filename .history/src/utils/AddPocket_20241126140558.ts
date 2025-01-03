import { useRuneStore } from '@/stores/runeStore'
import { hexoid } from 'hexoid'
import {
    pocketChampions,
    pocketItems,
    pocketRunes,
    pocket,
    DefaultItem,
    spell,
} from 'types'
import { generateRandomString, generateRandomName } from '../../lib/functions/Keygen'
import { newItemSet } from '../../utils/PocketUtilities'
import { usePocketStore } from '@/stores/pocketStore'
const toID = hexoid()

export function createDefaultItem(): DefaultItem {
    return {
        name: '',
        img: '',
        buy: 0,
        sell: 0,
        stats: '',
        passive: '',
        active: '',
        type: '',
        cat: '',
        wiki: '',
        id: 0,
        count: 0,
    }
}

export function createDateObject() {
    const now = new Date()
    const patch = '14.19'
    const formattedDate = now.toLocaleDateString('en-US', {
        year: '2-digit',
        month: '2-digit',
        day: '2-digit',
    })

    let formattedTime = now.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
    })

    if (formattedTime.startsWith('0')) {
        formattedTime = formattedTime.slice(1)
    }

    return {
        date: formattedDate,
        time: formattedTime,
        patch: patch,
    }
}

export function createDefaultRune(): {
    name: string
    wiki: string
    tier: number
    type: string
    img: string
    stats: string
    path: string
} {
    return {
        name: 'none',
        wiki: '',
        tier: 0,
        type: '',
        img: '/img/runes/blankRune.webp',
        stats: '',
        path: 'none',
    }
}

export function createDefaultShard(): {
    name: string
    slotID: number
    slotName: string
    type: string
    icon: string
    stats: string
    color: string
} {
    return {
        name: 'none',
        stats: '',
        slotID: 0,
        slotName: 'none',
        type: '',
        icon: 'oui:shard',
        color: 'none',
    }
}

export const createDefaultSpell = (): spell => ({
    name: '',
    description: '',
    cd: 0,
    recharge: 0,
    charges: 0,
})

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
        spells: {
            spell1: createDefaultSpell(),
            spell2: createDefaultSpell(),
            alt1: createDefaultSpell(),
            alt2: createDefaultSpell(),
        },
        notes: '',
        dateCreated: [createDateObject()],
        dateUpdated: [createDateObject()],
        component: null,
    }

    const rs = useRuneStore()
    const ps = usePocketStore()

    ps.pockets.push(newPocket)
    newItemSet(newPocket.key)
    rs.newRuneSet(newPocket.key)
    console.log('pinia pocket added')
}
