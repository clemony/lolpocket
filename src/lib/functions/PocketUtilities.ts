import { usePocketStore } from '@/stores/pocketStore'
import { hexoid } from 'hexoid'
import { pocket } from 'types'
import {
    createDateObject,
    createDefaultRune,
    createDefaultShard,
} from './AddPocket'
import { generateRandomName } from './Keygen'

export function newItemSet(pocketKey?) {
    if (pocketKey) {
        const ps = usePocketStore()
        const pocket = ps.getPocket(pocketKey)

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
    const pocket = ps.getPocket(pocketKey)
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

export function newRuneSet(key?) {
    const toID = hexoid()
    const newSet = {
        key: toID(),
        name: generateRandomName() + ' Set',
        primary: 'none',
        keystone: createDefaultRune(),
        p1: createDefaultRune(),
        p2: createDefaultRune(),
        p3: createDefaultRune(),
        s1: createDefaultRune(),
        s2: createDefaultRune(),
        secondary: 'none',
        shards: {
            shard1: createDefaultShard(),
            shard2: createDefaultShard(),
            shard3: createDefaultShard(),
        },
    }
    if (key) {
        const ps = usePocketStore()
        const pocket = ps.getPocket(key)
        pocket.runes[0].runeSets.push(newSet)
    } else {
        return newSet
    }
}

export function deleteRuneSet(pocket, setKey) {
    const runeSets = pocket.runes[0].runeSets
    const index = runeSets.value.findIndex((set) => set.key == setKey)
    runeSets.value.splice(index, 1)
}
function resetRunes() {}

export function addToSet(pocket, itemSet, item) {
    const set = pocket.items[0].itemSets.find((set) => set.key === itemSet)

    if (set && Array.isArray(set.items)) {
        set.items.push(item)
    }
}

export function removeFromSet(pocket, itemSet, itemx) {
    const ps = usePocketStore()
    const thisPocket = ps.getPocket(pocket)
    const set = thisPocket?.items[0].itemSets.find((set) => set.key === itemSet)

    if (set) {
        const index = set.items.findIndex((item) => item === itemx)
        if (set && Array.isArray(set.items)) {
            set.items.splice(index)
        }
    }
}
