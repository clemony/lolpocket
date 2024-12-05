<script setup lang="ts">
import { usePocketStore } from '@stores/pocketStore'

const ps = usePocketStore()
</script>
<template>
    <PageLayout>
        <LayoutSpacer />

        <div class="flex w-full gap-8 px-12">
            <div
                v-for="(pocket, i) in ps.pockets"
                :key="pocket.key"
                class="flex size-full">
                <PocketCard :pocket="pocket" />
            </div>
        </div>
    </PageLayout>
</template>
<style scoped></style>
