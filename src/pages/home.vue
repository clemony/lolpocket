<script setup lang="ts">
import AlbumArtwork from './AlbumArtwork.vue';

import { madeForYouAlbums } from '../data/albums';
</script>

<template>

    <div class="hidden w-screen h-screen md:block">

        <div class="border-t">
            <div class="bg-background">
                <div class="grid lg:grid-cols-5">
                    <div class="col-span-3 lg:col-span-4 lg:border-l">
                        <div class="h-full px-4 py-6 lg:px-8">

                            <div class="mt-6 space-y-1">
                                <h2 class="text-2xl font-semibold tracking-tight">
                                    League News
                                </h2>
                                <p class="text-sm text-muted-foreground">
                                    Stay on top of the happening things.
                                </p>
                            </div>
                            <Separator class="my-4" />
                            <div class="relative">
                                <ScrollArea>
                                    <div class="flex pb-4 space-x-4">
                                        <AlbumArtwork v-for="album in madeForYouAlbums" :key="album.name" :album="album"
                                            class="w-[150px]" aspect-ratio="square" :width="150" :height="150" />
                                    </div>
                                    <ScrollBar orientation="horizontal" />
                                </ScrollArea>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
