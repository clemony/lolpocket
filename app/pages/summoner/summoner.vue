<script setup lang="ts">
definePageMeta({
  title: 'Summoner',
  section: 'search',
  path: '/summoner',
  icon: 'search'
})


const as = useAccountStore()
const user = computed (() => as.userAccount)
console.log("💠 - user:", user)
const router = useRouter()




onMounted(() => {
  if (user.value?.riot.puuid) {
    router.replace(`/summoner/${user.value.riot.puuid}`)
  }
})

</script>

<template>
  <div v-if="!user?.riot.puuid">
    <!-- build search later -->
  </div>

<div  v-else >
  <!--loading skeleton here blah blah -->
  
    </div>
</template>

