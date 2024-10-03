<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import { Icon } from '@iconify/vue';
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




const emit = defineEmits<{
    (e: 'submit'): void
}>()



</script>

<template>

    <div class="grid w-full gap-3 p-3">
        <div class="flex items-center gap-2">
            <h1 class="text-base font-semibold tracking-tight ">{{ title }}</h1>


        </div>
        <form class="grid grid-cols-2 gap-4" @submit.prevent="submitForm">

            <div class="relative text-base-content">
                <input type="text" v-model="name" placeholder="Pocket Name"
                    class="!bg-transparent input input-sm input-bordered" />

                <ClearButton :click="name = ''" />

            </div>

            <div class="pb-0.5 col-start-1">

                <textarea
                    class="w-full leading-5 min-h-32 textarea textarea-sm textarea-bordered text-xs !bg-transparent"
                    v-model="description" placeholder="Description, notes, a short blurb?"></textarea>
                <span class="flex justify-end w-full label-text-alt">

                    *optional
                </span>
            </div>

            <div class="grid w-full col-span-2">
                <input type="submit" :value="button"
                    class="text-xs cursor-pointer justify-self-end btn btn-sm btn-neutral" />
            </div>
        </form>
    </div>
</template>



<style scoped>
.field {
    @apply input input-sm border-base-300 col-start-1;
}
</style>
