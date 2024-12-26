<script setup lang="ts">
import { useDataStore } from '@/stores/dataStore'
import type { pocket, Rune, RuneSet } from 'types'
import { useTempStore } from '@stores/tempStore'
const ts = useTempStore()
const ds = useDataStore()

const props = defineProps<{
    pocketKey?: string
    set?: number
    runeSet?: number
    pocket?: pocket
    selectedRune?: string
}>()

const pocket = ref(props.pocket)

const selected = ref(pocket.value.runes[0].runeSets[props.runeSet])

onMounted(() => {})
</script>
<template></template>

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
