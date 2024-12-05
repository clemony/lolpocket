<script setup lang="ts">
import { usePocketStore } from '@stores/pocketStore'
import { newPocketDrawer } from '@/components/drawer/data'
import { toggleDrawerState } from '@utils/utils'
const ps = usePocketStore()
</script>
<template>
    <PageLayout>
        <template #header>Pockets</template>

        <template #header-center>
            <Button
                variant="ghost"
                class="-mb-1 text-base"
                @click="toggleDrawerState(newPocketDrawer)">
                New Pocket
                <icon
                    icon="teenyicons:add-small-outline"
                    class="-ml-1 mb-px size-4.5" />
            </Button>
        </template>
        <template #header-end>
            <span class="mr-0 flex items-center justify-end gap-3">
                <TableSearch />
                <div class="join">
                    <MoveButton :to="ps.trashPockets" text="Trash" class="">
                        <icon
                            icon="fluent:bin-recycle-24-regular"
                            class="!size-7 shrink-0 scale-x-[115%]" />
                    </MoveButton>

                    <MoveButton :to="ps.archivePockets" text="Archive">
                        <icon
                            icon="fluent:archive-32-regular"
                            class="size-[22px]" />
                    </MoveButton>
                </div>
            </span>
        </template>
        <LayoutSpacer />

        <div class="flex w-full flex-wrap gap-8 px-12">
            <PocketCard
                v-for="(pocket, i) in ps.pockets"
                :key="pocket.key"
                :pocket="pocket" />
        </div>
    </PageLayout>
</template>
<style scoped></style>
