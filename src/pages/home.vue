<script setup lang="ts">
import { NewsArticles } from '@data/news';

interface article {
    title: string
    source: string
    image: string
}
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

            <div v-for="article in NewsArticles" class="card bg-base-100 w-60 h-64 text-sm shadow-xl">
                <figure>
                    <img :src="article.image" :alt="article.title + ' image'" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title text-lg">
                        {{ article.title }}
                        <div class="badge badge-secondary">NEW</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions justify-end">
                        <div class="badge badge-outline">Fashion</div>
                        <div class="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>

        </div>

    </div>


</template>
