<script setup lang="ts">
import { useSessionStore } from '@stores/sessionStore'
import { usePocketStore } from '@stores/pocketStore'

import { useGeneralStore } from '@stores/generalStore'
import DividerStart from './utility/divider-start.vue';

const sn = useSessionStore()
const gs = useGeneralStore()
const ps = usePocketStore()

const showDatabase = ref(true)




</script>

<template>
<div id="menu" class="h-full w-full " :class="{ minimize: gs.isMinimized }" data-tauri-drag-region>
    <MenuLogo />
    <div
        class="menu [&_.menu-dropdown]:pl-2 flex h-[calc(100%-35px)] scrollbar-hide  w-full flex-col flex-nowrap gap-1 border-none py-2 pl-2 pr-1  font-medium *:w-full [&_svg]:size-4 [&_ul]:before:opacity-20 overflow-scroll [&_ul]:max-w-inherit [&_li]:max-w-inherit overflow-x-hidden">



        <!-----------------------------⟢ HOME  ⟣------------------------------>

        <ButtonMenuItem @click="sn.navigateTo('/home')" class="!cursor-pointer">
            <Icon icon="teenyicons:home-outline" />
            <span>Home</span>
        </ButtonMenuItem>

        <!-----------------------⟢ pockets ⟣------------------------>


        <MenuPockets />


        <!------------------------⟢ trash ⟣------------------------->
        <ContextMenu>
            <ContextMenuTrigger class='shrink-0'>
                <ButtonMenuItem @click="sn.navigateTo('/pockets/trash')" class="w-full " badge="neutral"
                    :array="ps.trashPockets">

                    <icon icon="teenyicons:bin-outline" />

                    <span class=''>Trash</span>


                </ButtonMenuItem>

            </ContextMenuTrigger>

            <ContextMenuContent class="!w-36 !min-w-36">
                <ContextMenuItem @click="sn.navigateTo('/trash')">
                    <icon icon="teenyicons:arrow-right-outline" class="!size-4" />
                    Go To Trash
                </ContextMenuItem>
                <ContextMenuSeparator class="w-full" />
                <ContextMenuItem @click="ps.trashPockets.length = 0">
                    <icon icon="iconoir:bin" class="!size-4" />
                    Empty Trash
                </ContextMenuItem>
            </ContextMenuContent>
        </ContextMenu>
        <!------------------------⟢ archive ⟣------------------------->

        <ButtonMenuItem @click="sn.navigateTo('/archive')" badge="neutral" :array="ps.archivePockets">
            <icon icon="teenyicons:archive-outline" />
            <span> Archive</span>

        </ButtonMenuItem>

        <!-----------------------------⟢ CALC ⟣------------------------------>

        <ButtonMenuItem @click="sn.navigateTo('/calculator')">
            <Icon icon="teenyicons:calculator-outline" />
            <span>Calculator</span>
        </ButtonMenuItem>

        <!-----------------------⟢ Loves ⟣------------------------->
        <MenuLoves />


        <!---------------------------⟢ database ⟣---------------------------->


        <!--         <ButtonMenuItem @click="sn.navigateTo('/champions/champions')">
            <Icon icon="teenyicons:user-circle-outline" class='' />
            <span> Champions</span>
        </ButtonMenuItem>

        <ButtonMenuItem @click="sn.navigateTo('/items')">
            <ui-noun-sword class=" !size-5 -ml-0.5" />
            <span class='-ml-[2px]'> Items</span>
        </ButtonMenuItem>

        <ButtonMenuItem @click="sn.navigateTo('/runes/runes')">
            <ui-rune class="stroke-[2.5] !size-[17px]" />
            <span class='-ml-px'>Runes</span>
        </ButtonMenuItem> -->

        <ul
            class='menu -ml-2 -my-3  items-center flex  w-full flex-col flex-nowrap gap-1 border-none    font-medium *:w-full  [&_ul]:before:opacity-20 shrink-0'>
            <li class='flex flex-row '>
                <ButtonToggle v-model:model="showDatabase" v-if="!gs.isMinimized" />

                <ButtonMenuItem :class="{ 'opacity-40': showDatabase }">
                    <Icon icon="teenyicons:sd-card-outline" />
                    <span class='cursor-default'> Database</span>
                </ButtonMenuItem>
            </li>

            <li>


                <ul :class="{ 'menu-dropdown-show': showDatabase }" class="menu-dropdown  one  mb-1.5">
                    <li>
                        <ButtonMenuItem @click="sn.navigateTo('/champions/champions')">
                            <Icon icon="teenyicons:user-circle-outline" class='ml-0.5 !size-[14px]' />
                            <span> Champions</span>
                        </ButtonMenuItem>
                    </li>

                    <li>
                        <ButtonMenuItem @click="sn.navigateTo('/items')">
                            <ui-noun-sword class=" !size-4.5" />
                            <span> Items</span>
                        </ButtonMenuItem>
                    </li>

                    <li>
                        <ButtonMenuItem @click="sn.navigateTo('/runes/runes')">
                            <ui-rune class="stroke-[2.5] ml-0.5 !size-[15px]" />
                            <span>Runes</span>
                        </ButtonMenuItem>
                    </li>
                </ul>
            </li>
        </ul>

        <ButtonMenuItem>
            <icon icon="teenyicons:at-outline" />
            <span>Account</span>
        </ButtonMenuItem>

        <ButtonMenuItem @click="sn.navigateTo('/about')">
            <Icon icon="teenyicons:info-outline" />
            <span>Info</span>
        </ButtonMenuItem>

        <ButtonMenuItem @click="sn.navigateTo('/settings')">
            <Icon icon="teenyicons:cog-outline" />
            <span>Settings</span>
        </ButtonMenuItem>
    </div>
</div>
</template>

<style scoped>
/* prettier-ignore */
/* beautify ignore:start */




    .context-menu {
    @apply !w-32 !min-w-32;
    }
    .join {
    @apply rounded-xs;

    }

    #popper button {
    @apply items-center rounded-btn py-1.5 pl-2 pr-5;

        svg {
            @apply size-4 shrink-0;
        }
}



.v-popper--shown a {
    @apply !border !border-neutral/20 bg-transparent;
}









.menu-dropdown.one {
@apply block h-0 invisible transition-height;


&>li {
@apply opacity-0 h-0 transition-[opacity_200,_height_300] ease-in;
}

&.menu-dropdown-show {
@apply h-20 visible;

&>li {
@apply opacity-100 h-6;
}
}
}

.menu-dropdown.two {
@apply block h-0 invisible transition-all duration-300;

&>li {
@apply opacity-0 h-0 transition-opacity ease-in duration-200;
}

&.menu-dropdown-show {
@apply h-auto visible;

&>li {
@apply opacity-100 h-auto;
}
}
}




/*------------------------⟢ minimize ⟣-------------------------*/

.minimize {
@apply -ml-0.5 w-[50px] !max-w-[50px] transition-all duration-500;



.menu {
@apply w-[50px] justify-start gap-2 overflow-hidden transition-all duration-700;


ul.menu-dropdown-show {
@apply hidden;
}
}
}</style>
