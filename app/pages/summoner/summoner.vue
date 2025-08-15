<script setup lang="ts">
definePageMeta({
  path: '/summoner',

  meta: {
    title: 'Summoner',
    section: 'search',
    icon: 'search',
  },
})

const as = useAccountStore()
const router = useRouter()
</script>

<template>
  <div class="size-full grid place-items-center">
    <NuxtLink :to="`/summoner/${as.userAccount.riot.region}/${as.userAccount.riot.name}_${as.userAccount.riot.tag}`">
      Your Profile
    </NuxtLink>
  </div>
</template>
