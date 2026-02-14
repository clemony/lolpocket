<script setup lang="ts">
definePageMeta({
  name: "summoner-puuid",
  layout: "default",
})

const { start, finish, progress } = useLoadingIndicator()

onMounted(() => {
  start()
})

onBeforeRouteLeave(() => {
  finish()
})
</script>

<template>
  <UPage>
    <UPageBody icon="search" class="grid place-items-center">
      <UPageCard
        title="Loading... "
        description="Searching for summoner data and analysis.">
        <template #body>
          <UProgress v-model:model-value="progress" />
        </template>
      </UPageCard>
    </UPageBody>
  </UPage>
</template>
