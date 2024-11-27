<script setup lang="ts">
import { useGeneralStore } from '@stores/generalStore'
const gs = useGeneralStore()

const props = defineProps<{
    scrollTo: string
}>()
const route = useRoute()
console.log(route)
console.log(props.scrollTo)
// theme options
const themes = [
    {
        name: 'light',
        description:
            'Always queues fill. So basic it can pretty much work itself into any team.',
    },
    {
        name: 'dark',
        description:
            "The guy that otp's Zed. Doesn't care about their 40% winrate.",
    },
    {
        name: 'neutral',
        description:
            "Creamy and easy on the eyes. It's eyes cream! Yeah... anyway, goes well with Latte.",
    },
    {
        name: 'dim',
        description: 'Crisp and modern. Gets carried by Nord.',
    },
]

const accents = ['minimalist', 'aesthetic', 'nord', 'latte']

function handleChoice() {
    gs.dataMode = gs.dataTheme + gs.dataAccent
    console.log('mode', gs.dataMode)
    console.log('acc', gs.dataAccent)
    console.log('theme', gs.dataTheme)
    console.log()
}
</script>
<template>
    <main class="w-full">
        <LayoutSpacer class="col-span-full h-40!" />
        <div class="grid w-full grid-cols-3 gap-6 *:size-full">
            <DisplayCard
                v-for="theme in themes"
                :key="theme.name"
                class="grid h-full grid-rows-2">
                <template #header>
                    <h4 class="capitalize">{{ theme.name }}</h4>
                </template>
                <template #description>
                    <p>{{ theme.description }}</p>
                </template>
                <label
                    :for="theme.name"
                    class="self-end rounded-lg"
                    data-act-class="outline-base-content!">
                    <input
                        type="radio"
                        v-model="gs.dataTheme"
                        :value="theme.name"
                        :id="theme.name"
                        name="ui-theme"
                        class="peer hidden"
                        @change="handleChoice" />

                    <Checkbox
                        :model="gs.dataTheme == theme.name"
                        class="hidden" />

                    <div
                        class="border-b3 bg-b1 text-4-content shadow-warm h-20 w-full cursor-pointer overflow-hidden rounded-xl border"
                        :data-theme="theme.name + 'minimalist'">
                        <div class="grid h-full w-full grid-cols-[1fr_4fr]">
                            <div class="h-full flex-col">
                                <div class="bg-b2 h-2/3"></div>
                                <div class="bg-b3 h-1/3"></div>
                            </div>
                            <div
                                class="flex h-full items-center gap-2 px-5 font-medium">
                                <div class="text-6 grow px-1 font-semibold">
                                    Aa
                                </div>
                                <div
                                    class="color-chip bg-b2 text-4-content"></div>
                                <div
                                    class="color-chip bg-b3 text-4-content"></div>
                                <div
                                    class="color-chip bg-neutral text-neutral-content"></div>
                            </div>
                        </div>
                    </div>
                </label>
            </DisplayCard>
        </div>

        <div class="border-t-b2 mt-8 flex border-t pt-6">
            <Button size="md">Save</Button>
            <Grow />
        </div>
    </main>
</template>
<style scoped>
@import 'tailwindcss/theme' theme(reference);

.color-chip {
    @apply flex aspect-square size-9 items-center justify-center rounded-md shadow-sm;
}
</style>
