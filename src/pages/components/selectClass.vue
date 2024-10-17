<script setup lang="ts">
import { defineProps, watch } from 'vue';
import { usePocketStore } from './../../stores/pocketStore';
import { useDataStore } from '../../stores/dataStore';

const ds = useDataStore();

// Get the props containing the params
const props = defineProps<{
    params: {
        data: {
            key: string;
            type: string;
            notes: string;
        };
    };
}>();


const ps = usePocketStore();
const pocket = ps.getPocket(props.params.data.key);
/* watch(
    ps.pockets,
    (newPockets) => {
        // console.log('Persisting pockets:', newPockets);
    },
    { deep: true }
);
 */
/* function handleChange(e: Event) {
    const newType = (e.target as HTMLInputElement).value;
    console.log(newType);
    const pocketKey = props.params.data.key;
    ps.updatePocketType(pocketKey, newType);
    ps.$persist();
} */
</script>

<template>
    <VDropdown theme="select" class="relative flex self-end w-full p-0 grow" :skidding="1">
        <button @click.stop.prevent
            class="flex items-center w-full h-6 gap-2 m-0 bg-transparent border border-transparent group flex-nowrap badge badge-xs hover:border-base-200 rounded-xs">
            <div class="opacity-40 transition-all w-full duration-300 group-hover:opacity-80 py-[2px] text-left">
                {{ pocket.type }}
            </div>
            <icon icon="teenyicons:down-small-outline"
                class="group-hover:opacity-100 opacity-0 size-3.5 transition-all duration-300" />
        </button>

        <template #popper>
            <div v-if="props"
                class="w-[135px] h-32 overflow-scroll grid [&_label]:btn [&_label]:bg-transparent [&_label]:btn-xs [&_label]:btn-ghost [&_label]:rounded-xs [&_label]:font-normal  [&_label]:justify-start px-1 py-1.5 gap-1 overflow-y-scroll  relative ">

                <label v-for="c in ds.typeOptions" :class="{ '!bg-base-200/60': pocket.type == c }" v-close-popper
                    class="hover:!bg-base-200/60 flex gap-4">
                    <icon v-if="pocket.type == c" icon="teenyicons:tick-outline" class='size-3' />
                    <span v-else class="w-3"></span>
                    <span>{{ c }}</span>
                    <input type="radio" v-model="pocket.type" :value="c" class="hidden peer" />
                </label>
                <label :class="{ '!bg-base-200/60': pocket.type == '' }" v-close-popper
                    class="hover:!bg-base-200/60 flex gap-4">
                    <icon v-if="pocket.type == ''" icon="teenyicons:tick-outline" class='size-3' />
                    <span v-else class="w-3"></span>
                    none
                    <input type="radio" v-model="pocket.type" value="" class="hidden peer" />
                </label>
            </div>
        </template>
    </VDropdown>
</template>

<style scoped>
.v-popper--theme-select .v-popper__inner {
    @apply !rounded-xs
}

.v-popper--shown button {
    @apply border-base-300/90;

    &>div {
        @apply opacity-80;
    }

    & svg {
        @apply opacity-100;
    }
}
</style>