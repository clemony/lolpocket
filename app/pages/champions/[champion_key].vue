<script setup lang="ts">
definePageMeta({
  name: 'champion_key',
  path: '/champions/:champion_key',
  props: true,
  search: 'hidden',
})
const route = useRoute()
const championData = await import(
  `#shared/records/champions/${String(route.params.champion_key)}.ts`
)
const champion = computed(() => championData.default)
</script>

<template>
  <div class="z-auto size-full">
    <NuxtLayout
      name="tab"
      :champion>
      <NuxtPage :champion />
    </NuxtLayout>
  </div>
</template>
