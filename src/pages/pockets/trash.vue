<route lang="json">{
    "name": "trash",
    "alias": [
        "/trash"
    ],
    "meta": {
        "title": "Trash",
        "icon": "iconoir:bin-full"
    }
}</route>
<script setup lang="ts">
import { usePocketStore } from '../../stores/pocketStore';
import { useSessionStore } from '../../stores/sessionStore';
import TrashPockets from './trashPockets.vue';

const ps = usePocketStore();
const sn = useSessionStore();

function clearOldPockets() {
    const now = new Date();
    const thirtyDays = 30 * 24 * 60 * 60 * 1000; // 30 days in milliseconds

    // Filter out pockets that are older than 30 days
    ps.trashPockets = ps.trashPockets.filter(pocket => {
        // const age = now.getTime() - new Date(pocket.deletedAt).getTime();
        //return age < thirtyDays; // Keep pockets that are younger than 30 days
    });
}
</script>

<template>
    <div class="w-full h-full px-3 py-4 ">

        <div class="grid w-full gap-4 px-4 mb-4 h-fit">
            <div class="flex items-center gap-3">
                <div class="flex items-center text-sm breadcrumbs grow">
                    <ul class="">
                        <li @click="sn.navigateTo('/pockets')"><a>Pockets</a></li>
                        <li>Trash</li>
                    </ul>
                </div>



                <div class="join">
                    <button
                        class="relative join-item btn btn-sm *:size-4 after:size-5 items-center flex justify-center  *:absolute *:transition-all *:duration-300"
                        alt="Trash" title="Trash">
                        <icon icon="iconoir:bin" class="" />
                        <icon icon="iconoir:bin-full" class="opacity-0" />

                    </button>

                    <button class="join-item btn btn-sm" alt="Archive" title="Archive">
                        <icon icon="fluent:archive-20-regular" class="size-5" />
                    </button>
                </div>

                <button class="relative text-xs btn btn-sm btn-neutral hover:opacity-80">
                    <icon v-if="ps.trashPockets.length > 0" icon="iconoir:bin" class="size-4" />
                    <icon v-else icon="iconoir:bin-full" class="size-4" />
                    <span class="font-medium"> Empty All
                    </span>
                </button>








            </div>
            <div class="flex items-center w-full">
                <h2 class="text-xl font-semibold tracking-tight grow ">
                    Trash
                </h2>


            </div>

        </div>

        <PocketMenu />

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