<script setup lang="ts">
import { patchItemDatabase } from '@/components/items/data/database/updateItemData'
import { getWikiData } from '@lib/getWikiData'
import { getItemsFromDatabase } from '@/components/items/data/client/getItemsFromDatabase'
import { getChampionData, getRuneData, getShardData } from '@data/getData'
import { useDataStore } from '@stores/dataStore'
import { useTempStore } from '@stores/tempStore'
import { patchChampionDatabase } from '@/components/champions/data/updateChampionData'

const ts = useTempStore()
const ds = useDataStore()
</script>
<template>
    <div
        class="wrapper flex size-full flex-col items-center justify-center gap-15">
        <LayoutSpacer />
        <div class="">your pocket picks</div>
    </div>
</template>
<style scoped></style>
