<script setup lang="ts">

</script>

<template>
  <Card class="grid grid-cols-[1fr_3fr] w-100 h-64">
    <div class="">
      <SummonerIcon class="rounded-lg size-24" />
    </div>

    <div class="">
      <div class="flex justify-between items-center">
        <SummonerName />

        <SummonerLevel />
      </div>

      <div class="flex justify-between items-center">
        <SummonerTag />

        <SummonerRegion />
      </div>
    </div>
  </Card>
</template>
