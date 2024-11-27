<script setup lang="ts">
import { usePocketStore } from '@/stores/pocketStore'
import { useRuneStore } from '@/stores/runeStore'
const rs = useRuneStore()
const ps = usePocketStore()
const props = defineProps<{
    pocketKey: string
}>()

const pocket = ref(ps.getPocket(props.pocketKey))
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
                    class="ease gradient border-base-300 shadow-warm relative h-fit max-h-fit w-[350px] min-w-[350px] overflow-hidden rounded-xl border transition-all duration-300"
                    :class="primary">
                    <div
                        class="from-b1/10 via-b1/90 to-b1 h-full bg-linear-to-b via-25%">
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
                        class="gradient border-base-300 shadow-warm relative h-fit max-h-fit w-[350px] min-w-[350px] overflow-hidden rounded-xl border">
                        <div
                            class="from-b1/10 via-b1/90 to-b1 h-full bg-linear-to-b via-35% px-2">
                            <RuneSelect
                                :pocketKey="props.pocketKey"
                                :pocket="pocket"
                                :set="2"
                                v-model:runeSet="selected" />
                        </div>
                    </div>

                    <!----------------------------------- SHARDS --------------------------------- */ -->

                    <div
                        class="border-base-300 shadow-warm relative mt-6 h-fit max-h-fit rounded-xl border">
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
                class="border-base-300 bg-b1/90! shadow-warm relative overflow-hidden rounded-xl border">
                <RuneSets :pocketKey="props.pocketKey" />
            </div>
        </template>
    </Layout2>
</template>

<style>
@import '@assets/css/theme.css' theme(reference);
.focus-hover:focus,
.focus-hover:hover,
.focus-hover:focus-within {
    @apply border-base-300 bg-b1/50 ring-offset-base-content/40 grow shadow-inner [&_button]:opacity-100;
}
</style>
