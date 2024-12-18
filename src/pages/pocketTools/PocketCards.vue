<script setup lang="ts">
import { usePocketStore } from '@stores/pocketStore'
import { newPocketDrawer, cardDrawer } from '@components/drawer/data'
import { toggleDrawerState } from '@utils/utils'

const ps = usePocketStore()
</script>
<template>
    <PageLayout>
        <template #header>
            <span class="">Pocket Cards</span>
        </template>

        <template #header-center>
            <Tooltip content="New Pocket"></Tooltip>
        </template>
        <template #header-end>
            <div class="flex items-center">
                <Button
                    @click="toggleDrawerState(newPocketDrawer)"
                    variant="outline"
                    size="icon"
                    class="rounded-r-none">
                    <icon icon="teenyicons:add-outline" />
                </Button>
                <Button
                    variant="outline"
                    size="icon"
                    @click="toggleDrawerState(cardDrawer)"
                    class="rounded-l-none border-l-transparent">
                    <icon
                        icon="material-symbols-light:stack-hexagon-outline"
                        class="size-7 shrink-0" />
                </Button>
                <!--
                <Button
                    variant="outline"
                    size="icon"
                    @click="toggleDrawerState(cardDrawer)"
                    class=""
                    as-child>
                    <MoveButton :to="ps.archivePockets" text="Archive">
                        <icon
                            icon="fluent:archive-32-regular"
                            class="size-[22px]" />
                    </MoveButton>
                </Button> -->
            </div>
            <TableSearch />
        </template>
        <LayoutSpacer />

        <div class="flex w-full flex-wrap justify-between gap-8 pr-16 pl-12">
            <PocketCard
                v-for="(pocket, i) in ps.pockets"
                :key="pocket.key"
                :pocket="pocket" />
        </div>
    </PageLayout>
</template>
<style scoped></style>
