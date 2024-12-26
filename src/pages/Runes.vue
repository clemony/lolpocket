<script setup lang="ts">
import { usePocketStore } from '@/stores/pocketStore'
import { useTempStore } from '@/stores/tempStore'
import { getPocket } from '@/utils/pocketUtilities'
const ts = useTempStore()
const ps = usePocketStore()
const props = defineProps<{}>()

const selected = ref(0)
console.log('rs sele', selected.value)

const selectedRune = ref()
const selectedShard = ref()
</script>

<template>
    <div class="flex justify-end gap-10 px-10">
        <!-------------------------------- PRIMARY RUNES ------------------------------ */ -->

        <div
            class="ease gradient border-b3 shadow-warm relative h-fit max-h-fit w-[350px] min-w-[350px] overflow-hidden rounded-xl border transition-all duration-300">
            <div
                class="from-b1/10 via-b1/90 to-b1 h-full bg-linear-to-b via-25%">
                <RuneSelect :set="1" v-model="selectedRune" />
            </div>
        </div>

        <div>
            <div
                class="border-b3 shadow-warm relative mt-6 h-fit max-h-fit rounded-xl border">
                <div
                    class="h-full w-full px-6 py-8 shadow-[inset_0px_0px_40px_#00000006]">
                    <RuneShards :selected="selectedShard" />
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.gradient {
    background: linear-gradient(
        137deg,
        rgba(231, 207, 120, 0.7) 0%,
        rgba(220, 124, 124, 0.7) 20%,
        rgba(178, 164, 221, 0.7) 40%,
        rgba(175, 212, 150, 0.7) 60%,
        rgba(165, 226, 229, 0.7) 80%
    );
    background-size: 550%;
}

.empty {
    background: linear-gradient(
        137deg,
        rgba(190, 190, 190, 1) 0%,
        rgba(193, 193, 193, 0.8) 10%,
        rgba(233, 233, 233, 1) 75%,
        rgba(252, 252, 252, 0) 90%
    );
}

.none,
.precision,
.domination,
.sorcery,
.resolve,
.inspiration {
    transition: all 0.5s ease-in-out;
}

.precision {
    background-position: 0%;
}

.domination {
    background-position: 20%;
}

.sorcery {
    background-position: 42%;
}

.resolve {
    background-position: 83%;
}

.inspiration {
    background-position: 100%;
}
</style>
