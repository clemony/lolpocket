<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useChampStore } from '../../stores/champStore';
import { VueDraggable } from 'vue-draggable-plus';
import { usePocketStore } from '../../stores/pocketStore';
import { useRoute } from 'vue-router';

const cs = useChampStore();
const ps = usePocketStore();
const route = useRoute();

// Store the pocket key from route params
const pocketKey = ref(route.params.pocketKey || '');

// Compute the current pocket from the store based on pocketKey
const pocket = computed(() => ps.getPocket(pocketKey.value));

// Use the champions array directly from the pocket in VueDraggable
const champions = computed(() => {
    return pocket.value?.champions[0]?.champions || [];
});

// Watch pocketKey changes (if route changes)
watch(() => route.params.pocketKey, (newKey) => {
    pocketKey.value = newKey;
});

// Watch for any changes in the champions data and persist it to the store
watch(champions, (newChampions) => {
    if (pocket.value) {
        pocket.value.champions[0].champions = newChampions;
        ps.$persist(); // Ensure persistence when champions update
    }
}, { deep: true });

function onAdd(e) {
    console.log(e);
    if (pocket.value.champions[0].starred.length == 0) {
        pocket.value.champions[0].starred = e.data.name;
        console.log(pocket.value.champions[0].starred);
    }
}
</script>

<template>
    <VueDraggable v-if="pocket" v-model="pocket.champions[0].champions" :delay="0" :animation="300"
        :group="{ name: 'champs', pull: true, put: true, revertClone: false }" :prevent-on-filter="true"
        direction="horizontal" :bubbleScroll="false" :scroll="false" ghostClass="ghosty" :force-fallback="true"
        :fallbackTolerance="0" fallbackClass="drag-clone" :fallbackOnBody="true" @add='onAdd($event)'
        class="h-full overflow-x-scroll drag-draggable !flex-nowrap py-1 items-center overflow-y-clip px-0.5 scrollbar-hide">

        <!-- Display each champion in the draggable list -->
        <div v-for="(champion, index) in pocket.champions[0].champions" :key="champion.name"
            class="relative basis-18 shrink-0 group">
            <label class="drag-label basis-18 shrink-0" dragClass="setDrag">
                <div class="drag-wrapper">
                    <img :src="champion.img" class="drag-img scale-[115%]" draggable='false' />
                    <input type="radio" :value="champion" v-model="cs.selectedChampion" class="hidden" />
                </div>
            </label>

            <button @click="cs.removeChamp(champion.name, pocket)"
                class='absolute rounded-full top-1.5 right-1.5 bg-base-100 opacity-0 transition-all duration-300 group-hover:opacity-70'>
                <icon icon="teenyicons:x-circle-solid" />
            </button>
        </div>

        <!-- Quick Search Placeholder -->
        <VDropdown theme="detail" alt="Quick Search" :distance="8"
            class="ghosty shrink-0 drag-label flex w-[68px] h-[68px]">
            <div class="cursor-pointer bg-[url('/img/ui/frame.webp')] bg-center bg-contain">
            </div>
            <template #popper>
                <!--        <QuickSearch :array="filteredChamps" v-model:quickSearch="quickSearch" type="champions" /> -->
            </template>
        </VDropdown>
    </VueDraggable>
</template>