<script lang="ts" setup>
const emit = defineEmits(['open:sign-in'])
</script>

<template>
  <TwoColNav class="grid-rows-4 gap-6 p-4">
    <div class="row-span-4 col-start-1 size-full overflow-hidden flex flex-col gap-1">
      <SummonerCard @click="emit('open:sign-in')" />




    </div>

    <li class="size-full col-start-2 grid justify-end items-center">

      <icon name="streamline:interface-content-chart-product-data-analysis-analytics-graph-line-business-board-chart" />
      <h4 class="dst mb-1">
        Match Analytics
      </h4>

      <p class="leading-tight text-2 mb-2 normal-case text-pretty">
        Aggregated match data. Weighted, sorted, rated, and all about you.
      </p>
    </li>

    <li v-for="item in analyticsLinks" :key="item.name" class="size-full col-start-2 ">
      <NavMenuImgLink @click="navigateTo(item.link)">
        <h5>
          {{ item.name }}
        </h5>

        <p class="leading-tight text-2 mb-2 normal-case text-pretty">
        </p>
      </NavMenuImgLink>
    </li>
  </TwoColNav>
</template>