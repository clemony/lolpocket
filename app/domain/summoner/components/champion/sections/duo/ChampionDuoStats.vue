<script lang="ts" setup>
import { matchPositionKey } from "~/domain/summoner/stats/helpers/normalizePosition"

const { class: className } = defineProps<{
  class?: HTMLAttributes["class"]
}>()
const view = shallowRef<"enemy" | "team">("team")
const { duos } = storeToRefs(sChampion())

const items = [{ label: "Synergy" }, { label: "Counter" }]
</script>

<template>
  <UPageSection
    title="Synergy & Counters"
    :class="cn('flex flex-col gap-3', className)">
    <UTabs v-model:model-value="view" class="w-44" :items />
    <template v-if="duos?.[view]">
      <ChampStatRow v-for="(position, i) in duos[view]" :key="i">
        <ChampStatLabel
          separator
          type="synergy"
          :icon="[`position:${matchPositionKey[i]}`, 'size-8 ds-2xs']" />
        <ChampStatRowWrapper
          v-if="position && position?.length"
          :class="cn('', className)">
          <ChampStatObjectWrapper
            v-for="c in position"
            :id="c.championId"
            :key="c.championId"
            type="synergy"
            :stat="c">
            <Champion :id="c.championId" class="size-15" />
          </ChampStatObjectWrapper>
        </ChampStatRowWrapper>

        <NoRowData v-else />
      </ChampStatRow>
    </template>
  </UPageSection>
</template>
