<script lang="ts" setup>

</script>

<template>
  <LazyNavigationMenuContent
    class="w-130 h-140 !px-0"
    @focus-outside.prevent>
    <div class="gap-6 py-4 w-full !flex flex-col items-start">
      <menu class=" border-b border-b-b3 px-6">
        <SummonerLabel />
      </menu>
    </div>
  </LazyNavigationMenuContent>
</template>
