<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import { pocket, usePocketStore } from '../../stores/pocketStore';
import { useDataStore } from '../../stores/dataStore';
import { icons } from '../../data/icons';
const ps = usePocketStore();
const ds = useDataStore();
const iconStore = icons;

const props = defineProps<{
    title: string;
    button: string;
    pocketKey?: number;
}>()

console.log('props key: ', props.pocketKey)
// Form fields
const name = ref('');
const type = defineModel({
    default: ""
});
const selectedIcon = ref('teenyicons:folder-outline');
const iconTabs = ref('icon');




const colorValue = ref('#000');

watch(() => colorValue.value, (newVal) => {
    colorValue.value = newVal;
}, { immediate: true });




const thisPocket = computed<pocket | undefined>(() => {
    if (!ps.pockets || props.pocketKey === undefined) return undefined;

    const key = Number(props.pocketKey);
    const pocket = ps.pockets.find((pocket: pocket) => pocket.key === key);

    // If a pocket is found, set the form fields to the pocket values
    if (pocket) {
        name.value = pocket.name;
        type.value = pocket.type;
        selectedIcon.value = pocket.icon;
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
                selectedIcon.value = pocket.icon;
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
        thisPocket.value.icon = selectedIcon.value;
        console.log('Pocket updated:', thisPocket.value);

    } else {
        // Creating a new pocket
        console.log(selectedIcon.value);
        console.log(type);
        console.log(name);
        ps.newPocket(name.value, type.value, selectedIcon.value, colorValue.value);
    }


    emit('submit')
    // Clear the form values
    name.value = '';
    type.value = '';

    colorValue.value = '';
    selectedIcon.value = '';
}




const emit = defineEmits<{
    (e: 'submit'): void
}>()



</script>

<template>

    <div
        class="absolute min-w-[300px] grid gap-4 p-5 z-10 bg-base-100/95 backdrop-blur-md right-7 rounded-lg shadow-lg top-[105px] arrow before:absolute after:absolute border border-neutral/30">
        <div class="flex items-center gap-2">
            <h1 class="text-base font-semibold tracking-tight text-base-content ">{{ title }}</h1>


        </div>
        <form ref="form" class="grid gap-4 max-w-[300px]" @submit.prevent.stop="submitForm">

            <div
                class="relative w-full mb-0 text-base-content join selector after:absolute after:right-1.5 after:top-3.5">
                <input type="text" v-model="name" placeholder="Pocket Name"
                    class="!bg-transparent input input-sm input-bordered  join-item border-base-300 shadow-inner w-full"
                    spellcheck='false' />

                <!--   <ClearButton @click="name = ''" /> -->



                <select v-model="type"
                    class="!bg-base-200/80 select select-bordered max-w-24 select-sm join-item text-xs border-base-300 [&_option]:truncate bg-none pl-1.5 pr-5 [&_option]:w-full">
                    <option disabled value="">Type</option>
                    <option v-for="c in ds.uniqueClass">{{ c }}</option>
                    <option>Small Tomato</option>
                </select>
            </div>


            <div role="tablist"
                class=" grid w-full [&_.tab]:!border-b-transparent [&_.tab-content]:!z-0  [&_.tab]:!z-30 relative tabs tabs-lifted  *:text-xs border-base-300/70 [&_.tab]:h-7 [&_.tab]:font-medium overflow-y-scroll scrollbar-hide">

                <label role="tab" :class="{ 'tab-active': iconTabs == 'icon' }" class="tab first">
                    <input type="radio" class="hidden peer" v-model="iconTabs" name="iconTabs" value="icon">
                    Icons
                </label>

                <div role="tabpanel" :class="{ 'hidden': iconTabs == 'color' }"
                    class="w-full grid rounded-tl-none min-w-[298px] tab-content bg-base-100 border-base-300/70 rounded-box shadow-inset-sm relative">


                    <div
                        class="grid self-center grid-cols-5 gap-3 px-1 py-3 overflow-y-scroll max-h-52 justify-items-center scrollbar-hide justify-self-center">

                        <label v-for='icon in iconStore'
                            class="self-center  p-1  btn-ghost btn btn-square btn-sm   hover:has-[:checked]:opacity-80 has-[:checked]:bg-neutral"
                            @click.stop.prevent="selectedIcon = icon">

                            <input type="radio" name="iconPicker" v-model="selectedIcon" :value="icon"
                                class="hidden peer" />
                            <icon :icon='icon' class="size-full peer-checked:text-[currentColor] text-base-content " />

                        </label>

                    </div>
                </div>



                <label role="tab" :class="{ 'tab-active': iconTabs == 'color' }" class="tab">
                    <input type="radio" class="hidden peer" v-model="iconTabs" name="iconTabs" value="color">
                    Color
                </label>

                <div role="tabpanel" :class="{ 'hidden': iconTabs == 'icon' }"
                    class="w-full grid  min-w-[298px] tab-content bg-base-100 border-base-300/70 rounded-box shadow-inset-sm ">
                    <div
                        class="grid self-center px-1 py-3 overflow-y-scroll justify-items-center scrollbar-hide justify-self-center ">
                        <ColorPicker v-model:color="colorValue" />


                    </div>
                </div>

            </div>

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
