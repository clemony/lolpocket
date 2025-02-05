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
  <div class="wrapper flex size-full items-center justify-center gap-15">
    <LayoutSpacer />
    <div class="">
      your pocket picks
    </div>
    <TopBuilds />
  </div>
</template>

<style scoped></style>
