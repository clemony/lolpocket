<script setup lang="ts">
import { useGeneralStore } from '@stores/generalStore'
const gs = useGeneralStore()
</script>
<template>
    <main class="flex w-full flex-col gap-6">
        <LayoutSpacer class="!h-36" />
        <DisplayCard>
            <label class="label cursor-pointer">
                <span class="label-text">Reduce Motion</span>
                <input
                    type="checkbox"
                    v-model="gs.reducedMotion"
                    class="toggle toggle-sm !rounded-md" />
                <span class="label-text">{{ gs.reducedMotion }}</span>
            </label>
        </DisplayCard>

        <Button size="md">Save</Button>
    </main>
</template>
<style scoped></style>
