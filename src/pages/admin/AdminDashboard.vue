<script setup lang="ts">
import { patchItemDatabase } from '@/components/items/data/database/updateItemData'
import { getWikiData } from '@/lib/getWikiData'
import { getItemsFromDatabase } from '@/components/items/data/client/getItemsFromDatabase'
import { getRuneData, getShardData } from '@data/getData'
import { useDataStore } from '@stores/dataStore'
import { useTempStore } from '@stores/tempStore'
import { patchChampionDatabase } from '@/components/champions/data/updateChampionData'
import { getChampsFromDatabase } from '@components/champions/data/getChampsFromDatabase'

const ts = useTempStore()
const ds = useDataStore()

function update() {
    patchItemDatabase()

    patchChampionDatabase()
}
function reset() {
    ds.paths.length = 0
    ds.champions.length = 0
    ds.items.length = 0
    ds.SRitems.length = 0
    ds.SRitems.length = null
    console.log('store arrays reset')
}

function reGet() {
    getRuneData()
    getItemsFromDatabase()
    // getRuneData()
    //getShardData()
    console.log('data fetch complete!')
}
</script>
<template>
    <!--     <div
        class="wrapper flex size-full flex-col items-center justify-center gap-15">
        <LayoutSpacer />
        <div class="">your pocket picks</div>
        <div class="flex gap-2">
            <div class="flex flex-col gap-2">
                All
                <Button variant="neutral" size="md" @click="update()">
                    Update Data
                </Button>

                <Button variant="neutral" size="md" @click="reset">
                    Empty Data
                </Button>
                <Button variant="neutral" size="md" @click="reGet">
                    Refill Data
                </Button>
            </div>

            <div class="flex flex-col gap-2">
                Items
                <Button
                    variant="neutral"
                    size="md"
                    @click="
                        getWikiData(
                            'https://wiki.leagueoflegends.com/en-us/api.php?',
                            '\{{:Module:ItemData/data}}',
                            'item'
                        )
                    ">
                    Get Item Data
                </Button>

                <Button
                    variant="neutral"
                    size="md"
                    @click="patchItemDatabase()">
                    Patch Items
                </Button>

                <Button
                    variant="neutral"
                    size="md"
                    @click="getItemsFromDatabase()">
                    Get Items From Database
                </Button>
            </div>

            <div class="flex flex-col gap-2">
                Champions
                <Button
                    variant="neutral"
                    size="md"
                    @click="
                        getWikiData(
                            'https://wiki.leagueoflegends.com/en-us/api.php?',
                            '\{{:Module:ChampionData/data}}',
                            'champion'
                        )
                    ">
                    Get Wiki Data
                </Button>

                <Button
                    variant="neutral"
                    size="md"
                    @click="patchChampionDatabase()">
                    Patch Champions
                </Button>

                <Button
                    variant="neutral"
                    size="md"
                    @click="getChampsFromDatabase()">
                    Get Champs from Database
                </Button>
            </div>
        </div>
    </div> -->
</template>
<style scoped></style>
