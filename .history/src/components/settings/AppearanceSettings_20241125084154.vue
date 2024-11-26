<script setup lang="ts">
import { useGeneralStore } from '@stores/generalStore'
const gs = useGeneralStore()

const themeChoice = ref('light')
const accentChoice = ref('minimalist')
const mode = gs.dataMode
// theme options
const themes = ['light', 'dark', 'neutral', 'dim']

const accents = ['minimalist', 'aesthetic', 'nord', 'latte']

function handleChoice() {
    gs.dataMode = gs.dataTheme + gs.dataAccent
}

// Initialize themeChoice when store data is ready
onMounted(() => {
    themeChoice.value = gs.dataTheme || 'light' // Set from store or default to "light"
    accentChoice.value = gs.dataAccent || 'minimalist' // Set from store or default to "light"
})
</script>
<template>
    <main class="w-full">
        <LayoutSpacer class="col-span-full !h-40" />
        <div class="grid w-full grid-cols-3 gap-6 [&_>*]:size-full">
            <DisplayCard
                v-for="theme in themes"
                :key="theme"
                class="grid h-full grid-rows-2">
                <template #header>
                    <h2 class="capitalize">{{ theme }}</h2>
                </template>
                <template #description>
                    <div class="mb-3">Get rid of the wiggly wobblies.</div>
                </template>
                <label
                    :for="theme"
                    class="self-end rounded-lg"
                    data-act-class="!outline-base-content">
                    <input
                        type="radio"
                        v-model="gs.dataTheme"
                        :value="theme"
                        :id="theme"
                        name="ui-theme"
                        class="peer hidden"
                        @change="handleChoice" />

                    <div
                        class="! h-full w-full cursor-pointer overflow-hidden rounded-lg bg-base-100 text-base-content shadow-warm ring-1 ring-base-300 peer-checked:ring-1 peer-checked:ring-neutral/80"
                        :data-theme="theme + 'minimalist'">
                        <div
                            class="grid h-full w-full grid-cols-[1fr_3fr] rounded-btn">
                            <div class="h-full flex-col">
                                <div class="h-2/3 bg-base-200"></div>
                                <div class="h-1/3 bg-base-300"></div>
                            </div>
                            <div class="flex h-full items-center px-4">
                                <div
                                    class="flex-grow px-5 text-lg font-semibold">
                                    Aa
                                </div>
                                <div
                                    class="flex aspect-square size-8 items-center justify-center rounded-md bg-neutral text-neutral-content">
                                    Dd
                                </div>
                            </div>
                        </div>
                    </div>
                </label>
            </DisplayCard>
        </div>

        <div class="mt-8 flex border-t border-t-base-200 pt-6">
            <Button size="md">Save</Button>
            <Grow />
        </div>
    </main>
</template>
<style scoped></style>
