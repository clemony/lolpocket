<script setup lang="ts"></script>

<template>
    <main class="m-0 flex h-screen w-full gap-8 px-4 py-0">
        <div class="flex w-130">
            <ScrollArea class="overflow-auto overscroll-auto rounded-none">
                <div class="flex w-110 flex-col gap-8 px-3 pb-10">
                    <LayoutSpacer class="!h-10" />

                    <PlayerCard />

                    <RankCard title="Solo/Duo" queue="soloDuo" />

                    <RankCard title="Flex" queue="flex" />

                    <ChampTabs />
                </div>
            </ScrollArea>
        </div>
        <ScrollArea class="overflow-auto overscroll-auto">
            <div class="flex w-full flex-col gap-8 px-3 pb-10">
                <LayoutSpacer class="!h-28" />
                <PlayerMatches />
            </div>
        </ScrollArea>
    </main>
</template>
