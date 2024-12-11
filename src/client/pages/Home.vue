<script setup lang="ts">
import { summoner } from '@/client/data/playerData'
import { usePocketStore } from '@/client/stores/pocketStore'
const ps = usePocketStore()

export interface article {
    title: string
    source: string
    icon?: string
    source2?: string
    image: string
    link?: string
    linkTitle?: string
    color?: string
    date?: string
}
const hasSource2 = ref('false')
console.log(ps.pockets)
</script>

<template>
    <PageLayout>
        <template #header>Home</template>
        <template #header-end>
            <Badge variant="primary" class="font-mono select-none">
                21 days ago
            </Badge>
            <Badge variant="neutral" class="font-mono select-none">
                14.16.1
            </Badge>
        </template>
        <LayoutSpacer class="!h-36" />
        <main class="py- z-0! m-0 mt-2 flex size-full gap-y-3 px-10">
            <div class="flex w-1/2 flex-col gap-8">
                <PlayerCard :summoner="summoner" />
                <RankCard title="Solo/Duo" :queue="summoner.ranks.soloDuo" />
                <RankCard title="Flex" :queue="summoner.ranks.flex" />
            </div>
            <div class="w-1/2"></div>

            <div class="grid h-[calc(100%-12rem)] w-120 gap-8">
                <DisplayCard class="h-full" no-padding>
                    <template #header>
                        <div class="flex items-center gap-4">
                            <h3>News & Updates</h3>
                            <Badge
                                variant="neutral"
                                size="sm"
                                class="!text-3 text-nc px-2.5">
                                1
                            </Badge>
                        </div>
                    </template>
                </DisplayCard>
            </div>
        </main>
    </PageLayout>
</template>
