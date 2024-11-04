<script setup lang="ts">
import { computed, watch } from 'vue'
import { useRuneStore } from '@stores/runeStore'
import { useDataStore } from '@stores/dataStore'
import { Rune } from '@types'
import { usePocketStore } from '@stores/pocketStore'
const rs = useRuneStore()
const ds = useDataStore()
const ps = usePocketStore()

const props = defineProps<{
    set: number
    pocketKey: string
}>()

const pocket = ps.getPocket(props.pocketKey)

const filter = computed(() => {
    let filteredRunes = ds.runes

    const selectedSet = pocket.runes[0].runeSets.find(
        (set) => set.key === rs.selectedSetKey
    )
    if (!selectedSet) return []

    // Filter runes by selected path
    if (!rs.currentSet) return []
    const path =
        props.set == 1 ? rs.currentSet.primary : rs.currentSet.secondary

    if (path) {
        filteredRunes = filteredRunes.filter((rune: Rune) =>
            rune.path.toLowerCase().includes(path.toLowerCase())
        )
    }

    // Tier filter for set 2
    if (props.set == 2) {
        const tiers = [1, 2, 3]
        filteredRunes = filteredRunes.filter((rune: Rune) =>
            tiers.includes(rune.tier)
        )
    }

    return filteredRunes
})

// Handle image error
const onImageError = (event: Event) => {
    const target = event.target as HTMLImageElement | null
    if (target) {
        target.src = '/img/runes/blankRune.webp'
    }
}
</script>

<template v-if="rs.selectedSetKey">
<div>
    <div class="my-9 grid grid-cols-3 place-items-center justify-center gap-x-2 gap-y-9 px-7">
        <label v-for="(rune, index) in filter" :key="rune.name"
            class="grid cursor-pointer grid-cols-1 place-items-center gap-2" :data-tier="rune.tier"
            :class="rune.path + 'Color'" @click="rs.selectedRune = rune">
            <input type="radio" :value="index" v-model="rs.runeModels[
                'v' + rs.selectedSetKey + props.set + rune.tier
            ]
                " :name="'r' + props.set + rune.tier" @change="rs.updateCurrentSetRunes()" class="peer hidden"
                :disabled="rune.path == 'none'" />

            <VDropdown theme="default" :triggers="['hover']" :popperTriggers="['hover']"
                :delay="{ show: 1000, hide: 0 }" :disabled="rune.path == 'none'" id="imgwrap"
                class="h-[inherit] w-[inherit] opacity-80 brightness-90 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0 peer-checked:opacity-100 peer-checked:brightness-100 peer-checked:grayscale-0">
                <div class="overflow-hidden rounded-full">
                    <img :src="`/img/runes/${rune.path.toLowerCase()}/${rune.name.replace(/\s+/g, '')}.webp`"
                        :alt="rune.name" @error="onImageError" />
                </div>

                <template #popper>
                    <RunePop :rune="rune" />
                </template>
            </VDropdown>
        </label>
    </div>
</div>
</template>

<style scoped>
/* beautify ignore:start */
[data-tier='0'] {
    img {
        @apply size-[4.4rem] drop-shadow-md;
    }
}

[data-tier='1'],
[data-tier='2'],
[data-tier='3'] {
    & :checked + #imgwrap {
        @apply shadow-inner ring-1 ring-neutral/30 ring-offset-2 transition-all duration-500;
    }

    #imgwrap {
        @apply size-[2.8rem] rounded-full border border-neutral/70 shadow-[1px_3px_2px_1px_#00000034] transition-all duration-500;
    }
    img {
        @apply aspect-square scale-110 rounded-full object-cover shadow-inner;
    }
}

.none {
    [data-tier='0'] {
        img {
            @apply rounded-full border border-neutral/15 transition-all duration-500;
        }
    }

    [data-tier='1'],
    [data-tier='2'],
    [data-tier='3'] {
        & :checked + #imgwrap {
            @apply ring-0 ring-offset-0 transition-all duration-500;
        }
        #imgwrap {
            @apply size-[2.8rem] rounded-full border border-neutral/15 bg-base-200/20 shadow-[inset_1px_3px_2px_1px_#00000008] transition-all duration-500;
        }
        img {
            @apply aspect-square scale-110 rounded-full object-cover shadow-inner;
        }
    }
}</style>
