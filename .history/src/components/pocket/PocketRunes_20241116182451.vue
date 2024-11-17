<script setup lang="ts">
import { usePocketStore } from '../../stores/pocketStore'
import {
    ResizablePanel,
    ResizablePanelGroup,
} from '@/components/base/resizable'

const ps = usePocketStore()
const props = defineProps<{
    pocketKey: string
}>()

const pocket = ref(ps.getPocket(props.pocketKey))

const selected = computed(() => {
    if (!pocket.value) return
    return pocket.value.runes[0].runeSets[pocket.value.runes[0].selected]
})

const selectedRuneSet = ref(0)

const primary = computed(() => {
    if (selected.value) {
        return selected.value.primary
    }
})

const secondary = computed(() => {
    if (selected.value) {
        return selected.value.secondary
    }
})
</script>

<template>
    <Layout2 :panel2Size="25">
        <template #panel1>
            <div v-if="selected" class="flex justify-end gap-10 px-10">
                <!-------------------------------- PRIMARY RUNES ------------------------------ */ -->

                <div
                    class="ease gradient relative h-fit max-h-fit w-[350px] min-w-[350px] overflow-hidden rounded-box border border-base-300 shadow-warm transition-all duration-300"
                    :class="primary">
                    <div
                        class="h-full bg-gradient-to-b from-base-100/10 via-base-100/90 via-25% to-base-100">
                        <RuneSelect :pocketKey="props.pocketKey" :set="1" />
                    </div>
                </div>

                <!------------------------------- SECONDARY RUNES ----------------------------- */ -->

                <div>
                    <div
                        :class="secondary"
                        class="gradient relative h-fit max-h-fit w-[350px] min-w-[350px] overflow-hidden rounded-box border border-base-300 shadow-warm">
                        <div
                            class="h-full bg-gradient-to-b from-base-100/10 via-base-100/90 via-35% to-base-100 px-2">
                            <RuneSelect :pocketKey="props.pocketKey" :set="2" />
                        </div>
                    </div>

                    <!----------------------------------- SHARDS --------------------------------- */ -->

                    <div
                        class="relative mt-6 h-fit max-h-fit rounded-box border border-base-300 shadow-warm">
                        <div
                            class="h-full w-full px-6 py-8 shadow-[inset_0px_0px_40px_#00000006]">
                            <RuneShards :pocket="pocket" :set="selected" />
                        </div>
                    </div>
                </div>
            </div>
        </template>
        <template #panel2>
            <div
                class="relative overflow-hidden rounded-box border border-base-300 !bg-base-100/90 shadow-warm">
                <RuneSets
                    :pocketKey="props.pocketKey"
                    :selectedRuneSet="selectedRuneSet" />
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
