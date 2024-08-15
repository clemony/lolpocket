<script lang="ts">
import { Icon } from "@iconify/vue";
</script>

<template>
    <form class="text-center justify-items-center rounded-lg z-0">

        <div class="relative ">
            <Icon icon="ph:magnifying-glass" class="absolute right-3 top-[5.5px] size-4 z-20 text-base-content/50" />
            <Input tabindex="0" role="button" placeholder=""
                class="text-xs font-medium w-[470px] text-center h-[28px] shadow-inner bg-base-200/60 border-base-300 shadow-base-300 !outline-0 !outline-transparent rounded-[10px] !outline-none z-20 focus:ring-base-300" />
            <div tabindex="0"
                class="dropdown-content menu m-0 p-0 bg-base-100 w-[560px] rounded-md place-content-center z-[1] top-0 px-0 pt-0 shadow -ml-[45px]">
                <Input tabindex="0" role="button" placeholder=""
                    class="text-xs font-medium w-[470px] text-center h-[28px] shadow-inner bg-base-200/60 border-base-content/15 shadow-base-content/10 rounded-[10px] !outline-0 !outline-transparent !outline-none z-20 focus:ring-base-300" />

                <div role="tablist" class="tabs tabs-lifted">
                    <a role="tab" class="tab">
                        <div class="form-control">
                            <label class="label cursor-pointer">
                                <span class="label-text">Remember me</span>
                                <input type="checkbox" checked="false" class="checkbox" />
                            </label>
                        </div>
                    </a>
                    <a role="tab" class="tab tab-active">
                        <div class="form-control">
                            <label class="label cursor-pointer">
                                <span class="label-text">Remember me</span>
                                <input type="checkbox" checked="false" class="checkbox checkbox-primary" />
                            </label>
                        </div>
                    </a>
                    <a role="tab" class="tab">
                        <div class="form-control">
                            <label class="label cursor-pointer">
                                <span class="label-text">Remember me</span>
                                <input type="checkbox" checked="false" class="checkbox checkbox-secondary" />
                            </label>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </form>
</template>