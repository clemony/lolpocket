<script lang="ts" setup>
</script>

<template>
  <TwoColNav class="grid-rows-4 gap-6 p-4">
    <div class="row-span-4 col-start-1 size-full overflow-hidden flex flex-col gap-1">
      <SummonerCard />

      <LazySettingsSheet>
        <NavMenuLink>
          <IconWrapper>
            <icon name="gear-solid" class="size-4.75 opacity-60 dst" />
          </IconWrapper>
          Settings
        </NavMenuLink>
      </LazySettingsSheet>

      <NavMenuLink @click="useSignOut()">
        <IconWrapper>
          <icon name="mdi:sign-out" class="size-4.75 dst absolute left-0.25" />
        </IconWrapper>
        Sign Out
      </NavMenuLink>
    </div>

    <li class="size-full col-start-2 grid justify-end items-center">
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