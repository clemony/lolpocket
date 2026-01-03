<script lang="ts" setup>
import { buildAllyBubbleData, getAllyColorMap, groupByAlly } from './allyBubbles'

const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
}>()

const { allies } = usePlayerStatsInject()

const points = computed (() => buildAllyBubbleData(allies.value))
const colorMap = computed(() => getAllyColorMap(points.value))
</script>

<template>
  <div :class="cn('flex flex-col gap-8', className)">
    <LazyAllyBubbleChart
      :points
      :color-map />

    <table
      class="table max-w-240 select-none">
      <!-- head -->

      <thead>
        <tr>
          <th></th>
          <th class="text-start!">
            Ally
          </th>
          <th>Matches</th>
          <th>Winrate</th>
          <th>Synergy</th>
          <th>Avg. Match Duration</th>
        </tr>
      </thead>

      <Collapsible
        v-for="v in allies"
        :key="v.puuid"
        :style="{ '--ally-color': colorMap.get(v.puuid) }"
        :default-open="false"
        as="tbody"
        class="group/collapse">
        <tr
          :class="cn(
            'w-full! rounded-md *:leading-none group-open/collapse:bg-b2/60 hover:bg-b2/60 group-open/collapse:hover:bg-b2',
            '')">
          <td>
            <CollapsibleTrigger class="size-full h-12! justify-center">
              <CaretRotate direction="right" />
            </CollapsibleTrigger>
          </td>
          <td class="h-full! text-start!">
            <CollapsibleTrigger class="inline-flex h-12! justify-start align-baseline">
              <Icon
                name="round"
                class="text-[var(--ally-color)]!" />
              <span class="font-semibold">{{ v?.name }}</span>
              <span class="text-1 font-medium opacity-60"> #{{ v?.tag }}</span>
            </CollapsibleTrigger>
          </td>
          <td>
            <CollapsibleTrigger class="size-full h-12! justify-center">
              {{ v?.games }}
            </CollapsibleTrigger>
          </td>
          <td>
            <CollapsibleTrigger class="size-full h-12! justify-center">
              {{ v?.winrate }}
            </CollapsibleTrigger>
          </td>
          <td>
            <CollapsibleTrigger class="size-full h-12! justify-center">
              {{ v?.synergy.average }}
            </CollapsibleTrigger>
          </td>
          <td>
            <CollapsibleTrigger class="size-full h-12! justify-end">
              {{ secondsToTime(v?.avgTimestamp) }}
            </CollapsibleTrigger>
          </td>
        </tr>

        <CollapsibleContent
          v-for="c, i in v.champions"
          :key="c.championId"
          as="tr"
          class="CollapsibleContent w-full hover:bg-b2/30">
          <th class="font-semibold">
            <span>{{ i + 1 }}</span>
          </th>
          <td class="flex h-12! items-center gap-4">
            <ChampionIcon
              :id="c.championId"
              class="size-10 rounded-md" />
            {{ c.championName }}
          </td>
          <td>{{ c?.games }}</td>
          <td
            class="items-center justify-self-center">
            {{ c?.winrate }}
          </td>
          <td>{{ c?.synergy.average }}</td>
          <td>{{ secondsToTime(c?.avgTimestamp) }}</td>
        </CollapsibleContent>
      </Collapsible>
    </table>
  </div>
</template>