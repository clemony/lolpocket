<script setup lang="ts">
import { usePocketStore } from '@/stores/pocketStore'
import { useGeneralStore } from '@stores/generalStore'
const gs = useGeneralStore()
import { newPocketDrawer } from '@/components/drawer/data'
import { toggleDrawerState } from '@utils/utils'

const ps = usePocketStore()
</script>

<template>
    <PageLayout class="pb-4">
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

            <VDropdown
                theme="hover"
                :delay="{ show: 400, hide: 200 }"
                placement="bottom"
                class="">
                <label
                    class="group mb-px flex items-center gap-1 font-medium opacity-60 transition-all duration-300 hover:cursor-pointer hover:opacity-100">
                    <span class="w-max min-w-max px-1 capitalize">Options</span>

                    <ToggleButton class="pointer-events-none self-center" />
                </label>

                <template #popper>
                    <ColumnTools />
                </template>
            </VDropdown>
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

        <PocketGrid />
    </PageLayout>
</template>

<style></style>
