<script setup lang="ts">
import { NewsArticles } from '@data/news';
import { Icon } from '@iconify/vue';
interface article {
    title: string
    source: string
    icon?: string
    source2?: string
    icon2?: string
    image: string
}

const hasSource2 = ref('false');

</script>

<template>

    <div class="w-full p-4 grid gap-y-3">


        <div class="gap-2 flex items-end">
            <h2 class="text-xl font-semibold tracking-tight">
                League News
            </h2>
            <p class="text-sm text-muted-foreground italic pb-[5px]">
                the happening things.
            </p>
        </div>

        <div class="flex overflow-x-scroll h-72 content-center gap-5">

            <div v-for="article in NewsArticles" class="card bg-base-100 w-60 h-64 text-sm shadow-lg">
                <figure>
                    <img :src="article.image" :alt="article.title + ' image'" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title text-lg truncate line-clamp-1 mb-0">{{ article.title }}</h2>

                    <p class="text-xs italic mt-0 *:inline justify-start">
                        <Icon :icon="article.icon" class="w-4 h-4 text-base-content/70" />
                        {{ article.source }}

                        <span v-if="article && article.source2" class="inline">on
                            <Icon v-if="article && article.icon2" :icon="article.icon2"
                                class="w-4 h-4 text-base-content/70 inline" /> {{ article.source2 }}
                        </span>
                    </p>
                </div>
            </div>

        </div>

    </div>


</template>
