<script setup lang="ts">
import { usePocketStore } from '@stores/pocketStore'
const ps = usePocketStore()
</script>
<template>
    <PageLayout>
        <LayoutSpacer />
        <template #header>Pocket Cards</template>
        <div class="flex w-full flex-wrap justify-between gap-8 px-12">
            <template v-for="(pocket, index) in ps.pockets" :key="pocket.key">
                <PocketCard :pocket="pocket" />
            </template>
        </div>
    </PageLayout>
</template>
<style scoped></style>
