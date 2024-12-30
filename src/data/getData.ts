import axios from 'axios'
import { useDataStore } from '@stores/oldDataStore'
import { Champion, Champions, Item, Path, Rune } from '@/types/dataTypes'

export function getRuneData() {
    axios({
        method: 'get',
        url: 'https://ddragon.leagueoflegends.com/cdn/14.24.1/data/en_US/runesReforged.json',
        responseType: 'json',
    }).then(function (response) {
        const ds = useDataStore()
        const runeData = response.data
        const runesArray = Object.values(runeData) as Path[]
        const sortPaths = runesArray.sort((a, b) => a.id - b.id)

        if (sortPaths.length >= 5) {
            const temp = sortPaths[3]
            sortPaths[3] = sortPaths[4]
            sortPaths[4] = temp
        }
        ds.paths.push(...sortPaths)
    })
}

export function getChampionData() {
    axios({
        method: 'get',
        url: 'https://ddragon.leagueoflegends.com/cdn/14.24.1/data/en_US/champion.json',
        responseType: 'json',
    }).then(function (response) {
        const ds = useDataStore()

        const championData = response.data.data
        const championsArray = Object.values(championData) as Champion[]

        ds.champions.push(...championsArray)
    })
}

export function getItemData() {
    axios({
        method: 'get',
        url: 'https://ddragon.leagueoflegends.com/cdn/14.24.1/data/en_US/item.json',
        responseType: 'json',
    }).then(function (response) {
        const ds = useDataStore()

        const itemData = response.data.data
        const a = Object.values(itemData) as Item[]
        const b = a.filter((item) => item.maps[11])
        const c = b.filter((item) => item.inStore != false)

        const d =
                (k, s = new Set()) =>
                (o) =>
                    !s.has(o[k]) && s.add(o[k]),
            array = c,
            e = array.filter(d('name'))
        ds.items.push(...e)
    })
}
export function getShardData() {
    axios({
        method: 'get',
        url: 'https://raw.communitydragon.org/latest/game/perks.cdtb.bin.json',
        responseType: 'json',
    }).then(function (response) {
        const ds = useDataStore()

        const regex = /Perks\/StatMods.*/
        const a = [...response.data]
        console.log('💠 - getShardData - a:', a)
        const b = a.filter((item) => item.match(regex))
        console.log('💠 - getShardData - b:', b)

        //ds.shards.push(...e)
    })
}
