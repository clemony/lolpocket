import axios from 'axios'
import { useDataStore } from '@stores/dataStore'
import { Champion, Champions, Item, Path, Rune } from '@/types/dataTypes'
import { supabase } from '@lib/supabase'

export function getRuneData() {
    limiter.schedule(() =>
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
    )
}

export function getChampionData() {
    limiter.schedule(() =>
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
    )
}

export function getShardData() {
    limiter.schedule(() =>
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
    )
}

export function getPatch() {
    limiter.schedule(() =>
        axios({
            method: 'get',
            url: 'https://ddragon.leagueoflegends.com/api/versions.json',
            responseType: 'json',
        }).then(function (response) {
            const ds = useDataStore()
            const patch = response.data[0]
            console.log('💠 - getPatch - patch:', patch)

            if (ds.currentPatch != patch) {
                getRuneData()
                getChampionData()
                // getItemData()
                // summs
                //shards
                ds.currentPatch = patch
            } else {
                return
            }
        })
    )
}
