<script setup lang="ts">
import { usePocketStore } from '@/stores/pocketStore'
import { useRuneStore } from '@/stores/runeStore'
import { getPocket } from '@utils/pocketUtilities'
const rs = useRuneStore()
const ps = usePocketStore()
const props = defineProps<{
    pocketKey: string
}>()

const pocket = ref(getPocket(props.pocketKey))
console.log('pok', pocket)

const selected = computed(() => {
    return rs.selectedRuneSetIndex ? rs.selectedRuneSetIndex : 0
})
console.log('rs sele', selected)

const set = ref(pocket.value.runes[0].runeSets[selected.value])
console.log('rs', pocket.value.runes[0].runeSets)
console.log('set', set)

const primary = computed(() => {
    if (set.value && set.value.primary != undefined) {
        return set.value.primary
    }
})

const secondary = computed(() => {
    if (set.value && set.value.secondary) {
        return set.value.secondary
    }
})
</script>

<template>
    <Layout2 :panel2Size="25">
        <template #panel1>
            <div class="flex justify-end gap-10 px-10">
                <!-------------------------------- PRIMARY RUNES ------------------------------ */ -->

                <div
                    class="ease gradient relative h-fit max-h-fit w-[350px] min-w-[350px] overflow-hidden rounded-xl border border-base-300 shadow-warm transition-all duration-300"
                    :class="primary">
                    <div
                        class="h-full bg-gradient-to-b from-base-100/10 via-base-100/90 via-25% to-base-100">
                        <RuneSelect
                            :pocketKey="props.pocketKey"
                            :pocket="pocket"
                            :set="1"
                            v-model:runeSet="selected" />
                    </div>
                </div>

                <!------------------------------- SECONDARY RUNES ----------------------------- */ -->

                <div>
                    <div
                        :class="secondary"
                        class="gradient relative h-fit max-h-fit w-[350px] min-w-[350px] overflow-hidden rounded-xl border border-base-300 shadow-warm">
                        <div
                            class="h-full bg-gradient-to-b from-base-100/10 via-base-100/90 via-35% to-base-100 px-2">
                            <RuneSelect
                                :pocketKey="props.pocketKey"
                                :pocket="pocket"
                                :set="2"
                                v-model:runeSet="selected" />
                        </div>
                    </div>

                    <!----------------------------------- SHARDS --------------------------------- */ -->

                    <div
                        class="relative mt-6 h-fit max-h-fit rounded-xl border border-base-300 shadow-warm">
                        <div
                            class="h-full w-full px-6 py-8 shadow-[inset_0px_0px_40px_#00000006]">
                            <RuneShards :pocket="pocket" :selected="set" />
                        </div>
                    </div>
                </div>
            </div>
        </template>
        <template #panel2>
            <div
                class="relative overflow-hidden rounded-xl border border-base-300 !bg-base-100/90 shadow-warm">
                <RuneSets :pocketKey="props.pocketKey" />
            </div>
        </template>
    </Layout2>
</template>

<style>
/* ] */
.focus-hover:focus,
.focus-hover:hover,
.focus-hover:focus-within {
    @apply grow border-base-300 bg-base-100/50 shadow-inner ring-offset-base-content/40 [&_button]:opacity-100;
}

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

.none {
    background: linear-gradient(
        137deg,
        rgba(190, 190, 190, 1) 0%,
        rgba(193, 193, 193, 0.8) 10%,
        rgba(233, 233, 233, 1) 75%,
        rgba(252, 252, 252, 0) 90%
    );
    @apply transition-all duration-500;
}

.inspiration,
.resolve {
    transition: all 0.5s ease-in-out;
}

.inspiration {
    background-position: 100%;

    #imgwrap {
        @apply ring-offset-sky-300/30;
    }
}

.resolve {
    background-position: 83%;
    @apply transition-all duration-500;

    #imgwrap {
        @apply ring-offset-lime-600/60;
    }
}

.sorcery {
    background-position: 42%;
    @apply transition-all duration-500;

    #imgwrap {
        @apply ring-offset-purple-400/60;
    }
}

.domination {
    background-position: 20%;
    @apply transition-all duration-500;

    #imgwrap {
        @apply ring-offset-red-500/60;
    }
}

.precision {
    background-position: 0%;

    @apply transition-all duration-500;

    #imgwrap {
        @apply ring-offset-amber-500/60;
    }
}
</style>
