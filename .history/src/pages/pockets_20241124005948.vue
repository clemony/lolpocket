<script setup lang="ts">
import { usePocketStore } from '@/stores/pocketStore'
import { useSessionStore } from '@/stores/sessionStore'
import { newPocketModal } from '@/components/Layout/ui/Modal'
import { useGeneralStore } from '@stores/generalStore'
import { toggleModalState } from '@utils/utils'

const gs = useGeneralStore()
const ps = usePocketStore()
const sn = useSessionStore()
const route = useRoute()
</script>

<template>
    <PageLayout no-fade>
        <template #header>Pockets</template>

        <template #header-center>
            <Button
                @click="toggleModalState(newPocketModal)"
                variant="ghost"
                size="sm"
                class="align-baseline !font-medium">
                New Pocket
                <icon
                    icon="teenyicons:add-small-outline"
                    class="-ml-1 mb-[3px] size-3.5" />
            </Button>

            <VDropdown
                theme="hover"
                :delay="{ show: 400, hide: 200 }"
                placement="bottom"
                class="">
                <label
                    class="group mb-px flex items-center gap-1 font-medium opacity-60 transition-all duration-300 hover:cursor-pointer hover:opacity-100">
                    <span class="w-max min-w-max px-1 capitalize">Options</span>

                    <ButtonToggle class="pointer-events-none self-center" />
                </label>

                <template #popper>
                    <ColumnTools />
                </template>
            </VDropdown>
        </template>
        <template #header-end>
            <span class="mr-0 flex gap-3">
                <TableSearch />
                <div class="join">
                    <MoveButton :to="ps.trashPockets" text="Trash">
                        <icon
                            icon="fluent:bin-recycle-20-regular"
                            class="size-7 !scale-x-105 scale-y-95" />
                    </MoveButton>

                    <MoveButton :to="ps.archivePockets" text="Archive">
                        <icon
                            icon="teenyicons:archive-outline"
                            class="size-[16px]" />
                    </MoveButton>
                </div>
            </span>
        </template>

        <template #content>
            <PocketGrid />
        </template>
    </PageLayout>
</template>

<style></style>
