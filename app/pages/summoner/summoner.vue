<script setup lang="ts">
definePageMeta({
  title: 'Summoner',
  section: 'search',
  path: '/summoner',
  icon: 'search',
})

const as = useAccountStore()
const router = useRouter()
const user = inject<User>('user')

if (as.userAccount.riot.puuid) {
  router.replace(
    `/summoner/${user.summoner.region}/${user.summoner.name}_${user.summoner.tag}`,
  )
}
</script>

<template>
  <div>
  <!-- loading skeleton here blah blah -->
  </div>
</template>
