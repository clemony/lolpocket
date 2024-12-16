<script setup lang="ts">
import GeneralSettings from '@/components/settings/GeneralSettings.vue'
import { useGeneralStore } from '@/stores/generalStore'
import AppearanceSettings from '@/components/settings/AppearanceSettings.vue'

const gs = useGeneralStore()
const settings = useGeneralStore()

// Use ref to track the selected framework
</script>

<template>
    <main class="grid size-full grid-cols-[1fr_3.5fr] pr-12">
        <div class="mx-auto flex w-full flex-col items-center gap-12">
            <LayoutSpacer class="h-10!" />
            <h1 class="text-8! font-semibold">Settings</h1>

            <nav class="text-bc/80 flex flex-col gap-5 pl-6">
                <a href="#" class="font-semibold">General</a>
                <a href="#">Appearance</a>
                <a href="#">Storage</a>
                <a href="#">Hotkeys</a>
                <a href="#">Account</a>
                <a href="#">About</a>
            </nav>
        </div>
        <router-view>
            <div
                id="pocket-contents"
                class="carousel carousel-vertical h-full w-[98%] justify-self-center overflow-x-hidden overflow-y-scroll">
                <a class="carousel-item relative size-full" id="general">
                    <router-view v-slot="{ Component }">
                        <component :is="GeneralSettings" />
                    </router-view>
                </a>
                <a class="carousel-item size-full" id="appearance">
                    <router-view>
                        <component
                            :is="AppearanceSettings"
                            scrollTo="appearance" />
                    </router-view>
                </a>
                <a class="carousel-item size-full" id="account">
                    <AccountSettings />
                </a>
                <a class="carousel-itemsize-full" id="hotkeys">
                    <HotkeySettings />
                </a>
                <a class="carousel-item size-full" id="storage">
                    <StorageSettings />
                </a>
            </div>
        </router-view>
    </main>
</template>

<style scoped></style>
