<script setup lang="ts">
import { usePocketStore } from '@stores/pocketStore'
const ps = usePocketStore()
</script>
<template>
    <PageLayout>
        <LayoutSpacer />
        <template #header>Pockets</template>
        <div class="flex size-full flex-wrap px-8">
            <template v-for="(pocket, index) in ps.pockets" :key="pocket.key">
                <PocketCard :pocket="pocket" />
            </template>
        </div>
    </PageLayout>
</template>
<style scoped></style>
