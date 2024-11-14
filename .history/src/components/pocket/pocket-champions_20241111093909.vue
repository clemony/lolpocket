<script setup lang="ts">
import { useChampStore } from '../../stores/champStore'
import { usePocketStore } from '../../stores/pocketStore'
import { useDataStore } from '@stores/dataStore'
import { useItemStore } from '@stores/itemStore'
const ds = useDataStore();
const is = useItemStore()
const cs = useChampStore()
const ps = usePocketStore()

const props = defineProps<{
    pocketKey: string
}>()

const pocket = ref(ps.getPocket(props.pocketKey));
const dataValue = ref()
const loveButt = ref(cs.lovedChamps)

</script>

<template>
<Layout2 :panel2Size="30">
    <template #panel1>



        <InfoCard title="Selected Champions"
            description="Drag champions up, add from the sidebar and context menus, or quick search by pressing the empty slot right here.">


            <ChampionsSelected v-if="pocket" :pocketKey="pocket.key" class='px-1' />
        </InfoCard>


        <Card class='mt-9 max-h-[calc(100%-300px)] h-[calc(100%-300px)]  overflow-hidden'>

            <CardHeader
                class=' absolute z-10 bg-base-100/90 backdrop-blur-md top-0 left-0 flex-row items-center  w-full  rounded-t-box  py-4 px-12'>
                <SearchBox :search="cs.champSearch" :placeholder="'Search Champions...'"
                    @update:search="cs.champSearch = $event" class='bg-base-100/80 rounded-md shadow-inset-sm' />
                <Grow />
                <FilterButtons :loved="is.lovedItems.length">

                    <input type="checkbox" name="lc" v-model="is.viewLoved" class="hidden"
                        :disabled="!is.lovedItems.length" />

                </FilterButtons>
                <!--             <template #popper>
                    <DdCheckbox class='join-item' @update:dataValue="(v) => dataValue = v" :data="ds.uniqueClass"
                        text="Class / Role" v-model:dataValue="dataValue" />
                </template> -->

            </CardHeader>

            <CardContent class='!h-full !max-h-full pb-0  w-full pr-0 pl-5'>
                <ScrollArea class='!h-inherit !max-h-inherit  !overflow-y-auto'>
                    <ChampionList v-if="pocket" :pocketKey="pocket.key" class='pt-14 px-5' />

                </ScrollArea>


            </CardContent>
        </Card>


    </template>

    <template #panel2>

        <ChampionSidebar :champion="cs.selectedChampion" />
    </template>
</Layout2>
</template>
