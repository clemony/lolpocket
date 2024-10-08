<script setup lang="ts">
import { usePocketStore } from '../../stores/pocketStore';
const ps = usePocketStore();


function trashSelectedPockets() {
    const now = new Date(); // Current date and time

    const removedPockets = ps.pockets
        .filter(pocket => ps.selectedPockets.includes(pocket.key))
        .map(pocket => ({ ...pocket, deletedAt: now })); // Add deletion timestamp

    // Move items to trashPockets and remove from ps.pockets
    ps.trashPockets.push(...removedPockets);

    ps.pockets = ps.pockets.filter(pocket => !ps.selectedPockets.includes(pocket.key));
    ps.selectedPockets = [];
}


function toggleAllPockets(event) {
    if (event.target.checked == true) {
        ps.pockets.forEach(pocket => {
            ps.selectedPockets.push(pocket.key);
        })
    } else {
        ps.selectedPockets.splice(0);
    }
}

</script>

<template>
    <div
        class="grid   grid-cols-[30px_50px_1.5fr_2fr_3fr_1fr_20px_10px] gap-x-3  *:text-xs items-end mx-1   *:flex *:gap-1 [&_svg]:mt-[2px] *:text-base-content/60">
        <!-- head -->


        <div></div>
        <div></div>
        <div class="ml-2 ">Pocket
            <icon icon="teenyicons:down-small-solid" />
        </div>
        <div class="ml-1 ">Champions
            <icon icon="teenyicons:down-small-solid" />
        </div>
        <div class="ml-0.5 ">Items
            <icon icon="teenyicons:down-small-solid" />
        </div>
        <div class="-ml-1">Runes
            <icon icon="teenyicons:down-small-solid" />
        </div>

        <div class="grid items-center justify-start -ml-2 font-semibold">
            <input type="checkbox" class="!rounded-full checkbox checkbox-xs" @change="toggleAllPockets($event)" />
        </div>
        <div class="-ml-1">


            <VDropdown theme="detail" placement="right">
                <button>
                    <icon icon="teenyicons:down-small-outline" />
                </button>
                <template #popper>
                    <div class="p-1 [&_button]:text-xs [&_button]:!rounded-sm">
                        <ul>
                            <li>
                                <button @click=" trashSelectedPockets()" :disabled="ps.selectedPockets.length == 0"
                                    class="justify-start w-full gap-3 disabled:bg-transparent btn btn-ghost btn-xs">
                                    <icon icon="iconoir:bin-half" class="size-4" />
                                    To Trash
                                </button>
                            </li>
                            <div class="border-b border-base-300"></div>
                            <li>
                                <button @click=""
                                    class="justify-start w-full gap-3 btn btn-ghost btn-xs disabled:bg-transparent"
                                    :disabled="ps.selectedPockets.length == 0">
                                    <icon icon="solar:archive-up-linear" class="size-4" />
                                    To Archive
                                </button>
                            </li>
                        </ul>
                    </div>
                </template>
            </VDropdown>
        </div>
    </div>
</template>

<style scoped></style>