<script setup lang="ts">
  const as = useAccountStore();
  import { VueDraggable } from 'vue-draggable-plus';

  const ds = useDataStore();
  const ts = useTempStore();

  const props = defineProps<{
    pocket?: pocket;
    disableDrawer?: boolean;
  }>();

  const pocket = ref(props.pocket);

  /* const champions = computed(() => {
    if (pocket.value) {
        return pocket.value.champions[0].champions
    }
})

const filteredChampions = computed(() => {
    let filtered = ds.champions

    if (champions.value) {
        const selectedNames = champions.value.map((champion) => champion.name)

        filtered = filtered.filter(
            (champion) => !selectedNames.includes(champion.name)
        )
    }

    if (ts.champSearch) {
        filtered = filtered.filter((champion) =>
            Object.values(champion).some(
                (value) =>
                    typeof value === 'string' &&
                    value.toLowerCase().includes(ts.champSearch)
            )
        )
    }
    // Apply cat filters if any
    if (ts.champClassFilters.length) {
        filtered = filtered.filter((champion) =>
            ts.champClassFilters.some((filter) =>
                champion.tags
                    ?.toString()
                    .toLowerCase()
                    .includes(filter.toLowerCase())
            )
        )
    }

    if (ts.sortChampsAZ) {
        if (ts.sortChampsAZ === 'az') {
            filtered = filtered.sort(
                (a: { name: string }, b: { name: string }) =>
                    a.name.localeCompare(b.name)
            )
        } else if (ts.sortChampsAZ === 'za') {
            filtered = filtered.sort(
                (a: { name: string }, b: { name: string }) =>
                    b.name.localeCompare(a.name)
            )
        }
    }

    if (ts.viewFavoriteChamps == true && as.favoriteChamps.length) {
        filtered = filtered.filter((champion) =>
            as.favoriteChamps.some(
                (favoriteChampion) => favoriteChampion.name === champion.name
            )
        )
    }
    return filtered
})

watch(
    () => as.favoriteChamps, // Watch the actual value of favoriteChampions
    (newVal) => {
        if (!newVal.length) {
            ts.viewFavoriteChamps = false
        }
    },
    { immediate: true } // Ensure it runs on initialization
) */

  console.log('💠 - champions:', ds.champions[0]);
</script>

<template>
  <VueDraggable
    ref="el"
    :group="{
      name: 'champs',
      pull: 'clone',
      put: false,
      revertClone: true,
    }"
    :sort="false"
    v-model="ds.champions"
    ghostClass="ghosty"
    :delay="0"
    :animation="300"
    :force-fallback="true"
    :fallbackTolerance="0"
    fallbackClass="drag-clone"
    :fallbackOnBody="true"
    class="max-h-inherit h-inherit scrollbar-hide flex flex-wrap items-start justify-around gap-4 overflow-y-auto rounded-lg pt-4 pb-4">
    <TransitionGroup name="pop">
      <Champion
        v-for="champion in ds.champions"
        :key="champion.id"
        :champion="champion"
        ref="list"
        class="size-20 shrink-0 overflow-hidden rounded-lg"
        dragClass="setDrag"
        @click="useDrawer('ChampionDrawer', null, champion)" />
    </TransitionGroup>

    <div class="aspect-square size-[62px]"></div>
    <div class="aspect-square size-[62px]"></div>
    <div class="aspect-square size-[62px]"></div>
    <div class="aspect-square size-[62px]"></div>
    <div class="aspect-square size-[62px]"></div>
    <div class="aspect-square size-[62px]"></div>
    <div class="aspect-square size-[62px]"></div>
  </VueDraggable>
</template>

<style scoped></style>
