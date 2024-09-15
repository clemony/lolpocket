<script setup lang="ts">
  import { computed, watch } from 'vue';
  import type { Rune } from '../../stores/dataStore';
  import { useRuneStore } from '../../stores/runeStore';
  import { useDataStore } from '../../stores/dataStore';
  const rs = useRuneStore();
  const ds = useDataStore();

  const props = defineProps<{
    set: number;
  }>();

  // Computed property for filtering the runes
  const filter = computed(() => {
    let filteredRunes = ds.runes;

    const selectedSet = rs.runeSets.find((set) => set.key === rs.selectedSetKey);
    if (!selectedSet) return [];

    // Filter runes by selected path
    if (!rs.currentSet) return [];
    const path = props.set == 1 ? rs.currentSet.primary : rs.currentSet.secondary;

    if (path) {
      filteredRunes = filteredRunes.filter((rune: Rune) => rune.path.toLowerCase().includes(path.toLowerCase()));
    }

    // Tier filter for set 2
    if (props.set == 2) {
      const tiers = [1, 2, 3];
      filteredRunes = filteredRunes.filter((rune: Rune) => tiers.includes(rune.tier));
    }

    return filteredRunes;
  });
</script>

<template v-if="rs.selectedSetKey">
  <div>
    <div class="grid grid-cols-3 px-7 gap-y-9 gap-x-2 justify-center place-items-center my-9">
      <label
        v-for="(rune, index) in filter"
        :key="rune.name"
        class="grid grid-cols-1 cursor-pointer gap-2 place-items-center"
        :data-tier="rune.tier"
        :class="rune.path + 'Color'"
        @click="
          rs.selectedRune = rune;
          console.log(rs.selectedRune);
        ">
        <input
          type="radio"
          :value="index"
          v-model="rs.runeModels['v' + rs.selectedSetKey + props.set + rune.tier]"
          :name="'r' + props.set + rune.tier"
          @change="rs.updateCurrentSetRunes()"
          class="peer hidden"
          :disabled="rune.path == 'none'" />

        <div
          id="imgwrap"
          class="peer-checked:opacity-100 h-[inherit] w-[inherit] opacity-90 grayscale peer-checked:grayscale-0 transition-all duration-500 hover:opacity-100 hover:grayscale-0">
          <div class="overflow-hidden rounded-full">
            <img
              :src="rune.img"
              :title="rune.name"
              :alt="rune.name" />
          </div>
        </div>
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
  }
</style>
