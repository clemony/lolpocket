<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { usePocketStore } from '../../../stores/pocketStore';
import { pocket, dateObject } from '../../../../types';
const ps = usePocketStore();

const props = defineProps<{
    params: {
        data: {
            key: string;
            name: string;
            notes: string;
            dateCreated: dateObject;
            dateUpdated: dateObject;
        };

        type: string;

    };
}>();

const pocket = ps.getPocket(props.params.data.key);


const patch = computed(() => {
    if (props.params.type == "created") {
        return pocket.dateCreated[0].patch;
    } else { return pocket.dateUpdated[0].patch; }
});

const date = computed(() => {
    if (props.params.type == "created") {
        return pocket.dateCreated[0].date;
    } else { return pocket.dateUpdated[0].date; }
});

const time = computed(() => {
    if (props.params.type == "created") {
        return pocket.dateCreated[0].time;
    } else { return pocket.dateUpdated[0].time; }
});

const getStyles = computed(() => {
    if (props.params.type == 'updated') {
        const lastUpdated = pocket.dateUpdated[0].patch;
        const currentPatch = ps.patch;

        // Slice off the third part (hotfix patch) and only keep the first two parts
        const [lastMajor, lastMinor] = lastUpdated.split('.').slice(0, 2).map(Number);
        const [currentMajor, currentMinor] = currentPatch.split('.').slice(0, 2).map(Number);

        // Success: exact same major and minor version
        if (lastMajor === currentMajor && lastMinor === currentMinor) {
            return 'badge-success text-base-100';
        }

        // Warning: same major version and lastMinor is within two versions (e.g., 14.18, 14.17) of the currentMinor (e.g., 14.19)
        if (lastMajor === currentMajor && currentMinor - lastMinor <= 2 && currentMinor - lastMinor > 0) {
            return 'badge-warning text-base-100';
        }

        // Error: any other case
        return 'badge-error text-base-100';
    } else {
        return 'badge-ghost';
    }
});

const dateObjects = [
    {
        name: "Patch",
        icon: "simple-icons:riotgames",
        iconClass: "size-[12px]",
        data: patch,
    },
    {
        name: "Date",
        icon: "radix-icons:calendar",
        iconClass: " size-3.5",
        data: date,
    },
    {
        name: "Time",
        icon: "fluent-mdl2:alarm-clock",
        iconClass: " size-3.5",
        data: time,
    },
]


const selectedObject = ref();
</script>

<template>
    <div class="carousel carousel-vertical size-full group place-items-center">



        <!--         <button v-if="selectedObject" class="relative grid place-content-center">
            <div :class="getStyles" class="badge text-mini ">
                <icon :icon="selectedObject.icon || dateObjects[0].icon"
                    :class='selectedObject.iconClass || dateObjects[0].iconClass' />
                <span class='font-medium tracking-widest'>{{ selectedObject.data || patch }}</span>
            </div>

        </button>
        <button v-else class="relative flex flex-col items-center justify-center">
            <div :class="getStyles" class="gap-2 badge text-mini">
                <icon :icon="dateObjects[0].icon" :class='dateObjects[0].iconClass' />
                <span class='font-medium tracking-widest'>{{ patch }}</span>
            </div>

        </button>

        <template #popper> -->


        <div v-close-popper v-for="(object, index) in dateObjects"
            class="items-center justify-center carousel-item size-full">
            <!--                 <input type="radio" v-model="selectedObject" :value="object" class="hidden peer" />
                <span>{{ object.name }}</span> -->
            <div :class="getStyles" class="gap-2 badge text-mini">
                <icon :icon="object.icon" :class='object.iconClass' />
                <span class='font-medium tracking-widest'>{{ object.data }}</span>
            </div>
        </div>
    </div>
</template>

<style scoped></style>