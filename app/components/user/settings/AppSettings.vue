<script lang="ts" setup>
const { orientation } = defineProps<{
  orientation?: "vertical" | "horizontal"
}>()

const settingsData = [
  {
    title: "Reduce Motion",
    description: "Reduce the wobblies."
  },
  {
    title: "Automatic Archiving",
    description:
      "Upon new patch, current pockets will be archived until updated. A notificaton will remind you to update."
  },

  {
    title: "Sidebar Lock",
    description:
      "Upon new patch, current pockets will be archived until updated. A notifica"
  }
]

const settings = computed(() => user().settings)

const local = {
  label: "Clear Local Data",
  description: ".",
  text: "Data is cached in your browser's internal database to limit strain on Riot's API servers. This data is not permanent. Most modern browsers automatically clear data as it becomes stale or unused over time."
}
interface DataSet {
  count: string
  label: string
  action: () => Promise<unknown>
}

const getDataset = async (): Promise<Record<string, DataSet>> => {
  return {
    match: {
      count: `${await lpdb.matchData.count().then((result) => {
        return result === 0
          ? "No records."
          : result !== 1
            ? `${result} match records stored.`
            : `${result} match record stored.`
      })}`,
      label: "Match Data",
      action: () => lpdb.matchData.clear()
    },
    timeline: {
      count: `${await lpdb.matchTimeline.count().then((result) => {
        return result === 0
          ? "No records."
          : result !== 1
            ? `${result} match timelines`
            : `${result} match timeline`
      })}`,
      label: "Match Timelines",
      action: () => lpdb.matchTimeline.clear()
    },
    championMastery: {
      count: `${await lpdb.playerChampionMastery.count().then((result) => {
        return result === 0
          ? "No records."
          : result !== 1
            ? `Player records for ${result} champions`
            : `Player records for ${result} champion`
      })}`,
      label: "Champion Mastery Records",
      action: () => lpdb.playerChampionMastery.clear()
    },
    summonerMastery: {
      count: `${await lpdb.summonerMastery.count().then((result) => {
        return result === 0
          ? "No records."
          : result !== 1
            ? `Overall data for ${result} summoners.`
            : `Overall data for ${result} summoner.`
      })}`,
      label: "Summoner Mastery",
      action: () => lpdb.summonerMastery.clear()
    }
  }
}

const data = ref<Record<string, DataSet>>({})
const pendingKey = ref<string | null>(null)

const refreshDataset = async () => {
  data.value = await getDataset()
}

const clearDataset = async (key: string, item: DataSet) => {
  if (pendingKey.value) return

  pendingKey.value = key

  try {
    await item.action()
    await refreshDataset()
  } finally {
    pendingKey.value = null
  }
}

onMounted(() => {
  void refreshDataset()
})
</script>

<template>
  <UCard as-child :ui="{ body: 'w-full divide-y py-4!', root: 'w-full' }">
    <UFormField
      size="lg"
      :label="local.label"
      :ui="{
        root: 'w-full grow-0',
        wrapper: 'mb-2 border-b border-b-p3/80 px-4 pb-4'
      }">
      <template #hint>
        <HintTooltip :label="local.text" />
      </template>
      <template #description>
        Remove stored data from your browser's cache. If you're having issues
        updating matches, you can try this or
        <ULink
          class="inline underline decoration-dotted hover:decoration-solid">
          contact&nbsp;support </ULink
        >.
      </template>

      <div class="flex w-full flex-col px-4">
        <div
          v-for="[key, item] in Object.entries(data)"
          :key="key"
          class="flex w-full max-w-full items-center justify-between overflow-hidden py-3 last:pb-0!">
          <div class="flex flex-col">
            <h5 class="text-md font-semibold">
              {{ item.label }}
            </h5>
            <p class="text-sm text-n5">
              {{ item.count }}
            </p>
          </div>
          <UButton
            :color="item.count === 'No records.' ? 'primary' : 'neutral'"
            size="md"
            icon="i-trash"
            :disabled="pendingKey !== null || item.count === 'No records.'"
            :loading="pendingKey === key"
            :ui="{
              base: 'anchor size-9 max-h-9 max-w-9 rounded-xl',
              leadingIcon: '**:stroke-[2.2]'
            }"
            @click="clearDataset(key, item)" />
        </div>
      </div>
    </UFormField>
  </UCard>
</template>
