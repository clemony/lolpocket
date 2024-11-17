<script setup lang="ts">
import { usePocketStore } from '../../stores/pocketStore'
import { useRuneStore } from '@/stores/runeStore'
const rs = useRuneStore()
const ps = usePocketStore()
const props = defineProps<{
    pocketKey: string
}>()

const pocket = ref(ps.getPocket(props.pocketKey))
console.log('pok', pocket)

const selected = ref(rs.selectedRuneSetIndex)
console.log('rs sele', selected)

const set = ref(pocket.value.runes[0].runeSets[selected])
console.log('rs', pocket.value.runes[0].runeSets)
console.log('set', set)

const primary = computed(() => {
    if (set.value) {
        return set.value.primary
    }
})

const secondary = computed(() => {
    if (set.value) {
        return set.value.secondary
    }
})
</script>

<template>
    <Layout2 :panel2Size="25">
        <template #panel1>
            <div v-if="set" class="flex justify-end gap-10 px-10">
                <!-------------------------------- PRIMARY RUNES ------------------------------ */ -->

                <div
                    class="ease gradient relative h-fit max-h-fit w-[350px] min-w-[350px] overflow-hidden rounded-box border border-base-300 shadow-warm transition-all duration-300"
                    :class="primary">
                    <div
                        class="h-full bg-gradient-to-b from-base-100/10 via-base-100/90 via-25% to-base-100">
                        <RuneSelect
                            :pocketKey="props.pocketKey"
                            :set="1"
                            :runeSet="selected" />
                    </div>
                </div>

                <!------------------------------- SECONDARY RUNES ----------------------------- */ -->

                <div>
                    <div
                        :class="secondary"
                        class="gradient relative h-fit max-h-fit w-[350px] min-w-[350px] overflow-hidden rounded-box border border-base-300 shadow-warm">
                        <div
                            class="h-full bg-gradient-to-b from-base-100/10 via-base-100/90 via-35% to-base-100 px-2">
                            <RuneSelect
                                :pocketKey="props.pocketKey"
                                :set="2"
                                :runeSet="selected" />
                        </div>
                    </div>

                    <!----------------------------------- SHARDS --------------------------------- */ -->

                    <div
                        class="relative mt-6 h-fit max-h-fit rounded-box border border-base-300 shadow-warm">
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
                class="relative overflow-hidden rounded-box border border-base-300 !bg-base-100/90 shadow-warm">
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
</style>
