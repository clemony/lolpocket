<script setup lang="ts">
definePageMeta({
  title: 'Summoner',
  section: 'search',
  path: '/summoner',
  icon: 'search',
})

const as = useAccountStore()
const router = useRouter()

if (as.userAccount?.riot?.puuid) {
  router.replace(
    `/summoner/${as.userAccount.riot.region}/${as.userAccount.riot.name}_${as.userAccount.riot.tag}`,
  )
}
</script>

<template>
  <div>
  <!-- loading skeleton here blah blah -->
  </div>
</template>
