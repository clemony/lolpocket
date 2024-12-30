import { usePocketStore } from '@/stores/pocketStore'
import { hexoid } from 'hexoid'
import { pocket, Shard } from '@/types/pocketTypes'
import {
    createDateObject,
    createDefaultRune,
    createDefaultShard,
} from './addPocket'
import { generateRandomName } from './Keygen'
import { useAccountStore } from '@stores/accountStore'

export function getPocket(key) {
    const ps = usePocketStore()
    return ps.pockets.find((pocket: pocket) => pocket.key === key)
}

export function deletePocket(pocketKey: string) {
    const ps = usePocketStore()
    const pocket = getPocket(pocketKey)
    const index = ps.pockets.findIndex((set) => set.key === pocketKey)

    if (index !== -1 && pocket) {
        if (pocket.pinned == true) {
            pocket.pinned = false
        }
        ps.trashPockets.push(pocket)
        ps.pockets.splice(index, 1)
    }
}

export function newItemSet(pocketKey?) {
    if (pocketKey) {
        const ps = usePocketStore()
        const pocket = getPocket(pocketKey)

        if (pocket) {
            const toID = hexoid()
            const newSet = reactive({
                key: toID(),
                name: generateRandomName() + ' Set',
                items: [],
                isDisabled: false,
                starred: 0,
            })

            pocket.items[0].itemSets.push(newSet)
        }
    } else {
        const toID = hexoid()
        return reactive({
            key: toID(),
            name: generateRandomName() + ' Set',
            items: [],
            isDisabled: false,
            starred: 0,
        })
    }
}

export function deleteItemSet(pocketKey, key: string) {
    const ps = usePocketStore()
    const pocket = getPocket(pocketKey)
    if (pocket) {
        const index = pocket.items[0].itemSets.findIndex(
            (set) => set.key === key
        )

        if (index !== -1) {
            pocket.items[0].itemSets.splice(index, 1) // Use the index and delete 1 item
        }
    }
}

function deepCopy<T>(obj: T): T {
    return JSON.parse(JSON.stringify(obj))
}

export function duplicatePocket(original: pocket): pocket {
    const ps = usePocketStore()
    const toID = hexoid()

    const newPocket = deepCopy(original)

    newPocket.key = toID()
    newPocket.name = `${original.name} (copy)`
    newPocket.dateCreated = [createDateObject()]
    newPocket.dateUpdated = [createDateObject()]

    ps.pockets.push(newPocket)
    return newPocket
}
const shard = createDefaultShard() as Shard

export function newRuneSet(key?) {
    const toID = hexoid()
    const newSet = {
        key: toID(),
        name: generateRandomName() + ' Set',
        primary: {
            path: 'empty',
            keystone: createDefaultRune(),
            runes: {
                1: createDefaultRune(),
                2: createDefaultRune(),
                3: createDefaultRune(),
            },
        },

        secondary: {
            path: 'empty',
            runes: {
                1: createDefaultRune(),
                2: createDefaultRune(),
            },
        },
        shards: {
            0: createDefaultShard() as Shard,
            1: createDefaultShard() as Shard,
            2: createDefaultShard() as Shard,
        },
    }

    if (key) {
        const pocket = getPocket(key)
        pocket.runes[0].runeSets.push(newSet)
    } else {
        return newSet
    }
}

export function deleteRuneSet(pocket, setKey) {
    const runeSets = pocket.runes[0].runeSets
    const index = runeSets.findIndex((set) => set.key == setKey)
    runeSets.splice(index, 1)
}
export function resetRunes(pocket, set, number?) {
    const runes1 = [set.value.p1, set.value.p2, set.value.p3]

    const runes2 = [set.value.s1, set.value.s2]

    const runes =
        !number ? runes1.concat(runes2)
        : number == 1 ? runes1
        : number == 2 ? runes2
        : null

    runes.forEach((rune) => {
        rune = createDefaultRune()
    })
}

export function addItemToSet(pocket, itemSet, item) {
    const set = pocket.items[0].itemSets.find((set) => set.key === itemSet)

    if (set && Array.isArray(set.items)) {
        set.items.push(item)
    }
}

export function removeItemFromSet(pocket, itemSet, itemx) {
    const ps = usePocketStore()
    const thisPocket = getPocket(pocket)
    const set = thisPocket?.items[0].itemSets.find((set) => set.key === itemSet)

    if (set) {
        const index = set.items.findIndex((item) => item === itemx)
        if (set && Array.isArray(set.items)) {
            set.items.splice(index)
        }
    }
}

export function removeChamp(champ, pocket) {
    const find = pocket.champions[0].champions.findIndex(
        (champion) => champion.name == champ
    )

    if (find && find! - -1) {
        pocket.champions[0].champions.splice(find, 1)
    }
}

export function handleItemLike(thisItem) {
    const as = useAccountStore()
    if (as.favoriteItems.some((item) => item.name === thisItem.name)) {
        const index = as.favoriteItems.findIndex(
            (item) => item.name === thisItem.name
        )
        if (index !== -1) {
            as.favoriteItems.splice(index, 1)
        }
    } else {
        as.favoriteItems.push(thisItem)
    }
}

export function resetItems(key: string) {
    const as = useAccountStore()
    const set = as.itemSets.find((set) => set.key === key)

    if (set && Array.isArray(set.items)) {
        set.items.splice(0, set.items.length) // Reset the array
    }
}
