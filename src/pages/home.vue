<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { NewsArticles } from '@/stores/news';

export interface article {
    title: string
    source: string
    icon?: string
    source2?: string
    image: string
    link?: string
    linkTitle?: string
}
const hasSource2 = ref('false');

</script>

<template>



    <div class="w-full py-4 pl-6 grid gap-y-3  m-0 !z-0">


        <div class="gap-2 flex items-end">
            <h2 class="text-2xl font-semibold font-serif tracking-tight">
                League News
            </h2>
            <p class="text-sm text-muted-foreground italic pb-[3px]">
                the happening things.
            </p>
        </div>
        <div
            class="flex w-full  overflow-x-scroll h-64 content-center items-center gap-5 scrollbar-hide left-0 !z-1 transition-all duration-700 delay-200 news-after">

            <a v-for="article in NewsArticles"
                class="card !bg-base-100/60 h-56 text-sm shadow-lg first:w-64px first:min-w-96 min-w-56 !z-0 !*:z-0 group overflow-hidden hover:scale-[1.03] transition-transform duration-700"
                target="_blank" :href="article.link" :title="article.link">

                <figure class="relative">

                    <div
                        class=" group-hover:opacity-100 absolute transition-all duration-500 opacity-0 bg-neutral/60 w-full h-full  top-0 left-0 backdrop-blur-md text-neutral-content rounded-lg overflow-hidden grid grid-cols-1 place-items-center place-content-center font-semibold">
                        <p class="">Read more on</p>
                        <p class="flex gap-2 "> {{ article.linkTitle }}
                            <Icon icon="cil:external-link" class="size-3 " />
                        </p>
                    </div>

                    <img :src="article.image" :alt="article.title + ' image'" />
                </figure>

                <div class="card-body ">
                    <div>
                        <h2 class="card-title text-base text-balanced mb-0">{{ article.title }}</h2>

                        <div class="text-xs mt-0 grid gap-1 *:text-pretty *:content-start *:justify-start relative">
                            <div class="flex gap-1  align-top">
                                {{ article.source }}

                            </div>
                            <div v-if="article && article.source2" class="text-xxs italic font-sans flex gap-1 ">
                                by {{ article.source2 }}
                            </div>
                        </div>
                        <div class="absolute bottom-5 right-5 ">
                            <Icon v-if="article && article.icon" :icon="article.icon"
                                class="size-5 text-base-content/70" />
                        </div>
                    </div>



                </div>
            </a>
        </div>




        <div class="grid grid-cols-2 gap-6 pr-12 w-full pt-2">
            <div class="col-start-1 ">
                <h2 class="text-xl w-full pr-5 justify-end h-8 text-right ">
                    Recent builds
                </h2>

                <div class="grid grid-cols-1 mt-4 gap-4">
                    <div
                        class="overflow-x-hidden overflow-y-scroll scrollbar-hide  card bg-base-100/60  backdrop-blur-md shadow-lg">
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
                </div>
            </div>


            <div class="col-start-2 pl-1">
                <h2 class="text-xl w-full pr-5 justify-end h-8 text-right ">
                    Champion winrates
                </h2>
                <div class="grid grid-cols-1 gap-4 mt-4">
                    <div class="overflow-x-auto  card bg-base-100/60 backdrop-brightness-105 backdrop-blur-m shadow-lg">

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
