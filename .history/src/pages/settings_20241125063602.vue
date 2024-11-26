<script setup lang="ts">
import { useGeneralStore } from '../stores/generalStore'
import AccountSettings from '@/components/settings/AccountSettings.vue'
import HotkeySettings from '@/components/settings/HotkeySettings.vue'
import AppearanceSettings from '@/components/settings/AppearanceSettings.vue'
import StorageSettings from '@/components/settings/StorageSettings.vue'
import GeneralSettings from '@/components/settings/GeneralSettings.vue'

const gs = useGeneralStore()
const settings = useGeneralStore()

const generalRef = ref(null)
const appearanceRef = ref(AppearanceSettings)
const accountRef = ref(null)
const hotkeyRef = ref(null)
const storageRef = ref(null)

defineExpose({
    GeneralSettings,
    AppearanceSettings,
    AccountSettings,
    HotkeySettings,
    StorageSettings,
})
// Use ref to track the selected framework
</script>

<template>
    <main class="grid size-full grid-cols-[1fr_3.5fr] pr-12">
        <div class="mx-auto flex w-full flex-col items-center gap-12">
            <LayoutSpacer class="!h-10" />
            <h1 class="!text-3xl font-semibold">Settings</h1>

            <nav class="flex flex-col gap-5 pl-6 text-base-content/80">
                <a href="#" class="font-semibold">General</a>
                <a href="#">Appearance</a>
                <a href="#">Storage</a>
                <a href="#">Hotkeys</a>
                <a href="#">Account</a>
                <a href="#">About</a>
            </nav>
        </div>

        <div
            id="pocket-contents"
            class="carousel carousel-vertical h-full w-[98%] justify-self-center overflow-x-hidden overflow-y-scroll">
            <a class="carousel-item relative size-full" id="General">
                <router-view v-slot="{ Component }">
                    <component :is="Component" ref="GeneralSettings" />
                </router-view>
            </a>
            <a class="carousel-item size-full" id="Appearance">
                <router-view v-slot="{ Component }">
                    <component :is="Component" ref="AppearanceSettings" />
                </router-view>
            </a>
            <a class="carousel-item size-full" id="Account">
                <router-view v-slot="{ Component }">
                    <component :is="Component" ref="AccountSettings" />
                </router-view>
            </a>
            <a class="carousel-itemsize-full" id="Hotkeys">
                <router-view v-slot="{ Component }">
                    <component :is="Component" ref="HotkeySettings" />
                </router-view>
            </a>
            <a class="carousel-item size-full" id="Storage">
                <router-view v-slot="{ Component }">
                    <component :is="Component" ref="StorageSettings" />
                </router-view>
            </a>
        </div>
    </main>
</template>

<style scoped></style>
