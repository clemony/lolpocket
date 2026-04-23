<script lang="ts" setup>
import type { PromiseExtended } from "dexie"

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
  count: number
  label: string
  action: PromiseExtended<void>
}
const data = async (): Promise<Record<string, DataSet>> => ({
  match: {
    count: await lpdb.matchData.count(),
    label: "Match Data",
    action: lpdb.matchData.clear()
  },
  timeline: {
    count: await lpdb.matchTimeline.count(),
    label: "Match Timelines",
    action: lpdb.matchTimeline.clear()
  },
  championMastery: {
    count: await lpdb.playerChampionMastery.count(),
    label: "Champion Mastery Records",
    action: lpdb.playerChampionMastery.clear()
  },
  summonerMastery: {
    count: await lpdb.summonerMastery.count(),
    label: "Summoner Mastery",
    action: lpdb.summonerMastery.clear()
  }
})
</script>

<template>
  <UFormField size="lg" :label="local.label">
    <template #hint>
      <HintTooltip :label="local.text" />
    </template>
    <template #description>
      Remove stored data from your browser's cache. If you're having issues
      updating matches, you can try this or
      <ULink class="inline underline decoration-dotted hover:decoration-solid">
        contact&nbsp;support </ULink
      >.
    </template>

    <div
      v-for="(item, i) in Object.values(data)"
      :key="i"
      class="flex items-center justify-between">
      <div class="flex flex-col gap-1">
        <h4>{{ item.label }}</h4>
        <p>{{ item.count }}</p>
      </div>
      <UButton color="neutral" label="Clear" />
    </div>
  </UFormField>
</template>
