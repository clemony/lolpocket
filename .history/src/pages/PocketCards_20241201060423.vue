<script setup lang="ts">
import { usePocketStore } from '@stores/pocketStore'
import { CSSProperties } from 'vue'
const ps = usePocketStore()

const wrapper = ref(null)
const parallax = reactive(useParallax(wrapper))

const wrapperStyle: CSSProperties = {
    transition: '.3s ease-out all',
}
</script>
<template>
    <PageLayout>
        <LayoutSpacer />
        <template #header>Pocket Cards</template>
        <div class="flex w-full flex-wrap justify-between gap-8 px-12">
            <div
                ref="wrapper"
                :style="wrapperStyle"
                v-for="(pocket, index) in ps.pockets"
                :key="pocket.key">
                <PocketCard :pocket="pocket" />
            </div>
        </div>
    </PageLayout>
</template>
<style scoped></style>
