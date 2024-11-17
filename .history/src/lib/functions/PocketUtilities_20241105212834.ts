import { usePocketStore } from '@stores/pocketStore'
import { hexoid } from 'hexoid'
import { pocket } from 'types'
import { createDateObject } from './CreateDefault'
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

export function runeColors(runeSet) {
    const keystone = runeSet.keystone

    if (keystone.path != 'none' && runeSet.secondary != 'none') {
        var k = ''
        if (keystone.path == 'resolve') {
            k = 'via-resolve'
        } else if (keystone.path == 'sorcery') {
            k = 'via-sorcery'
        } else if (keystone.path == 'inspiration') {
            k = 'via-inspiration'
        } else if (keystone.path == 'domination') {
            k = 'via-domination'
        } else if (keystone.path == 'precision') {
            k = 'via-precision'
        }
        var r = ''

        if (runeSet.secondary == 'resolve') {
            var r = 'to-resolve'
        } else if (runeSet.secondary == 'sorcery') {
            var r = 'to-sorcery'
        } else if (runeSet.secondary == 'inspiration') {
            var r = 'to-inspiration'
        } else if (runeSet.secondary == 'domination') {
            var r = 'to-domination'
        } else if (runeSet.secondary == 'precision') {
            var r = 'to-precision'
        } else if (!runeSet.secondary) {
            var r = 'to-bg-base-200'
        }

        const classes = k + ' ' + r
        return classes.toString()
    } else if (keystone.path != 'none' && runeSet.secondary == 'none') {
        if (runeSet.secondary == 'none') {
            return 'to-resolve'
        } else if (keystone.path == 'sorcery') {
            return 'to-sorcery'
        } else if (keystone.path == 'inspiration') {
            return 'to-inspiration'
        } else if (keystone.path == 'domination') {
            return 'to-domination'
        } else if (keystone.path == 'precision') {
            return 'to-precision'
        }
    } else if (keystone.path != 'none' && runeSet.secondary == 'none') {
        return 'to-base-200'
    }
}
