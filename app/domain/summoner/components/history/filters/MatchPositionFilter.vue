<script lang="ts" setup>
import type { SelectProps, TabsItem, TabsProps } from "@nuxt/ui"
import { useMatchPositions } from "~/domain/summoner/composables/match/useMatchPositions"

const props = withDefaults(defineProps<TabsProps>(), {
  size: "xl",
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

  return [
    {
      label: "all",
      icon: "i-lp-all",
      disabled: false,
    },
    ...matchPositions,
  ]
})

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
      root: cn(
        'w-full before:absolute before:inset-0 before:z-0 before:size-full before:rounded-5xl before:bg-p1/60',
        props?.ui?.root,
        props.class
      ),
      list: 'rounded-5xl border border-(--account-dark)/6 bg-(--account-color)/20 px-2 py-1.75! ring-0 inset-shadow-(--account-dark)/20',
      indicator: cn(
        'h-10.5 bg-(--account-color) inset-ring-(--account-dark)/20'
      ),
      label: 'hidden',
      trigger: cn('h-10.5! text-pc! opacity-100', props?.ui?.trigger),
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
          <Icon
            :name="item.icon"
            class="size-5! scale-110 group-active/trigger:text-white" />
        </div>
      </UTooltip>
    </template>
  </UTabs>
</template>
