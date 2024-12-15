<script setup lang="ts">
import { summoner } from '@/client/data/playerData'
</script>
<template>
    <div class="align-end flex h-fit items-center gap-3 px-3 normal-case">
        <h1 class="font-serif font-bold">{{ summoner.name }}</h1>
        <span class="text-4 pt-1.5 font-normal">#{{ summoner.tag }}</span>
    </div>
    <Card class="w-full">
        <CardContent class="relative flex h-50 w-full px-8">
            <div class="grid w-1/2 place-items-center drop-shadow-lg">
                <img
                    :src="summoner.icon"
                    class="absolute top-17 left-6 size-18 rounded-full" />

                <div class="absolute top-3 -left-3 size-36">
                    <img
                        :src="`/img/profile-borders/${summoner.border}.png`"
                        class="h-48 w-auto object-cover" />
                </div>
            </div>

            <div
                class="mt-4 flex h-full w-1/2 flex-col justify-center gap-2 font-medium">
                <p class="text-3">Level {{ summoner.level }}</p>

                <p class="flex capitalize">
                    <!--   <icon
                        icon="pepicons-pencil:earth-americas"
                        class="size-5" /> -->
                    {{ summoner.region }}
                </p>

                <p class="mt-2 -mb-2">Peaked</p>
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
        </CardContent>
    </Card>
</template>
<style scoped></style>
