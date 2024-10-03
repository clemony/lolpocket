<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import { pocket, usePocketStore } from '../../stores/pocketStore';
import { useDataStore } from '../../stores/dataStore';
import icons from '../components/icons.vue';

const ps = usePocketStore();
const ds = useDataStore();

const props = defineProps<{
    title: string;
    button: string;
    pocketKey?: number;
}>()

console.log('props key: ', props.pocketKey)
// Form fields
const name = ref('');
const type = defineModel({
    default: 'Class/Role'
});
const icon = ref('teenyicons:folder-outline'); // Default icon for new pockets



const thisPocket = computed<pocket | undefined>(() => {
    if (!ps.pockets || props.pocketKey === undefined) return undefined;

    const key = Number(props.pocketKey);
    const pocket = ps.pockets.find((pocket: pocket) => pocket.key === key);

    // If a pocket is found, set the form fields to the pocket values
    if (pocket) {
        name.value = pocket.name;
        type.value = pocket.type;
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
                type.value = pocket.type;
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
        thisPocket.value.type = type.value;
        thisPocket.value.icon = icon.value;
        console.log('Pocket updated:', thisPocket.value);

    } else {
        // Creating a new pocket
        console.log(icon.value);
        console.log(type);
        console.log(name);
        ps.newPocket(name.value, type.value, icon.value);
    }

    // Clear the form values
    name.value = '';
    type.value = '';
    icon.value = '';
}


const pocketIcon = ref('');

const emit = defineEmits<{
    (e: 'submit'): void
}>()



</script>

<template>

    <div
        class="absolute min-w-[300px] grid gap-3 p-4 z-10 bg-base-100/95 backdrop-blur-md right-7 rounded-lg shadow-lg top-[105px] arrow before:absolute after:absolute border border-neutral/30">
        <div class="flex items-center gap-2">
            <h1 class="text-base font-semibold tracking-tight text-base-content ">{{ title }}</h1>


        </div>
        <form ref="form" class="grid gap-4" @submit.prevent="submitForm">

            <div class="relative text-base-content">
                <input type="text" v-model="name" placeholder="Pocket Name"
                    class="!bg-transparent input input-sm input-bordered" spellcheck='false' />

                <!--   <ClearButton @click="name = ''" /> -->

            </div>

            <div class="relative text-base-content">

                <select v-model="type" class=" max-w-xs !bg-transparent select select-bordered select-xs">
                    <option disabled value="">Class / Role</option>
                    <option v-for="c in ds.uniqueClass">{{ c }}</option>
                    <option>Small Tomato</option>
                </select>

                <div class="justify-end w-full text-right cursor-default label label-text-alt">*optional
                </div>

            </div>

            <div>
                <Icon :icon="pocketIcon" class="size-5 " />

                <Icons />
            </div>

            <div class="grid w-full">
                <input v-close-popper type="submit" :value="button"
                    class="text-xs cursor-pointer justify-self-end btn btn-sm btn-neutral" />
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
</style>
