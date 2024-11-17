import {
    DefaultItem,
    pocket,
    pocketChampions,
    pocketItems,
    pocketRunes,
} from 'types'
import { hexoid } from 'hexoid'
import { newItemSet } from './PocketUtilities'
import { useRuneStore } from '@/Stores/runeStore'
import { usePocketStore } from '@/Stores/pocketStore'
import { generateRandomString } from './Keygen'

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

export function createGridHeader(pinned: boolean) {
    const ps = usePocketStore()

    const toID = hexoid()
    const aKey = toID()
    const pocketChampionsValue: pocketChampions = {
        key: aKey,
        champions: [],
        starred: '',
    }

    const pocketItemsValue: pocketItems = {
        key: aKey,
        itemSets: [newItemSet()],
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
    const rs = useRuneStore()

    const pocketRunesValue: pocketRunes = {
        key: aKey,
        runeSets: [rs.newRuneSet()],
        starred: 0,
        selected: 0,
    }

    // Create the new pocket
    const newPocket: pocket = {
        name: 'header',
        tags: [''],
        pinned: false,
        key: aKey,
        icon: 'teenyicons:folder-outline',
        bgColor: '#000',
        iconColor: '#FFF',
        champions: [pocketChampionsValue],
        items: [pocketItemsValue],
        runes: [pocketRunesValue],
        notes: '',
        dateCreated: [createDateObject()],
        dateUpdated: [createDateObject()],
        component: null,
        fullWidth: true,
    }
    return newPocket
    console.log('pinia pocket added')
}
