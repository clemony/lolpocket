import { defineStore } from "pinia";
import {
  championIndex,
  championTitleIndex,
  itemIndex,
  mapIndex,
  patchIndex,
  pathIndex,
  runeIndex,
} from "~~/shared/indexes";

export const useIndexStore = defineStore(
  "indexStore",
  () => {
    const patchList = ref<number[]>([]);
    const patch = ref<number>();
    const lastPatchCheck = ref<Date>();
    const lastFullRefresh = ref<Date>();
    const champions = ref<ChampionIndex[]>([]);
    const runes = ref<RuneIndex[]>([]);
    const paths = ref<PathIndex[]>([]);
    const items = ref<ItemIndex[]>([]);
    const maps = ref<MapIndex[]>([]);
    const shards = ref<Shard[]>([]);
    const titles = ref<Record<string, string>>({});

    async function loadBasic() {
      champions.value = championIndex;
      items.value = itemIndex;
      runes.value = runeIndex;
      paths.value = pathIndex;
      maps.value = mapIndex;
    }

    async function loadTitles() {
      titles.value = championTitleIndex;
    }

    async function loadPatch() {
      if (isStale(lastPatchCheck.value) === true) {
        lastPatchCheck.value = new Date();
        if (patch.value !== patchIndex[0]) {
          patchList.value = patchIndex;
          patch.value = patchIndex[0];
          loadBasic();
        }
      }
    }

    function resetIndexStore() {
      champions.value = [];
      runes.value = [];
      paths.value = [];
      items.value = [];
      maps.value = [];
      shards.value = [];
    }

    // resetIndexStore()

    function findInIndex<T extends Record<string, any>>(
      dataset: T[] | undefined,
      inputKey: keyof T,
      value: T[keyof T],
      outputKey: keyof T,
    ): T[keyof T] | undefined {
      return dataset?.find((item) => item[inputKey] === value)?.[outputKey];
    }

    function getByIndex<T extends Record<string, any>>(
      dataset: T[] | undefined,
      inputKey: keyof T,
      value: T[keyof T],
    ): T | undefined {
      return dataset?.find((item) => item[inputKey] === value);
    }

    function getChampionTitle(key) {
      if (!titles.value) loadTitles();
      return titles.value[key];
    }

    return {
      titles,
      champions,
      items,
      lastFullRefresh,
      maps,
      patch,
      patchList,
      runes,
      shards,

      // load
      loadBasic,
      loadPatch,
      loadTitles,

      // helpers
      findInIndex,
      getByIndex,

      // champion helpers
      champIdByKey: (key: string) =>
        findInIndex(champions.value, "key", key, "id") as number,
      champIdByName: (name: string) =>
        findInIndex(champions.value, "name", name, "id"),
      championById: (id: number) => getByIndex(champions.value, "id", id),
      championByKey: (key: string) => getByIndex(champions.value, "key", key),
      champKeyById: (id: number) =>
        findInIndex(champions.value, "id", id, "key") as string,
      champKeyByName: (name: string) =>
        findInIndex(champions.value, "name", name, "key"),
      champNameById: (id: number) =>
        findInIndex(champions.value, "id", id, "name") as string,
      champNameByKey: (key: string) =>
        findInIndex(champions.value, "key", key, "name") as string,
      getChampionTitle,

      // item helpers

      itemById: (id: number) => getByIndex(items.value, "id", id),
      itemIdByName: (name: string) =>
        findInIndex(items.value, "name", name, "id"),
      itemNameById: (id: number) =>
        findInIndex(items.value, "id", id, "name") as string,

      // runes

      runeById: (id: number) => getByIndex(runes.value, "id", id),
      runeNameById: (id: number) =>
        findInIndex(runes.value, "id", id, "name") as string,

      // paths

      pathColorByName: (name: string) =>
        findInIndex(paths.value, "name", name, "color") as string,
      pathNameById: (id: number) =>
        findInIndex(paths.value, "id", id, "name") as string,

      // maps
      mapIdById: (id: number) =>
        maps.value.find((m) => m.id === id)?.mapStringId,
      mapNameById: (id: number) => maps.value.find((m) => m.id === id)?.name,
    };
  },
  {
    persist: {
      storage: piniaPluginPersistedstate.sessionStorage(),
    },
  },
);
