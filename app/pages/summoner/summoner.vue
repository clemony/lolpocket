<script setup lang="ts">
definePageMeta({
  title: 'Summoner',
  section: 'search',
  path: '/summoner',
  icon: 'search',
})

const as = useAccountStore()
const router = useRouter()

onMounted(() => {
  if (as.userAccount.riot.puuid) {
    router.replace(`/summoner/${as.userAccount.riot.puuid}`)
  }
})
</script>

<template>
  <div v-if="!as.userAccount.riot.puuid">
    <!-- build search later -->
  </div>

  <div v-else>
  <!-- loading skeleton here blah blah -->
  </div>
</template>
