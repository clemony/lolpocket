<script setup lang="ts">
import { NewsArticles } from '../data/news'
import { usePocketStore } from '@stores/pocketStore'
const ps = usePocketStore()
import { useSessionStore } from '../stores/sessionStore'

const sn = useSessionStore()

export interface article {
    title: string
    source: string
    icon?: string
    source2?: string
    image: string
    link?: string
    linkTitle?: string
    color?: string
    date?: string
}
const hasSource2 = ref('false')

ps.pockets.splice(1, 3)
function handleLinks() {}
</script>

<template>
    <PageLayout>
        <template #header>Home</template>
        <template #header-end>
            <Badge variant="primary" class="select-none font-mono">
                21 days ago
            </Badge>
            <Badge variant="secondary" class="select-none font-mono">
                14.16.1
            </Badge>
        </template>

        <template #content>
            <div class="!z-0 m-0 mt-2 grid w-full gap-y-3 py-4">
                <div class="flex w-full items-end gap-2 px-6">
                    <div class="flex grow items-center gap-4">
                        <h1 class="text-xl font-bold tracking-tight">
                            News & Updates
                        </h1>

                        <div class="text-mini badge badge-primary font-mono">
                            1 new!
                        </div>
                    </div>
                </div>

                <div
                    class="!z-1 -transition-all news-after flex h-64 w-full content-center items-center gap-5 overflow-x-scroll pl-6 delay-200 duration-700 scrollbar-hide">
                    <a
                        v-for="article in NewsArticles"
                        class="!*:z-0 group card relative !z-0 m-0 h-56 min-w-96 overflow-hidden border border-base-100 bg-cover p-0 text-sm shadow-warm transition-transform duration-700 hover:scale-[1.02]"
                        :title="article.link"
                        :style="{
                            backgroundImage: 'url(' + article.image + ')',
                        }"
                        :href="article.link"
                        target="_blank">
                        <div
                            class="absolute left-0 top-0 grid h-full w-full grid-cols-1 content-start justify-items-center rounded-box bg-neutral/40 pt-6 italic opacity-0 shadow-inner backdrop-blur-sm transition-all duration-500 group-hover:opacity-100"></div>

                        <div
                            class="frost z-1 card-body absolute inset-x-0 bottom-0 m-0 h-2/5 !bg-base-100/90 object-bottom pb-0 pt-5 transition-all duration-500 group-hover:h-1/2">
                            <div class="z-10 col-start-1 overflow-hidden">
                                <p
                                    v-if="article && article.date"
                                    class="text-xxs flex gap-1 font-mono">
                                    {{ article.date }}
                                </p>
                                <h2
                                    class="text-balanced card-title mb-0 text-base">
                                    {{ article.title }}
                                </h2>

                                <div
                                    class="relativ mt-0 flex w-full gap-2 align-bottom opacity-0 transition-all duration-500 *:content-start *:justify-start *:text-pretty group-hover:opacity-100">
                                    <div
                                        class="mt-1 flex grow items-baseline gap-2">
                                        {{ article.source }}

                                        <span
                                            v-if="article && article.source2"
                                            class="text-xxs flex gap-1 italic">
                                            by {{ article.source2 }}
                                        </span>
                                    </div>

                                    <div
                                        class="mr-3 grid grid-cols-1 self-end pr-3">
                                        <p
                                            class="flex items-baseline gap-1 italic">
                                            {{ article.linkTitle }}
                                            <Icon
                                                icon="cil:external-link"
                                                class="size-2.5" />
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="absolute bottom-5 right-5">
                                <Icon
                                    v-if="article && article.icon"
                                    :icon="article.icon"
                                    :class="article.color"
                                    class="size-5 opacity-50" />
                            </div>
                        </div>
                    </a>
                </div>

                <div class="mx-6 grid w-full grid-cols-2 gap-6 pr-12 pt-2">
                    <div class="col-start-1">
                        <h2
                            class="h-8 w-full justify-end pl-1 text-xl font-bold tracking-tight">
                            Recent builds
                        </h2>

                        <div class="mt-4 grid grid-cols-1 gap-4">
                            <div
                                class="card overflow-x-hidden overflow-y-scroll bg-base-100/60 shadow-warm backdrop-blur-md scrollbar-hide">
                                <table class="0 table table-pin-rows">
                                    <!-- head -->
                                    <thead>
                                        <tr class="bg-base-200/50 shadow-cham">
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
                                                <div
                                                    class="flex items-center gap-3">
                                                    <div class="avatar">
                                                        <div
                                                            class="h-12 w-12 rounded-lg">
                                                            <img
                                                                src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                                alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div class="font-bold">
                                                            Hart Hagerty
                                                        </div>
                                                        <div
                                                            class="text-sm opacity-50">
                                                            United States
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                Zemlak, Daniel and Leannon
                                                <br />
                                                <span
                                                    class="badge badge-ghost badge-sm">
                                                    Desktop Support Technician
                                                </span>
                                            </td>
                                            <td>Purple</td>
                                        </tr>
                                        <!-- row 2 -->
                                        <tr>
                                            <td>
                                                <div
                                                    class="flex items-center gap-3">
                                                    <div class="avatar">
                                                        <div
                                                            class="h-12 w-12 rounded-lg">
                                                            <img
                                                                src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                                                                alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div class="font-bold">
                                                            Brice Swyre
                                                        </div>
                                                        <div
                                                            class="text-sm opacity-50">
                                                            China
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                Carroll Group
                                                <br />
                                                <span
                                                    class="badge badge-ghost badge-sm">
                                                    Tax Accountant
                                                </span>
                                            </td>
                                            <td>Red</td>
                                        </tr>
                                        <!-- row 3 -->
                                        <tr>
                                            <td>
                                                <div
                                                    class="flex items-center gap-3">
                                                    <div class="avatar">
                                                        <div
                                                            class="h-12 w-12 rounded-lg">
                                                            <img
                                                                src="https://img.daisyui.com/images/profile/demo/4@94.webp"
                                                                alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div class="font-bold">
                                                            Marjy Ferencz
                                                        </div>
                                                        <div
                                                            class="text-sm opacity-50">
                                                            Russia
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                Rowe-Schoen
                                                <br />
                                                <span
                                                    class="badge badge-ghost badge-sm">
                                                    Office Assistant I
                                                </span>
                                            </td>
                                            <td>Crimson</td>
                                        </tr>
                                        <!-- row 4 -->
                                        <tr>
                                            <td>
                                                <div
                                                    class="flex items-center gap-3">
                                                    <div class="avatar">
                                                        <div
                                                            class="h-12 w-12 rounded-lg">
                                                            <img
                                                                src="https://img.daisyui.com/images/profile/demo/5@94.webp"
                                                                alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div class="font-bold">
                                                            Yancy Tear
                                                        </div>
                                                        <div
                                                            class="text-sm opacity-50">
                                                            Brazil
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                Wyman-Ledner
                                                <br />
                                                <span
                                                    class="badge badge-ghost badge-sm">
                                                    Community Outreach
                                                    Specialist
                                                </span>
                                            </td>
                                            <td>Indigo</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div class="col-start-2 pl-1">
                        <h2
                            class="h-8 w-full justify-end pr-5 text-xl font-bold tracking-tight">
                            Champion Winrates
                        </h2>
                        <div class="mt-4 grid grid-cols-1 gap-4">
                            <div
                                class="frost card overflow-x-auto bg-base-100/60 shadow-warm backdrop-brightness-105">
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
                                                <div
                                                    class="flex items-center gap-3">
                                                    <div class="avatar">
                                                        <div
                                                            class="h-12 w-12 rounded-lg">
                                                            <img
                                                                src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                                alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div class="font-bold">
                                                            Hart Hagerty
                                                        </div>
                                                        <div
                                                            class="text-sm opacity-50">
                                                            United States
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                Zemlak, Daniel and Leannon
                                                <br />
                                                <span
                                                    class="badge badge-ghost badge-sm">
                                                    Desktop Support Technician
                                                </span>
                                            </td>
                                            <td>Purple</td>
                                        </tr>
                                        <!-- row 2 -->
                                        <tr>
                                            <td>
                                                <div
                                                    class="flex items-center gap-3">
                                                    <div class="avatar">
                                                        <div
                                                            class="h-12 w-12 rounded-lg">
                                                            <img
                                                                src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                                                                alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div class="font-bold">
                                                            Brice Swyre
                                                        </div>
                                                        <div
                                                            class="text-sm opacity-50">
                                                            China
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                Carroll Group
                                                <br />
                                                <span
                                                    class="badge badge-ghost badge-sm">
                                                    Tax Accountant
                                                </span>
                                            </td>
                                            <td>Red</td>
                                        </tr>
                                        <!-- row 3 -->
                                        <tr>
                                            <td>
                                                <div
                                                    class="flex items-center gap-3">
                                                    <div class="avatar">
                                                        <div
                                                            class="h-12 w-12 rounded-lg">
                                                            <img
                                                                src="https://img.daisyui.com/images/profile/demo/4@94.webp"
                                                                alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div class="font-bold">
                                                            Marjy Ferencz
                                                        </div>
                                                        <div
                                                            class="text-sm opacity-50">
                                                            Russia
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                Rowe-Schoen
                                                <br />
                                                <span
                                                    class="badge badge-ghost badge-sm">
                                                    Office Assistant I
                                                </span>
                                            </td>
                                            <td>Crimson</td>
                                        </tr>
                                        <!-- row 4 -->
                                        <tr>
                                            <td>
                                                <div
                                                    class="flex items-center gap-3">
                                                    <div class="avatar">
                                                        <div
                                                            class="h-12 w-12 rounded-lg">
                                                            <img
                                                                src="https://img.daisyui.com/images/profile/demo/5@94.webp"
                                                                alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div class="font-bold">
                                                            Yancy Tear
                                                        </div>
                                                        <div
                                                            class="text-sm opacity-50">
                                                            Brazil
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                Wyman-Ledner
                                                <br />
                                                <span
                                                    class="badge badge-ghost badge-sm">
                                                    Community Outreach
                                                    Specialist
                                                </span>
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
    </PageLayout>
</template>
