<route lang="json">
{
    "name": "pockets",
    "props": true,
    "path": "/pockets/pockets",
    "alias": "/pockets",
    "meta": {
        "title": "Pockets",
        "icon": "teenyicons:folders-outline"
    }
}
</route>

<script setup lang="ts">
import { computed, ref, h } from 'vue'
import { usePocketStore } from '../../stores/pocketStore'
import { onBeforeRouteUpdate, useRoute } from 'vue-router'
import { useSessionStore } from '../../stores/sessionStore'

const ps = usePocketStore()
const sn = useSessionStore()
const route = useRoute()

function trash() {
    const selectedKeys = ps.selectedRows.map(({ key }) => key)
    selectedKeys.forEach((key) => {
        const index = ps.pockets.findIndex((pocket) => pocket.key === key)

        if (index !== -1) {
            const [removedPocket] = ps.pockets.splice(index, 1)
            ps.trashPockets.push(removedPocket)
            ps.pocketApi.setGridOption('rowData', ps.rowData)
        }
    })

    console.log('Pockets moved to trash:', ps.trashPockets)
}
</script>

<template>
    <div class="w-full h-full px-0 pt-4">
        <div class="grid w-full gap-4 mb-4 px-7 h-fit">
            <div class="flex items-center gap-3">
                <div class="flex items-center text-xs breadcrumbs grow">
                    <ul>
                        <li><a>Pockets</a></li>
                        <li>All</li>
                    </ul>
                </div>

                <div class="join">
                    <button
                        class="relative join-item btn btn-sm *:size-4 after:size-5 items-center flex justify-center *:absolute *:transition-all *:duration-300"
                        alt="Trash"
                        title="Trash"
                        @click="trash">
                        <icon icon="iconoir:bin" class="" />
                        <icon icon="iconoir:bin-full" class="opacity-0" />
                    </button>

                    <button
                        class="join-item btn btn-sm"
                        alt="Archive"
                        title="Archive">
                        <icon icon="fluent:archive-20-regular" class="size-5" />
                    </button>
                </div>

                <VDropdown
                    :overflow-padding="20"
                    :shift="true"
                    theme="overlay"
                    class="new-pocket"
                    :triggers="['click']">
                    <button
                        class="text-xs btn btn-sm btn-neutral hover:opacity-80">
                        <icon
                            icon="teenyicons:folder-plus-outline"
                            class="size-4.5 mr-0.5 pr-0.5" />
                        <span class="font-medium"> New Pocket </span>
                    </button>

                    <template #popper>
                        <a
                            v-close-popper
                            class="absolute w-screen h-screen"></a>
                        <PopPocket :title="'New Pocket'" :button="'Create'" />
                    </template>
                </VDropdown>
            </div>
            <div class="flex items-center w-full">
                <h2 class="text-xl font-semibold tracking-tight grow">
                    Pockets
                </h2>

                <TableSearch />
            </div>
        </div>
        <PocketsTable />
    </div>
</template>

<style>
.v-popper--shown.new-pocket button {
    @apply opacity-80;
}
</style>
