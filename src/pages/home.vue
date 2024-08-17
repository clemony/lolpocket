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

    <div class="w-full py-4 grid gap-y-3 relative m-0">


        <div class="gap-2 flex items-end">
            <h2 class="text-xl font-semibold tracking-tight">
                League News
            </h2>
            <p class="text-sm text-muted-foreground italic pb-[4px]">
                the happening things.
            </p>
        </div>

        <div class="flex overflow-x-scroll h-64 content-center gap-5 news-after scrollbar-hide  px-3 left-0">

            <div v-for="article in NewsArticles"
                class="card bg-base-100/60 backdrop-brightness-105 backdrop-blur-m  h-56 text-sm shadow-lg first:w-64px first:min-w-96 min-w-56 z-0 *:z-0">
                <figure>
                    <img :src="article.image" :alt="article.title + ' image'" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title text-base text-balanced mb-0">{{ article.title }}</h2>

                    <div class="text-xs italic mt-0 grid gap-1 *:text-pretty *:content-start *:justify-start">
                        <div class="flex gap-1 ">
                            {{ article.source }}
                        </div>
                        <div v-if="article && article.source2" class="text-xxs font-sans flex gap-1 ">
                            on {{ article.source2 }}
                        </div>
                    </div>

                    <div class="absolute bottom-5 right-5">
                        <Icon v-if="article && article.icon" :icon="article.icon" class="size-5 text-base-content/70" />
                    </div>
                </div>
            </div>

        </div>

        <div class="grid grid-cols-2 gap-6 pr-12 w-full">

            <div
                class="overflow-x-hidden overflow-y-scroll scrollbar-hide max-h-full card bg-base-100/60 backdrop-brightness-105 backdrop-blur-md shadow-lg">
                <table class="table table-pin-rows">
                    <!-- head -->
                    <thead>
                        <tr>
                            <th>Champion</th>
                            <th>Role</th>
                            <th>Winrate</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- row 1 -->
                        <tr>

                            <td>
                                <div class="flex items-center gap-3">
                                    <div class="avatar">
                                        <div class="rounded-lg h-12 w-12">
                                            <img src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div class="font-bold">Hart Hagerty</div>
                                        <div class="text-sm opacity-50">United States</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Zemlak, Daniel and Leannon
                                <br />
                                <span class="badge badge-ghost badge-sm">Desktop Support Technician</span>
                            </td>
                            <td>Purple</td>
                        </tr>
                        <!-- row 2 -->
                        <tr>

                            <td>
                                <div class="flex items-center gap-3">
                                    <div class="avatar">
                                        <div class="rounded-lg h-12 w-12">
                                            <img src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div class="font-bold">Brice Swyre</div>
                                        <div class="text-sm opacity-50">China</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Carroll Group
                                <br />
                                <span class="badge badge-ghost badge-sm">Tax Accountant</span>
                            </td>
                            <td>Red</td>

                        </tr>
                        <!-- row 3 -->
                        <tr>

                            <td>
                                <div class="flex items-center gap-3">
                                    <div class="avatar">
                                        <div class="rounded-lg h-12 w-12">
                                            <img src="https://img.daisyui.com/images/profile/demo/4@94.webp"
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div class="font-bold">Marjy Ferencz</div>
                                        <div class="text-sm opacity-50">Russia</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Rowe-Schoen
                                <br />
                                <span class="badge badge-ghost badge-sm">Office Assistant I</span>
                            </td>
                            <td>Crimson</td>

                        </tr>
                        <!-- row 4 -->
                        <tr>

                            <td>
                                <div class="flex items-center gap-3">
                                    <div class="avatar">
                                        <div class="rounded-lg h-12 w-12">
                                            <img src="https://img.daisyui.com/images/profile/demo/5@94.webp"
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div class="font-bold">Yancy Tear</div>
                                        <div class="text-sm opacity-50">Brazil</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Wyman-Ledner
                                <br />
                                <span class="badge badge-ghost badge-sm">Community Outreach Specialist</span>
                            </td>
                            <td>Indigo</td>

                        </tr>
                    </tbody>
                </table>
            </div>



            <div class="overflow-x-auto card bg-base-100/60 backdrop-brightness-105 backdrop-blur-m shadow-lg">
                <table class="table">
                    <!-- head -->
                    <thead>
                        <tr>
                            <th>Champion</th>
                            <th>Role</th>
                            <th>Winrate</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- row 1 -->
                        <tr>

                            <td>
                                <div class="flex items-center gap-3">
                                    <div class="avatar">
                                        <div class="rounded-lg h-12 w-12">
                                            <img src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div class="font-bold">Hart Hagerty</div>
                                        <div class="text-sm opacity-50">United States</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Zemlak, Daniel and Leannon
                                <br />
                                <span class="badge badge-ghost badge-sm">Desktop Support Technician</span>
                            </td>
                            <td>Purple</td>
                        </tr>
                        <!-- row 2 -->
                        <tr>

                            <td>
                                <div class="flex items-center gap-3">
                                    <div class="avatar">
                                        <div class="rounded-lg h-12 w-12">
                                            <img src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div class="font-bold">Brice Swyre</div>
                                        <div class="text-sm opacity-50">China</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Carroll Group
                                <br />
                                <span class="badge badge-ghost badge-sm">Tax Accountant</span>
                            </td>
                            <td>Red</td>

                        </tr>
                        <!-- row 3 -->
                        <tr>

                            <td>
                                <div class="flex items-center gap-3">
                                    <div class="avatar">
                                        <div class="rounded-lg h-12 w-12">
                                            <img src="https://img.daisyui.com/images/profile/demo/4@94.webp"
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div class="font-bold">Marjy Ferencz</div>
                                        <div class="text-sm opacity-50">Russia</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Rowe-Schoen
                                <br />
                                <span class="badge badge-ghost badge-sm">Office Assistant I</span>
                            </td>
                            <td>Crimson</td>

                        </tr>
                        <!-- row 4 -->
                        <tr>

                            <td>
                                <div class="flex items-center gap-3">
                                    <div class="avatar">
                                        <div class="rounded-lg h-12 w-12">
                                            <img src="https://img.daisyui.com/images/profile/demo/5@94.webp"
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div class="font-bold">Yancy Tear</div>
                                        <div class="text-sm opacity-50">Brazil</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Wyman-Ledner
                                <br />
                                <span class="badge badge-ghost badge-sm">Community Outreach Specialist</span>
                            </td>
                            <td>Indigo</td>

                        </tr>
                    </tbody>
                </table>
            </div>



        </div>

    </div>


</template>

<style>
.news-after::after {
    background: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 80%, oklch(var(--b2)) 100%);

    @apply content-[''] z-50 fixed top-28 right-0 w-[calc(100%-300px)] h-56 pointer-events-none;
}
</style>