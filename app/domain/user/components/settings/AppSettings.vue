<script lang="ts" setup>
import type {
  SettingOptionKey,
  SettingOptionSet
} from "~/domain/user/utils/settings/appOptions"
import {
  getOptionSet,
  localDataOption
} from "~/domain/user/utils/settings/appOptions"

const { orientation } = defineProps<{
  orientation?: "vertical" | "horizontal"
}>()
const settings = computed(() => user().settings)
const data = ref<SettingOptionSet[]>()
const pendingKey = ref<string | null>(null)

const clearAll = computed<SettingOptionSet>(() => {
  const total = computed(() => {
    if (!data.value) return 0
    return Object.values(data.value)
      .map((item) => item.count)
      .reduce((acc, item) => {
        return acc ?? 0 + (item ?? 0)
      }, 0)
  })
  return {
    label: "Clear All",
    color: !total.value ? "primary" : "neutral",
    size: "sm_",
    id: "clear-all",
    count: total.value,
    onClick: async () => {
      await lpdb.matchData.clear()
      await lpdb.matchTimeline.clear()
      await lpdb.playerChampionMastery.clear()
      await lpdb.summonerMastery.clear()
    }
  }
})

const refreshDataset = async () => {
  data.value = await getOptionSet()
}
const clearDataset = async (item: SettingOptionSet) => {
  if (pendingKey.value) return

  pendingKey.value = item.id

  try {
    await item?.onClick
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
      :label="localDataOption.label"
      :ui="{
        root: 'w-full grow-0',
        wrapper: 'mb-2 border-b border-b-p3/80 px-4 pb-4'
      }">
      <template #hint>
        <HintTooltip :label="localDataOption.text" />
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
          v-for="item in data"
          :key="item.id"
          class="flex w-full max-w-full items-center justify-between overflow-hidden py-3 last:pb-0!">
          <div class="flex flex-col">
            <h5 class="text-md font-semibold">
              {{ item.label }}
            </h5>
            <p class="text-sm text-n5">
              {{ item.description }}
            </p>
          </div>
          <UButton
            :color="!item.count ? 'primary' : 'neutral'"
            size="md"
            icon="i-trash"
            :disabled="pendingKey !== null || !item.count"
            :loading="pendingKey === item.id"
            :ui="{
              base: 'anchor size-9 max-h-9 max-w-9 rounded-xl',
              leadingIcon: '**:stroke-[2.2]'
            }"
            @click="clearDataset(item)" />
        </div>

        <UButton
          v-bind="clearAll"
          block
          :disabled="!clearAll.count"
          :loading="pendingKey === clearAll.id"
          :ui="{
            base: 'rounded-xl',
            leadingIcon: '**:stroke-[2.2]'
          }"
          @click="clearDataset(clearAll)" />
      </div>
    </UFormField>
  </UCard>
</template>
