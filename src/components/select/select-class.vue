<script setup lang="ts">
import { defineProps, watch } from 'vue'
import { usePocketStore } from '@stores/pocketStore'
import { useDataStore } from '@stores/dataStore'

const ds = useDataStore()

// Get the props containing the params
const props = defineProps<{
    pocketKey: string
    type?: string
}>()

const ps = usePocketStore()
const pocket = ps.getPocket(props.pocketKey)
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
<VDropdown v-if="pocket" theme="select" class="relative flex w-full grow self-end p-0" :skidding="1">
    <button @click.stop.prevent :class="{
        'border border-transparent hover:border-base-200':
            props.type == 'hover',
    }" class="group badge badge-xs m-0 flex h-6 w-full flex-nowrap items-center gap-2 rounded-xs bg-transparent">
        <div class="w-full py-[2px] text-left transition-all duration-300" :class="{
            'opacity-40 group-hover:opacity-80': props.type == 'hover',
        }">
            {{ pocket.type }}
        </div>
        <icon icon="teenyicons:down-small-outline" class="size-3.5 transition-all duration-300" :class="{
            'opacity-0 group-hover:opacity-100': props.type == 'hover',
        }" />
    </button>

    <template #popper>
        <div v-if="props && pocket"
            class="relative grid h-32 w-[135px] gap-1 overflow-scroll overflow-y-scroll px-1 py-1.5 [&_label]:btn [&_label]:btn-ghost [&_label]:btn-xs [&_label]:justify-start [&_label]:rounded-xs [&_label]:bg-transparent [&_label]:font-normal">
            <label v-for="c in ds.typeOptions" :class="{ '!bg-base-200/60': pocket.type == c }" v-close-popper
                class="flex gap-4 hover:!bg-base-200/60">
                <icon v-if="pocket.type == c" icon="teenyicons:tick-outline" class="size-3" />
                <span v-else class="w-3"></span>
                <span>{{ c }}</span>
                <input type="radio" v-model="pocket.type" :value="c" class="peer hidden" />
            </label>
            <label :class="{ '!bg-base-200/60': pocket.type == '' }" v-close-popper
                class="flex gap-4 hover:!bg-base-200/60">
                <icon v-if="pocket.type == ''" icon="teenyicons:tick-outline" class="size-3" />
                <span v-else class="w-3"></span>
                none
                <input type="radio" v-model="pocket.type" value="" class="peer hidden" />
            </label>
        </div>
    </template>
</VDropdown>
</template>

<style scoped>
.v-popper--theme-select .v-popper__inner {
    @apply !rounded-xs;
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
