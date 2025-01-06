import { useTempStore } from '@stores/tempStore'
import { Item } from '@/types/dataTypes'
import { useDataStore } from '@stores/dataStore'

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

export const getItemImage = (id) => {
    const ds = useDataStore()
    return (
        'https://ddragon.leagueoflegends.com/cdn/' +
        ds.currentPatch +
        '/img/item/' +
        id +
        '.png'
    )
}

export const getChampionImage = (id) => {
    const ds = useDataStore()
    return (
        'https://ddragon.leagueoflegends.com/cdn/' +
        ds.currentPatch +
        '/img/champion/' +
        id +
        '.png'
    )
}
