<script setup lang="ts">
import { useDataStore } from '@/stores/dataStore'
import type { pocket, Rune, RuneSet } from 'types'
import { useTempStore } from '@stores/tempStore'
const ts = useTempStore()
const ds = useDataStore()

const props = defineProps<{
    pocketKey: string
    set: number
    runeSet: number
    pocket: pocket
}>()

const pocket = ref(props.pocket)

const selected = ref(pocket.value.runes[0].runeSets[props.runeSet])

watch(
    () => ts.selectedRuneSetIndex,
    (newVal) => {
        selected.value = pocket.value.runes[0].runeSets[newVal]
    }
)

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
        selected.value.secondary = 'empty'
    }
}

onMounted(() => {})
</script>
<template>
    <div class="z-0 size-full bg-clip-border transition-all duration-500">
        <div
            class="relative z-10 flex h-16 items-end after:absolute after:top-0 after:left-0 after:h-16 after:size-full after:rounded-t-xl [&_img]:h-[1.5rem]">
            <label
                v-for="(path, index) in ds.uniquePaths"
                :key="index"
                class="border-b1 z-30 flex grow cursor-pointer items-center justify-center overflow-hidden border-b-0 border-b-transparent bg-clip-padding py-1 transition-all duration-500 disabled:hidden has-checked:-translate-y-2.5 has-disabled:absolute has-disabled:size-0 has-disabled:opacity-0"
                :ref="path">
                <input
                    v-if="props.set == 1"
                    class="peer hidden"
                    v-model="selected.primary"
                    :value="path"
                    type="radio"
                    :disabled="path == 'empty'"
                    @change="handleChange" />

                <input
                    v-if="props.set == 2"
                    class="peer hidden"
                    v-model="selected.secondary"
                    :value="path"
                    type="radio"
                    :disabled="path == 'empty' || path == selected.primary" />

                <div
                    class="mx-2 flex aspect-square size-10 items-center justify-center brightness-75 drop-shadow-sm grayscale peer-checked:brightness-100 peer-checked:grayscale-0 hover:brightness-100 hover:grayscale-0">
                    <img
                        :src="
                            '/img/runes/' + path + '.webp' ||
                            '/img/runes/RunesIcon.svg'
                        "
                        class="drop-shadow-softest" />
                </div>
                <div
                    class="text-5! mt-1.5 w-0 font-light capitalize opacity-0 transition-all duration-500 peer-checked:w-32 peer-checked:opacity-100">
                    {{ path }}
                </div>
            </label>
        </div>
    </div>

    <div
        v-if="props.set == 1"
        class="my-9 grid grid-cols-3 place-items-center justify-center gap-x-2 gap-y-9 px-7">
        <label
            v-for="(rune, index) in filter"
            :key="rune.name"
            class="shine grid cursor-pointer grid-cols-1 place-items-center gap-2"
            :data-tier="rune.tier"
            :class="rune.path + 'Color'"
            @click="ts.selectedRune = rune">
            <input
                v-if="rune.tier == 0 && props.set == 1"
                type="radio"
                :value="rune"
                v-model="selected.keystone"
                class="peer hidden"
                :disabled="rune.path == 'empty'" />

            <input
                v-if="rune.tier == 1 && props.set == 1"
                type="radio"
                :value="rune"
                v-model="selected.p1"
                class="peer hidden"
                :disabled="rune.path == 'empty'" />

            <input
                v-if="rune.tier == 2 && props.set == 1"
                type="radio"
                :value="rune"
                v-model="selected.p2"
                class="peer hidden"
                :disabled="rune.path == 'empty'" />

            <input
                v-if="rune.tier == 3 && props.set == 1"
                type="radio"
                :value="rune"
                v-model="selected.p3"
                class="peer hidden"
                :disabled="rune.path == 'empty'" />

            <Popover
                v-if="rune.tier == 0"
                :disabled="rune.path == 'empty'"
                id="imgwrap"
                class="h-[inherit] w-[inherit] opacity-80 transition-all duration-500 peer-checked:opacity-100 hover:opacity-100 [&_img]:grayscale [&_img]:peer-checked:grayscale-0 [&_img]:hover:grayscale-0 ">
                <PopoverTrigger>
                    <LoadImg
                        :url="`/img/runes/${rune.path.toLowerCase()}/${rune.name.replace(/\s+/g, '')}.webp`"
                        :alt="rune.name" class='size-20 rounded-full'
                        @error="onImageError" />
                </PopoverTrigger>
                <PopoverContent>
                    <RunePop :rune="rune" />
                </PopoverContent>
            </Popover>

            <Popover
                v-else
                :disabled="rune.path == 'empty'"
                id="imgwrap"
                class="h-[inherit] w-[inherit] opacity-80 brightness-90 transition-all duration-500 peer-checked:opacity-100 peer-checked:brightness-100 hover:opacity-100 [&_img]:grayscale [&_img]:peer-checked:grayscale-0 [&_img]:hover:grayscale-0 ">
                <PopoverTrigger class="overflow-hidden">
                    <LoadImg
                        :url="`/img/runes/${rune.path.toLowerCase()}/${rune.name.replace(/\s+/g, '')}.webp`"
                        :alt="rune.name" class='size-16 rounded-full'
                        @error="onImageError" />
                </PopoverTrigger>
                <PopoverContent>
                    <RunePop :rune="rune" />
                </PopoverContent>
            </Popover>
        </label>
    </div>

    <div
        v-if="props.set == 2"
        class="my-9 grid grid-cols-3 place-items-center justify-center gap-x-2 gap-y-9 px-7">
        <label
            v-for="(rune, index) in filter2"
            :key="rune.name"
            class="grid cursor-pointer grid-cols-1 place-items-center gap-2"
            :data-tier="rune.tier"
            :class="rune.path + 'Color'"
            @click="ts.selectedRune = rune">
            <input
                v-if="rune.tier == 1 && props.set == 2"
                type="radio"
                :value="rune"
                v-model="selected.s1"
                class="peer hidden"
                :disabled="rune.path == 'empty'" />

            <input
                v-if="rune.tier == 2 && props.set == 2"
                type="radio"
                :value="rune"
                v-model="selected.s2"
                class="peer hidden"
                :disabled="rune.path == 'empty'" />

            <Popover
                :disabled="rune.path == 'empty'"
                id="imgwrap"
                class="h-[inherit] w-[inherit] opacity-80 brightness-90 transition-all duration-500 peer-checked:opacity-100 peer-checked:brightness-100 hover:opacity-100 [&_img]:grayscale [&_img]:peer-checked:grayscale-0 [&_img]:hover:grayscale-0">
                <PopoverTrigger class="overflow-hidden">
                    <LoadImg
                        :url="`/img/runes/${rune.path.toLowerCase()}/${rune.name.replace(/\s+/g, '')}.webp`"
                        :alt="rune.name"
                        @error="onImageError" class='rounded-full size-17' />
                </PopoverTrigger>
                <PopoverContent>
                    <RunePop :rune="rune" />
                </PopoverContent>
            </Popover>
        </label>
    </div>
</template>

<style scoped>
/* .gradient {
    background: linear-gradient(
        90deg,
        rgba(227, 195, 85, 1) 0%,
        rgba(215, 95, 95, 1) 25%,
        rgba(159, 139, 209, 1) 50%,
        rgba(144, 182, 137, 1) 75%,
        rgba(153, 215, 225, 1) 100%
    );
}

.border-gradient {
    border-image: linear-gradient(
            to right,
            var(--b1),
            rgba(0, 0, 0, 0),
            var(--b1)
        )
        2;
}


[data-tier='0'] {
    #imgwrap {
        @apply size-20 rounded-none p-1;
    }
    img {
        @apply drop-shadow-md;
    }
}

[data-tier='1'],
[data-tier='2'],
[data-tier='3'] {
    & :checked + #imgwrap {
        @apply ring-neutral/30 ring-1 shadow-inner ring-offset-2 transition-all duration-500;
    }

    #imgwrap {
        @apply border-neutral/70 size-14 rounded-full border shadow-[1px_3px_2px_1px_#00000034] transition-all duration-500;
    }
    div {
        @apply rounded-full;
    }
    img {
        @apply aspect-square scale-110 rounded-full object-cover shadow-inner;
    }
}

.empty {
    [data-tier='0'] {
        img {
            @apply border-neutral/15 rounded-full border transition-all duration-500;
        }
    }

    [data-tier='1'],
    [data-tier='2'],
    [data-tier='3'] {
        & :checked + #imgwrap {
            @apply ring-0 ring-offset-0 transition-all duration-500;
        }
        #imgwrap {
            @apply border-neutral/15 bg-b2/20 size-[2.8rem] rounded-full border shadow-[inset_1px_3px_2px_1px_#00000008] transition-all duration-500;
        }
        img {
            @apply aspect-square scale-110 rounded-full object-cover shadow-inner;
        }
    }
} */
</style>
