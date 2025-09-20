<script setup lang="ts">
definePageMeta({
  name: 'Summoner Search',
  level: 1,
  order: 3,
  path: '/summoner',
})

const router = useRouter()
</script>

<template>
  <div class="size-full grid place-items-center">
    <NuxtLink
      :to="`/summoner/${as().account.region}/${as().account.name}_${as().account.tag}`">
      Your Profile
    </NuxtLink>
  </div>
</template>
