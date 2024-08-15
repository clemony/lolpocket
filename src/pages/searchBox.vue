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


                <div role="tablist" class="tabs tabs-lifted grid grid-cols-1"><button
                        class="btn btn-active btn-neutral">
                        <div class="form-control">
                            <label class="label cursor-pointer">
                                <span class="label-text">Builds</span>
                                <input type="radio" name="search-category" class="radio " />
                            </label>
                        </div>
                    </button>

                    <a role="tab" class="tab tab-active">

                    </a>
                    <div role="tabpanel" class="border-base-300 rounded-box p-6">
                        Tab content 2
                    </div>
                    <a role="tab" class="tab">
                        <div class="form-control">
                            <label class="label cursor-pointer">
                                <span class="label-text">Champions</span>
                                <input type="radio" name="search-category" class="radio radio-primary" />
                            </label>
                        </div>
                    </a>
                    <div role="tabpanel" class="tab-content border-base-300 rounded-box p-6">
                        Tab content 2
                    </div>
                    <a role="tab" class="tab">
                        <div class="form-control">
                            <label class="label cursor-pointer">
                                <span class="label-text">Items</span>
                                <input type="radio" name="search-category" class="radio radio-secondary" />
                            </label>
                        </div>
                    </a>
                    <div role="tabpanel" class="tab-content  border-base-300 rounded-box p-6">
                        Tab content 2
                    </div>
                    <a role="tab" class="tab">
                        <div class="form-control">
                            <label class="label cursor-pointer">
                                <span class="label-text">Runes</span>
                                <input type="radio" name="search-category" class="radio radio-accent" />
                            </label>
                        </div>
                    </a>
                    <div role="tabpanel" class="tab-content border-base-300 rounded-box p-6">
                        Tab content 2
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>

<style scoped>
.tabs {
    @apply mt-3;
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