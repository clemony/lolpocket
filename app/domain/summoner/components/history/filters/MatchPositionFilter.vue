<script lang="ts" setup>
import type { SelectProps, TabsItem, TabsProps } from "@nuxt/ui"
import { useMatchPositions } from "~/domain/summoner/composables/match/useMatchPositions"
import { teamPositions } from "~~/shared/constants/misc/positions"
const props = withDefaults(defineProps<TabsProps>(), {
  size: "xl",
})

console.log("🥸 - teamPositions:", teamPositions)

const { summoner } = storeToRefs(sSession())
const store = matchFilter()
const { filter } = storeToRefs(store)

const positions = computed(() => {
  if (!sMatches().matches || !summoner?.value) return []

  const matchPositions = useMatchPositions(
    summoner?.value?.puuid,
    sMatches().matches
  )

  return [
    {
      label: "all",
      position: "all",
      icon: "i-lp-all",
      disabled: false,
    },
    ...matchPositions,
  ]
})
console.log("🥸 - positions:", positions)

const positionModel = computed({
  get: () => filter?.value.position ?? "all",
  set: (val) => store.setFilter("position", val ?? "all"),
})
</script>

<template>
  <UTabs
    v-model:model-value="positionModel"
    value-key="label"
    :size="props.size"
    :ui="{
      ...props?.ui,
      root: cn('h-max w-full', props?.ui?.root, props.class),
      list: 'border border-(--account-dark)/6 bg-(--account-color)/30 ring-0 inset-shadow-(--account-dark)/20',
      indicator: cn('bg-(--account-color) inset-ring-(--account-dark)/20'),
      label: 'hidden',
      leadingIcon: '',
      trigger: cn('text-pc! opacity-100', props?.ui?.trigger),
    }"
    :items="positions"
    default-value="all">
    <template #leading="{ item }">
      <Tooltip
        :text="item.label"
        as="div"
        arrow
        :ui="{ content: 'capitalize' }"
        :content="{ side: 'top' }">
        <SvgMask
          :inverted="true"
          :mask-size="100"
          :mask-key="item.position"
          class="shiny-tab-label size-5.5" />
      </Tooltip>
    </template>
  </UTabs>
</template>
