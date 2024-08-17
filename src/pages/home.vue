<script setup lang="ts">
import { NewsArticles } from '@data/news';

interface Article {
    name: string
    source: string
    image: string
}
</script>

<template>

    <div class="hidden w-screen h-screen md:block">

        <div class="">
            <div class="bg-background">
                <div class="grid lg:grid-cols-5">
                    <div class="col-span-3 lg:col-span-4">
                        <div class="h-full px-4 py-6 lg:px-8">

                            <div class="mt-6 space-y-1">
                                <h2 class="text-2xl font-semibold tracking-tight">
                                    League News
                                </h2>
                                <p class="text-sm text-muted-foreground">
                                    Stay on top of the happening things.
                                </p>
                            </div>

                            <div v-for="Article in NewsArticles" class="card bg-base-100 w-60 text-sm shadow-xl">
                                <figure>
                                    <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                        alt="Shoes" />
                                </figure>
                                <div class="card-body">
                                    <h2 class="card-title">
                                        Shoes!
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
                </div>
            </div>
        </div>
    </div>
</template>
