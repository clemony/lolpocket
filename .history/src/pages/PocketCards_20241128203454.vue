<script setup lang="ts">
import { usePocketStore from '@stores/pocketStore'
const ps = usePocketStore()
</script>
<template>
    <PageLayout>
        <div class="flex size-full flex-wrap gap-8 px-8">
            <template v-for="(pocket, index) in ps.pockets" :key="pocket.key">
                <PocketCard :pocket="pocket" />
            </template>
        </div>
    </PageLayout>
</template>
<style scoped></style>
