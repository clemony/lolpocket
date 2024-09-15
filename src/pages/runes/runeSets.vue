<script setup lang="ts">
  import { onMounted, ref, computed } from 'vue';
  import { VueDraggable } from 'vue-draggable-plus';
  import { useBStore } from '../../stores/buildStore';
  import { useDataStore } from '../../stores/dataStore';
  import type { Rune } from '../../stores/dataStore';
  import { useRuneStore } from '../../stores/runeStore';
  const rs = useRuneStore();

  const ds = useDataStore();
  const bs = useBStore();
  const fs = ds.getShards();
  const runes = ds.runes;

  onMounted(() => {
    const ds = useDataStore();
    const bs = useBStore();
  });

  const getKeystone = (path: string, index: number) => {
    const runes = ds.runes;

    // Filter runes by path
    const filteredRunes = runes.filter((rune) => rune.path === path);

    // Return the rune's image or a default image if not found
    return filteredRunes[index]?.img || './src/assets/img/blankRune1.webp';
  };
</script>

<template>
  <div class="overscroll-y-auto pt-11 bg-base-200/80 w-full h-full px-2">
    <div class="border-b-base-300 border-b backdrop-blur-md absolute z-1 top-0 left-0 bg-base-100/90 items-center flex w-full justify-end gap-4 !h-fit flex-wrap py-1">
      <h2 class="font-semibold text-base grow justify-start">Rune Sets</h2>
      <button
        class="items-center btn btn-xs btn-outline border-none rounded-md h-full relative font-normal"
        @click="rs.newRuneSet()">
        <Icon
          icon="teenyicons:add-solid"
          class="self-center size-3 -mt-[2px]" />
        new set
      </button>
    </div>

    <div class="overscroll-y-auto flex flex-col">
      <VueDraggable
        class="pointer-events-auto"
        tag="div"
        v-model="rs.runeSets"
        group="sets"
        dragClass="setDrag"
        direction="vertical">
        <label
          v-for="set in rs.runeSets"
          :key="set.key"
          class="group bg-base-100/90 cursor-pointer flex items-center p-2 gap-4 my-2 rounded-box has-[:checked]:border-base-200/60 ring-2 ring-transparent">
          <input
            type="radio"
            :value="set.key"
            name="runeSets"
            v-model="rs.selectedSetKey"
            class="hidden"
            @change="
              rs.radioSelectRuneSet(set.key);
              console.log(set.runes);
            " />

          <div class="cursor-move text-base-300 grid place-content-center hover:opacity-100">
            <icon
              icon="teenyicons:caret-vertical-outline"
              class="size-6 pointer-events-none"
              handle />
          </div>

          <img
            :src="getKeystone(set.primary, set.runes[0])"
            class="drop-shadow-sm h-9" />

          <img
            v-if="set.secondary != 'none'"
            :src="'/img/runes/' + set.secondary + '.webp'"
            class="drop-shadow-sm h-9 p-1.5" />
          <img
            v-else
            src="@/assets/img/blankRune1.webp"
            class="drop-shadow-sm h-9" />

          <div class="grow text-sm"><!-- {{ set.name }} --></div>

          <div class="grid grid-cols-3 *:aspect-square *:size-5 *:rounded-btn *:text-base-content/80 *:transition-all *:flex *:justify-center *:items-center *:duration-300 gap-1.5">
            <button
              class="hover:bg-base-200"
              alt="Clear Items"
              title="Clear Items"
              @click="rs.resetRunes()">
              <icon
                icon="teenyicons:clockwise-outline"
                class="size-[0.8rem] pb-[2px]" />
            </button>

            <button
              class="disabled:bg-transparent hover:bg-base-200 disabled:hover:bg-transparent disabled:opacity-40"
              alt="Delete Set"
              title="Delete Set"
              @click="rs.deleteSet(set.key)"
              :disabled="rs.runeSets.length == 1">
              <icon
                icon="ph:trash-light"
                class="size-3.5" />
            </button>
          </div>
        </label>
      </VueDraggable>
    </div>
  </div>
</template>

<style scoped></style>
