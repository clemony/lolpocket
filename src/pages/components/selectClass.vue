<script setup lang="ts">
import { useDataStore } from '../../stores/dataStore';
import type { pocket } from '../../stores/pocketStore';
const ds = useDataStore();

const props = defineProps<{
    pocket: pocket;
}>()

const type = defineModel({
    default: ""
});


</script>

<template>

    <VDropdown v-if="pocket" theme="select" class='round-more w-28' :skidding="-11">

        <button @click.stop.prevent class="flex items-center h-5 gap-2 group flex-nowrap ">
            <div class="opacity-40 transition-all duration-300 group-hover:opacity-80 py-[2px]  !min-w-20 text-left">
                {{ pocket.type }}</div>

            <icon icon="teenyicons:down-small-outline"
                class="group-hover:opacity-100 opacity-0 size-3.5 transition-all duration-300" />



        </button>

        <template #popper>
            <div
                class="sticky flex justify-start w-full text-xs truncate transition-all duration-300 cursor-default badge badge-ghost">
                {{ pocket.type }}
                <icon icon="teenyicons:down-small-outline" class="size-3.5 rotate-180 absolute right-1" />
            </div>


            <div v-if="props.pocket"
                class="grid w-28 [&_label]:badge [&_label]:badge-ghost hover:[&_label]:badge-neutral  [&_label]:text-xs [&_label]:font-normal [&_label]:justify-start  px-1 py-1.5 gap-1 overflow-y-scroll max-h-32 relative ">

                <label v-for="c in ds.typeOptions" v-close-popper>
                    {{ c }}
                    <input type="radio" v-model="pocket.type" :value="c" class="hidden peer" />
                </label>
                <label v-close-popper>
                    none
                    <input type="radio" v-model="pocket.type" value="" class="hidden peer" />
                </label>
            </div>
        </template>
    </VDropdown>


</template>

<style scoped>
.v-popper--theme-select .v-popper__inner {
    @apply !rounded-box;
}
</style>