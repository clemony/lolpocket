<script lang="ts" setup>
const as = useAccountStore()

const title = computed (() => {
  return `${as.userAccount.gameName}'s Ranked Data` || 'Summoner Ranked Data'
})
</script>

<template>
  <ModuleGhostTemplate :title="title">
    <div class="grid grid-cols-3 size-full place-items-center h-24">
      <i-unranked class="size-28 drop-shadow-sm  opacity-30" />

      <div
        class="self-center radial-progress ml-3 mb-0.5 dst text-b2 size-20 after:hidden overflow-hidden"
        :style="{ '--value': 50 }" :aria-valuenow="50" role="progressbar"
      >
        <span class="text-bc/50">
          50%
        </span>
      </div>

      <div class="h-full gap-3 -mt-2 text-4 font-medium opacity-60 flex flex-col justify-center">
        <p>100W</p>
        <p>100L</p>
      </div>
    </div>
  </ModuleGhostTemplate>
</template>

<style scoped>

</style>