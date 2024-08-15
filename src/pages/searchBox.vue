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
                class="dropdown-content menu m-0 p-0 bg-base-100 w-[500px] rounded-[10px] place-content-center z-[1] top-[-1px] px-0 pt-[2px] shadow-lg -ml-[15px] backdrop-blur-md bg-opacity-80">
                <Input tabindex="0" role="button" placeholder=""
                    class="text-xs font-medium max-w-[470px] text-center h-[28px] shadow-inner bg-base-200/60 border-base-content/15 shadow-base-content/10 rounded-[10px] !outline-0 !outline-transparent !outline-none z-20 focus:ring-base-300" />

                <div class="grid grid-cols-[1fr_2.5fr]">
                    <div class="join join-vertical *:btn-outline *:join-item">
                        <button class="btn btn-active btn-neutral join-item">
                            <div class="form-control">
                                <label class="label cursor-pointer">
                                    <span class="label-text">Builds</span>
                                    <input type="radio" name="search-category" class="radio " />
                                </label>
                            </div>
                        </button>

                        <button class="btn btn-primary btn-outline join-item">
                            <div class="form-control">
                                <label class="label cursor-pointer">
                                    <span class="label-text">Champions</span>
                                    <input type="radio" name="search-category" class="radio radio-primary" />
                                </label>
                            </div>
                        </button>
                        <button class="btn btn-secondary btn-outline join-item">
                            <div class="form-control">
                                <label class="label cursor-pointer">
                                    <span class="label-text">Items</span>
                                    <input type="radio" name="search-category" class="radio radio-secondary" />
                                </label>
                            </div>
                        </button>
                        <button class="btn btn-accent join-item">
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
</style>