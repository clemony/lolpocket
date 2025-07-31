<script lang="ts" setup>

</script>

<template>
  <LazyNavigationMenuContent
    class="w-130 h-140 !px-0"
    @focus-outside.prevent>
    <div class="gap-6 py-4 w-full !flex flex-col items-start">
      <menu class=" border-b border-b-b3 px-6">
        <SummonerSearch />

        <SummonerCardSmall />
      </menu>

      <div
        class="size-full grid auto-rows-min gap-1 px-4 border-l border-l-b3/80">
        <h4 class="flex gap-3">
          <icon name="heart" />
          Following
        </h4>

        wattup
      </div>
    </div>
  </LazyNavigationMenuContent>
</template>
