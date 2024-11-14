<script setup lang="ts">
import { useChampStore } from '../../stores/champStore'
import { usePocketStore } from '../../stores/pocketStore'
import { useSessionStore } from '@stores/sessionStore'
import { ResizablePanel } from '@/components/base/resizable'
import { useDataStore } from '@stores/dataStore'
const ds = useDataStore();

const sn = useSessionStore()
const cs = useChampStore()
const ps = usePocketStore()

const props = defineProps<{
    pocketKey: string
}>()

const pocket = ref(ps.getPocket(props.pocketKey));
const dataValue = ref()

</script>

<template>
<Layout2 :panel2Size="30">
    <template #panel1>


        <LayoutSpacer />
        <InfoCard title="Selected Champions"
            description="Drag champions up, add from the sidebar and context menus, or quick search by pressing the empty slot right here.">


            <ChampionsSelected v-if="pocket" :pocketKey="pocket.key" class='px-1' />
        </InfoCard>


        <Card class='mt-9 max-h-[calc(100%-230px)] overflow-hidden'>

            <CardHeader
                class=' absolute z-10 bg-base-100/90 backdrop-blur-md top-0 left-0 flex-row items-center  w-full  rounded-t-box  py-4 px-12'>
                <SearchBox :search="cs.champSearch" :placeholder="'Search Champions...'"
                    @update:search="cs.champSearch = $event" class='bg-base-100/80 rounded-md shadow-inset-sm' />
                <Grow />
                <div class='mr-1.5'>
                    <DdCheckbox :data="ds.uniqueClass" v-model:dataValue="dataValue" text="Class / Role" />
                </div>

            </CardHeader>

            <CardContent class='h-full max-h-inherit pb-0  w-full '>

                <ChampionList v-if="pocket" :pocketKey="pocket.key" class='pt-14 px-5' />




            </CardContent>
        </Card>


    </template>

    <template #panel2>

        <ChampionSidebar :champion="cs.selectedChampion" />
    </template>
</Layout2>
</template>
