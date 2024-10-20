<script setup lang="ts">
import { ref, computed } from 'vue'
import { useItemStore } from '../../stores/itemStore'
import { useDataStore } from '../../stores/dataStore'
import { useRuneStore } from '../../stores/runeStore'

const ds = useDataStore()
const rs = useRuneStore()

const isCollapsed = ref('')

const props = defineProps<{
    rune?: {
        name?: string
        tier?: string
        wiki?: string
        path?: string
        img?: string
        stats?: string
    }
}>()

// Create a computed property for the rune
const rune = computed(() => {
    return props.rune || rs.selectedRune // Fallback to rs.selectedRune if no prop is passed
})
</script>

<template>
    <div
        v-if="rune"
        class="max-w-64 relative pb-6 h-fit max-h-full transition-all duration-500 shadow-[inset_0px_0px_40px_#00000009,_rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] overflow-y-auto">
        <div :rune="rune" :key="rune.name" class="h-full">
            <!-------------------------------⟢ Header ⟣-------------------------------->

            <label
                :key="rune.name + '1'"
                class="border-b-base-300 border-b rounded-t-box sticky z-50 top-0 left-0 frost items-center flex w-full justify-end gap-4 !h-fit flex-wrap py-1 px-4">
                <h2 class="flex items-center justify-start gap-3 sub-text grow">
                    <span class="grow"> {{ rune.name || 'Rune Detail' }}</span>
                    <div v-if="rune">
                        <img
                            :src="'/img/runes/' + rune.path + '.webp'"
                            class="object-contain h-5" />
                    </div>
                </h2>
            </label>

            <!-------------------------------⟢ Data ⟣-------------------------------->

            <div
                id="wrap"
                :data-tier="rune.tier"
                class="relative px-4 pt-3"
                :key="rune.name + '2'">
                <div
                    class="relative z-0 img-wrapper group before:absolute"
                    :href="rune.wiki"
                    target="_blank"
                    :title="rune.wiki"
                    :alt="rune.wiki"
                    :key="rune.name + 'img'">
                    <div class="link-set">
                        <img
                            id="runeImg"
                            :src="rune.img"
                            class="ml-2.5 mt-1 rounded-full float-right" />
                        <div class="flex items-center justify-center link-icon">
                            <Icon
                                icon="teenyicons:link-outline"
                                class="text-neutral-content size-3" />
                        </div>
                    </div>
                </div>
                <div
                    id="runeStats"
                    :key="rune.name + '3'"
                    class="text-[0.76rem] whitespace-pre-line font-serif text-justify mt-1 first-letter:mr-1.5 first-letter:float-left first-letter:text-3xl first-letter:font-[700] first-line:uppercase first-line:font-[700] first-line:tracking-widest">
                    {{ rune.stats }}
                </div>
            </div>
        </div>
    </div>
    <div v-else></div>
</template>

<style scoped>
/* beautify ignore:start */
[data-tier='0'] {
    .img-wrapper::before,
    .img-wrapper .link-icon {
        content: '';
        @apply rounded-full absolute content-[''];
    }
    #runeImg {
        @apply size-[6rem] p-1.5 drop-shadow-md ml-0 z-20 rounded-none;
    }

    .img-wrapper .link-icon {
        @apply size-[1.5rem] bg-neutral top-[4rem] right-[-0.01rem] z-20 shadow-md transition-all duration-500;
    }
    .link-set:hover .link-icon {
        @apply ring-offset-neutral ring-2 ring-neutral rotate-180;
    }
}

[data-tier='1'],
[data-tier='2'],
[data-tier='3'] {
    .img-wrapper::before,
    .img-wrapper .link-icon {
        content: '';
        @apply rounded-full absolute content-[''];
    }

    .img-wrapper .link-icon {
        @apply size-[1.5rem] bg-neutral top-[2.17rem] right-[-0.01rem] z-20 shadow-md transition-all duration-500;
    }

    #runeImg {
        @apply size-14 shadow-[inset_0px_0px_2px_3px_#00000099,_1px_2px_1px_2px_#00000018] ring-1 ring-offset-1 ring-base-200 ring-offset-base-300;
    }

    .link-set:hover .link-icon {
        @apply ring-offset-neutral ring-2 ring-neutral rotate-180;
    }
}
</style>
