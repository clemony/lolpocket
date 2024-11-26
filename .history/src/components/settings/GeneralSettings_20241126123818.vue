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
                class="relative grid h-full grid-rows-2"
                description="Get rid of the wiggly wobblies.">
                <template #header>
                    <h4>Reduce Motion</h4>
                </template>

                <label
                    class="absolute bottom-0 left-0 flex w-full cursor-pointer items-end gap-4 p-6">
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

            <DisplayCard class="grid">
                <template #header>
                    <h4>Suppress Pocket Preview</h4>
                </template>
                <template #description>
                    <div class="grow">
                        The little pocket that slides down in the sidebar. That
                        thing.
                    </div>
                </template>
                <label
                    class="absolute bottom-0 left-0 flex w-full cursor-pointer items-end gap-4 p-6">
                    <input
                        type="checkbox"
                        v-model="gs.pocketPreview"
                        :checked="gs.pocketPreview == true"
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
