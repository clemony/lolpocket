<script setup lang="ts">
import { Icon } from "@iconify/vue";

</script>

<template>
    <form class="text-center justify-items-center rounded-lg z-0">

        <div class="relative ">

            <Icon icon="ph:magnifying-glass" class="absolute right-3 top-[5.5px] size-4 z-20 text-base-content/50" />
            <Input tabindex="0" role="button" placeholder=""
                class="text-xs font-medium w-[470px] text-center h-[28px] shadow-inner bg-base-200/60 border-base-300 shadow-base-300 !outline-0 !outline-transparent rounded-[10px] !outline-none z-20 focus:ring-base-300" />
            <div tabindex="0"
                class="dropdown-content menu m-0 p-0 bg-base-100 w-[530px] rounded-md place-content-center z-[1] -top-1 px-0 pt-1 shadow -ml-[25px]">
                <Input tabindex="0" role="button" placeholder=""
                    class="text-xs font-medium max-w-[470px] text-center h-[28px] shadow-inner bg-base-200/60 border-base-content/15 shadow-base-content/10 rounded-[10px] !outline-0 !outline-transparent !outline-none z-20 focus:ring-base-300" />

                <div class="grid grid-cols-3">
                    <h4 class="font-semibold font-md italic">Search Categories</h4>

                </div>

                <div role="tablist" class="tabs tabs-lifted">
                    <a role="tab" class="tab *:text-xs">
                        <div class="form-control">
                            <label class="label cursor-pointer">
                                <span class="label-text">Builds</span>
                                <input type="radio" name="search-category" class="radio " />
                            </label>
                        </div>
                    </a>
                    <a role="tab" class="tab">
                        <div class="form-control">
                            <label class="label cursor-pointer">
                                <span class="label-text">Champions</span>
                                <input type="radio" name="search-category" class="radio radio-primary" />
                            </label>
                        </div>
                    </a>
                    <a role="tab" class="tab">
                        <div class="form-control">
                            <label class="label cursor-pointer">
                                <span class="label-text">Items</span>
                                <input type="radio" name="search-category" class="radio radio-secondary" />
                            </label>
                        </div>
                    </a>
                    <a role="tab" class="tab">
                        <div class="form-control">
                            <label class="label cursor-pointer">
                                <span class="label-text">Runes</span>
                                <input type="radio" name="search-category" class="radio radio-accent" />
                            </label>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </form>
</template>

<style scoped>
.tabs {
    @apply mt-3;
}

.tab {}

.radio {
    @apply radio-xs ml-2;
}
</style>