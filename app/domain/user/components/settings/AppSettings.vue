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
  <FormWrapper>
    <UCard
      :ui="{
        body: 'w-full px-0! py-4!',
        header: 'pt-2! pb-4!',
        root: 'w-full divide-y px-1',
        footer: 'px-0! pt-7!'
      }">
      <template #header>
        <UFormField
          size="lg"
          :label="localDataOption.label"
          :ui="{
            root: 'w-full grow-0',
            label: 'text-pc/90',
            wrapper: 'py-0!',
            description: 'text-sm text-n5'
          }">
          <template #hint>
            <HintTooltip :text="localDataOption.text" />
          </template>
          <template #description>
            Remove stored data from your browser's cache. If you're having
            issues updating matches, you can try this or
            <ULink
              class="inline underline decoration-dotted hover:decoration-solid">
              contact&nbsp;support </ULink
            >.
          </template>
        </UFormField>
      </template>
      <template #default>
        <UPageCard
          v-for="item in data"
          :key="item.id"
          variant="ghost"
          orientation="horizontal"
          :ui="{
            root: 'w-full max-w-full overflow-hidden p-0!',
            container: 'flex! flex-row justify-between p-0! py-4!'
          }">
          <div class="flex flex-col">
            <h5 class="text-md font-semibold">
              {{ item.label }}
            </h5>
            <p class="text-sm text-n5">
              {{ item.description }}
            </p>
          </div>
          <UButton
            :color="!item.count ? 'secondary' : 'neutral'"
            size="md"
            icon="i-trash"
            :disabled="pendingKey !== null || !item.count"
            :loading="pendingKey === item.id"
            :ui="{
              base: 'anchor rounded-xl disabled:bg-p3 disabled:shadow-none disabled:inset-ring-p4/40 disabled:drop-shadow-none disabled:fx-1!'
            }"
            @click="clearDataset(item)" />
        </UPageCard>
      </template>

      <template #footer>
        <UButton
          v-bind="clearAll"
          block
          icon="i-backspace"
          size="lg"
          :color="!clearAll.count ? 'secondary' : 'neutral'"
          :disabled="!clearAll.count"
          :loading="pendingKey === clearAll.id"
          :ui="{
            base: 'justify-between rounded-xl px-4 disabled:bg-p3 disabled:shadow-none disabled:inset-ring-p4/40 disabled:drop-shadow-none disabled:fx-1!',
            leadingIcon: '-scale-x-100 group-disabled/btn:opacity-30',
            label: 'w-full text-end group-disabled/btn:opacity-40'
          }"
          @click="clearDataset(clearAll)" />
      </template>
    </UCard>
  </FormWrapper>
</template>
