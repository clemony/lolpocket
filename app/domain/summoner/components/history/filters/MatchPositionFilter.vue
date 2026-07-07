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

      list: 'justify-around bg-p0/50 px-0 inset-shadow-sm inset-ring-p2',
      trigger: 'active:pointer-events-none',
      indicator:
        'h-13 rounded-5xl shadow-black/6 inset-ring-p2 drop-shadow-none',
      label: 'hidden',
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
          class="shiny-tab-label size-5.5 group-active/trigger:bg-pc!" />
      </Tooltip>
    </template>
  </UTabs>
</template>
