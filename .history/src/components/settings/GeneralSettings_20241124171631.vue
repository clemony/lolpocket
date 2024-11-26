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
            <DisplayCard class="flex-col">
                <template #header>
                    <h2>Reduce Motion</h2>
                </template>
                <template #description>
                    <div class="grow">Get rid of the wiggly wobblies.</div>
                </template>
                <label class="label mx-1 flex cursor-pointer gap-4">
                    <input
                        type="checkbox"
                        v-model="gs.reducedMotion"
                        :checked="gs.reducedMotion == false"
                        class="toggle toggle-sm !rounded-md" />
                    <span class="label-text w-full text-left">
                        {{ isWobble }}
                    </span>
                </label>
            </DisplayCard>

            <DisplayCard class="flex-col">
                <template #header>
                    <h2>Suppress Pocket Preview</h2>
                </template>
                <template #description>
                    <div class="grow">
                        The little pocket that slides down in the sidebar. That
                        thing.
                    </div>
                </template>
                <label class="label mx-1 flex cursor-pointer gap-4">
                    <input
                        type="checkbox"
                        v-model="gs.reducedMotion"
                        :checked="gs.reducedMotion == false"
                        class="toggle toggle-sm !rounded-md" />
                    <span class="label-text w-full text-left">
                        {{ isWobble }}
                    </span>
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
