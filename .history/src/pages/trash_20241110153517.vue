<script setup lang="ts">
import { usePocketStore } from '@stores/pocketStore'
import { useSessionStore } from '@stores/sessionStore'

const ps = usePocketStore()
const sn = useSessionStore()

function clearOldPockets() {
    const now = new Date()
    const thirtyDays = 30 * 24 * 60 * 60 * 1000 // 30 days in milliseconds

    // Filter out pockets that are older than 30 days
    ps.trashPockets = ps.trashPockets.filter((pocket) => {
        // const age = now.getTime() - new Date(pocket.deletedAt).getTime();
        //return age < thirtyDays; // Keep pockets that are younger than 30 days
    })
}
</script>

<template>
<div class="h-full w-full px-3 py-4">
    <div class="mb-4 grid h-fit w-full gap-4 px-4">
        <div class="flex items-center gap-3">
            <div class="breadcrumbs flex grow items-center text-sm">
                <ul class="">
                    <li @click="sn.navigateTo('/pockets')">
                        <a>Pockets</a>
                    </li>
                    <li>Trash</li>
                </ul>
            </div>

            <div class="join">
                <button
                    class="btn join-item btn-sm relative flex items-center justify-center *:absolute *:size-4 *:transition-all *:duration-300 after:size-5"
                    alt="Trash" title="Trash">
                    <icon icon="iconoir:bin" class="" />
                    <icon icon="iconoir:bin-full" class="opacity-0" />
                </button>

                <button class="btn join-item btn-sm" alt="Archive" title="Archive">
                    <icon icon="fluent:archive-20-regular" class="size-5" />
                </button>
            </div>

            <Button variant="ghost" size="lg"
                class='bg-error text-white text-base justify-start shadow-sm px-5 border border-error rounded-md'>
                <icon v-if="ps.trashPockets.length > 0" icon="ant-design:fire-outlined" class="size-6 -ml-0.5" />
                <icon v-else icon="bi:droplet" class="size-4" />
                <span class="font-medium"> Delete Forever</span>
            </Button>
        </div>
        <div class="flex w-full items-center">
            <h2 class="grow text-xl font-semibold tracking-tight">Trash</h2>
        </div>
    </div>

    <ul class="h-64 overflow-scroll border">
        <li v-for="pocket in ps.trashPockets">{{ pocket.name }}</li>
    </ul>

    <!--  <div v-if="ps.trashPockets.length > 0"
            class="relative flex flex-col h-auto pt-3 overflow-x-auto overflow-y-hidden tabs-lifted tabs scrollbar-hide ">


            <div
                class="flex flex-col justify-end flex-grow mt-[15px]  overflow-y-auto border-y   border-base-300 after:shadow-[inset_0px_0px_6px_3px_oklch(var(--b1)/0)] after:size-full after:absolute relative after:top-0 after:z-10 after:brightness-[97%]  after:pointer-events-none">
                <PocketGrid :pocketArray="ps.trashPockets" arrayName="trashPockets" class="overflow-auto" />
            </div>

        </div> -->
</div>
</template>

<style scoped></style>
