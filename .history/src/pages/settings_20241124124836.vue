<script setup lang="ts">
import { useGeneralStore } from '../stores/generalStore'
const gs = useGeneralStore()

// Access user settings from the store
const settings = useGeneralStore()

import { defineAsyncComponent } from 'vue'

const General = useTemplateRef(
    defineAsyncComponent(
        () => import('@/components/settings/GeneralSettings.vue')
    )
)
const Appearance = useTemplateRef(defineAsyncComponent(
    () => import('@/components/settings/AppearanceSettings.vue')
))

const Account = defineAsyncComponent(
    () => import('@/components/settings/AccountSettings.vue')
))

const Hotkeys = useTemplateRef(defineAsyncComponent(
    () => import('@/components/settings/HotkeySettings.vue')
))

const Storage = useTemplateRef(defineAsyncComponent(
    () => import('@/components/settings/GeneralSettings.vue')
))

// Use ref to track the selected framework
const frameworkChoice = ref('light')
const themeChoice = ref('minimalist')

// Framework options
const frameworks = [
    {
        key: 'light',
        name: 'light',
        mode: 'light',
    },
    {
        key: 'dark',
        name: 'dark',
        mode: 'dark',
    },
    {
        key: 'neutral',
        name: 'neutral',
        mode: 'neutral',
    },
    {
        key: 'dim',
        name: 'dim',
        mode: 'dim',
    },
]

const themes = [
    {
        key: 'minimalist',
        name: 'minimalist',
    },
    {
        key: 'aesthetic',
        name: 'aesthetic',
    },
    {
        key: 'nord',
        name: 'nord',
    },
    {
        key: 'latte',
        name: 'latte',
    },
]

function handleThemeChoice() {
    const currenttheme = themes.find((f) => f.key === themeChoice.value)
    const mode = settings.dataMode
    // Update the theme and mode in the store
    if (currenttheme) {
        settings.dataTheme = mode + currenttheme.key
        settings.dataAccent = currenttheme.key
    }
}

function handleFrameworkChoice() {
    const currentFramework = frameworks.find(
        (f) => f.key === frameworkChoice.value
    )

    // Update the theme and mode in the store
    if (currentFramework) {
        const theme = settings.dataAccent
        settings.dataTheme = currentFramework.mode + theme
        settings.dataMode = currentFramework.mode
    }
}

// Initialize frameworkChoice when store data is ready
onMounted(() => {
    frameworkChoice.value = settings.dataMode || 'light' // Set from store or default to "light"
    themeChoice.value = settings.dataAccent || 'minimalist' // Set from store or default to "light"
})
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
            class="carousel h-full w-[98%] justify-self-center overflow-y-hidden overflow-x-scroll">
            <a class="carousel-item relative w-full max-w-full" id="General">
                <router-view v-slot="{ Component }">
                    <component :is="Component" ref="General" />
                </router-view>
            </a>
            <a class="carousel-item w-full" ref="champions" id="Appearance">
                <router-view v-slot="{ Component }">
                    <component :is="Component" ref="Appearance" />
                </router-view>
            </a>
            <a class="carousel-item w-full" ref="items" id="Account">
                <router-view v-slot="{ Component }">
                    <component :is="Component" ref="Account" />
                </router-view>
            </a>
            <a class="carousel-item w-full" ref="runes" id="Hotkeys">
                <router-view v-slot="{ Component }">
                    <component :is="Component" ref="Hotkeys" />
                </router-view>
            </a>
            <a class="carousel-item w-full" id="Storage">
                <router-view v-slot="{ Component }">
                    <component :is="Component" ref="Storage" />
                </router-view>
            </a>
        </div>
    </main>
</template>

<style scoped></style>
