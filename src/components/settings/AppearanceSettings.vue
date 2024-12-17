<script setup lang="ts">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> be133e04 (update 8 files and delete 426 files)
=======
>>>>>>> c5d8fff8 (update 84 files and delete 4 files)
import { useAccountStore } from '@stores/accountStore'
const as = useAccountStore()
=======
import { useGeneralStore } from '@/stores/generalStore'
const gs = useGeneralStore()
<<<<<<< HEAD
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
import { useAccountStore } from '@stores/accountStore'
const as = useAccountStore()
>>>>>>> 404a531d (update 84 files and delete 4 files)
=======
>>>>>>> 5132f0ce (update 8 files and delete 426 files)
<<<<<<< HEAD
>>>>>>> be133e04 (update 8 files and delete 426 files)
=======
=======
import { useAccountStore } from '@stores/accountStore'
const as = useAccountStore()
>>>>>>> c29d3eca (update 84 files and delete 4 files)
>>>>>>> c5d8fff8 (update 84 files and delete 4 files)

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
        name: 'midnight',
        description:
            "That guy that otp's Zed. Doesn't care about their 40% winrate.",
    },
    {
        name: 'sunrise',
        description:
            "Creamy and easy on the eyes. It's eyes cream! Yeah...goes well with Latte.",
    },
    {
        name: 'dusk',
        description: 'Crisp and modern. Gets carried by Nord.',
    },
]

const neutrals = ['minimalist', 'aesthetic', 'nord', 'latte']

function handleChoice() {
    console.log('theme', as.dataTheme)
}
</script>
<template>
    <main class="w-full">
        <LayoutSpacer class="flex items-end justify-end">hi</LayoutSpacer>
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
                    data-act-class="outline-ac">
                    <input
                        type="radio"
                        v-model="as.theme"
                        :value="theme.name"
                        :id="theme.name"
                        name="ui-theme"
                        class="peer hidden"
                        @change="handleChoice" />

                    <div
                        class="border-b3 bg-b1 text-bc shadow-warm h-20 w-full cursor-pointer overflow-hidden rounded-xl border"
                        :data-theme="theme.name">
                        <div class="grid h-full w-full grid-cols-[1fr_4fr]">
                            <div class="h-full flex-col">
                                <div class="bg-b2 h-2/3"></div>
                                <div class="bg-b3 h-1/3"></div>
                            </div>
                            <div
                                class="flex h-full items-center gap-2 px-5 font-medium">
                                <div class="text-4 grow px-1 font-semibold">
                                    Aa
                                </div>
                                <div class="color-chip bg-b2 text-bc"></div>
                                <div class="color-chip bg-b3 text-bc"></div>
                                <div
                                    class="color-chip bg-neutral text-bc"></div>
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
<style scoped></style>
