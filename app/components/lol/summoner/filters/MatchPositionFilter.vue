<script lang="ts" setup>
import { mapPositions } from "#shared/constants/misc/positions"
import type { SelectProps, TabsProps } from "@nuxt/ui"
import { useMatchPositions } from "~/domain/summoner/composables/match/useMatchPositions"

interface QueueFiltersProps {
  type?: "tabs" | "select"
  class?: HTMLAttributes["class"]
  tabs?: Pick<TabsProps, "size" | "ui">
  select?: Pick<SelectProps, "size" | "ui" | "placeholder">
}

const props = withDefaults(defineProps<QueueFiltersProps>(), {
  size: "md",
  type: "tabs"
})

const { summoner } = storeToRefs(sSession())
const store = matchFilter()
const { filter } = storeToRefs(store)

const positions = computed(() => {
  if (!sMatches().matches || !summoner?.value) return []

  const matchPositions = useMatchPositions(
    summoner?.value?.puuid,
    sMatches().matches
  )

  return mapPositions.map((p) => {
    const find = matchPositions?.find((r) => r.name === p.label)
    return {
      ...p,
      value: p.label,
      icon: `i-lp-${p.label.toLowerCase()}`,
      disabled: p.label === "all" ? false : !find?.games
    }
  })
})

const positionModel = computed({
  get: () => filter?.value.position ?? "all",
  set: (val) => store.setFilter("position", val ?? "all")
})
</script>

<template>
  <UTabs
    v-if="props.type === 'tabs'"
    v-model:model-value="positionModel"
    size="md"
    :ui="{
      root: 'w-full',
      label: 'hidden',
      trigger: 'relative gap-0 p-0',
      leadingIcon: 'size-5'
    }"
    :items="positions"
    default-value="all">
    <template #leading="{ item }">
      <UTooltip
        :text="item.label"
        as="div"
        :ui="{ content: 'capitalize' }"
        :content="{ side: item.disabled ? 'top' : 'bottom' }">
        <div class="absolute inset-0 grid size-full place-items-center">
          <Icon :name="item.icon" class="size-5!" />
        </div>
      </UTooltip>
    </template>
  </UTabs>

  <USelect
    v-else-if="props.type === 'select'"
    v-bind="select"
    v-model:model-value="positionModel"
    :icon="`i-lp-${positionModel?.toLowerCase()}`"
    :content="{ position: 'item-aligned' }"
    :items="positions" />
</template>
