<script lang="ts" setup>
const as = useAccountStore()
</script>

<template>
  <ModuleTemplate :title="`${as.userAccount.gameName}'s Ranked Data` || 'Summoner'" class="module-bg">
    <div class="pl-2.5  size-[96%] pr-4.5 grid p-i-c gap-5 pt-6 self-center">
      <RankCard queue="soloDuo" title="Solo/Duo" class="[&_.ranked-title]:absolute [&_.ranked-title]:-top-5 [&_.ranked-title]:-left-3 relative [&_.ranked-grid]:gap-8" />

      <RankCard title="Flex" queue="flex" class=" [&_.ranked-title]:-top-5 [&_.ranked-title]:-left-3 relative [&_.ranked-title]:absolute [&_.ranked-grid]:gap-8" />
    </div>
  </ModuleTemplate>
</template>

<style scoped>

</style>