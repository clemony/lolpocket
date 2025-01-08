import { useTempStore } from '@/stores/tempStore'
import { hexoid } from 'hexoid'
import { toast } from 'vue-sonner'
import PocketToast from '@/components/toast/PocketToast.vue'
import {
    pocketChampions,
    pocketItems,
    pocketRunes,
    pocket,
    DefaultItem,
    spell,
} from '@/types/pocketTypes'
import { generateRandomString, generateRandomName } from '../ui/keygen'
import { newItemSet, newRuneSet } from './pocketUtilities'
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
    id: number
    tier: number
    type: string
    img: string
    stats: string
    path: string
} {
    return {
        name: 'empty',
        id: 0,
        tier: 0,
        type: '',
        img: '/img/runes/blankRune.webp',
        stats: '',
        path: 'empty',
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
        name: 'empty',
        stats: '',
        slotID: 0,
        slotName: 'empty',
        type: '',
        icon: 'oui:shard',
        color: 'empty',
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

    const ps = usePocketStore()

    ps.pockets.push(newPocket)
    newItemSet(newPocket.key)
    newRuneSet(newPocket.key)

    toast(markRaw(PocketToast), {
        unstyled: true,
        //duration: Infinity,
        classes: {
            toast: 'bg-b1/95 border !border-b2 shadow-pretty mt-14   w-98 max-w-98 justify-start rounded-lg p-5  !h-40 backdrop-blur-md relative ',
        },
        componentProps: {
            pocket: newPocket,
        },
    })
}
