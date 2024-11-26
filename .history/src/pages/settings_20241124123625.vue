<script setup lang="ts">
import { useGeneralStore } from '../stores/generalStore'
const gs = useGeneralStore()

// Access user settings from the store
const settings = useGeneralStore()

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
                <a
                    class="carousel-item relative w-full max-w-full"
                    ref="dashboard"
                    id="dashboard">
                    <router-view v-slot="{ Component }">
                        <component
                            :is="Dashboard"
                            :pocketKey="pocket.key"
                            :key="pocket.key" />
                    </router-view>
                </a>
                <a class="carousel-item w-full" ref="champions" id="champions">
                    <router-view v-slot="{ Component }">
                        <component
                            :is="Champions"
                            :pocketKey="pocket.key"
                            :key="pocket.key" />
                    </router-view>
                </a>
                <a class="carousel-item w-full" ref="items" id="items">
                    <router-view v-slot="{ Component }">
                        <component
                            :is="Items"
                            :pocketKey="pocket.key"
                            :key="pocket.key" />
                    </router-view>
                </a>
                <a class="carousel-item w-full" ref="runes" id="runes">
                    <router-view v-slot="{ Component }">
                        <component
                            :is="Runes"
                            :pocketKey="pocket.key"
                            :key="pocket.key" />
                    </router-view>
                </a>
            </div>
        </template>
    </main>
</template>

<style scoped></style>
