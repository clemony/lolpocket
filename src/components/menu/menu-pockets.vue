<script setup lang="ts">
import { useSessionStore } from '@stores/sessionStore'
import { usePocketStore } from '@stores/pocketStore'
import { useGeneralStore } from '@stores/generalStore'

const sn = useSessionStore()
const ps = usePocketStore()
const gs = useGeneralStore()

const showPockets = ref(true)

const showPocket = ref<{ [key: string]: boolean }>({});

onMounted(() => {
    ps.rowData.forEach(pocket => {
        if (pocket && !(pocket.key in showPocket.value)) {
            showPocket.value[pocket.key] = false;
        }
    });


});
</script>

<template>
<div class='flex items-center ml-3.5 !w-[calc(100%-14px)]'>

    <ButtonToggle v-if="!gs.isMinimized" v-model:model="showPockets" />

    <ButtonMenuItem @click="sn.navigateTo('/pockets/pockets')" badge="neutral" :array="ps.pockets">
        <Icon icon="teenyicons:folders-outline" />
        <span>Pockets</span>
    </ButtonMenuItem>

</div>



<div id="pockets" class="-mt-1 ">
    <ul>
        <li>
            <ul :class="{ 'menu-dropdown-show': showPockets }"
                class=" menu-dropdown two flex flex-col w-full max-w-inherit">


                <!-- <li v-for="pocket in ps.pinnedTopRowData" @click="
    sn.navigateTo(
        '/pocket/pocket.key',
        pocket.name,
        pocket.icon
    )
    ">
    <button class="flex flex-row flex-nowrap items-center whitespace-nowrap text-nowrap">
        <icon :icon="pocket.icon" />
        <span class="max-w-[65%] grow truncate text-start">{{ pocket.name }}</span>

        <icon icon="iconoir:pin-solid" class="absolute right-3 !size-3.5" />
    </button>
</li>
 -->
                <!------------------------⟢ pocket toggle  ⟣------------------------->

                <template v-for="pocket in ps.rowData">
                    <template v-if="pocket">

                        <li class=' flex flex-row !w-[calc(100%-15px)] overflow-hidden flex-nowrap items-center content-center'
                            :style="{ '--bgColor': pocket.bgColor }">

                            <ButtonToggle v-model:model="showPocket[pocket.key]" />

                            <ButtonMenuItem class='grow'
                                @click="sn.navigateTo(`/pocket/${pocket.key}`, pocket.name, pocket.icon)"
                                :class="{ ' hover:opacity-100': showPocket[pocket.key] }">
                                <icon :icon="pocket.icon" />
                                <span>{{ pocket.name }}</span>
                            </ButtonMenuItem>


                        </li>

                        <!----------------------⟢  inner toggles ⟣----------------------->
                        <li :style="{ '--bgColor': pocket.bgColor }">
                            <ul :class="{ 'menu-dropdown-show': showPocket[pocket.key] }"
                                class=" menu-dropdown two  !w-[calc(100%-30px)]  flex-none flex-col ">

                                <MenuPocketChampion :pocketKey="pocket.key" />

                                <MenuPocketSet :pocketKey="pocket.key" type="items" />

                                <MenuPocketSet :pocketKey="pocket.key" type="runes" />

                            </ul>
                        </li>
                    </template>

                </template>

            </ul>
        </li>
    </ul>
</div>
</template>

<style scoped>
/*prettier ignore */
/* beautify ignore:start */

    .context-menu {
        @apply !w-32 !min-w-32;
    }

    .join {
        @apply rounded-xs;

    }

    #popper button {
        @apply items-center rounded-btn py-1.5 pl-2 pr-5;

        &:hover {
            @apply cursor-pointer bg-base-200;
        }
    }


    .v-popper--shown a {
        @apply !border !border-neutral/20 bg-transparent;
    }</style>