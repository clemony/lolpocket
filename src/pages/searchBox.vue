<script setup lang="ts">
import { Icon } from "@iconify/vue";

const query = ref('');
</script>

<template>
    <form class="text-center justify-items-center rounded-lg z-0">

        <div class="relative max-w-[470px]">
            <div class="absolute right-3 top-[5.5px] flex gap-2.5 *:size-4 z-20 text-base-content/50">
                <Icon icon="teenyicons:filter-outline" />
                <Icon icon="ph:magnifying-glass" />
            </div>
            <Input tabindex="0" role="button" v-model="query" placeholder=""
                class="text-xs font-medium w-full text-center h-[28px] shadow-inner bg-base-200/60 border-base-300 text-base-content/60 italic shadow-base-300 !outline-0 !outline-transparent rounded-[10px] !outline-none z-20 focus:text-base-content focus:ring-base-300"
                @keydown.enter.prevent />
            <div tabindex=" 0"
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

            </div>
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