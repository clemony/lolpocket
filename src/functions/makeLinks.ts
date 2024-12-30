import {
    getItem,
    ItemName,
    isItemName,
    lol,
    Items,
    ItemId,
    isItemId,
} from 'lol-constants'
import { useTempStore } from '@stores/tempStore'
import { itemDatabase } from '@data/itemDatabase'
import { itemData } from '@/types/dataTypes'
import { useDataStore } from '@stores/dataStore'

export const getItemId = (thisItem) => {
    const item = thisItem
    let itemName = item as ItemName
    getItem(itemName)

    const response: {
        ItemName: string
    }[] = [
        {
            ItemName: thisItem,
        },
    ]

    for (const data of response) {
        if (!isItemName(data.ItemName)) continue
        const { id } = getItem(data.ItemName)
        return id
    }
}

export const getItembyId = (thisItem) => {
    const item = thisItem
    let itemId = item as ItemId
    getItem(itemId)

    const response: {
        ItemId: number
    }[] = [
        {
            ItemId: thisItem,
        },
    ]

    for (const data of response) {
        if (!isItemId(data.ItemId)) continue
        const Item = getItem(data.ItemId)
        return Item
    }
}

export const matchItemName = (thisItem) => {
    console.log('💠 - matchItemName - thisItem:', thisItem)
    const a = getItemId(thisItem)
    return itemDatabase.find((item) => item.id == a)
}

export function formatLink(link) {
    return link.replace(' ', '_').replace("'", '%27')
}

export const getWikiLink = (thing) => {
    const a = formatLink(thing)
    return 'https://wiki.leagueoflegends.com/en-us/' + a
}

export const lolImgCdn = computed(() => {
    return 'https://ddragon.leagueoflegends.com/cdn/img/'
})

export const getItemImage = (name) => {
    const ts = useTempStore()
    if (!name) {
        return
    }
    const a = getItemId(name)
    return (
        'https://ddragon.leagueoflegends.com/cdn/' +
        ts.currentPatch +
        '/img/item/' +
        a +
        '.png'
    )
}
