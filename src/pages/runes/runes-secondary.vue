<script setup lang="ts">

import { computed, onMounted, ref, watch } from 'vue';
import { Rune } from '../../../types';
import { usePocketStore } from '../../stores/pocketStore';
import { useRuneStore } from '../../stores/runeStore';
import { useDataStore } from '../../stores/dataStore';
import { set } from '@vueuse/core/index.cjs';
import { useRoute } from 'vue-router';
const rs = useRuneStore();
const ps = usePocketStore();
const ds = useDataStore();

const route = useRoute();
const props = defineProps<{
    pocketKey: string;
}>()

const pocket = ref(ps.getPocket(route.params.pocketKey));

const pocketKey = ref(route.params.pocketKey || '');


// Watch for changes in the route's pocketKey and update the local state
watch(() => route.params.pocketKey, (newKey) => {
    pocketKey.value = newKey;
    pocket.value = ps.getPocket(props.pocketKey);
});

const selected = pocket.value.runes[0].selected;

const filter = computed(() => {
    let filteredRunes = ds.runes;

    if (!selected) return [];



    filteredRunes = filteredRunes.filter((rune: Rune) => rune.path.toLowerCase().includes(selected.primary));

    const tiers = [1, 2, 3];
    filteredRunes = filteredRunes.filter((rune: Rune) => tiers.includes(rune.tier));

    return filteredRunes;
});

// Handle image error
const onImageError = (event: Event) => {
    const target = event.target as HTMLImageElement | null;
    if (target) {
        target.src = '/img/runes/blankRune.webp';
    }
};



function handleChange() {
    if (selected.primary == selected.secondary) {
        pocket.runeSets[selected].secondary = 'none';
    }
}

onMounted(() => {

    pocket.value = ps.getPocket(props.pocketKey);
    if (pocket.value && pocket.value.runes[0].runeSets.length == 0) {
        rs.newRuneSet();
    }
});

</script>
<template>
    <div class="z-0 w-full transition-all duration-500 bg-clip-border">
        <div
            class="flex h-16 items-end [&_img]:h-[1.5rem] z-10 relative after:absolute after:w-full after:h-16 after:top-0 after:left-0 after:rounded-t-box">
            <label v-for="(path, index) in ds.uniquePaths" :key="index"
                class="flex grow overflow-hidden py-1 items-center border-b-transparent border-b-0 border-base-100 bg-clip-padding transition-all duration-500 has-[:checked]:-translate-y-2.5 justify-center z-30 disabled:hidden has-[:disabled]:size-0 has-[:disabled]:absolute has-[:disabled]:opacity-0 cursor-pointer"
                :ref="path">
                <input class="hidden peer" v-model="selected.secondary" :value="path" type="radio"
                    :disabled="path == 'none' || path == selected.primary" />

                <div
                    class="flex items-center justify-center mx-2 grayscale brightness-75 peer-checked:brightness-100 peer-checked:grayscale-0 hover:brightness-100 drop-shadow-sm hover:grayscale-0 size-10 aspect-square">
                    <img :src="'/img/runes/' + path + '.webp' || '/img/ui/RunesIcon.svg'" class="drop-shadow-softest" />
                </div>
                <div
                    class="capitalize opacity-0 w-0 peer-checked:w-32 peer-checked:opacity-100 transition-all duration-500 font-light mt-1.5 text-lg">
                    {{ path }}
                </div>
            </label>
        </div>
    </div>



    <div class="grid justify-center grid-cols-3 px-7 gap-y-9 gap-x-2 place-items-center my-9">
        <label v-for="(rune, index) in filter" :key="rune.name"
            class="grid grid-cols-1 gap-2 cursor-pointer place-items-center" :data-tier="rune.tier"
            :class="rune.path + 'Color'" @click="
                rs.selectedRune = rune;
            ">

            <input v-if="rune.tier == 1" type="radio" :value="rune" v-model="selected.s1" class="hidden peer"
                :disabled="rune.path == 'none'" />

            <input v-if="rune.tier == 2" type="radio" :value="rune" v-model="selected.s2" class="hidden peer"
                :disabled="rune.path == 'none'" />

            <input v-if="rune.tier == 3" type="radio" :value="rune" v-model="selected.s3" class="hidden peer"
                :disabled="rune.path == 'none'" />

            <VDropdown theme="detail" :triggers="['hover']" :popperTriggers="['hover']" :delay="{ show: 1000, hide: 0 }"
                :disabled="rune.path == 'none'" id="imgwrap"
                class="peer-checked:opacity-100 h-[inherit] w-[inherit] peer-checked:brightness-100 brightness-90 opacity-80 grayscale peer-checked:grayscale-0 transition-all duration-500 hover:opacity-100 hover:grayscale-0">
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
</template>

<style scoped>
.gradient {
    background: linear-gradient(90deg, rgba(227, 195, 85, 1) 0%, rgba(215, 95, 95, 1) 25%, rgba(159, 139, 209, 1) 50%, rgba(144, 182, 137, 1) 75%, rgba(153, 215, 225, 1) 100%);
}

.border-gradient {
    border-image: linear-gradient(to right, oklch(var(--b1)), rgba(0, 0, 0, 0), oklch(var(--b1))) 2;
}

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
      @apply ring-1 ring-offset-2 ring-neutral/30  shadow-inner transition-all duration-500;
    }

    #imgwrap {
      @apply rounded-full size-[2.8rem] shadow-[1px_3px_2px_1px_#00000034] border border-neutral/70 transition-all duration-500;
    }
    img {
      @apply scale-110 object-cover aspect-square shadow-inner rounded-full;
    }
  }

  .none {
    [data-tier='0'] {
      img {
        @apply border border-neutral/15 transition-all duration-500 rounded-full;
      }
    }

    [data-tier='1'],
    [data-tier='2'],
    [data-tier='3'] {
      & :checked + #imgwrap {
        @apply ring-0 ring-offset-0  transition-all duration-500;
      }
      #imgwrap {
        @apply rounded-full size-[2.8rem] shadow-[inset_1px_3px_2px_1px_#00000008] border border-neutral/15 transition-all duration-500 bg-base-200/20;
      }
      img {
        @apply scale-110 object-cover aspect-square shadow-inner rounded-full;
      }
    }
  }</style>
