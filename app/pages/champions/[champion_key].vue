<script setup lang="ts">
definePageMeta({
  name: "champion_key",
  path: "/champions/:champion_key",
  props: true,
  search: "hidden",
})
const route = useRoute()

const idRef = computed(
  () => champIdByKey(String(route.params.champion_key)) ?? 0
)

const { data: champion, status } = useFetch<Champion>(
  () => `/cdn/champions/${idRef.value}.json`,
  {
    server: false,
    lazy: true,
    immediate: false,
    key: () => `champion-${idRef.value}`,
    watch: [idRef],
  }
)
</script>

<template>
  <div class="z-auto size-full">
    <NuxtLayout name="tab" :champion>
      <NuxtPage :champion />
    </NuxtLayout>
  </div>
</template>
