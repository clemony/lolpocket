<script setup lang="ts">
import { usePocketStore } from '@stores/pocketStore'
import { useSessionStore } from '@stores/sessionStore'

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

const selectedCount = ref(ps.selectedRows.length.toString())

watch(
    () => ps.selectedRows,
    (newVal) => {
        selectedCount.value = newVal.length.toString()
    },
)

</script>

<template>
<div class="h-full w-full px-0 pt-4">
    <div class="mb-4 grid h-fit w-full gap-4 px-7">
        <div class="flex items-center gap-3">
            <div class="breadcrumbs flex grow items-center ">
                <ul>
                    <li><a>Pockets</a></li>
                    <li>All</li>
                </ul>
            </div>

            <div class="join">
                <buttony @click="trash" alt="trash" :join="true" :disabled="!ps.selectedRows.length"
                    class='relative disabled:border-transparent disabled:bg-base-200'>
                    <icon icon="teenyicons:bin-outline" class="size-4" />
                    <div v-if="ps.selectedRows.length"
                        class='grid place-content-center place-items-center absolute  top-[1px] right-1 badge-neutral badge badge-xs p-[0px] pointer-events-none'>
                        <InputResizable v-model:model="selectedCount" notouch sm pxxs centered textCenter />
                    </div>
                </buttony>

                <buttony alt="Archive" :join="true" class='relative disabled:border-transparent disabled:bg-base-200'
                    :disabled="!ps.selectedRows.length">
                    <icon icon="teenyicons:archive-outline" class="size-4" />
                    <div v-if="ps.selectedRows.length"
                        class='grid place-content-center place-items-center absolute  top-[1px] right-1 badge-neutral badge badge-xs p-[0px] pointer-events-none'>
                        <InputResizable v-model:model="selectedCount" sm centered textCenter notouch />
                    </div>
                </buttony>
            </div>

            <VDropdown :overflow-padding="20" :shift="true" theme="overlay" class="new-pocket" :triggers="['click']">
                <ButtonDark>
                    <icon icon=" teenyicons:folder-plus-outline" class="mr-0.5 size-4.5 pr-0.5" />
                    <span class="font-medium"> New Pocket </span>
                </ButtonDark>

                <template #popper>
                    <a v-close-popper class="absolute h-screen w-screen"></a>
                    <PopPocket :title="'New Pocket'" :button="'Create'" />
                </template>
            </VDropdown>
        </div>
        <div class="flex w-full items-center">
            <h2 class="grow text-xl font-semibold tracking-tight">
                Pockets
            </h2>

            <TableSearch />
        </div>
    </div>
    <TablePockets />
</div>
</template>

<style>
.v-popper--shown.new-pocket button {
    @apply opacity-80;
}
</style>
