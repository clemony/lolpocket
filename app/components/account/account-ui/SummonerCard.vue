<script setup lang="ts">

</script>

<template>
  <div class="flex w-full  field-box p-2 items-center gap-4 ">
    <div class=" size-fit grid place-items-center rounded-full drop-shadow-sm  shadow-sm shrink-0 relative">
      <AccountSummonerIcon  class="size-12 rounded-full" />
    </div>

    <div class="flex flex-col grow justify-center gap-1.5 drop-shadow-sm">
      <div class="flex w-fit items-end gap-4 h-6">
        <h1 class="!text-6 font-serif  leading-none  font-bold  truncate">
          <SummonerName />
        </h1>

        <div class=" flex items-center h-full relative">
          <span class="absolute flex items-center -bottom-0.75 font-medium">

          </span>
        </div>
      </div>

      <div class="flex items-center lowercase gap-4 align-baseline font-normal">
        <span class="lowercase flex items-center">
          <SummonerTag />
        </span>

        <span class="">
          lv. <SummonerLevel />
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
