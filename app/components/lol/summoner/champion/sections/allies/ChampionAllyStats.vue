<script lang="ts" setup>
const { class: className } = defineProps<{
  class?: HTMLAttributes["class"]
}>()

const { allies, stats } = storeToRefs(sChampion())

/* const points = computed(() => buildAllyBubbleData(allies.value ?? []))
const colorMap = computed(() => getAllyColorMap(points.value)) */
</script>

<template>
  <UPageSection title="Allies" :class="cn('flex flex-col gap-8', className)">
    <!--  <LazyAllyBubbleChart :points :color-map /> -->

    <table class="table max-w-220 select-none">
      <!-- head -->

      <thead>
        <tr>
          <th />
          <th class="text-start!">
            Ally
          </th>
          <th>Matches</th>
          <th>Winrate</th>
          <th
            class="hover:underline"
            data-type="Percent winrate change when on team.">
            Delta*
          </th>
          <th>Avg. Match Duration</th>
        </tr>
      </thead>

      <!--    <Collapsible
        v-for="v in allies"
        :key="v.puuid"
        class="group/collapse"
        :style="{ '--ally-color': colorMap.get(v.puuid ?? '') ?? '' }"
        :default-open="false"
        as="tbody">
        <tr
          :class="
            cn(
              'w-full! rounded-md *:leading-none group-open/collapse:bg-p2/60 hover:bg-p2/60 group-open/collapse:hover:bg-p2',
              ''
            )
          ">
          <td>
            <CollapsibleTrigger class="size-full h-12! justify-center">
              <CaretRotate direction="right" />
            </CollapsibleTrigger>
          </td>
          <td class="h-full! text-start!">
            <CollapsibleTrigger
              class="inline-flex h-12! justify-start align-baseline">
              <Icon class="text-(--ally-color)!" name="round" />
              <span class="font-semibold">{{ v?.name }}</span>
              <span class="text-xs font-medium opacity-60">#{{ v?.tag }}</span>
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
              {{ v?.delta }}
            </CollapsibleTrigger>
          </td>
          <td>
            <CollapsibleTrigger class="size-full h-12! justify-end">
              {{ secondsToTime(v?.avgTimestamp ?? 0) }}
            </CollapsibleTrigger>
          </td>
        </tr>

        <CollapsibleContent
          v-for="(c, i) in v.champions"
          :key="c.championId"
          class="CollapsibleContent w-full hover:bg-p2/30"
          as="tr">
          <th class="font-semibold">
            <span>{{ i + 1 }}</span>
          </th>
          <td class="flex h-12! items-center gap-4">
            <Champion :id="c.championId" class="size-10 rounded-md" />
            {{ c.championName }}
          </td>
          <td>{{ c?.games }}</td>
          <td class="items-center justify-self-center">
            {{ c?.winrate }}
          </td>
          <td>{{ c?.delta }}</td>
          <td>{{ secondsToTime(c?.avgTimestamp ?? 0) }}</td>
        </CollapsibleContent>
      </Collapsible> -->
    </table>
  </UPageSection>
</template>
