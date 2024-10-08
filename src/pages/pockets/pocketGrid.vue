<script setup lang="ts">
import { computed, reactive, ref } from 'vue';
import { usePocketStore } from '../../stores/pocketStore';
import type { pocket } from '../../stores/pocketStore';
import { useItemStore } from '../../stores/itemStore';
import { useRuneStore } from '../../stores/runeStore';


const is = useItemStore();
const ps = usePocketStore();
const rs = useRuneStore();

const props = defineProps<{
    pocketArray: Array<pocket>;
    arrayName: string;
}>();



// Method to lose focus when Enter is pressed
const loseFocus = (event: KeyboardEvent) => {
    const target = event.target as HTMLInputElement;
    if (event.key === 'Enter') {
        target.blur(); // Lose focus on the current input field
    }
};



const isMenuShown = ref();




</script>

<template>
    <div v-if="pocketArray" :class="{ '': props.arrayName == 'generalPockets' }"
        class="flex flex-col items-start space-y-1 py-1  overflow-auto !scrollbar-hide h-full max-h-inherit  ">



        <TransitionGroup name="fade">

            <VDropdown v-for="(pocket, index) in pocketArray" :key="pocket.key" theme="detail"
                :class="{ '!bg-none': pocket.pinned == false }" :shown="isMenuShown" :triggers="[]"
                class="even:bg-base-200/30">
                <button @click.right.prevent="isMenuShown = true"
                    class=" backdrop-blur-md 
                grid grid-cols-[50px_1.5fr_2fr_3fr_1fr_repeat(3,20px)] gap-x-3   *:text-xs items-center px-3 py-2   cursor-default">


                    <!------------------------⟢ icon ⟣------------------------->
                    <VDropdown theme="detail" class="">
                        <button :style="{ backgroundColor: pocket.bgColor }"
                            class="grid p-3 rounded-full shadow-sm place-items-center size-10 icon-color" @click.stop>
                            <icon :style="{ color: pocket.iconColor }" :icon="pocket.icon" class="size-full" />
                        </button>

                        <template #popper>
                            <ColorPicker />
                        </template>
                    </VDropdown>

                    <!------------------------⟢ name ⟣------------------------->

                    <div class="grid items-center gap-[2px] w-11/12 group/name" @click.stop>
                        <div class="relative flex items-center ">
                            <input v-model="pocket.name"
                                class="capitalize text-[14px] tracking-tight font-medium peer input-simple w-full"
                                @keydown.enter="loseFocus" spellcheck='false' />


                            <icon icon='ri:edit-fill'
                                class="absolute opacity-0 group-hover/name:opacity-50 size-3.5 right-[5px] top-[3px] peer-focus:opacity-0" />

                            <button @click="pocket.name = ''"
                                class="size-4 opacity-0 peer-focus:opacity-70 *:size-3 absolute right-[3px] -top-[4px] *:absolute ">
                                <icon icon='teenyicons:x-outline' />

                            </button>
                        </div>
                        <div class="flex items-center h-5">
                            <span class='grow '>
                                <SelectClass :pocket="pocket" />
                            </span>
                            <VDropdown theme="detail">
                                <button :class="{ 'opacity-100': pocket.notes.length > 0 }" alt="add note"
                                    class='opacity-0 group-hover/name:opacity-100 btn btn-ghost btn-square btn-xs '>
                                    <icon icon="ph:note-light" class='size-3.5 opacity-40' />
                                </button>

                                <template #popper>
                                    <textarea class="m-0.5 mb-0 max-h-52 overflow-y-scroll text-xs textarea"
                                        @keydown.enter='loseFocus' v-model="pocket.notes"
                                        placeholder="Pocket Notes..."></textarea>
                                </template>
                            </VDropdown>
                        </div>
                    </div>

                    <!------------------------⟢ champions ⟣------------------------>

                    <div class="grid items-center w-full h-full ">
                        <ChampionAvatars :pocketKey="pocket.key" :pocket="pocket" />
                    </div>

                    <!------------------------⟢ items ⟣------------------------->
                    <div class="flex items-center w-full h-full gap-2">

                        <template v-if="pocket.items?.[0]?.starred?.[0]?.items?.length > 0">

                            <template v-for="(item, index) in pocket.items[0].starred[0].items" :key="index">

                                <div v-if="index <= 5" :key="item.id"
                                    class="rounded-full shadow-sm size-10 aspect-square hover-effect ">
                                    <img :src="`/img/items/${item.id}.webp`" class="rounded-full size-full" />

                                </div>
                            </template>


                        </template>

                        <Placeholder v-else />


                    </div>




                    <!------------------------⟢ runes ⟣------------------------->
                    <div class="join-item grid grid-cols-[40px_30px_auto] gap-2 items-center">

                        <div v-if="pocket.runes?.[0]?.starred?.[0]?.primary?.length > 0"
                            class="relative border rounded-full shadow-sm overflow-clip size-10 bg-neutral bg-gradient-to-br from-neutral/70 to-neutral border-base-300 p-0.5">
                            <img :src="rs.getKeystone(pocket.runes[0].starred[0].primary, pocket.runes[0].starred[0].runes[0])"
                                class="!object-contain drop-shadow-softest size-full" />


                        </div>

                        <Placeholder v-else />


                        <div v-if="pocket.runes?.[0]?.starred?.[0]?.secondary?.length > 0 && pocket.runes[0].starred[0].secondary != 'none'"
                            class="relative p-1 border rounded-full shadow-sm overflow-clip size-8 border-base-300 bg-gradient-to-br from-neutral/70 to-neutral">
                            <img :src="`/img/runes/${pocket.runes[0].starred[0].secondary}.webp`"
                                class="!object-contain  size-full" />

                        </div>

                    </div>


                    <!------------------------⟢ pin ⟣------------------------->
                    <label
                        class="  relative *:size-full p-2 ml-1 flex justify-center items-center cursor-pointer hover:transition-all hover:duration-500 "
                        @click.stop>
                        <input type="checkbox" class="hidden peer" :key="'check' + pocket.key"
                            v-model="pocket.pinned" />
                        <icon icon="iconoir:pin" class="absolute peer-checked:opacity-0 opacity-40" />
                        <icon icon="iconoir:pin-solid"
                            class="absolute opacity-0 pinned peer-checked:opacity-100 peer-checked:animate-bounce peer-checked:duration-700  peer-checked:[cubic-bezier(0,1.08,.71,.97)]  peer-checked:repeat-[1.5] fill-mode-both " />

                        <icon :class="{ 'visible': true }" :checked="pocket.pinned" icon="iconoir:pin-slash-solid"
                            class="absolute invisible transition-all duration-300 delay-200 opacity-0 hover:peer-checked:opacity-100 unpin size-full animate-out spin-out-90" />
                    </label>




                    <!------------------------⟢ checkbox ⟣------------------------->

                    <div class="grid w-full h-full place-items-center" @click.stop>
                        <input type="checkbox" :value="pocket.key" class=" checkbox checkbox-xs" @click.stop
                            v-model="ps.selectedPockets" />

                    </div>



                    <!------------------------⟢ menu ⟣------------------------->


                    <div class="grid items-center w-full h-full justify-self-end" @click.stop>
                        <VDropdown theme="detail" placement="left-start" class="arrow" @click.stop>

                            <button
                                class="relative flex items-center justify-end group/menu size-5 *:transition-all *:duration-700">
                                <icon icon='hugeicons:menu-11'
                                    class="absolute opacity-30 i1 size-5 group-hover/menu:opacity-0" />
                                <icon icon='hugeicons:menu-01'
                                    class="absolute opacity-0 i2 size-5 group-hover/menu:opacity-50" />
                            </button>

                            <template #popper>
                                <div
                                    class="relative items-center text-xs rounded-lg text-baseline shadow-[inset_1px_1px_10px_10px,_rgba(255,_255,_255,_0.9)] p-1 ">
                                    <div class="grid items-center gap-1 flex-nowrap">

                                        <button
                                            class="flex items-center gap-3   !justify-start  px-3 btn btn-xs text-xs btn-ghost hover:bg-base-200"
                                            alt="Clear Items" @click="">
                                            <icon icon='ph:eraser' class="-ml-1 size-4" />
                                            <span>Clear Items</span>
                                        </button>
                                        <div class="border-b border-base-200"></div>
                                        <button
                                            class="relative flex !justify-start items-center gap-3  px-3  btn btn-xs text-xs btn-ghost group/trash disabled:bg-transparent  disabled:cursor-not-allowed  hover:bg-base-200"
                                            alt="Delete Set" @click="ps.deletePocket(pocket.key)">
                                            <icon icon='iconoir:bin-full'
                                                class="object-center -ml-1 group-disabled/trash:opacity-0 size-4" />
                                            <icon icon="iconoir:bin"
                                                class="absolute -ml-1 opacity-0 group-disabled/trash:opacity-60 size-4" />
                                            <span> Delete Pocket</span>
                                        </button>
                                    </div>
                                </div>
                            </template>

                        </VDropdown>
                    </div>

                </button>
            </VDropdown>
        </TransitionGroup>


    </div>
</template>

<style scoped>
.shadow-fade {
    box-shadow: inset 0px 10px 7px 6px oklch(var(--b1));
}
</style>