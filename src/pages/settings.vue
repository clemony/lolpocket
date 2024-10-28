<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useGeneralStore } from '../stores/generalStore'
import { storeToRefs } from 'pinia'
import { ref, computed, onMounted } from 'vue'
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
<div class="grid w-full grid-cols-[1fr_3fr] gap-6 p-6 pl-10">
    <label class="label cursor-pointer">
        <span class="label-text">Reduce Motion</span>
        <input type="checkbox" v-model="gs.reducedMotion" class="toggle toggle-sm !rounded-md" />
        <span class="label-text">{{ gs.reducedMotion }}</span>
    </label>

    <div class="grid grid-cols-1">
        <h1 class="prose-lg divider divider-start font-semibold">
            Interface
        </h1>

        <form v-for="framework in frameworks" :key="framework.key" class="my-2 flex items-center gap-2">
            <input type="radio" v-model="frameworkChoice" :value="framework.key" :id="framework.name"
                name="ui-framework" class="radio radio-xs shadow-inner" @change="handleFrameworkChoice" />
            <label :for="framework.name" class="m-1 w-24 rounded-lg">
                <div class="h-full w-full" data-act-class="!outline-base-content">
                    <div class="shadow-warm h-full w-full cursor-pointer overflow-hidden rounded-lg bg-base-100 ! text-base-content ring-1 ring-base-300 has-[:checked]:ring-2 has-[:checked]:ring-neutral-content"
                        :data-theme="framework.key + 'minimalist'">
                        <div class="grid h-10 w-full grid-cols-5 grid-rows-3 rounded-btn">
                            <div class="col-start-1 row-span-2 row-start-1 bg-base-200"></div>
                            <div class="col-start-1 row-start-3 bg-base-300"></div>
                            <div
                                class="col-span-4 col-start-2 row-span-3 row-start-1 flex place-content-center items-center gap-3 bg-base-100 px-3">
                                <div class="flex-grow font-semibold">
                                    {{ framework.name }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </label>
        </form>
    </div>

    <div
        class="align-self-start shadow-warm mockup-browser col-start-2 m-6 max-w-96 border border-neutral/5 bg-base-300">
        <div class="mockup-browser-toolbar -ml-1.5">
            <div class="text input !ml-2 content-center !bg-base-100  before:-mt-0.5 before:w-3 after:-mt-0.5">
                https://github.com/clemony/lolpocket
            </div>
        </div>
        <div class="flex justify-center bg-base-200 px-4 py-20">Hello!</div>
    </div>

    <h1 class="prose-lg col-start-1 mt-6 font-semibold">Accents</h1>

    <div class="col-start-1 grid grid-cols-1 gap-y-4">
        <form v-for="theme in themes" class="items-center" @change="handleThemeChoice()">
            <div class="col-start-1 grid grid-cols-[1fr_5fr] content-center justify-start">
                <input type="radio" v-model="themeChoice" :value="theme.key" :id="theme.name" name="ui-theme"
                    class="radio radio-xs col-start-1 self-center justify-self-start shadow-inner" />
                <label :for="theme.name">
                    <div
                        class="justify-content-start shadow-warm col-start-2 grid max-w-36 grid-cols-1 gap-1 rounded-btn border border-base-300 px-2 py-2">
                        <div class="content-center  font-semibold">
                            {{ theme.name }}
                        </div>

                        <div :data-theme="settings.dataMode + theme.key"
                            class="*:shadow-warm grid grid-cols-4 justify-items-center gap-1 bg-transparent *:size-6 *:rounded-md *:ring-base-300/80 *:ring-offset-1">
                            <div class="bg-primary ring-offset-primary/60"></div>
                            <div class="bg-secondary ring-offset-secondary/60"></div>
                            <div class="bg-accent ring-offset-accent/60"></div>
                            <div class="bg-neutral ring-offset-neutral/60"></div>
                            <!-- <div class="bg-info"></div>
            <div class="bg-success"></div>
            <div class="bg-warning"></div>
            <div class="bg-error"></div>
            <div class="bg-error-content"></div>-->
                        </div>
                    </div>
                </label>
            </div>
        </form>
    </div>
</div>
</template>

<style scoped></style>
