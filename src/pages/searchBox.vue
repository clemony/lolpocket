<script setup lang="ts">
import { Icon } from "@iconify/vue";

const query = ref('');
</script>

<template>
    <form class="text-center place-content-center place-items-center justify-self-center rounded-lg z-0">

        <div class="relative max-w-[470px] border-0 outline-0 ring-0">
            <div class=" w-full h-[28px] shadow-inner shadow-base-content/15 bg-base-200/50 border border-base-content/10 
                 focus:ring-offset-base-content/30 text-base-content/60  rounded-[10px]  z-20 ">
                <div class="absolute right-3 top-[5px] flex gap-2.5 z-20 text-base-content/30">
                    <Icon icon="mingcute:settings-2-line" class="size-5" />
                </div>
                <Input tabindex="0" role="" v-model="query" placeholder=""
                    class="italic h-full w-full text-xs !outline-0 !outline-transparent !outline-none rounded-[10px] ring-0 focus:outline-0 focus:ring-1 border-0 focus:border-0 focus:not-italic focus:ring-base-content/10 focus:text-base-content pt-[7px] "
                    @keydown.enter.prevent />
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
        </div>
    </form>
</template>

<style scoped>
.btn {
    @apply btn-sm bg-opacity-80;
}

.tab,
.tab-active,
.tabs-lifted {
    @apply bg-transparent;
}

.radio {
    @apply radio-xs ml-2;
}

.tab-panel {
    @apply bg-transparent;
}

.label {
    @apply grid grid-cols-[3fr_1fr];

    span {
        @apply flex justify-start;
    }
}
</style>