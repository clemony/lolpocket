<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import { usePocketStore } from '../../stores/pocketStore';
import { icons } from '../../data/icons';
const ps = usePocketStore();
const iconStore = icons;

const props = defineProps<{
    title: string;
    button: string;
}>()


// Form fields
const name = ref('');
const type = ref('');
const selectedIcon = ref('teenyicons:folder-outline');





const bgColor = ref('#000');
const iconColor = ref('#FFF');

watch(() => bgColor.value, (newVal) => {
    bgColor.value = newVal;
}, { immediate: true });

watch(() => iconColor.value, (newVal) => {
    iconColor.value = newVal;
}, { immediate: true });

watch(() => type.value, (newVal) => {
    type.value = newVal;
}, { immediate: true });


function submitForm() {
    ps.addPocket(name.value, type.value, selectedIcon.value, bgColor.value, iconColor.value);
    emit('submit');

    // Clear the form values
    name.value = '';
    type.value = '';
    // bgColor.value = '#000';
    iconColor.value = '#FFFFFF';
    selectedIcon.value = '';
    console.log('pocket added!', ps.pockets);


}





const emit = defineEmits<{
    (e: 'submit'): void
}>()



</script>

<template>

    <div
        class="absolute min-w-[300px] grid gap-4 p-5 z-10 bg-base-100/95 backdrop-blur-md right-7 rounded-box shadow-lg top-[105px] arrow before:absolute after:absolute border border-neutral/30">
        <div class="flex items-center gap-2">
            <h1 class="text-base font-semibold tracking-tight text-base-content ">{{ title }}</h1>


        </div>
        <form ref="form" class="grid gap-3 max-w-[300px]" @submit.prevent.stop="submitForm">

            <div class="relative w-full mb-4 text-base-content join ">
                <input type="text" v-model="name" placeholder="Pocket Name"
                    class="!bg-transparent input input-sm input-bordered  join-item border-base-300 shadow-inner w-full"
                    spellcheck='false' />

                <!--   <ClearButton @click="name = ''" /> -->

                <SelectClassNew v-model:type="type" />


            </div>


            <CreateIcon v-model:bgColor="bgColor" v-model:iconColor="iconColor" v-model:selectedIcon="selectedIcon" />

            <div class="grid w-full grid-cols-2">
                <div class="self-start pt-0 -mt-1 cursor-default label label-text-alt">
                </div>
                <input v-close-popper type="submit" :value="button"
                    class="text-xs cursor-pointer justify-self-end btn btn-sm " />
            </div>
        </form>
    </div>
</template>



<style scoped>
.field {
    @apply input input-sm border-base-300;
}

.arrow::before {
    border-left: 15px solid transparent;
    border-top: 15px solid oklch(var(--n) / 15%);
    border-bottom: 15px solid transparent;
    width: 0;
    height: 0;
    @apply -top-2.5 right-5 -rotate-45 z-0;
}

.arrow::after {
    border-left: 15px solid transparent;
    border-top: 15px solid oklch(var(--b1));
    border-bottom: 15px solid transparent;
    width: 0;
    height: 0;
    @apply -top-2 right-5 -rotate-45 z-0;
}

.tab-active {
    @apply brightness-[99%] shadow-[6px_4px_5px_1px_oklch(var(--b1))] !z-30;
}


.first.tab:is(.tab-active):before {
    background-image: var(--radius-end) !important;
    background-position: top right !important;
}

.selector::after {
    content: "";
    width: 0.8em !important;
    height: 0.5em !important;
    background-color: oklch(var(--bc)) !important;
    clip-path: polygon(100% 0%, 0 0%, 50% 100%) !important;
}
</style>
