<script setup lang="ts">
import { useGeneralStore } from '@stores/generalStore'
const gs = useGeneralStore()

const isMotionOn = ref(gs.reducedMotion)
const isWobble = computed(() => {
    return isMotionOn.value == false ? 'Wigglies on' : 'No more wobblies'
})
</script>
<template>
    <main class="grid w-full">
        <LayoutSpacer class="col-span-full" />
        <div class="grid-cols-3 gap-6">
            <DisplayCard
                description="Get rid of the wiggly wobblies."
                class="max-w-96">
                <template #header>
                    <h2>Reduce Motion</h2>
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

            <DisplayCard
                description="The little pocket that slides down in the sidebar. That thing."
                class="max-w-96">
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
        <div class="flex">
            <Grow />
            <Button size="md">Save</Button>
        </div>
    </main>
</template>
<style scoped></style>
