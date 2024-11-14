<script setup lang="ts">
import { usePocketStore } from '@stores/pocketStore'
import { useRuneStore } from '@stores/runeStore'
const rs = useRuneStore()
const ps = usePocketStore()
import { useDataStore } from '@stores/dataStore'
import { Rune } from 'types'
const ds = useDataStore()

const route = useRoute()
const props = defineProps<{
    pocketKey: string
    set: number
}>()

const pocketKey = ref(route.params.pocketKey || '')

const pocket = computed(() => {
    return ps.getPocket(route.params.pocketKey)
})

const selected = computed(() => {
    return pocket.value.runes[0].runeSets[pocket.value.runes[0].selected]
})

const filter = computed(() => {
    let filteredRunes = ds.runes

    if (!selected) return []

    filteredRunes = filteredRunes.filter((rune: Rune) =>
        rune.path.toLowerCase().includes(selected.value.primary)
    )

    return filteredRunes
})

const filter2 = computed(() => {
    let filteredRunes = ds.runes

    if (!selected) return []

    filteredRunes = filteredRunes.filter((rune: Rune) =>
        rune.path.toLowerCase().includes(selected.value.secondary)
    )

    const tiers = [1, 2, 3]
    filteredRunes = filteredRunes.filter((rune: Rune) =>
        tiers.includes(rune.tier)
    )

    return filteredRunes
})

// Handle image error
const onImageError = (event: Event) => {
    const target = event.target as HTMLImageElement | null
    if (target) {
        target.src = '/img/runes/blankRune.webp'
    }
}

function handleChange() {
    if (selected.value.primary == selected.value.secondary) {
        selected.value.secondary = 'none'
    }
}

watch(
    () => route.params.pocketKey,
    (newKey) => {
        pocketKey.value = newKey
    }
)

onMounted(() => { })
</script>
<template>
<div class="z-0 w-full bg-clip-border transition-all duration-500">
    <div
        class="relative z-10 flex h-16 items-end after:absolute after:left-0 after:top-0 after:h-16 after:w-full after:rounded-t-box [&_img]:h-[1.5rem]">
        <label v-for="(path, index) in ds.uniquePaths" :key="index"
            class="z-30 flex grow cursor-pointer items-center justify-center overflow-hidden border-b-0 border-base-100 border-b-transparent bg-clip-padding py-1 transition-all duration-500 disabled:hidden has-[:disabled]:absolute has-[:disabled]:size-0 has-[:checked]:-translate-y-2.5 has-[:disabled]:opacity-0"
            :ref="path">
            <input v-if="props.set == 1" class="peer hidden" v-model="selected.primary" :value="path" type="radio"
                :disabled="path == 'none'" @change="handleChange" />

            <input v-if="props.set == 2" class="peer hidden" v-model="selected.secondary" :value="path" type="radio"
                :disabled="path == 'none' || path == selected.primary" />

            <div
                class="mx-2 flex aspect-square size-10 items-center justify-center brightness-75 drop-shadow-sm grayscale hover:brightness-100 hover:grayscale-0 peer-checked:brightness-100 peer-checked:grayscale-0">
                <img :src="'/img/runes/' + path + '.webp' ||
                    '/i@RunesIcon.svg'
                    " class="drop-shadow-softest" />
            </div>
            <div
                class="mt-1.5 w-0 !text-lg font-light capitalize opacity-0 transition-all duration-500 peer-checked:w-32 peer-checked:opacity-100">
                {{ path }}
            </div>
        </label>
    </div>
</div>

<div v-if="props.set == 1" class="my-9 grid grid-cols-3 place-items-center justify-center gap-x-2 gap-y-9 px-7">
    <label v-for="(rune, index) in filter" :key="rune.name"
        class="grid cursor-pointer grid-cols-1 place-items-center gap-2" :data-tier="rune.tier"
        :class="rune.path + 'Color'" @click="rs.selectedRune = rune">
        <input v-if="rune.tier == 0 && props.set == 1" type="radio" :value="rune" v-model="selected.keystone"
            class="peer hidden" :disabled="rune.path == 'none'" />

        <input v-if="rune.tier == 1 && props.set == 1" type="radio" :value="rune" v-model="selected.p1"
            class="peer hidden" :disabled="rune.path == 'none'" />

        <input v-if="rune.tier == 2 && props.set == 1" type="radio" :value="rune" v-model="selected.p2"
            class="peer hidden" :disabled="rune.path == 'none'" />

        <input v-if="rune.tier == 3 && props.set == 1" type="radio" :value="rune" v-model="selected.p3"
            class="peer hidden" :disabled="rune.path == 'none'" />

        <VDropdown theme="default" :triggers="['hover']" :popperTriggers="['hover']" :delay="{ show: 1000, hide: 0 }"
            :disabled="rune.path == 'none'" id="imgwrap"
            class="h-[inherit] w-[inherit] opacity-80 brightness-90 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0 peer-checked:opacity-100 peer-checked:brightness-100 peer-checked:grayscale-0">
            <div class="overflow-hidden rounded-full">
                <loadImg :url="`/img/runes/${rune.path.toLowerCase()}/${rune.name.replace(/\s+/g, '')}.webp`"
                    :alt="rune.name" @error="onImageError" />
            </div>

            <template #popper>
                <RunePop :rune="rune" />
            </template>
        </VDropdown>
    </label>
</div>

<div v-if="props.set == 2" class="my-9 grid grid-cols-3 place-items-center justify-center gap-x-2 gap-y-9 px-7">
    <label v-for="(rune, index) in filter2" :key="rune.name"
        class="grid cursor-pointer grid-cols-1 place-items-center gap-2" :data-tier="rune.tier"
        :class="rune.path + 'Color'" @click="rs.selectedRune = rune">
        <input v-if="rune.tier == 1 && props.set == 2" type="radio" :value="rune" v-model="selected.s1"
            class="peer hidden" :disabled="rune.path == 'none'" />

        <input v-if="rune.tier == 2 && props.set == 2" type="radio" :value="rune" v-model="selected.s2"
            class="peer hidden" :disabled="rune.path == 'none'" />


        <VDropdown theme="default" :triggers="['hover']" :popperTriggers="['hover']" :delay="{ show: 1000, hide: 0 }"
            :disabled="rune.path == 'none'" id="imgwrap"
            class="h-[inherit] w-[inherit] opacity-80 brightness-90 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0 peer-checked:opacity-100 peer-checked:brightness-100 peer-checked:grayscale-0">
            <div class="overflow-hidden rounded-full">
                <loadImg :url="`/img/runes/${rune.path.toLowerCase()}/${rune.name.replace(/\s+/g, '')}.webp`"
                    :alt="rune.name" @error="onImageError" />
            </div>

            <template #popper>
                <RunePop :rune="rune" />
            </template>
        </VDropdown>
    </label>
</div>
</template>

<style scoped>
.gradient {
    background: linear-gradient(90deg,
            rgba(227, 195, 85, 1) 0%,
            rgba(215, 95, 95, 1) 25%,
            rgba(159, 139, 209, 1) 50%,
            rgba(144, 182, 137, 1) 75%,
            rgba(153, 215, 225, 1) 100%);
}

.border-gradient {
    border-image: linear-gradient(to right,
            oklch(var(--b1)),
            rgba(0, 0, 0, 0),
            oklch(var(--b1))) 2;
}

/* beautify ignore:start */
[data-tier='0'] {
    #imgwrap {
        @apply size-20 p-1 rounded-none;
    }
    img {
        @apply  drop-shadow-md;
    }
}

[data-tier='1'],
[data-tier='2'],
[data-tier='3'] {
    & :checked + #imgwrap {
        @apply shadow-inner ring-1 ring-neutral/30 ring-offset-2 transition-all duration-500;
    }

    #imgwrap {
        @apply size-14 rounded-full border border-neutral/70 shadow-[1px_3px_2px_1px_#00000034] transition-all duration-500;
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
