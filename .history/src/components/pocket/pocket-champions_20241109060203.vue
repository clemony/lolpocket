<script setup lang="ts">
import { useChampStore } from '../../stores/champStore'
import { usePocketStore } from '../../stores/pocketStore'
import { useSessionStore } from '@stores/sessionStore'
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from '@/components/ui/resizable'
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
<ResizablePanelGroup direction="horizontal"
    class=" h-[calc(100%-130px)] max-h-[calc(100%-130px)] w-full px-6 overflow-hidden ">
    <ResizablePanel>
        <ResizablePanelGroup direction="vertical">
            <ResizablePanel :default-size='30' class="h-full pb-4">
                <LayoutSpacer />
                <InfoCard title="Selected Champions"
                    description="Drag champions up, add from the sidebar and context menus, or quick search by pressing the empty slot right here.">


                    <!--    <div class="overflow-clip scrollbar-hide px-5"> -->
                    <ChampionsSelected v-if="pocket" :pocketKey="pocket.key" class='px-1' />
                </InfoCard>
            </ResizablePanel>
            <ResizeHandle with-handle class='!h-4 mb-3' />
            <ResizablePanel :default-size='70' class="contain-strict">
                <Card class='h-full max-h-inherit '>
                    <CardContent class='h-full max-h-inherit p-0 w-full '>
                        <CardHeader
                            class='h-12 absolute z-10 bg-base-100/90 backdrop-blur-md top-0 left-0 flex-row items-center  w-full px-4 py-1 shadow-sm rounded-t-box border-b border-b-base-200'>
                            <SearchBox :search="cs.champSearch" :placeholder="'Search Champions...'"
                                @update:search="cs.champSearch = $event"
                                class='bg-base-100/80 rounded-md shadow-inset-sm' />
                            <Grow />
                            <div>
                                <DdCheckbox :data="ds.uniqueClass" v-model:dataValue="dataValue"
                                    defaultText="Class / Role" />
                            </div>

                        </CardHeader>



                        <ChampionList v-if="pocket" :pocketKey="pocket.key" class='pt-14 px-5' />




                    </CardContent>
                </Card>

            </ResizablePanel>
        </ResizablePanelGroup>
    </ResizablePanel>
    <ResizeHandle with-handle class='!w-4 mx-3' />

    <ResizablePanel :default-size="30" :min-size="10" class="relative max-h-inherit w-[300px]">
        <ChampionSidebar :champion="cs.selectedChampion" />
    </ResizablePanel>
</ResizablePanelGroup>
</template>
