<script lang="ts" setup>
const as = useAccountStore()

</script>

<template>
<ModuleTemplate :title="`${as.userAccount.gameName}'s Ranked Data` || 'Summoner'" >

  <div class="px-3.5">
  <RankCard queue="soloDuo" title="Ranked Solo/Duo"  />
  <div class="-mt-4">
  <RankCard title="Flex" queue="flex" />
  </div>
  </div>
</ModuleTemplate>
</template>

<style scoped>

</style>