<script setup lang="ts">
import { useChampStore } from '../../stores/champStore'
import { usePocketStore } from '../../stores/pocketStore'
import { useDataStore } from '@/stores/dataStore'
import { useItemStore } from '@/stores/itemStore'
const ds = useDataStore()
const is = useItemStore()
const cs = useChampStore()
const ps = usePocketStore()

const props = defineProps<{
    pocketKey: string
}>()

const pocket = ref(ps.getPocket(props.pocketKey))
const dataValue = ref()
</script>

<template>
    <Layout2 :panel2Size="30">
        <template #panel1>
            <div class="w-[95%]">
                <InfoCard
                    title="Selected Champions"
                    description="Drag champions up, add from the sidebar and context menus, or quick search by pressing the empty slot right here.">
                    <ChampionsSelected
                        v-if="pocket"
                        :pocketKey="pocket.key"
                        class="px-1" />
                </InfoCard>

                <Card
                    class="mt-9 h-[calc(100%-400px)] max-h-[calc(100%-400px)] overflow-hidden">
                    <CardHeader
                        class="absolute left-0 top-0 z-10 w-full flex-row items-center rounded-t-box bg-base-100/90 px-12 py-4 backdrop-blur-md">
                        <SearchBox
                            :search="cs.champSearch"
                            :placeholder="'Search Champions...'"
                            @update:search="cs.champSearch = $event"
                            class="rounded-md bg-base-100/80 shadow-inset-sm" />
                        <Grow />
                        <div class="join mr-1">
                            <Label
                                variant="outline"
                                size="icon"
                                class="join-item swap swap-flip relative has-[:disabled]:cursor-default has-[:checked]:!bg-base-200"
                                alt="Filter Likes">
                                <input
                                    type="checkbox"
                                    name="viewLoved"
                                    v-model="cs.viewLoved"
                                    class="hidden"
                                    :disabled="!cs.lovedChamps.length" />
                                <HeartIcons />
                            </Label>
                        </div>
                        <!--             <template #popper>
                    <DdCheckbox class='join-item' @update:dataValue="(v) => dataValue = v" :data="ds.uniqueClass"
                        text="Class / Role" v-model:dataValue="dataValue" />
                </template> -->
                    </CardHeader>

                    <CardContent
                        class="!h-full !max-h-full w-full pb-0 pl-5 pr-0">
                        <ScrollArea
                            class="!max-h-inherit !h-inherit !overflow-y-auto">
                            <ChampionList
                                v-if="pocket"
                                :pocketKey="pocket.key"
                                class="px-5 pt-14" />
                        </ScrollArea>
                    </CardContent>
                </Card>
            </div>
        </template>

        <template #panel2>
            <ChampionSidebar :champion="cs.selectedChampion" />
        </template>
    </Layout2>
</template>
