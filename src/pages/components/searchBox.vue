<script setup lang="ts">
import { ref } from 'vue';
const query = ref("");
</script>

<template>


    <!-- /* ----------------------------- SEARCH BOX HERE HI ---------------------------- */ -->

    <div data-tauri-drag-region class=" col-start-2  dropdown text-center  flex justify-end w-full pl-6 rounded-lg z-0">

        <div
            class="relative max-w-[470px] h-[27px] shadow-inner shadow-[var(--dark-shadow)] bg-base-100/80 border border-base-content/10 focus:ring-offset-base-content/30 text-base-content/60 rounded-[10px] z-20 justify-self-end items-end">

            <input tabindex="0" role="" v-model="query" placeholder=""
                class="peer italic h-full text-xs !outline-0 !outline-transparent !outline-none rounded-[10px] ring-0 focus:outline-0 focus:ring-1 border-0 focus:border-0 focus:not-italic focus:ring-base-content/10 focus:text-base-content transition-all duration-500 w-24 pl-2 focus:w-72 bg-transparent placeholder:font-mono placeholder:not-italic placeholder:text-lg placeholder:align-center focus:bg-base-100/50"
                @keydown.enter.prevent />


            <div
                class="peer-focus:opacity-0 absolute pointer-events-none -top-[1px] right-[48px] items-center opacity-70 *:!rounded-md *:bg-transparent transition-opacity duration-500">

                <kbd class="kbd kbd-xs ">⌘</kbd>
                <kbd class="kbd kbd-xs ml-1">S</kbd>

            </div>
            <Icon icon="teenyicons:search-outline"
                class="size-4 absolute right-3 top-[3px] flex gap-2.5 z-20 text-base-content/30" />

        </div>



    </div>

    <!--<div tabindex=" 60"
                class="dropdown-content menu  bg-base-100 w-full rounded-bl-[10px] rounded-br-[10px] place-content-center z-[0] top-[26px] pt-[3px] shadow-lg border border-base-300 backdrop-blur-md bg-opacity-80">


                <div class="grid grid-cols-[1fr_2.5fr]">
                    <div class="grid grid-cols-1 gap-2 my-4">
                        <button class="">
                            <div class="form-control">
                                <label class="label cursor-pointer">
                                    <span class="label-text">Builds</span>
                                    <input type="radio" name="search-category" class="radio " />
                                </label>
                            </div>
                        </button>

                        <button class="">
                            <div class="form-control">
                                <label class="label cursor-pointer">
                                    <span class="label-text">Champions</span>
                                    <input type="radio" name="search-category" class="radio radio-primary" />
                                </label>
                            </div>
                        </button>

                        <button class="">
                            <div class="form-control">
                                <label class="label cursor-pointer">
                                    <span class="label-text">Items</span>
                                    <input type="radio" name="search-category" class="radio radio-secondary" />
                                </label>
                            </div>
                        </button>

                        <button class="">
                            <div class="form-control">
                                <label class="label cursor-pointer">
                                    <span class="label-text">Runes</span>
                                    <input type="radio" name="search-category" class="radio radio-accent" />
                                </label>
                            </div>
                        </button>

                    </div>
                </div>

            </div>-->

</template>
