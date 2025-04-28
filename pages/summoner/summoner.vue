<script setup lang="ts">
definePageMeta({
  title: 'Summoner Search',
  section: 'summoner',
  path: '/summoner',
})


const as = useAccountStore()
const user = computed (() => as.userAccount)
console.log("💠 - user:", user)
const router = useRouter()




onMounted(() => {
  if (user.value?.puuid) {
    router.replace(`/summoner/${user.value.puuid}`)
  }
})

</script>

<template>
  <div v-if="!user?.puuid">
    <!-- build search later -->
  </div>

<div  v-else >
  <!--loading skeleton here blah blah -->
  
    </div>
</template>

