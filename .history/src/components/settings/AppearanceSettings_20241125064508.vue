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
                class="grid h-full grid-rows-2 pb-4">
                <template #header>
                    <h2 class="capitalize">{{ theme }}</h2>
                </template>
                <template #description>
                    <div class="mb-3">Get rid of the wiggly wobblies.</div>
                </template>
                <label :for="theme" class="rounded-lg">
                    <input
                        type="radio"
                        v-model="gs.dataTheme"
                        :value="theme"
                        :id="theme"
                        name="ui-theme"
                        class="hidden"
                        @change="handleChoice" />
                    <div
                        class="h-full w-full"
                        data-act-class="!outline-base-content">
                        <div
                            class="! h-full w-full cursor-pointer overflow-hidden rounded-lg bg-base-100 text-base-content shadow-warm ring-1 ring-base-300 has-[:checked]:ring-2 has-[:checked]:ring-neutral-content"
                            :data-theme="theme + 'minimalist'">
                            <div
                                class="grid h-10 w-full grid-cols-5 grid-rows-3 rounded-btn">
                                <div
                                    class="col-start-1 row-span-2 row-start-1 bg-base-200"></div>
                                <div
                                    class="col-start-1 row-start-3 bg-base-300"></div>
                                <div
                                    class="col-span-4 col-start-2 row-span-3 row-start-1 flex place-content-center items-center gap-3 bg-base-100 px-3">
                                    <div class="flex-grow font-semibold">
                                        {{ theme }}
                                    </div>
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
