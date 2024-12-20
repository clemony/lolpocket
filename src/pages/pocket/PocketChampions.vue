<script setup lang="ts">
import { useTempStore } from '@stores/tempStore'
import { useAccountStore } from '@stores/accountStore'
import { getPocket } from '@/utils/pocketUtilities'
const ts = useTempStore()

const as = useAccountStore()
const props = defineProps<{
    pocketKey: string
}>()

const pocket = ref(getPocket(props.pocketKey))
const dataValue = ref()
</script>

<template>
    <Layout2 :panel2Size="30">
        <template #panel1>
            <div class="h-full w-[97%]">
                <InfoCard
                    title="Selected Champions"
                    description="Drag champions up, add from the sidebar and context menus, or quick search by pressing the empty slot right here."
                    class="">
                    <div class="relative">
                        <div class="absolute top-1.5 left-1.5 z-10 size-16">
                            <video-background
                                src="https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-tft/global/default/videos/claimable-sparkles-free.webm"
                                style="height: 100%"
                                class="bg-center"></video-background>
                        </div>
                    </div>
                    <SelectedChampions
                        v-if="pocket"
                        :pocket="pocket"
                        class="px-1" />
                </InfoCard>

                <Card
                    class="mt-9 h-[calc(100%-315px)] max-h-[calc(100%-315px)] overflow-hidden">
                    <CardHeader
                        class="bg-b1/90 absolute top-0 left-0 z-10 w-full flex-row items-center rounded-t-xl px-12 py-4 backdrop-blur-md">
                        <SearchBox
                            :search="ts.champSearch"
                            :placeholder="'Search Champions...'"
                            @update:search="ts.champSearch = $event"
                            class="bg-b1/80 shadow-inset-sm rounded-md" />
                        <Grow />
                        <div class="join mr-1">
                            <Label
                                variant="outline"
                                size="icon"
                                class="join-item swap swap-flip has-checked:bg-b2! relative has-disabled:cursor-default"
                                alt="Filter Likes">
                                <input
                                    type="checkbox"
                                    name="viewFavorite"
                                    v-model="ts.viewFavoriteChamps"
                                    class="hidden"
                                    :disabled="!as.favoriteChamps.length" />
                                <HeartIcons />
                            </Label>
                        </div>
                        <!--             <template #popper>
                    <DdCheckbox class='join-item' @update:dataValue="(v) => dataValue = v" :data="ds.uniqueClass"
                        text="Class / Role" v-model:dataValue="dataValue" />
                </template> -->
                    </CardHeader>

                    <CardContent
                        class="h-full! max-h-full! w-full pr-0 pb-0 pl-5">
                        <ScrollArea
                            class="max-h-inherit! h-inherit! overflow-y-auto!">
                            <ChampionList
                                v-if="pocket"
                                :pocket="pocket"
                                class="px-5 pt-14" />
                        </ScrollArea>
                    </CardContent>
                </Card>
            </div>
        </template>

        <template #panel2>
            <div class="h-full w-[97%] justify-end justify-items-end pl-6">
                <ChampionSidebar :champion="ts.selectedChampion" />
            </div>
        </template>
    </Layout2>
</template>
