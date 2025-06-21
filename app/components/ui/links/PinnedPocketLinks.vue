<script lang="ts" setup>
const ps = usePocketStore()
const pinned = computed (() => {
  return ps.pockets.filter(p => p.location.folder == 'pinned')
})
</script>

<template>
  <NuxtLink v-for="pocket in pinned" :key="pocket.key" :to="`/pocket/${pocket.key}`">
    <Btn v-if="pocket">
      <PocketIcon :url="pocket.icon" class="size-5" />

      {{ pocket.name }}
    </Btn>
  </NuxtLink>
</template>