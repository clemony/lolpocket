<script setup lang="ts">
definePageMeta({
  path: '/summoner',
  level: 1,
  order: 3,

  name: 'Summoner Search',
})

const as = useAccountStore()
const router = useRouter()
</script>

<template>
  <div class="size-full grid place-items-center">
    <NuxtLink
      :to="`/summoner/${as.account.region}/${as.account.name}_${as.account.tag}`">
      Your Profile
    </NuxtLink>
  </div>
</template>
