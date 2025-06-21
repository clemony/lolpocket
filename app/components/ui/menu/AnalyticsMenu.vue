<script lang="ts" setup>

</script>

<template>
  <TwoColNav class="grid-rows-4">
    <SummonerCard class="row-span-4" />

    <li class="size-full col-start-2 grid justify-end items-center">
      <h4 class="dst mb-1">
        Match Analytics
      </h4>

      <p class="leading-tight text-2 mb-2 normal-case text-pretty">
        Aggregated match data. Weighted, sorted, rated, and all about you.
      </p>
    </li>

    <li v-for="item in analyticsLinks" :key="item.name" class="size-full col-start-2 ">
      <NavMenuLink @click="navigateTo(item.link)">
        <h5>
          {{ item.name }}
        </h5>

        <p class="leading-tight text-2 mb-2 normal-case text-pretty">
        </p>
      </NavMenuLink>
    </li>
  </TwoColNav>
</template>