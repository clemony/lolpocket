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

        <div class="grid grid-cols-[30%_minmax(1fr)] overflow-x-scroll h-64 content-center gap-5">

            <div v-for="article in NewsArticles" class="card bg-base-100 w-54 h-56 text-sm shadow-lg">
                <figure>
                    <img :src="article.image" :alt="article.title + ' image'" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title text-base  mb-0">{{ article.title }}</h2>

                    <div class="text-xs italic mt-0 grid gap-1 *:content-start *:justify-start">
                        <div class="flex gap-1">
                            <Icon v-if="article && article.icon" :icon="article.icon"
                                class="w-4 h-4 text-base-content/70" />
                            {{ article.source }}
                        </div>
                        <div v-if="article && article.source2" class="flex gap-1">on
                            <Icon v-if="article && article.icon2" :icon="article.icon2"
                                class="w-4 h-4 text-base-content/70 " />
                            {{ article.source2 }}
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>


</template>
