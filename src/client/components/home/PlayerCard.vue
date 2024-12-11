<script setup lang="ts">
import { summoner } from '@/client/data/playerData'
</script>
<template>
    <Card>
        <CardHeader class="">
            <CardTitle class="flex items-center gap-2">
                <h2>{{ summoner.name }}</h2>
                <span class="text-4 font-normal">#{{ summoner.tag }}</span>
            </CardTitle>
        </CardHeader>
        <CardContent class="relative flex max-h-44 w-full gap-10 px-8">
            <div class="grid h-36 w-1/2 place-items-center drop-shadow-lg">
                <img
                    :src="summoner.icon"
                    class="absolute top-7.5 left-5.5 size-19 rounded-full" />
                <div class="absolute -top-6 -left-4 size-38">
                    <img
                        :src="`/img/profile-borders/${summoner.border}.png`"
                        class="h-48 w-auto object-cover" />
                </div>
            </div>

            <div
                class="-mt-2 flex h-full w-1/2 flex-col justify-center gap-3 font-medium">
                <div>
                    <p class="text-3">Level {{ summoner.level }}</p>
                </div>
                <div class="text-2">
                    <p>Peaked</p>
                    <Tooltip
                        :content="'Season ' + summoner.peakRank.season"
                        align="end">
                        <p class="flex items-center gap-2 capitalize">
                            <img
                                :src="`/img/crests/mini/${summoner.peakRank.peak}.png`"
                                class="size-9 drop-shadow-xs" />
                            {{ summoner.peakRank.peak }}
                        </p>
                    </Tooltip>
                </div>
            </div>
        </CardContent>
    </Card>
</template>
<style scoped></style>
