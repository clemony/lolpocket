<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import { VueFinalModal, useModal } from 'vue-final-modal';

import { pocket, usePocketStore } from '../../stores/pocketStore';


const ps = usePocketStore();

const props = defineProps<{
    title: string;
    button: string;
    pocketKey?: number;
}>()

console.log('props key: ', props.pocketKey)
// Form fields
const name = ref('');
const description = ref('');
const icon = ref('teenyicons:folder-outline'); // Default icon for new pockets
const thisPocket = computed<pocket | undefined>(() => {
    if (!ps.pockets || props.pocketKey === undefined) return undefined;

    const key = Number(props.pocketKey);
    const pocket = ps.pockets.find((pocket: pocket) => pocket.key === key);

    // If a pocket is found, set the form fields to the pocket values
    if (pocket) {
        name.value = pocket.name;
        description.value = pocket.description;
        icon.value = pocket.icon;
    }

    return pocket;
});

watch(
    () => props.pocketKey,
    (newKey) => {
        if (newKey !== undefined && ps.pockets) {
            const key = Number(newKey);
            const pocket = ps.pockets.find((pocket: pocket) => pocket.key === key);

            if (pocket) {
                name.value = pocket.name;
                description.value = pocket.description;
                icon.value = pocket.icon;
            }
        }
    },
    { immediate: true } // Ensure it runs immediately upon component mount
);

onMounted(() => {
    console.log(thisPocket, props.pocketKey);
});

// Handle the submit logic for both creating a new pocket and editing an existing one
function submitForm() {
    if (thisPocket.value) {
        // Editing an existing pocket
        thisPocket.value.name = name.value;
        thisPocket.value.description = description.value;
        thisPocket.value.icon = icon.value;
        console.log('Pocket updated:', thisPocket.value);
    } else {
        // Creating a new pocket
        ps.newPocket(); // Use your store's function to create a new pocket
    }
}


const optionsC = ({
    teleportTo: 'body',
    modelValue: false,
    displayDirective: 'if',
    hideOverlay: false,
    overlayTransition: 'vfm-slide-down',
    contentTransition: 'vfm-fade',
    clickToClose: true,
    escToClose: true,
    background: 'non-interactive',
    lockScroll: true,
    reserveScrollBarGap: true,
    swipeToClose: 'none',
})



const emit = defineEmits<{
    (e: 'submit'): void
}>()



</script>

<template #default="{ close }">


    <VueFinalModal class="flex items-center justify-center w-screen h-screen"
        content-class="absolute border outline-none modal-box border-base-300/40 bg-base-100 shadow-warm" :style="{
            backgroundColor: 'rgba(0, 0, 0, 0.3)',

            height: '100%',
            width: '100%',
            visibility: 'visible',
            backdropFilter: 'blur(4px)',
            opacity: 1
        }">

        <Transition :overlay-transition="optionsC.overlayTransition">
            <div class="vfm__overlay"></div>
        </Transition>

        <Transition :content-transition="optionsC.contentTransition">

            <div class="grid w-full gap-3 p-1">
                <div class="flex items-center gap-2">
                    <h1 class="text-xl font-semibold tracking-tight ">{{ title }}</h1>


                </div>
                <form class="grid grid-cols-2 gap-4" @submit.prevent="submitForm">

                    <div class="relative text-base-content">
                        <input type="text" v-model="name" placeholder="Pocket Name"
                            class="bg-transparent input input-sm input-bordered" />

                        <ClearButton :click="name = ''" />

                    </div>

                    <div class="pb-0.5 col-start-1">

                        <textarea class="w-full leading-5 min-h-32 textarea textarea-sm textarea-bordered"
                            v-model="description" placeholder="Description, notes, a short blurb?"></textarea>
                        <span class="flex justify-end w-full label-text-alt">

                            *optional
                        </span>
                    </div>

                    <div class="grid w-full col-span-2">
                        <input type="submit" :value="button"
                            class="cursor-pointer justify-self-end btn btn-sm btn-neutral" />
                    </div>
                </form>
            </div>

            <!-- <button @click="() => close()"></button> -->
        </Transition>
    </VueFinalModal>
</template>



<style scoped>
.field {
    @apply input input-sm border-base-300 col-start-1;
}
</style>
