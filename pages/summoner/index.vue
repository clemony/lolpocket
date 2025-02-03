<script lang="ts" setup>
definePageMeta({
  alias: '/summoner',
  path: '/summoner',
})
const ts = useTempStore()
const as = useAccountStore()

// const userId = as.userAccount.id
// console.log("💠 - userId:", userId)

/* onMounted(async () => {
useSetSummonerData(as.userId)
}) */
</script>

<template>
  <div class="wrapper flex size-full flex-col items-center justify-center gap-15">
    <LayoutSpacer />
    <div class="">
      your pocket picks
    </div>
    <!--     <NuxtPage
      v-if="userId"
      :user-id="userId"
      :page-key="(route) => route.fullPath"
    /> -->
  </div>
</template>

<style scoped></style>
