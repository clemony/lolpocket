<script setup lang="ts">
import { usePocketStore } from '@/client/stores/pocketStore'
const ps = usePocketStore()

console.log(ps.pockets)
</script>

<template>
    <PageLayout>
        <template #header>Home</template>
        <template #header-end>
            <Badge variant="neutral" size="sm" class="font-mono select-none">
                21 days ago
            </Badge>
            <Badge variant="neutral" size="sm" class="font-mono select-none">
                14.16.1
            </Badge>
        </template>
        <LayoutSpacer class="!h-36" />
        <main class="z-0! m-0 mt-2 flex size-full gap-y-3 px-10 py-0">
            <div class="flex w-110 flex-col gap-8">
                <PlayerCard />
                <RankCard title="Solo/Duo" queue="soloDuo" />
                <RankCard title="Flex" queue="flex" />
            </div>
            <div class="w-1/2"></div>

            <div class="grid h-[calc(100%-12rem)] w-120 gap-8">
                <DisplayCard class="h-full" no-padding>
                    <template #header>
                        <div class="flex items-center gap-4">
                            <h3>News & Updates</h3>
                            <!--      <Badge
                                variant="neutral"
                                size="sm"
                                class="!text-3 text-nc px-2.5">
                                1
                            </Badge> -->
                        </div>
                    </template>
                </DisplayCard>
            </div>
        </main>
    </PageLayout>
</template>
