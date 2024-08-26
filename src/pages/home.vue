<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { NewsArticles } from "@stores/news";
import { ref } from "vue";

export interface article {
    title: string;
    source: string;
    icon?: string;
    source2?: string;
    image: string;
    link?: string;
    linkTitle?: string;
    color?: string;
}
const hasSource2 = ref("false");

function handleLinks() { }
</script>

<template>
    <div class="w-full py-4  grid gap-y-3 m-0 mt-2 !z-0">
        <div class="gap-2 flex items-end w-full px-6">
            <div class="grow flex items-baseline gap-2 ">
                <h2 class="text-xl font-extrabold tracking-tight">News & Updates</h2>
                <p class="text-sm text-muted-foreground italic pb-1">
                    the happening things.
                </p>
            </div>

            <div class="justify-self-end self-start tooltip tooltip-bottom tooltip-accent" data-tip="current patch">
                <div class="badge badge-accent font-mono text-[0.66rem]">14.16.1</div>
            </div>

        </div>

        <div
            class="flex w-full overflow-x-scroll h-64 content-center items-center gap-5 scrollbar-hide !z-1 -transition-all duration-700 delay-200 news-after pl-6 ">
            <div v-for="article in NewsArticles"
                class="card  h-56 text-sm shadow-md min-w-96 !z-0 !*:z-0 group overflow-hidden hover:scale-[1.03] transition-transform duration-700 group"
                @click.prevent="handleLinks" :title="article.link">



                <img :src="article.image" :alt="article.title + ' image'"
                    class="w-full h-full object-cover object-center absolute z-0" />

                <div
                    class="group-hover:opacity-100 absolute transition-all duration-500 opacity-0 bg-neutral/60 w-full h-full top-0 left-0 backdrop-blur-md text-neutral-content rounded-lg overflow-hidden grid grid-cols-1 content-start justify-items-center  italic  pt-6 text-xs">

                </div>

                <div
                    class="group-hover:h-3/5 transition-height duration-500 card-body absolute !bg-base-100/90 h-2/5 glass bottom-0 left-0 w-full z-0">
                    <div class="overflow-hidden z-10">
                        <h2 class="card-title text-base text-balanced mb-0">
                            {{ article.title }}
                        </h2>

                        <div
                            class="align-bottom flex text-xs mt-0  gap-2 *:text-pretty *:content-start *:justify-start relative">
                            <div class="flex gap-1 align-top">
                                {{ article.source }}
                            </div>
                            <span v-if="article && article.source2" class="text-xxs italic font-sans flex gap-1">
                                by {{ article.source2 }}
                            </span>
                        </div>
                        <div class="absolute bottom-5 right-5">
                            <Icon v-if="article && article.icon" :icon="article.icon" :class="article.color"
                                class="size-5 opacity-50" />
                        </div>

                        <p class="flex justify-center gap-1 items-baseline text-balance w-2/3">Read more on
                            {{ article.linkTitle }}
                            <Icon icon="cil:external-link" class="size-2.5" />
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-2 gap-6 pr-12 w-full pt-2 mx-6">
            <div class="col-start-1">
                <h2 class="text-xl w-full pl-1 justify-end font-extrabold tracking-tight h-8">
                    Recent builds
                </h2>

                <div class="grid grid-cols-1 mt-4 gap-4">
                    <div
                        class="overflow-x-hidden overflow-y-scroll scrollbar-hide card bg-base-100/60 backdrop-blur-md shadow-md">
                        <table class="table table-pin-rows 0">
                            <!-- head -->
                            <thead>
                                <tr class="bg-base-200/60">
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

            <div class="col-start-2 pl-1">
                <h2 class="text-xl w-full pr-5 justify-end font-extrabold tracking-tight h-8">
                    Champion Winrates
                </h2>
                <div class="grid grid-cols-1 gap-4 mt-4">
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
        </div>
    </div>
</template>
