<script setup lang="ts">
import { useGeneralStore } from '@stores/generalStore'
const gs = useGeneralStore()

const isMotionOn = ref(gs.reducedMotion)
</script>
<template>
    <main class="flex w-full flex-col gap-6">
        <LayoutSpacer class="!h-36" />
        <DisplayCard description="Get rid of the wiggly wobblies.">
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
                    {{
                        isMotionOn.value == false ?
                            'Wigglies on'
                        :   'No more wobblies'
                    }}
                </span>
            </label>
        </DisplayCard>
        <div class="flex">
            <Grow />
            <Button size="md">Save</Button>
        </div>
    </main>
</template>
<style scoped></style>
