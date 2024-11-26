<script setup lang="ts">
import { useGeneralStore } from '@stores/generalStore'
const gs = useGeneralStore()
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
                    class="toggle toggle-sm !rounded-md" />
                <span class="label-text">
                    {{ gs.reducedMotion == false ? 'Wigglies on' : 'No more wobbles }}
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
