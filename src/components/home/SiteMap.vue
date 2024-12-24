<script setup lang="ts">
import { links, settingLinks, infoLinks } from '@data/links'

const listClass = 'flex flex-col gap-3  min-w-44'

const itemClass =
    'flex items-center gap-2 hover:underline-offset-2 hover:underline'
</script>
<template>
    <div class="bg-b1 text-bc flex w-full justify-center">
        <div
            class="flex w-4/5 flex-wrap justify-evenly gap-x-[10%] gap-y-16 px-12 pt-36 pb-40">
            <template v-for="section in links">
                <ul v-if="section.items" :class="listClass">
                    <h3>{{ section.name }}</h3>
                    <li v-for="link in section.items">
                        {{ link.name }}
                    </li>
                </ul>
                <template v-else-if="section.submenu">
                    <ul v-for="menu in section.submenu" :class="listClass">
                        <h3>{{ menu.name + ' Links' }}</h3>

                        <li
                            v-for="link in menu.items"
                            target="_blank"
                            :href="link.url"
                            :key="link.name">
                            <a :class="itemClass">
                                {{ link.name }}
                                <icon icon="mingcute:external-link-line" />
                            </a>
                        </li>
                    </ul>
                </template>
            </template>

            <ul :class="listClass">
                <h3>Settings</h3>
                <li
                    v-for="link in settingLinks"
                    class="flex items-center gap-2 capitalize">
                    {{ link.name }}
                </li>
            </ul>

            <ul :class="listClass">
                <h3>Info</h3>
                <li v-for="link in infoLinks" class="flex items-center gap-2">
                    <RouterLink
                        v-if="link.type == 'i'"
                        :to="{ name: link.url }">
                        {{ link.name }}
                    </RouterLink>

                    <a v-else target="_blank" :href="link.url" :key="link.name">
                        {{ link.name }}
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
<style scoped></style>
