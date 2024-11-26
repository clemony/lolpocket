<script setup lang="ts">
import { useGeneralStore } from '@stores/generalStore'
const gs = useGeneralStore()

const isMotionOn = ref(gs.reducedMotion)
const isWobble = computed(() => {
    return isMotionOn.value == false ? 'Wigglies on' : 'No more wobblies'
})
</script>
<template>
    <main class="w-full">
        <LayoutSpacer class="col-span-full !h-40" />
        <div class="grid w-full grid-cols-3 gap-6 [&_>*]:size-full">
            <DisplayCard
                v-for="theme in themes"
                :key="theme.key"
                class="grid h-full grid-rows-2">
                <template #header>
                    <h2>Reduce Motion</h2>
                </template>
                <template #description>
                    <div class="grow">Get rid of the wiggly wobblies.</div>
                </template>
            <label :for="theme.name" class="m-1 w-24 rounded-lg">
            <input type="radio" v-model="themeChoice" :value="theme.key" :id="theme.name" name="ui-theme"
                class="radio radio-xs shadow-inner" @change="handlethemeChoice" />
                <div class="h-full w-full" data-act-class="!outline-base-content">
                    <div class="shadow-warm h-full w-full cursor-pointer overflow-hidden rounded-lg bg-base-100 ! text-base-content ring-1 ring-base-300 has-[:checked]:ring-2 has-[:checked]:ring-neutral-content"
                        :data-theme="theme.key + 'minimalist'">
                        <div class="grid h-10 w-full grid-cols-5 grid-rows-3 rounded-btn">
                            <div class="col-start-1 row-span-2 row-start-1 bg-base-200"></div>
                            <div class="col-start-1 row-start-3 bg-base-300"></div>
                            <div
                                class="col-span-4 col-start-2 row-span-3 row-start-1 flex place-content-center items-center gap-3 bg-base-100 px-3">
                                <div class="flex-grow font-semibold">
                                    {{ theme.name }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </DisplayCard>

        </div>

        <div class="mt-8 flex border-t border-t-base-200 pt-6">
            <Button size="md">Save</Button>
            <Grow />
        </div>
    </main>
</template>
<style scoped></style>
