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
            <DisplayCard description="Get rid of the wiggly wobblies." class="">
                <template #header>
                    <h2>Reduce Motion</h2>
                </template>
                <label class="label cursor-pointer self-end">
                    <input
                        type="checkbox"
                        v-model="gs.reducedMotion"
                        :checked="gs.reducedMotion == false"
                        class="toggle toggle-sm !rounded-md" />
                    <span class="label-text">
                        {{ isWobble }}
                    </span>
                </label>
            </DisplayCard>

            <DisplayCard
                description="The little pocket that slides down in the sidebar. That thing."
                class="">
                <template #header>
                    <h2>Suppress Pocket Preview</h2>
                </template>
                <label class="label cursor-pointer">
                    <input
                        type="checkbox"
                        v-model="gs.reducedMotion"
                        :checked="gs.reducedMotion == false"
                        class="toggle toggle-sm !rounded-md" />
                    <span class="label-text">
                        {{ isWobble }}
                    </span>
                </label>
            </DisplayCard>
        </div>

        <div class="mt-8 flex border-t border-t-base-200 pt-6">
            <Grow />
            <Button size="md">Save</Button>
        </div>
    </main>
</template>
<style scoped></style>
